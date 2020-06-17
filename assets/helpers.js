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

//
var PSPBGCOLORS = [
  "rgb(77, 184, 255)",
  "rgb(230, 179, 255)",
  "rgb(255, 255, 102",
  "rgb(128, 255, 170)",
  "rgb(223, 159, 223)",
];
var PSPBGCOLORS2019 = [
  "rgb(77, 184, 255, 0.5)",
  "rgb(230, 179, 255, 0.5)",
  "rgb(255, 255, 102, 0.5)",
  "rgb(128, 255, 170, 0.5)",
  "rgb(223, 159, 223, 0.5)",
];

var ECDBGCOLORS = [
  "rgb(77, 210, 255)",
  "rgb(179, 179, 230)",
  "rgb(255, 204, 128)",
  "rgb(70, 210, 70)",
  "rgb(77, 255, 255)",
];
var ECDBGCOLORS2019 = [
  "rgb(77, 210, 255, 0.5)",
  "rgb(179, 179, 230, 0.5)",
  "rgb(255, 204, 128, 0.5)",
  "rgb(70, 210, 70, 0.5)",
  "rgb(77, 255, 255, 0.5)",
];

var COLORS = ["rgb(51, 102, 255, 0.5)", "rgb(153, 51, 255, 0.5)"];

var BORDERCOLORS = ["rgb(51, 102, 255)", "rgb(153, 51, 255)"];

// @parameter array byMonth form dashboard-data.json
// Prepare data for byMonth chart
function generateByMonthData(byMonthArray) {
  const ordered = byMonthArray.sort(function (a, b) {
    return a.monthofyear > b.monthofyear ? 1 : -1;
  });
  var data = {};
  for (var i = 0; i < byMonthArray.length; i++) {
    var record = byMonthArray[i];
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
    return year === "2019" || year === "2020";
  });
  return keys.map(function (key, idx) {
    return {
      label: key,
      data: data[key],
      // fill: false,
      backgroundColor: COLORS[idx],
      borderColor: BORDERCOLORS[idx],
      borderWidth: 1,
    };
  });
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
  uniqueKeys.map(function (ec) {
    var psp2019 = topEdcs.find(function (obj) {
      return obj[key] === ec && obj.Anno === "2019";
    });
    var psp2020 = topEdcs.find(function (obj) {
      return obj[key] === ec && obj.Anno === "2020";
    });
    y2019.push(psp2019 ? psp2019.total : null);
    y2020.push(psp2020 ? psp2020.total : null);
  });

  var colors = ECDBGCOLORS;
  var colors2019 = ECDBGCOLORS2019;
  if (key === "PSP") {
    colors = PSPBGCOLORS;
    colors2019 = PSPBGCOLORS2019;
  }

  uniqueKeys = uniqueKeys.map(function (item) {
    return item == "AgID" ? "MyBank" : item;
  });

  return {
    labels: uniqueKeys,
    datasets: [
      {
        label: "2019",
        backgroundColor: colors2019,
        borderColor: "#ccc",
        borderWidth: 1,
        data: y2019,
      },
      {
        label: "2020",
        backgroundColor: colors,
        borderColor: "#ccc",
        borderWidth: 1,
        data: y2020,
      },
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

  var colors = ECDBGCOLORS;
  if (key === "PSP") {
    colors = PSPBGCOLORS;
  }

  uniqueKeys = uniqueKeys.map(function (item) {
    return item == "AgID" ? "MyBank" : item;
  });

  return {
    labels: uniqueKeys,
    datasets: [
      {
        data: dataPoint,
        backgroundColor: colors,
        hoverBackgroundColor: [
          "#FF5A5E",
          "#5AD3D1",
          "#FFC870",
          "#A8B3C5",
          "#616774",
        ],
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
        borderWidth: 1,
        backgroundColor: "rgb(0, 115, 230, 0.2)",
        borderColor: "rgb(0, 115, 230)",
      },
      {
        label: "# Ottimistiche",
        data: yUpperTotals,
        borderWidth: 1,
        backgroundColor: "rgb(230, 255, 245, 0.2)",
        borderColor: "rgb(77, 255, 184)",
      },
      {
        label: "# Pessimistiche",
        data: yLowerTotals,
        borderWidth: 1,
        backgroundColor: "rgb(230, 255, 245, 0.8)",
        borderColor: "rgb(77, 255, 184)",
      },
    ],
  };
}
