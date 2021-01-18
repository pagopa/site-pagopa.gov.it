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
  "rgba(77, 184, 255, 0.5)",
  "rgba(230, 179, 255, 0.5)",
  "rgba(255, 255, 102, 0.5)",
  "rgba(128, 255, 170, 0.5)",
  "rgba(223, 159, 223, 0.5)",
];
var PSPBGCOLORS2021 = [
  "rgb(77, 184, 255)",
  "rgb(230, 179, 255)",
  "rgb(255, 255, 102",
  "rgb(128, 255, 170)",
  "rgb(223, 159, 223)",
];


var ECDBGCOLORS = [
  "rgb(77, 210, 255)",
  "rgb(179, 179, 230)",
  "rgb(255, 204, 128)",
  "rgb(70, 210, 70)",
  "rgb(77, 255, 255)",
];
var ECDBGCOLORS2019 = [
  "rgba(77, 210, 255, 0.5)",
  "rgba(179, 179, 230, 0.5)",
  "rgba(255, 204, 128, 0.5)",
  "rgba(70, 210, 70, 0.5)",
  "rgba(77, 255, 255, 0.5)",
];
var ECDBGCOLORS2021 = [
  "rgba(77, 210, 255, 0.5)",
  "rgba(179, 179, 230, 0.5)",
  "rgba(255, 204, 128, 0.5)",
  "rgba(70, 210, 70, 0.5)",
  "rgba(77, 255, 255, 0.5)",
];


var COLORS = ["rgba(51, 102, 255, 0.5)", "rgba(153, 51, 255, 0.5)", "rgba(153, 51, 255, 0.5)"];

var BORDERCOLORS = ["rgb(51, 102, 255)", "rgb(153, 51, 255)", "black"];

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
        // fill: false,
        backgroundColor: colors[idx],
        borderColor: borderColors[idx],
        borderWidth: 1,
        stack: key,
      };
    });
  }

  var pos = generate(PosNegArray[0], 
    "Positive", 
    ["rgba(51, 102, 255, 0.5)", "rgba(153, 51, 255, 0.5)", "rgba(0,255,0, 0.5)"],
    ["rgb(51, 102, 255)", "rgb(153, 51, 255)", "rgb(0,255,0)"],
    "positive" )
  var neg = generate(PosNegArray[1], 
    "Negative",
    ["rgb(51, 102, 255)", "rgb(153, 51, 255)", "rgb(34,139,34)"],
    ["rgb(51, 102, 255)", "rgb(153, 51, 255)", "rgb(34,139,34)"])

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
    y2020.push(psp2021 ? psp2021.total : null);
  });

  var colors = ECDBGCOLORS;
  var colors2019 = ECDBGCOLORS2019;
  var colors2021 = ECDBGCOLORS2021;
  if (key === "PSP") {
    colors = PSPBGCOLORS;
    colors2019 = PSPBGCOLORS2019;
    colors2021 = PSPBGCOLORS2021
  }

  uniqueKeys = uniqueKeys.map(function (item) {
    if (item == "AgID") {
      return "MyBank";
    } else if (item.startsWith("Automobile")) {
      return "ACI";
    } else if (item.startsWith("Agenzia delle")) {
      return "ADE";
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
      {
        label: "2021",
        backgroundColor: colors2021,
        borderColor: "#ccc",
        borderWidth: 1,
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
        backgroundColor: "rgba(0, 115, 230, 0.2)",
        borderColor: "rgb(0, 115, 230)",
      },
      {
        label: "# Stime ottimistiche",
        data: yUpperTotals,
        borderWidth: 1,
        backgroundColor: "rgba(230, 255, 245, 0.2)",
        borderColor: "rgb(77, 255, 184)",
      },
      {
        label: "# Stime pessimistiche",
        data: yLowerTotals,
        borderWidth: 1,
        backgroundColor: "rgba(230, 255, 245, 0.8)",
        borderColor: "rgb(77, 255, 184)",
      },
    ],
  };
}
