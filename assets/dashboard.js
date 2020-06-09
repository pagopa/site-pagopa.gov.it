function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open("GET", "dashboard-data.json", true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {
        // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
        callback(xobj.responseText);
      }
    };
    xobj.send(null);
  }
  
  var dashboardData = {
      "byMonth": [
          {
              "monthofyear": "2019-10",
              "total": 4258943
          },
          {
              "monthofyear": "2018-10",
              "total": 1438430
          },
          {
              "monthofyear": "2020-02",
              "total": 8297627
          },
          {
              "monthofyear": "2017-09",
              "total": 635923
          },
          {
              "monthofyear": "2019-11",
              "total": 3418556
          },
          {
              "monthofyear": "2017-10",
              "total": 500515
          },
          {
              "monthofyear": "2016-02",
              "total": 61969
          },
          {
              "monthofyear": "2017-05",
              "total": 257604
          },
          {
              "monthofyear": "2018-06",
              "total": 783435
          },
          {
              "monthofyear": "2019-03",
              "total": 3137704
          },
          {
              "monthofyear": "2017-11",
              "total": 424838
          },
          {
              "monthofyear": "2018-03",
              "total": 791722
          },
          {
              "monthofyear": "2020-05",
              "total": 412584
          },
          {
              "monthofyear": "2017-03",
              "total": 190888
          },
          {
              "monthofyear": "2018-02",
              "total": 857070
          },
          {
              "monthofyear": "2016-12",
              "total": 137374
          },
          {
              "monthofyear": "2016-09",
              "total": 121202
          },
          {
              "monthofyear": "2017-08",
              "total": 224216
          },
          {
              "monthofyear": "2016-03",
              "total": 40953
          },
          {
              "monthofyear": "2019-07",
              "total": 3421224
          },
          {
              "monthofyear": "2017-06",
              "total": 197688
          },
          {
              "monthofyear": "2016-10",
              "total": 94313
          },
          {
              "monthofyear": "2017-02",
              "total": 212298
          },
          {
              "monthofyear": "2017-04",
              "total": 164955
          },
          {
              "monthofyear": "2018-05",
              "total": 986003
          },
          {
              "monthofyear": "2018-08",
              "total": 741342
          },
          {
              "monthofyear": "2017-07",
              "total": 324335
          },
          {
              "monthofyear": "2019-05",
              "total": 5884257
          },
          {
              "monthofyear": "2019-08",
              "total": 2799505
          },
          {
              "monthofyear": "2016-05",
              "total": 103499
          },
          {
              "monthofyear": "2019-01",
              "total": 5884000
          },
          {
              "monthofyear": "2019-09",
              "total": 6822904
          },
          {
              "monthofyear": "2016-04",
              "total": 38786
          },
          {
              "monthofyear": "2020-03",
              "total": 3484008
          },
          {
              "monthofyear": "2017-12",
              "total": 537994
          },
          {
              "monthofyear": "2018-11",
              "total": 1302580
          },
          {
              "monthofyear": "2016-11",
              "total": 116987
          },
          {
              "monthofyear": "2020-01",
              "total": 10606507
          },
          {
              "monthofyear": "2019-06",
              "total": 3353082
          },
          {
              "monthofyear": "2019-04",
              "total": 3289363
          },
          {
              "monthofyear": "2018-12",
              "total": 1937518
          },
          {
              "monthofyear": "2016-01",
              "total": 92510
          },
          {
              "monthofyear": "2016-07",
              "total": 66433
          },
          {
              "monthofyear": "2016-06",
              "total": 64270
          },
          {
              "monthofyear": "2019-12",
              "total": 5424577
          },
          {
              "monthofyear": "2018-04",
              "total": 762442
          },
          {
              "monthofyear": "2018-01",
              "total": 1133323
          },
          {
              "monthofyear": "2019-02",
              "total": 4243255
          },
          {
              "monthofyear": "2016-08",
              "total": 60225
          },
          {
              "monthofyear": "2020-04",
              "total": 1790907
          },
          {
              "monthofyear": "2017-01",
              "total": 540759
          },
          {
              "monthofyear": "2018-09",
              "total": 1460042
          },
          {
              "monthofyear": "2018-07",
              "total": 1093565
          }
      ],
      "dEcbyAnno": [
          {
              "DenominazioneEc": "Automobile Club Italia",
              "Anno": 2019,
              "total": 27379209
          },
          {
              "DenominazioneEc": "Automobile Club Italia",
              "Anno": 2020,
              "total": 11847716
          },
          {
              "DenominazioneEc": "Agenzia delle entrate-Riscossione",
              "Anno": 2019,
              "total": 4047944
          },
          {
              "DenominazioneEc": "Agenzia delle entrate-Riscossione",
              "Anno": 2020,
              "total": 4032177
          },
          {
              "DenominazioneEc": "Comune di Milano",
              "Anno": 2019,
              "total": 2095589
          },
          {
              "DenominazioneEc": "ROMA CAPITALE",
              "Anno": 2019,
              "total": 1542866
          },
          {
              "DenominazioneEc": "Regione Veneto",
              "Anno": 2019,
              "total": 1396904
          },
          {
              "DenominazioneEc": "INAIL",
              "Anno": 2019,
              "total": 1280934
          },
          {
              "DenominazioneEc": "Regione Veneto",
              "Anno": 2020,
              "total": 987236
          },
          {
              "DenominazioneEc": "Ministero della Giustizia",
              "Anno": 2019,
              "total": 705925
          },
          {
              "DenominazioneEc": "Regione Piemonte",
              "Anno": 2019,
              "total": 621039
          },
          {
              "DenominazioneEc": "ROMA CAPITALE",
              "Anno": 2020,
              "total": 585887
          },
          {
              "DenominazioneEc": "INAIL",
              "Anno": 2020,
              "total": 511256
          },
          {
              "DenominazioneEc": "Istituto Nazionale Previdenza Sociale",
              "Anno": 2020,
              "total": 435351
          },
          {
              "DenominazioneEc": "Regione Piemonte",
              "Anno": 2020,
              "total": 404769
          },
          {
              "DenominazioneEc": "Istituto Nazionale Previdenza Sociale",
              "Anno": 2019,
              "total": 352375
          },
          {
              "DenominazioneEc": "Comune di Milano",
              "Anno": 2020,
              "total": 350400
          },
          {
              "DenominazioneEc": "Regione Lombardia",
              "Anno": 2019,
              "total": 347243
          },
          {
              "DenominazioneEc": "Universita Degli Studi di Milano",
              "Anno": 2019,
              "total": 263275
          },
          {
              "DenominazioneEc": "Consorzio di Bonifica della Media Pianura Bergamasca",
              "Anno": 2019,
              "total": 249634
          },
          {
              "DenominazioneEc": "Universita' degli Studi di Catania",
              "Anno": 2019,
              "total": 248425
          },
          {
              "DenominazioneEc": "Universita' degli Studi Roma Tre",
              "Anno": 2019,
              "total": 231123
          },
          {
              "DenominazioneEc": "Politecnico di Milano",
              "Anno": 2019,
              "total": 225031
          },
          {
              "DenominazioneEc": "Universita' degli Studi di Salerno",
              "Anno": 2019,
              "total": 201611
          },
          {
              "DenominazioneEc": "Regione Toscana",
              "Anno": 2019,
              "total": 196005
          },
          {
              "DenominazioneEc": "Agenzia Regionale per la Casa e l'Abitare - Arca - Puglia Centrale",
              "Anno": 2019,
              "total": 194952
          },
          {
              "DenominazioneEc": "Comune di Bologna",
              "Anno": 2019,
              "total": 193570
          },
          {
              "DenominazioneEc": "Universita' degli Studi di Palermo",
              "Anno": 2019,
              "total": 178539
          },
          {
              "DenominazioneEc": "Regione Liguria",
              "Anno": 2019,
              "total": 170899
          },
          {
              "DenominazioneEc": "MILANO RISTORAZIONE S.P.A. SERVIZIO REF",
              "Anno": 2019,
              "total": 159524
          },
          {
              "DenominazioneEc": "Universita' degli Studi di Milano - Bicocca",
              "Anno": 2019,
              "total": 155480
          },
          {
              "DenominazioneEc": "Universita' degli Studi di Messina",
              "Anno": 2019,
              "total": 153435
          },
          {
              "DenominazioneEc": "Autorita' Nazionale Anticorruzione - A.N.AC.",
              "Anno": 2020,
              "total": 147366
          },
          {
              "DenominazioneEc": "Ministero della Giustizia",
              "Anno": 2020,
              "total": 145589
          },
          {
              "DenominazioneEc": "Universita' degli studi di Ferrara",
              "Anno": 2019,
              "total": 141278
          },
          {
              "DenominazioneEc": "Universita' Ca' Foscari di Venezia",
              "Anno": 2019,
              "total": 140369
          },
          {
              "DenominazioneEc": "UNIVERSITA' DELLA CALABRIA",
              "Anno": 2019,
              "total": 139721
          },
          {
              "DenominazioneEc": "Universit\u00e0 degli Studi di Bergamo",
              "Anno": 2019,
              "total": 132728
          },
          {
              "DenominazioneEc": "Azienda USL di Reggio Emilia",
              "Anno": 2019,
              "total": 127720
          },
          {
              "DenominazioneEc": "Azienda USL di Bologna",
              "Anno": 2019,
              "total": 126663
          },
          {
              "DenominazioneEc": "Universita' degli Studi di Padova",
              "Anno": 2019,
              "total": 120547
          },
          {
              "DenominazioneEc": "Universit\u00e0 degli Studi di Pisa",
              "Anno": 2019,
              "total": 115508
          },
          {
              "DenominazioneEc": "Universita' degli Studi di Torino",
              "Anno": 2019,
              "total": 112307
          },
          {
              "DenominazioneEc": "Riscossione Sicilia S.P.A",
              "Anno": 2020,
              "total": 109511
          },
          {
              "DenominazioneEc": "Comune di Ragusa",
              "Anno": 2019,
              "total": 102399
          },
          {
              "DenominazioneEc": "Comune di Genova",
              "Anno": 2019,
              "total": 100232
          },
          {
              "DenominazioneEc": "Universit\u00e0 degli Studi di Trieste",
              "Anno": 2019,
              "total": 98660
          },
          {
              "DenominazioneEc": "Universita' degli Studi di Udine",
              "Anno": 2019,
              "total": 96798
          },
          {
              "DenominazioneEc": "Consip S.p.A.",
              "Anno": 2019,
              "total": 96028
          },
          {
              "DenominazioneEc": "Comune di Verona",
              "Anno": 2019,
              "total": 95899
          }
      ],
      "pspByAnno": [
          {
              "PSP": "SISALPAY S.P.A.",
              "Anno": 2019,
              "total": 17712495
          },
          {
              "PSP": "SISALPAY S.P.A.",
              "Anno": 2020,
              "total": 6961334
          },
          {
              "PSP": "Poste Italiane",
              "Anno": 2019,
              "total": 5744676
          },
          {
              "PSP": "AgID",
              "Anno": 2019,
              "total": 4866065
          },
          {
              "PSP": "Intesa Sanpaolo S.p.A",
              "Anno": 2019,
              "total": 4833116
          },
          {
              "PSP": "Poste Italiane",
              "Anno": 2020,
              "total": 4805619
          },
          {
              "PSP": "Banca 5 S.p.A.",
              "Anno": 2019,
              "total": 4016592
          },
          {
              "PSP": "Intesa Sanpaolo S.p.A",
              "Anno": 2019,
              "total": 3290197
          },
          {
              "PSP": "Paytipper S.p.A.",
              "Anno": 2020,
              "total": 2163522
          },
          {
              "PSP": "Intesa Sanpaolo S.p.A",
              "Anno": 2020,
              "total": 2109245
          },
          {
              "PSP": "LIS Istituto di Pagamento SPA",
              "Anno": 2019,
              "total": 2073673
          },
          {
              "PSP": "LIS Istituto di Pagamento SPA",
              "Anno": 2020,
              "total": 1981256
          },
          {
              "PSP": "Paytipper S.p.A.",
              "Anno": 2019,
              "total": 1622513
          },
          {
              "PSP": "Nexi",
              "Anno": 2019,
              "total": 1377354
          },
          {
              "PSP": "Unicredit S.p.A - CBILL",
              "Anno": 2019,
              "total": 1022393
          },
          {
              "PSP": "Intesa Sanpaolo S.p.A",
              "Anno": 2020,
              "total": 992840
          },
          {
              "PSP": "UniCredit S.p.A",
              "Anno": 2019,
              "total": 966319
          },
          {
              "PSP": "Banco BPM S.p.A.",
              "Anno": 2019,
              "total": 558310
          },
          {
              "PSP": "Unicredit S.p.A - CBILL",
              "Anno": 2020,
              "total": 543192
          },
          {
              "PSP": "Nexi",
              "Anno": 2020,
              "total": 529292
          },
          {
              "PSP": "UBI Banca S.p.A",
              "Anno": 2019,
              "total": 451805
          },
          {
              "PSP": "Banca Popolare di Sondrio",
              "Anno": 2019,
              "total": 351589
          },
          {
              "PSP": "UniCredit S.p.A",
              "Anno": 2020,
              "total": 330594
          },
          {
              "PSP": "ICONTO srl",
              "Anno": 2019,
              "total": 269079
          },
          {
              "PSP": "Banco BPM S.p.A.",
              "Anno": 2020,
              "total": 259781
          },
          {
              "PSP": "American Express Payment Services",
              "Anno": 2019,
              "total": 222837
          },
          {
              "PSP": "Banca Monte dei Paschi di Siena",
              "Anno": 2019,
              "total": 202739
          },
          {
              "PSP": "FinecoBank Banca Fineco S.p.A.",
              "Anno": 2019,
              "total": 198822
          },
          {
              "PSP": "UBI Banca S.p.A",
              "Anno": 2020,
              "total": 197547
          },
          {
              "PSP": "Banca Popolare di Sondrio",
              "Anno": 2020,
              "total": 158873
          },
          {
              "PSP": "RAIFFEISEN ALTO ADIGE",
              "Anno": 2019,
              "total": 147179
          },
          {
              "PSP": "Banca Monte dei Paschi di Siena",
              "Anno": 2020,
              "total": 143046
          },
          {
              "PSP": "Satispay Europe SA",
              "Anno": 2019,
              "total": 141321
          },
          {
              "PSP": "FinecoBank Banca Fineco S.p.A.",
              "Anno": 2020,
              "total": 120236
          },
          {
              "PSP": "Banca Monte dei Paschi di Siena",
              "Anno": 2019,
              "total": 109606
          },
          {
              "PSP": "ING BANK N.V.",
              "Anno": 2019,
              "total": 93447
          },
          {
              "PSP": "Banca Fideuram",
              "Anno": 2019,
              "total": 88176
          },
          {
              "PSP": "Satispay Europe SA",
              "Anno": 2020,
              "total": 85757
          },
          {
              "PSP": "CityPoste Payment",
              "Anno": 2019,
              "total": 84054
          },
          {
              "PSP": "American Express Payment Services",
              "Anno": 2020,
              "total": 83500
          },
          {
              "PSP": "BPER",
              "Anno": 2019,
              "total": 74644
          },
          {
              "PSP": "RAIFFEISEN ALTO ADIGE",
              "Anno": 2020,
              "total": 72418
          },
          {
              "PSP": "Banca Monte dei Paschi di Siena",
              "Anno": 2020,
              "total": 69588
          },
          {
              "PSP": "Credito Valtellinese s.p.a.",
              "Anno": 2019,
              "total": 68520
          },
          {
              "PSP": "Banca Mediolanum SpA",
              "Anno": 2019,
              "total": 67959
          },
          {
              "PSP": "ICONTO srl",
              "Anno": 2020,
              "total": 67892
          },
          {
              "PSP": "Credito Emiliano SpA.",
              "Anno": 2019,
              "total": 63381
          },
          {
              "PSP": "Cr\u00e9dit Agricole Cariparma S.p.A.",
              "Anno": 2019,
              "total": 62887
          },
          {
              "PSP": "Satispay Ltd",
              "Anno": 2019,
              "total": 62141
          },
          {
              "PSP": "BPER",
              "Anno": 2020,
              "total": 61349
          }
      ],
      "growthRate": 5.264040583097075,
      "totalInHistory": 95027009,
      "transactions2020": [
          {
              "total": 24566306,
              "importo": 504181363713
          }
      ],
      "transactions2019": [
          {
              "total": 51937370
          }
      ],
      "tsGroups": [
          {
              "ds": 1454198400000,
              "y": 92510
          },
          {
              "ds": 1456704000000,
              "y": 61969
          },
          {
              "ds": 1459382400000,
              "y": 40953
          },
          {
              "ds": 1461974400000,
              "y": 38786
          },
          {
              "ds": 1464652800000,
              "y": 103499
          },
          {
              "ds": 1467244800000,
              "y": 64270
          },
          {
              "ds": 1469923200000,
              "y": 66433
          },
          {
              "ds": 1472601600000,
              "y": 60225
          },
          {
              "ds": 1475193600000,
              "y": 121202
          },
          {
              "ds": 1477872000000,
              "y": 94313
          },
          {
              "ds": 1480464000000,
              "y": 116987
          },
          {
              "ds": 1483142400000,
              "y": 137374
          },
          {
              "ds": 1485820800000,
              "y": 540759
          },
          {
              "ds": 1488240000000,
              "y": 212298
          },
          {
              "ds": 1490918400000,
              "y": 190888
          },
          {
              "ds": 1493510400000,
              "y": 164955
          },
          {
              "ds": 1496188800000,
              "y": 257604
          },
          {
              "ds": 1498780800000,
              "y": 197688
          },
          {
              "ds": 1501459200000,
              "y": 324335
          },
          {
              "ds": 1504137600000,
              "y": 224216
          },
          {
              "ds": 1506729600000,
              "y": 635923
          },
          {
              "ds": 1509408000000,
              "y": 500515
          },
          {
              "ds": 1512000000000,
              "y": 424838
          },
          {
              "ds": 1514678400000,
              "y": 537994
          },
          {
              "ds": 1517356800000,
              "y": 1133323
          },
          {
              "ds": 1519776000000,
              "y": 857070
          },
          {
              "ds": 1522454400000,
              "y": 791722
          },
          {
              "ds": 1525046400000,
              "y": 762442
          },
          {
              "ds": 1527724800000,
              "y": 986003
          },
          {
              "ds": 1530316800000,
              "y": 783435
          },
          {
              "ds": 1532995200000,
              "y": 1093565
          },
          {
              "ds": 1535673600000,
              "y": 741342
          },
          {
              "ds": 1538265600000,
              "y": 1460042
          },
          {
              "ds": 1540944000000,
              "y": 1438430
          },
          {
              "ds": 1543536000000,
              "y": 1302580
          },
          {
              "ds": 1546214400000,
              "y": 1937518
          },
          {
              "ds": 1548892800000,
              "y": 5884000
          },
          {
              "ds": 1551312000000,
              "y": 4243255
          },
          {
              "ds": 1553990400000,
              "y": 3137704
          },
          {
              "ds": 1556582400000,
              "y": 3289363
          },
          {
              "ds": 1559260800000,
              "y": 5884257
          },
          {
              "ds": 1561852800000,
              "y": 3353082
          },
          {
              "ds": 1564531200000,
              "y": 3421224
          },
          {
              "ds": 1567209600000,
              "y": 2799505
          },
          {
              "ds": 1569801600000,
              "y": 6822904
          },
          {
              "ds": 1572480000000,
              "y": 4258943
          },
          {
              "ds": 1575072000000,
              "y": 3418556
          },
          {
              "ds": 1577750400000,
              "y": 5424577
          },
          {
              "ds": 1580428800000,
              "y": 10606507
          },
          {
              "ds": 1582934400000,
              "y": 8297627
          },
          {
              "ds": 1585612800000,
              "y": 3484008
          },
          {
              "ds": 1588204800000,
              "y": 1790907
          },
          {
              "ds": 1590883200000,
              "y": 412584
          }
      ],
      "forecastByMonth": [
          {
              "ds": 1590883200000,
              "yhat": 5178017.106609632,
              "yhat_upper": 7045180.474609028,
              "yhat_lower": 3320338.46797861
          },
          {
              "ds": 1593475200000,
              "yhat": 4531874.412081925,
              "yhat_upper": 6851296.690924922,
              "yhat_lower": 2224477.024799762
          },
          {
              "ds": 1596153600000,
              "yhat": 4136389.4799932432,
              "yhat_upper": 6513121.940770735,
              "yhat_lower": 1729491.7357372358
          },
          {
              "ds": 1598832000000,
              "yhat": 3345414.896300345,
              "yhat_upper": 5720378.685908546,
              "yhat_lower": 944726.5948438143
          },
          {
              "ds": 1601424000000,
              "yhat": 7713504.892983538,
              "yhat_upper": 10057503.322625428,
              "yhat_lower": 5391536.546078069
          },
          {
              "ds": 1604102400000,
              "yhat": 5016056.806267616,
              "yhat_upper": 7438119.2524545565,
              "yhat_lower": 2604466.7132919766
          },
          {
              "ds": 1606694400000,
              "yhat": 358618.4352809761,
              "yhat_upper": 585116.0409109984,
              "yhat_lower": 131492.3790397649
          }
      ]
  }
  
  var generatedByMonths = generateByMonthData(dashboardData.byMonth);
  
  //function init() {
  //  loadJSON(function (response) {
  // Parse JSON string into object
  //var actual_JSON = JSON.parse(response);
  
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
          xAxes: [
            {
              gridLines: {
                display: false,
              },
              ticks: {
                fontSize: 15,
                fontColor: "lightgrey",
              },
            },
          ],
          yAxes: [
            {
              //  gridLines: {
              //    drawBorder: false,
              //  },
              gridLines: {
                display: false,
              },
              ticks: {
                display: false,
                //  beginAtZero: true,
                fontSize: 15,
                fontColor: "lightgrey",
                maxTicksLimit: 5,
                //   padding: 25,
              },
            },
          ],
        },
        //  scales: { yAxes: [{ ticks: { beginAtZero: true } }] },
      },
    });
  }
  
  var topEdcData = generateTop(dashboardData.dEcbyAnno, "DenominazioneEc");
  
  var top10Edc = document.getElementById("top10Edc");
  if (top10Edc) {
    new Chart(top10Edc, {
      type: "horizontalBar",
      data: topEdcData,
      options: {
        responsive: true,
        legend: {
          position: "right",
        },
        title: {
          display: false,
          text: "5 enti creditori con più transazioni per anno ",
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
              },
              ticks: {
                fontSize: 15,
                fontColor: "lightgrey",
              },
            },
          ],
          yAxes: [
            {
              //  gridLines: {
              //    drawBorder: false,
              //  },
              gridLines: {
                display: false,
              },
              ticks: {
                display: false,
                //  beginAtZero: true,
                fontSize: 15,
                fontColor: "lightgrey",
                maxTicksLimit: 5,
                //   padding: 25,
              },
            },
          ],
        },
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
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide
        elements: {
          rectangle: {
            borderWidth: 2,
          },
        },
        responsive: true,
        legend: {
          position: "right",
        },
        title: {
          display: false,
          text: "5 Psp con più transazioni per anno ",
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
              },
              ticks: {
                fontSize: 15,
                fontColor: "lightgrey",
              },
            },
          ],
          yAxes: [
            {
              //  gridLines: {
              //    drawBorder: false,
              //  },
              gridLines: {
                display: false,
              },
              ticks: {
                display: false,
                //  beginAtZero: true,
                fontSize: 15,
                fontColor: "lightgrey",
                maxTicksLimit: 5,
                //   padding: 25,
              },
            },
          ],
        },
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
    },
  });
  
  var dataForEdcPie = generateTopForPie(
    dashboardData.dEcbyAnno,
    "DenominazioneEc"
  );
  var top10PEdcPieElem = document.getElementById("top10EdcPie").getContext("2d");
  var top10PEdcPie = new Chart(top10PEdcPieElem, {
    type: "pie",
    data: dataForEdcPie,
    options: {
      responsive: true,
    },
  });
  
  var totalPred = document.getElementById("totalPred").getContext("2d");
  var predData = generatePredData(dashboardData);
  var predChart = new Chart(totalPred, {
    type: "line",
    data: predData,
    options: {
      // Elements options apply to all of the options unless overridden in a dataset
      // In this case, we are setting the border of each horizontal bar to be 2px wide
      elements: {
        rectangle: {
          borderWidth: 2,
        },
      },
      responsive: true,
      title: {
        display: false,
        text: "10 Psp con più transazioni ",
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              display: false,
            },
            ticks: {
              fontSize: 15,
              fontColor: "lightgrey",
            },
          },
        ],
        yAxes: [
          {
            //  gridLines: {
            //    drawBorder: false,
            //  },
            gridLines: {
              display: false,
            },
            ticks: {
              display: false,
              //  beginAtZero: true,
              fontSize: 15,
              fontColor: "lightgrey",
              maxTicksLimit: 5,
              //   padding: 25,
            },
          },
        ],
      },
    },
  });
  
  function sixMonthPredictionTotal(forecastByMonth) {
    return forecastByMonth
      .map((element) => Math.round(element.yhat_upper))
      .reduce((a, b) => a + b, 0)
     // .toLocaleString();
  }
  
  $(function () {
    
    var e2020 = Math.round(dashboardData.transactions2020[0].importo / 100)
    var t2020 = dashboardData.transactions2020[0].total
    var tPred = sixMonthPredictionTotal(dashboardData.forecastByMonth)
    var predImporto = Math.round((e2020 / t2020) * tPred)
  
    $("#2019t").text(
      "# " + dashboardData.transactions2019[0].total.toLocaleString("en")
    );
    $("#2020t").text(
      "# " + t2020.toLocaleString()
    );
    $("#2020e").text(
      "€ " + e2020.toLocaleString()
    );
    $("#totalt").text("# " + dashboardData.totalInHistory.toLocaleString());
    $("#growthRate").text(Math.round(dashboardData.growthRate) + " %");
    $("#predTotal").text("# " + tPred.toLocaleString());
    $("#predEuro").text("€ " + predImporto.toLocaleString())
  });
  //  });
  //}
  
  //init();
  