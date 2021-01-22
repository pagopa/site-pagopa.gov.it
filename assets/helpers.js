String.prototype.toRGB = function () {
  var hash = 0;
  if (this.length === 0) return hash;
  for (var i = 0; i < this.length; i++) {
    hash = this.charCodeAt(i) + ((hash << 5) - hash);
    hash = hash & hash;
  }
  var rgb = [0, 0, 0];
  for (var i = 0; i < 3; i++) {
    var value = (hash >> (i * 8)) & 255;
    rgb[i] = value;
  }
  return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
};

function formatNumberIntl(n) {
  if (isNaN(n)) return '-';
  return new Intl.NumberFormat().format(n);
}

function tooltipLabelCallbackNumber(tooltipItem, data) {
  var dataLabel = data.datasets[tooltipItem.datasetIndex].label;
  return dataLabel + ": " + formatNumberIntl(+tooltipItem.value);
}

function tooltipLabelCallbackArcNumber(tooltipItem, data) {
  var dataLabel = data.labels[tooltipItem.index];
  var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
  var sum = data.datasets[0].data.reduce((a, b) => a + b, 0) || 1;
  var percentage = new Intl.NumberFormat({ style: "percent", maximumFractionDigits: 0 }).format(value * 100 / sum) + "%";
  return [
    dataLabel + ": " + formatNumberIntl(value),
    percentage
  ];
}

var GRADIENT_COLORS = [
  "#0BD9D3",
  "#15c5f8",
  "rgb(0, 115, 230)",
  "#2d489d",
  "#00264D"
];

var POS_NEG_COLOR_RANGE = [
  GRADIENT_COLORS[1],
  GRADIENT_COLORS[2],
  GRADIENT_COLORS[3]
]

// @parameter array byMonthPos and byMonthNeg form dashboard-data.json
// Prepare data for byMonth chart
function generateByMonthDataPosAndNeg(PosNegArray) {
  function generate(pos, label, colors, borderColors) {
    const ordered = pos.sort(function (a, b) {
      return a.monthofyear > b.monthofyear ? 1 : -1;
    });
    var data = {};
    for (var i = 0; i < ordered.length; i++) {
      var record = ordered[i];
      var yearAndMonth = record.monthofyear.split("-");
      var year = yearAndMonth[0];
      var total = record.total;
      if (!Object.keys(data).includes(year)) {
        data[year] = [total];
      } else {
        data[year].push(total);
      }
    }
    var keys = Object.keys(data).filter(function (year) {
      return year === "2019" || year === "2020" || year === '2021';
    });
  
    return keys.map(function (key, idx) {
      return {
        label: label + " " + key,
        data: data[key],
        backgroundColor: colors[idx],
        borderColor: borderColors[idx],
        borderWidth: 2,
        stack: key,
      };
    });
  }

  var pos = generate(PosNegArray[0],
    "Positive",
    POS_NEG_COLOR_RANGE,
    POS_NEG_COLOR_RANGE,
    "positive" )
  var neg = generate(PosNegArray[1],
    "Negative",
    ["#fff", "#fff", "#fff"],
    POS_NEG_COLOR_RANGE)

  return pos.concat(neg)
}


// @parameter array edc o psp form dashboard-data.json
// Prepare data for horizontal bar as input to chartjs data
function generateTop(topEdcs, key) {
  var uniqueKeys = topEdcs
    .map(function (item) {
      return item[key];
    })
    .filter(function (v, i, a) {
      return a.indexOf(v) === i;
    })
    .slice(0, 5);

  var y2019 = [];
  var y2020 = [];
  var y2021 = [];
  uniqueKeys.map(function (ec) {
    var psp2019 = topEdcs.find(function (obj) {
      return obj[key] === ec && obj.Anno === "2019";
    });
    var psp2020 = topEdcs.find(function (obj) {
      return obj[key] === ec && obj.Anno === "2020";
    });
    var psp2021 = topEdcs.find(function (obj) {
      return obj[key] === ec && obj.Anno === "2021";
    });
    y2019.push(psp2019 ? psp2019.total : null);
    y2020.push(psp2020 ? psp2020.total : null);
    y2021.push(psp2021 ? psp2021.total : null);
  });

  uniqueKeys = uniqueKeys.map(function (item) {
    if (item == "AgID") {
      return "MyBank";
    } else if (item.startsWith("Automobile")) {
      return "ACI";
    } else if (item.startsWith("Agenzia delle")) {
      return "ADE - Riscossione";
    } else if (item.startsWith("Istituto Nazionale")) {
      return "INPS";
    } else {
      return item;
    }
  });
  return {
    labels: uniqueKeys,
    datasets: [
      {
        label: "2019",
        backgroundColor: GRADIENT_COLORS[0],
        data: y2019,
      },
      {
        label: "2020",
        backgroundColor: GRADIENT_COLORS[2],
        data: y2020,
      },
      {
        label: "2021",
        backgroundColor: GRADIENT_COLORS[4],
        data: y2021,
      }
    ],
  };
}

