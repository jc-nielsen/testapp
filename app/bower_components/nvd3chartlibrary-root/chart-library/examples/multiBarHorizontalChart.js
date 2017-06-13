var app = angular.module('nvd3-dp', ['nvd3']);

app.controller('MainCtrl', function ($scope, $timeout) {
  $scope.data1 = [
    {
      "key": "Stream0",
      "color": "#CC7711",
      "label": "Total Beverages",
      "values": [
        {
          "x": 0,
          "y": 9,
        },
        {
          "x": 1,
          "y": 7
        },
        {
          "x": 2,
          "y": 7
        },
        /*{
          "x": 3,
          "y": 0
        },*/
        {
          "x": 3,
          "y": 8
        },
        {
          "x": 4,
          "y": 7
        },
        {
          "x": 5,
          "y": 7
        },
        /*{
          "x": 7,
          "y": 0
        },*/
        {
          "x": 6,
          "y": 8
        },
        {
          "x": 7,
          "y": 7
        },
        {
          "x": 8,
          "y": 7
        },
        /*{
          "x": 11,
          "y": 0
        },*/
        {
          "x": 9,
          "y": 8
        },
        {
          "x": 10,
          "y": 7
        },
        {
          "x": 11,
          "y": 7
        }
      ]
    },
    {
      "key": "Stream1",
      "color": "#993344",
      "label": "Carbonated Beverages",
      "values": [
        {
          "x": 0,
          "y": 6
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        /*{
          "x": 3,
          "y": 0
        },*/
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 5,
          "y": 5
        },
        /*{
          "x": 7,
          "y": 0
        },*/
        {
          "x": 6,
          "y": 5
        },
        {
          "x": 7,
          "y": 5
        },
        {
          "x": 8,
          "y": 5
        },
        /*{
          "x": 11,
          "y": 0
        },*/
        {
          "x": 9,
          "y": 8
        },
        {
          "x": 10,
          "y": 7
        },
        {
          "x": 11,
          "y": 7
        }
      ]
    }];

  $scope.data2 = [
    {
      "key": "Stream0",
      "color": "#CC7711",
      "label": "Total Beverages",
      "values": [
        {
          "x": 0,
          "y": 9,
        },
        {
          "x": 1,
          "y": 7
        },
        {
          "x": 2,
          "y": 7
        },
        /*{
          "x": 3,
          "y": 0
        },*/
        {
          "x": 3,
          "y": 8
        },
        {
          "x": 4,
          "y": 7
        },
        {
          "x": 5,
          "y": 7
        },
        /*{
          "x": 7,
          "y": 0
        },*/
        {
          "x": 6,
          "y": 8
        },
        {
          "x": 7,
          "y": 7
        },
        {
          "x": 8,
          "y": 7
        },
        /*{
          "x": 11,
          "y": 0
        },*/
        {
          "x": 9,
          "y": 8
        },
        {
          "x": 10,
          "y": 7
        },
        {
          "x": 11,
          "y": 7
        }
      ]
    },
    {
      "key": "Stream1",
      "color": "#993344",
      "label": "Carbonated Beverages",
      "values": [
        {
          "x": 0,
          "y": 6
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        /*{
          "x": 3,
          "y": 0
        },*/
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 5,
          "y": 5
        },
        /*{
          "x": 7,
          "y": 0
        },*/
        {
          "x": 6,
          "y": 5
        },
        {
          "x": 7,
          "y": 5
        },
        {
          "x": 8,
          "y": 5
        },
        /*{
          "x": 11,
          "y": 0
        },*/
        {
          "x": 9,
          "y": 8
        },
        {
          "x": 10,
          "y": 7
        },
        {
          "x": 11,
          "y": 7
        }
      ]
    },
    {
      "key": "Stream3",
      "color": "#CCCCCC",
      "label": "Carbonated Beverages",
      "values": [
        {
          "x": 0,
          "y": 8
        },
        {
          "x": 1,
          "y": 6
        },
        {
          "x": 2,
          "y": 4
        },
        /*{
          "x": 3,
          "y": 0
        },*/
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 4,
          "y": 8
        },
        {
          "x": 5,
          "y": 7
        },
        /*{
          "x": 7,
          "y": 0
        },*/
        {
          "x": 6,
          "y": 6
        },
        {
          "x": 7,
          "y": 5
        },
        {
          "x": 8,
          "y": 7
        },
        /*{
          "x": 11,
          "y": 0
        },*/
        {
          "x": 9,
          "y": 4
        },
        {
          "x": 10,
          "y": 9
        },
        {
          "x": 11,
          "y": 8
        }
      ]
    }];

  $scope.data3 = [
    {
      "key": "Stream0",
      "color": "#DDDDDD",
      "label": "Total Beverages",
      "values": [
        {
          "x": 0,
          "y": 9,
        },
        {
          "x": 1,
          "y": 7
        },
        {
          "x": 2,
          "y": 7
        },
        /*{
          "x": 3,
          "y": 0
        },*/
        {
          "x": 3,
          "y": 8
        },
        {
          "x": 4,
          "y": 7
        },
        {
          "x": 5,
          "y": 7
        },
        /*{
          "x": 7,
          "y": 0
        },*/
        {
          "x": 6,
          "y": 8
        },
        {
          "x": 7,
          "y": 7
        },
        {
          "x": 8,
          "y": 7
        },
        /*{
          "x": 11,
          "y": 0
        },*/
        {
          "x": 9,
          "y": 8
        },
        {
          "x": 10,
          "y": 7
        },
        {
          "x": 11,
          "y": 7
        }
      ]
    },
    {
      "key": "Stream1",
      "color": "#CCCCCC",
      "label": "Carbonated Beverages",
      "values": [
        {
          "x": 0,
          "y": 6
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        /*{
          "x": 3,
          "y": 0
        },*/
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 5,
          "y": 5
        },
        /*{
          "x": 7,
          "y": 0
        },*/
        {
          "x": 6,
          "y": 5
        },
        {
          "x": 7,
          "y": 5
        },
        {
          "x": 8,
          "y": 5
        },
        /*{
          "x": 11,
          "y": 0
        },*/
        {
          "x": 9,
          "y": 8
        },
        {
          "x": 10,
          "y": 7
        },
        {
          "x": 11,
          "y": 7
        }
      ]
    },
    {
      "key": "Stream3",
      "color": "#BBBBBB",
      "label": "Carbonated Beverages",
      "values": [
        {
          "x": 0,
          "y": 8
        },
        {
          "x": 1,
          "y": 6
        },
        {
          "x": 2,
          "y": 4
        },
        /*{
          "x": 3,
          "y": 0
        },*/
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 4,
          "y": 8
        },
        {
          "x": 5,
          "y": 7
        },
        /*{
          "x": 7,
          "y": 0
        },*/
        {
          "x": 6,
          "y": 6
        },
        {
          "x": 7,
          "y": 5
        },
        {
          "x": 8,
          "y": 7
        },
        /*{
          "x": 11,
          "y": 0
        },*/
        {
          "x": 9,
          "y": 4
        },
        {
          "x": 10,
          "y": 9
        },
        {
          "x": 11,
          "y": 8
        }
      ]
    },
    {
      "key": "Stream3",
      "color": "#AAAAAA",
      "label": "Carbonated Beverages",
      "values": [
        {
          "x": 0,
          "y": 8
        },
        {
          "x": 1,
          "y": -6
        },
        {
          "x": 2,
          "y": 4
        },
        /*{
          "x": 3,
          "y": 0
        },*/
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 4,
          "y": 8
        },
        {
          "x": 5,
          "y": 7
        },
        /*{
          "x": 7,
          "y": 0
        },*/
        {
          "x": 6,
          "y": 6
        },
        {
          "x": 7,
          "y": 5
        },
        {
          "x": 8,
          "y": 7
        },
        /*{
          "x": 11,
          "y": 0
        },*/
        {
          "x": 9,
          "y": 4
        },
        {
          "x": 10,
          "y": 9
        },
        {
          "x": 11,
          "y": 8
        }
      ]
    }];

  $scope.data4 = [
    {
      "key": "% Base Sales",
      "values": [
        {
          "label": "DG",
          "value": "88.02539977747493"
        },
        {
          "label": "Drug Channel",
          "value": "62.647106098561466"
        },
        {
          "label": "XAOC Remaining Market",
          "value": "83.79512131518727"
        },
        {
          "label": "DG",
          "value": "86.45347813083998"
        },
        {
          "label": "Drug Channel",
          "value": "52.74511501091249"
        },
        {
          "label": "XAOC Remaining Market",
          "value": "81.35524298980764"
        },
        {
          "label": "DG",
          "value": "86.45347813083998"
        },
        {
          "label": "Drug Channel",
          "value": "52.74511501091249"
        },
        {
          "label": "XAOC Remaining Market",
          "value": "81.35524298980764"
        }
      ],
      "color": "#EAD900",
      "showValues": false,
      "showMarker": false
    },
    {
      "key": "% Incremental Sales",
      "values": [
        {
          "label": "DG",
          "value": "11.974600222525073"
        },
        {
          "label": "Drug Channel",
          "value": "37.35289390143854"
        },
        {
          "label": "XAOC Remaining Market",
          "value": "16.204878684812734"
        },
        {
          "label": "DG",
          "value": "13.546521869160008"
        },
        {
          "label": "Drug Channel",
          "value": "47.254884989087515"
        },
        {
          "label": "XAOC Remaining Market",
          "value": "18.64475701019237"
        },
        {
          "label": "DG",
          "value": "13.546521869160008"
        },
        {
          "label": "Drug Channel",
          "value": "47.254884989087515"
        },
        {
          "label": "XAOC Remaining Market",
          "value": "18.64475701019237"
        }
      ],
      "color": "#000000",
      "showValues": false,
      "showMarker": false
    },
    {
      "key": "QWerty",
      "values": [
        {
          "label": "DG",
          "value": "88.02539977747493"
        },
        {
          "label": "Drug Channel",
          "value": "62.647106098561466"
        },
        {
          "label": "XAOC Remaining Market",
          "value": "83.79512131518727"
        },
        {
          "label": "DG",
          "value": "86.45347813083998"
        },
        {
          "label": "Drug Channel",
          "value": "52.74511501091249"
        },
        {
          "label": "XAOC Remaining Market",
          "value": "81.35524298980764"
        },
        {
          "label": "DG",
          "value": "86.45347813083998"
        },
        {
          "label": "Drug Channel",
          "value": "52.74511501091249"
        },
        {
          "label": "XAOC Remaining Market",
          "value": "81.35524298980764"
        }
      ],
      "color": "#dddddd",
      "showValues": false,
      "showMarker": false
    }
  ]

  $scope.hlaData = [
    {
      "key": "Stream0",
      "color": "#DDDDDD",
      "label": "Total Beverages",
      "values": [
        {
          "x": 0,
          "y": 'wegwge',
        },
        {
          "x": 1,
          "y": 7
        },
        {
          "x": 2,
          "y": 89123
        },
        {
          "x": 3,
          "y": 'QWEQWE !!!!!'
        },
        {
          "x": 4,
          "y": 7
        },
        {
          "x": 5,
          "y": 7
        },
        {
          "x": 6,
          "y": 8
        },
        {
          "x": 7,
          "y": 7
        },
        {
          "x": 8,
          "y": 7
        },
        {
          "x": 9,
          "y": 8
        },
        {
          "x": 10,
          "y": 7
        },
        {
          "x": 11,
          "y": 7
        }
      ]
    }
  ]

  $scope.options = {
    chart: {
      type: 'multiBarHorizontalChartExt',
      height: 500,
      margin: {
        top: 50,
        right: 0,
        bottom: 0,
        left: 0
      },
      showControls: false,
      showLegend: false,
      stacked: false,
      xAxis: {
        axisLabel: 'ASdasdasdasdASd Qwewergwe we ertenrtnrtnerne rtntrn rtn r Qwewergwe we ertenrtnrtnerne rtntrn rtn r ASdasdasdasdASd Qwewergwe we ertenrtnrtnerne rtntrn rtn r Qwewergwe we ertenrtnrtnerne rtntrn rtn r ASdasdasdasdASd Qwewergwe we ertenrtnrtnerne rtntrn rtn r Qwewergwe we ertenrtnrtnerne rtntrn rtn r',
        axisLabelDistance: 10,
        fontSize: 12,
        showMaxMin: false,
        tickFormat: (d) => {
          // return d3.format(',.2f')(d)
          return d
          // return ''
        }
      },
      yAxis: {
        axisLabel: 'ASdasdasdasdASdwewergweertenrtnrtnernertntrASdasdasdasdASdwewergweertenrtnrtnernertntrASdasdasdasdASdwewergweertenrtnrtnernertntrASdasdasdasdASdwewergweertenrtnrtnernertntrASdasdasdasdASdwewergweertenrtnrtnernertntrASdasdasdasdASd Qwewergwe we ertenrtnrtnerne rtntrn rtn r Qwewergwe we ertenrtnrtnerne rtntrn rtn r ASdasdasdasdASd Qwewergwe we ertenrtnrtnerne rtntrn rtn r Qwewergwe we ertenrtnrtnerne rtntrn rtn r ASdasdasdasdASd Qwewergwe we ertenrtnrtnerne rtntrn rtn r Qwewergwe we ertenrtnrtnerne rtntrn rtn r',
        axisLabelDistance: 0,
        showMaxMin: false,
        tickFormat: (d) => {
          // return d3.format(',.2f')(d)
          return d
          // return ''
        }
      },
      modules: [
        {
          name: 'numberFormat',
          options: {
            enabled: true,
            formatString: '[green]0.0;[red]0.0;[black]0.0'
          }
        },
        {
          name: 'wrapper',
          options: {
            enabled: true,
            enableAutopositioning: true,
            relativeAdjustmentGap: 5,
            common: {
              space: 60,
              distance: 5,
              fontSize: 12,
              // fontWeight: 'normal',
              valign: 'middle',
              halign: 'middle',
              maxLineCount: 3,
              isWordBreak: false,
              doClipPath: false
            },
            xLabel: {
              distance: -100
            },
            yLabel: {
              distance: -240
            }
          }
        },
        {
          name: 'nesting',
          options: {
            enabled: true,
            barsInGroup: 3,
            groupName: (n) => {
              return `Group ${n} !`
            },
            tickLabelsOutside: false,
            groupLabel: {
              height: 25,
              borderWhitespaceYOffset: 0,
              text: {
                width: 80,
                height: 40,
              }
            }
          }
        },
        {
          name: 'horizontal-labels',
          options: {
            enabled: true,
            data: angular.copy($scope.data4),
            // data: $scope.hlaData,
            isAvg: false,
            labels: {
              offset: 10,
              fontSize: 18,
              minFontSize: 1,
              borderWidth: 1,
              rectPaddingX: 5,
              rectPaddingY: 5,
              // whenStackedAndNotAvg: 'first'
            },
            header: {
              enabled: true,
              text: (d) => {
                return d.label || d.key
              },
              height: 60,
              width: 60,
              fontSize: 18,
              fontFamily: 'Open Sans',
              nMaxLineCount: 3
            },
            colors: {
              header: '#999999',
              labelBorder: '#CCCCCC',
              labelFont: 'black'
            }
          }
        },
        {
          name: 'title',
          options: {
            enabled: true,
            text: 'CHART TITLE QWERTY ASDFGH ZXCVBN UIOP{ JK:L" NM<><NM JLWEIJWEB WELIJBLIJ V EEWE, CHART TITLE QWERTY ASDFGH ZXCVBN UIOP{ JK:L" NM<><NM JLWEIJWEB WELIJBLIJ V EEWE',
            height: 60,
            minWidth: 100,
            fontSize: 15,
            fontWeight: 600,
            fontFamily: 'Open Sans',
            fontColor: 'black',
            halign: 'middle',
            valign: 'middle',
            maxNLines: 3,
            isWordBreak: false,
            ellipsisToLastWord: false,
            tooltip: true,
            title: true
          }
        }
      ],
      x: d => d.label || d.x,
      y: (d) => {
        const value = d.value || d.y
        const parsedValue = parseFloat(value)
        return isNaN(parsedValue) ? value : parsedValue
      },
      xField: 'label',
      yField: 'value',
      // xField: 'x',
      // yField: 'y',
    }
  };

  $scope.optionsName = 'options'
  $scope.optionsNameChange = () => {
    $scope.options = $scope[$scope.optionsName]
  }
  $scope.optionsNameChange()

  $scope.dataName = 'data4'
  $scope.dataNameChange = () => {
    $scope.data = $scope[$scope.dataName]
  }
  $scope.dataNameChange()

});
