function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open(
      "GET",
      "https://pdnd-prod-dl-1-public-data.s3.eu-central-1.amazonaws.com/dashboard/pagopa/dashboard-data.json",
      true
    ); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {
        // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
        callback(xobj.responseText);
      }
    };
    xobj.send(null);
  }
  
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
  
  //function init() {
  loadJSON(function (response) {
    // Common options
    var axisHidden = {
      drawBorder: false,
      gridLines: {
        drawBorder: false,
        drawTicks: false
      },
      ticks: {
        display: false,
        maxTicksLimit: 5
      },
    };

    var axisVisible = {
      gridLines: {
        drawBorder: false,
        zeroLineWidth: 0,
      },
      ticks: {
        fontSize: 15,
        fontColor: "#19191a",
        fontFamily: "'Titillium Web', Arial",
      },
    };

    var tooltipIndex = {
      mode: 'index',
      intersect: false,
      callbacks: {
        label: tooltipLabelCallbackNumber
      }
    };

    var tooltipArc = {
      callbacks: {
        mode: 'nearest',
        intersect: false,
        label: tooltipLabelCallbackArcNumber
      }
    }

    // Parse JSON string into object
    var dashboardData = JSON.parse(response);
  
    var generatedByMonths = generateByMonthDataPosAndNeg([dashboardData.byMonthPos,dashboardData.byMonthNeg ]);
  
    // By Month chart transactions
    var byMonth = document.getElementById("byMonth");
    if (byMonth) {
      new Chart(byMonth, {
        type: "bar",
        data: {
          labels: [
            "Gennaio",
            "Febbraio",
            "Marzo",
            "Aprile",
            "Maggio",
            "Giugno",
            "Luglio",
            "Agosto",
            "Settembre",
            "Ottobre",
            "Novembre",
            "Dicembre",
          ],
          datasets: generatedByMonths,
        },
        options: {
          scales: {
            xAxes: [axisVisible],
            yAxes: [axisHidden],
          },
          tooltips: tooltipIndex
        },
      });
    }

    var topEdcDataOld = dashboardData.dEcbyAnno;
    var topEdcDataNew = dashboardData.dEcbyAnno_pd_new
      .filter(function(d) { return d.anno === "2021" })
      .map(function(d) { return { DenominazioneEc: d.denominazioneec, Anno: d.anno, total: d.total } });
    var topEdcDataAll = topEdcDataOld.concat(topEdcDataNew);
    var topEdcData = generateTop(topEdcDataAll, "DenominazioneEc");

    var top10Edc = document.getElementById("top10Edc");
    if (top10Edc) {
      new Chart(top10Edc, {
        type: "horizontalBar",
        data: topEdcData,
        options: {
          responsive: true,
          title: {
            display: false,
            text: "5 enti creditori con più transazioni per anno ",
          },
          scales: {
            xAxes: [axisHidden],
            yAxes: [axisVisible],
          },
          tooltips: tooltipIndex
        },
      });
    }
  
    var topPspData = generateTop(dashboardData.pspByAnno, "PSP");
  
    var top10PSP = document.getElementById("top10PSP");
    if (top10PSP) {
      new Chart(top10PSP, {
        type: "horizontalBar",
        data: topPspData,
        options: {
          responsive: true,
          title: {
            display: false,
            text: "5 Psp con più transazioni per anno ",
          },
          scales: {
            xAxes: [axisHidden],
            yAxes: [axisVisible],
          },
          tooltips: tooltipIndex
        },
      });
    }
  
    var dataForPspPie = generateTopForPie(dashboardData.pspByAnno, "PSP");
    var top10PSPPieElem = document.getElementById("top10PSPPie").getContext("2d");
    var top10PSPPie = new Chart(top10PSPPieElem, {
      type: "pie",
      data: dataForPspPie,
      options: {
        responsive: true,
        tooltips: tooltipArc
      },
    });

    var dataForEdcPie = generateTopForPie(dashboardData.top5_ec, "denominazioneec", true);
    var top10PEdcPieElem = document
      .getElementById("top10EdcPie")
      .getContext("2d");
    var top10PEdcPie = new Chart(top10PEdcPieElem, {
      type: "pie",
      data: dataForEdcPie,
      options: {
        responsive: true,
        tooltips: tooltipArc
      },
    });
  
    var totalPred = document.getElementById("totalPred").getContext("2d");
    var predData = generatePredData(dashboardData);
    var predChart = new Chart(totalPred, {
      type: "line",
      data: predData,
      options: {
        responsive: true,
        title: {
          display: false,
          text: "10 Psp con più transazioni ",
        },
        scales: {
          xAxes: [Object.assign(axisVisible, {
            type: 'time',
            time: {
              stepSize: 6,
              unit: 'month'
            }
          })],
          yAxes: [axisHidden]
        },
        tooltips: tooltipIndex
      },
    });
  
    function sixMonthPredictionTotal(forecastByMonth) {
      return forecastByMonth
        .map((element) => Math.round(element.yhat_upper))
        .reduce((a, b) => a + b, 0);
      // .toLocaleString();
    }
  
    $(function () {
      var eUntil31122019 = 11129053683
      var e2019 = 8341588984;
      var t2019 = dashboardData.transactions2019[0].total;
      var e2020 = Math.round(dashboardData.transactions2020[0].importo / 100);
      var t2020 = dashboardData.transactions2020[0].total;
      var tPred = sixMonthPredictionTotal(dashboardData.forecastByMonth);
      var predImporto = Math.round((e2020 / t2020) * tPred);
      var t2021 = dashboardData.transactions2021[0].total;
      var e2021 = Math.round(dashboardData.transactions2021[0].importo / 100);
      var eTotal = eUntil31122019 + e2020 + e2021;

      $("#2019t").text(t2019.toLocaleString("it"));
      $("#2019e").text("€ " + e2019.toLocaleString("it"));
      $("#2020t").text("  " + t2020.toLocaleString("it"));
      $("#2020e").text("€ " + e2020.toLocaleString("it"));
      $("#2021t").text(t2021.toLocaleString("it"));
      $("#2021e").text("€ " + e2021.toLocaleString("it"));
      $("#totalt").text("  " + dashboardData.totalInHistory.toLocaleString("it"));
      $("#growthRate").text(Math.round(dashboardData.growthRate) + " %");
      $("#predTotal").text("  " + (tPred + t2021).toLocaleString("it"));
      $("#predEuro").text("€ " + (predImporto + e2021).toLocaleString("it"));
      
      $("#eTotal").text("€ " + eTotal.toLocaleString("it"));

    });
  });
  