function generateTopForPie(keysTotalsDates, key) {
  var uniqueKeys = keysTotalsDates
    .map(function (item) {
      return item[key];
    })
    .filter(function (v, i, a) {
      return a.indexOf(v) === i;
    })
    .slice(0, 5);

  var keysTotal = {};
  keysTotalsDates.forEach(function (d) {
    if (keysTotal.hasOwnProperty(d[key])) {
      keysTotal[d[key]] = keysTotal[d[key]] + d.total;
    } else {
      keysTotal[d[key]] = d.total;
    }
  });

  var dataPoint = uniqueKeys.map(function (item) {
    return keysTotal[item];
  });

  var colors = GRADIENT_COLORS;

  uniqueKeys = uniqueKeys.map(function (item) {
    if (item == "AgID") {
      return "MyBank";
    } else if (item.startsWith("Istituto Nazionale")) {
      return "INPS";
    } else {
      return item;
    }
  });

  return {
    labels: uniqueKeys,
    datasets: [
      {
        data: dataPoint,
        backgroundColor: colors,
      },
    ],
  };
}

function generatePredData(dashboardData) {
  var labels = [];
  var cumTotals = [];
  var total = 0;
  for (let i = 0; i < dashboardData.tsGroups.length; i++) {
    var obj = dashboardData.tsGroups[i];
    var monthDate = moment(obj.ds);
    total = total + obj.y;
    const date = monthDate.format("YYYY-MM");
    labels.push(date.toString());
    cumTotals.push(total);
  }

  var yUpperTotal = total;
  var yLowerTotal = total;
  var yUpperTotals = [];
  var yLowerTotals = [];
  for (let i = 0; i < dashboardData.tsGroups.length - 1; i++) {
    yUpperTotals[i] = undefined;
    yLowerTotals[i] = undefined;
  }

  for (let i = 0; i < dashboardData.forecastByMonth.length; i++) {
    var forecastObj = dashboardData.forecastByMonth[i];
    if (i !== 0) {
      labels.push(moment(forecastObj.ds).format("YYYY-MM"));
    }
    yUpperTotal = yUpperTotal + Math.round(forecastObj.yhat_upper);
    yLowerTotal = yLowerTotal + Math.round(forecastObj.yhat);
    yUpperTotals.push(yUpperTotal);
    yLowerTotals.push(yLowerTotal);
  }

  cumTotals[cumTotals.length - 1] = yUpperTotals[cumTotals.length - 1];
  yLowerTotals[cumTotals.length - 1] = yUpperTotals[cumTotals.length - 1];

  return {
    labels,
    datasets: [
      {
        label: "# Transazioni",
        data: cumTotals,
        borderWidth: 3,
        pointBorderWidth: 2,
        backgroundColor: "#fff",
        borderColor: GRADIENT_COLORS[2],
      },
      {
        label: "# Stime pessimistiche",
        data: yLowerTotals,
        borderWidth: 3,
        pointBorderWidth: 2,
        backgroundColor: "#fff",
        borderColor: GRADIENT_COLORS[0]
      },
      {
        label: "# Stime ottimistiche",
        data: yUpperTotals,
        borderWidth: 3,
        pointBorderWidth: 2,
        backgroundColor: GRADIENT_COLORS[0],
        borderColor: "#f5f9fc"
      },
    ],
  };
}
