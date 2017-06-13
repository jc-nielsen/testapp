let App = angular.module('nvd3-dp', ['nvd3'])

App.controller('MainCtrl', ['$scope', function ($scope) {
  $scope.data = [
    {
      "key": "Brand Contribution to $ Sales Change(M)",
      "values": [
        {
          "label": "$ Sales Year Ago",
          "value": "5.0935309887000006E8",
          "series": 0
        },
        {
          "label": "CTL BR",
          "value": "-8994347.700000003",
          "series": 0
        },
        {
          "label": "ANGEL SOFT",
          "value": "1.5548076279999996E7",
          "series": 0
        },
        {
          "label": "CHARMIN",
          "value": "574850.47",
          "series": 0
        },
        {
          "label": "COTTONELLE",
          "value": "2725431.2200000016",
          "series": 0
        },
        {
          "label": "SCOTT",
          "value": "-972819.7100000009",
          "series": 0
        },
        {
          "label": "QUILTEDNORTHER NQUILTEDNORTHERNQUILTEDNORTHERNQUILTEDNORTHERN",
          "value": "428826.0300000004",
          "series": 0
        },
        {
          "label": "MD",
          "value": "-14.35",
          "series": 0
        },
        {
          "label": "$ Sales This Year",
          "value": "5.186630951000002E8",
          "series": 0
        }
      ],
      "color": "#3e45d6",
      "showValues": false,
      "showMarker": false
    },
    {
      "key": "DG $ Sales",
      "values": [
        {
          "label": "$ Sales Year Ago",
          "value": "5.0935309887000006E8"
        },
        {
          "label": "CTL BR",
          "value": "1.5116443607E8"
        },
        {
          "label": "ANGEL SOFT",
          "value": "1.4061622859E8"
        },
        {
          "label": "CHARMIN",
          "value": "8.016452815999998E7"
        },
        {
          "label": "COTTONELLE",
          "value": "6.136860984E7"
        },
        {
          "label": "SCOTT",
          "value": "5.8849053010000005E7"
        },
        {
          "label": "QUILTEDNORTHER NQUILTEDNORTHERNQUILTEDNORTHERNQUILTEDNORTHERN",
          "value": "2.6500236419999998E7"
        },
        {
          "label": "MD",
          "value": "0.01"
        },
        {
          "label": "$ Sales This Year",
          "value": "5.186630951000002E8"
        }
      ],
      "color": "#3ed65c",
      "showValues": false,
      "showMarker": false
    },
    {
      "key": "% of DG POG Sales % of DG POG Sales % of DG POG Sales % of DG POG Sales",
      "values": [
        {
          "label": "$ Sales Year Ago",
          "value": null
        },
        {
          "label": "CTL BR",
          "value": "29.145014846459226"
        },
        {
          "label": "ANGEL SOFT",
          "value": "27.111284746968295"
        },
        {
          "label": "CHARMIN",
          "value": "15.45599232282836"
        },
        {
          "label": "COTTONELLE",
          "value": "11.832075661401724"
        },
        {
          "label": "SCOTT",
          "value": "11.346296577868854"
        },
        {
          "label": "QUILTEDNORTHER NQUILTEDNORTHERNQUILTEDNORTHERNQUILTEDNORTHERN",
          "value": "5.109335264135315"
        },
        {
          "label": "MD",
          "value": "1.9280338420978195E-9"
        },
        {
          "label": "$ Sales This Year",
          "value": "100"
        }
      ],
      "color": "#3ed197",
      "showValues": false,
      "showMarker": false
    },
    {
      "key": "DG $ Sales % Change",
      "values": [
        {
          "label": "$ Sales Year Ago",
          "value": "1.8278079098083877"
        },
        {
          "label": "CTL BR",
          "value": "-5.615894107260807"
        },
        {
          "label": "ANGEL SOFT",
          "value": "12.43168304066872"
        },
        {
          "label": "CHARMIN",
          "value": "0.722267618973191"
        },
        {
          "label": "COTTONELLE",
          "value": "4.647482084251322"
        },
        {
          "label": "SCOTT",
          "value": "-1.6261940085917137"
        },
        {
          "label": "QUILTEDNORTHER NQUILTEDNORTHERNQUILTEDNORTHERNQUILTEDNORTHERN",
          "value": "1.644813316906253"
        },
        {
          "label": "MD",
          "value": "-99.93036211699165"
        },
        {
          "label": "$ Sales This Year",
          "value": "1.8278079098083877E-7"
        }
      ],
      "color": "#3edbba",
      "showValues": false,
      "showMarker": false
    },
    {
      "key": "XAOCRemaiqvwewebwebwebwebning % of DG Sales vs % of XAOCRemaiqvwewebwebwebwebning Market Sales",
      "values": [
        {
          "label": "$ Sales Year Ago",
          "value": "0"
        },
        {
          "label": "CTL BR",
          "value": "6.872316748052942"
        },
        {
          "label": "ANGEL SOFT",
          "value": "13.696877968872892"
        },
        {
          "label": "CHARMIN",
          "value": "-12.789355736304199"
        },
        {
          "label": "COTTONELLE",
          "value": "1.1532130983023192"
        },
        {
          "label": "SCOTT",
          "value": "-3.111375526111308"
        },
        {
          "label": "QUILTEDNORTHER NQUILTEDNORTHERNQUILTEDNORTHERNQUILTEDNORTHERN",
          "value": "-3.694496772734463"
        },
        {
          "label": "MD",
          "value": "-0.01901285838108875"
        },
        {
          "label": "$ Sales This Year",
          "value": "0"
        }
      ],
      "color": "#3ed43f",
      "showValues": false,
      "showMarker": false
    }
  ]

  $scope.options = {
    chart: {
      type: 'waterfall',
      height: 450,
      margin: {
        top: 20,
        right: 0,
        left: 0,
        bottom: 0
      },
      x: (d) => {
        return d.label
      },
      y: (d) => {
        return d.value
      },
      // x: (d) => {
      //   return d.label
      // },
      // y: (d) => {
      //   return d.metric1
      // },
      yAxis: {
        showMaxMin: false,
        // tickFormat: (d) => {
        //   return d3.format('$s,.f')(d)
        // }
      },
      waterfallColors: {
        boundary: 'black',
        positive: 'yellowgreen',
        negative: 'pink'
      },
      modules: [
        {
          name: 'numberFormat',
          options: {
            enabled: true,
            formatString: '[green]$0.0;[red]$0.0;[black]$0.0'
          }
        },
        {
          name: 'wrapper',
          options: {
            enabled: true,
            common: {
              space: 120,
              distance: 5,
              fontSize: 12,
              valign: 'middle',
              halign: 'middle',
              maxLineCount: 3,
              doClipPath: false
            },
            yTicks: {
              space: 30
            },
            yLabel: {
              distance: -30
            }
          }
        },
        {
          name: 'table',
          options: {
            enabled: true,
            formatString: '[green]0.0;[red]0.0;[black]0.0',
            metadata: {
              chart: {
                lines: [0]
              },
              table: {
                lines: [0, 1, 2, 3, 4],
                formatStrings: {
                  // 0: '[yellowgreen]£0.0;[brown]£0.0;[darkgray]£0.0',
                  0: '[yellowgreen]$0.0;[brown]$0.0;[darkgray]$0.0',
                  3: '[green]0.0;[red]0.0;[black]0.0',
                  4: '[blue]$0.0;[purple]0.0;[grey]0.0'
                },
                showHeadRow: true,

                // firstCellContent: 'Metric'
              }
            },

            // rowLineHeight: 35,
            // fontSize: 17,
            // fontWeight: 'bold',
            fill: '#f5f5f5',
            stroke: '#bbbbbb',
            strokeWidth: 1,
            // align: 'middle',
            // valign: 'middle',
            // offsetY: 20,
            // offsetX: 100,
            maxNLines: 2,
            colors: {
              // green: 'yellowgreen',
              red: 'brown'
            },

            //not implemented yet
            rowClick: (row) => {
              console.log(row)
            },
            changeChartSeriesOnRowClick: true,
          }
        },
      ]
    }
  }

  /**
   * Standalone example for numberFormatting function usage
   * @see nvd3-extender/src/d3CustomUtils.js
   */
  let f = new d3CustomUtils.nf(1000, '$', '0.0', {locale: 'en-US'})
  let f1 = new d3CustomUtils.nf(11241252, '$', '0.00', {locale: 'en-US'})
  let f2 = new d3CustomUtils.nf(.5342, '%', '0.00', {locale: 'en-US'})
  let f3 = new d3CustomUtils.nf(124512, ' pts', '0.0', {locale: 'en-US'})

  console.log(f.perform())
  console.log(f1.perform())
  console.log(f2.perform())
  console.log(f3.perform())

}]);
