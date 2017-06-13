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

  // -----------------

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
  // -----------------

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

  $scope.data4 = [
    {
      "key": "% Base Sales ASdasdw erbrtntr r rtntr rtn rtn rt nrrtn rtnr t",
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
          "label": "Remaining XAOC Remaining Market XAOC",
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
          "label": "Remaining XAOC Remaining Market XAOC",
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
          "label": "Remaining XAOC Remaining Market XAOC",
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
          "label": "Remaining XAOC Remaining Market XAOC",
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
          "label": "Remaining XAOC Remaining Market XAOC",
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
          "label": "Remaining XAOC Remaining Market XAOC",
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
          "label": "Remaining XAOC Remaining Market XAOC",
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
          "label": "Remaining XAOC Remaining Market XAOC",
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
          "label": "Remaining XAOC Remaining Market XAOC",
          "value": "81.35524298980764"
        }
      ],
      "color": "#dddddd",
      "showValues": false,
      "showMarker": false
    },
  ]

  $scope.data5 = [{"key":"% Base Sales ASdasdw erbrtntr r rtntr rtn rtn rt nrrtn rtnr t","values":[{"label":"DG","value":"88.02539977747493"},{"label":"Drug Channel","value":"62.647106098561466"},{"label":"Remaining XAOC Remaining Market XAOC ","value":"83.79512131518727"},{"label":"DG","value":"86.45347813083998"},{"label":"Drug Channel","value":"52.74511501091249"},{"label":"Remaining XAOC Remaining Market XAOC ","value":"81.35524298980764"},{"label":"DG","value":"86.45347813083998"},{"label":"Drug Channel","value":"52.74511501091249"},{"label":"Remaining XAOC Remaining Market XAOC ","value":"81.35524298980764"}],"color":"#EAD900","showValues":false,"showMarker":false},{"key":"% Incremental Sales","values":[{"label":"DG","value":"11.974600222525073"},{"label":"Drug Channel","value":"37.35289390143854"},{"label":"Remaining XAOC Remaining Market XAOC ","value":"16.204878684812734"},{"label":"DG","value":"13.546521869160008"},{"label":"Drug Channel","value":"47.254884989087515"},{"label":"Remaining XAOC Remaining Market XAOC ","value":"18.64475701019237"},{"label":"DG","value":"13.546521869160008"},{"label":"Drug Channel","value":"47.254884989087515"},{"label":"Remaining XAOC Remaining Market XAOC ","value":"18.64475701019237"}],"color":"#000000","showValues":false,"showMarker":false}]
  $scope.data5Labels = [{"key":"% Base Sales ASdasdw erbrtntr r rtntr rtn rtn rt nrrtn rtnr t","values":[{"label":"DG","value":"4557288.02539977747493"},{"label":"Drug Channel","value":"62.647106098561466"},{"label":"Remaining XAOC Remaining Market XAOC ","value":"83.79512131518727"},{"label":"DG","value":"86.45347813083998"},{"label":"Drug Channel","value":"52.74511501091249"},{"label":"Remaining XAOC Remaining Market XAOC ","value":"81.35524298980764"},{"label":"DG","value":"86.45347813083998"},{"label":"Drug Channel","value":"52.74511501091249"},{"label":"Remaining XAOC Remaining Market XAOC ","value":"81.35524298980764"}],"color":"#EAD900","showValues":false,"showMarker":false},{"key":"% Incremental Sales","values":[{"label":"DG","value":"11.974600222525073"},{"label":"Drug Channel","value":"37.35289390143854"},{"label":"Remaining XAOC Remaining Market XAOC ","value":"16.204878684812734"},{"label":"DG","value":"13.546521869160008"},{"label":"Drug Channel","value":"47.254884989087515"},{"label":"Remaining XAOC Remaining Market XAOC ","value":"18.64475701019237"},{"label":"DG","value":"13.546521869160008"},{"label":"Drug Channel","value":"47.254884989087515"},{"label":"Remaining XAOC Remaining Market XAOC ","value":"18.64475701019237"}],"color":"#000000","showValues":false,"showMarker":false}]

  $scope.data6 = [{"key":"Retailer Market","values":[{"label":"Value","value":"-0.8976106322294384"},{"label":"Units","value":"-1.3379174774351643"}],"color":"#0f406d","showValues":false,"showMarker":false},{"key":"Grocery Multiples minus tCG","values":[{"label":"Value","value":"-6.070866120638336"},{"label":"Units","value":"-6.509405683401918"}],"color":"#18888e","showValues":false,"showMarker":false},{"key":"Grocery Multiples","values":[{"label":"Value","value":"-5.617628864653736"},{"label":"Units","value":"-6.002735716783028"}],"color":"#186618","showValues":false,"showMarker":false}]

  $scope.options = {
    chart: {
      type: 'multiBarChartExt',
      height: 450,
      margin: {
        top: 0,
        right: 00,
        bottom: 0,
        left: 0
      },
      stacked: false,
      xAxis: {
        axisLabel: 'ASdasdasdasdASd Qwewergwe we ertenrtnrtnerne rtntrn rtn r Qwewergwe we ertenrtnrtnerne rtntrn rtn r ASdasdasdasdASd Qwewergwe we ertenrtnrtnerne rtntrn rtn r Qwewergwe we ertenrtnrtnerne rtntrn rtn r',
        showMaxMin: false,
        tickFormat: (d) => {
          // return d3.format(',.2f')(d)
          return d
          // return ''
        }
      },
      yAxis: {
        axisLabel: 'ASdasdasdasdASdwewergweerten rtnrtnernertntrnrtn r Qwewergwe we ertenrtnrtnerne rtntrn rtn r',
        showMaxMin: true,
        tickFormat: (d) => {
          // return d3.format(',.2f')(d)
          return d
          // return ''
        }
      },
      modules: [
        'format',
        {
          name: 'wrapper',
          options: {
            enabled: true,
            enableAutopositioning: true,
            common: {
              space: 60,
              distance: 5,
              fontSize: 12,
              valign: 'middle',
              halign: 'middle',
              maxLineCount: 3,
              isWordBreak: false,
              doClipPath: false
            },
            xLabel: {
              distance: -1000
            },
            yLabel: {
              distance: -220
            }
          }
        },
        {
          name: 'nesting',
          options: {
            enabled: true,
            barsInGroup: 3,
            groupId: (n) => {
              return n
            },
            groupName: (n) => {
              return `Group ${n} QWeqweqwe qwd qw erbb`
            },
            groupLabel: {
              height: 20,
              borderWhitespaceYOffset: 0,
              text: {
                height: 35,
                width: 160,
                nMaxLineCount: 2
              }
            }
          }
        },
        {
          name: 'top-labels',
          options: {
            enabled: true,
            isAvg: true,
            data: angular.copy($scope.data5Labels),
            labels: {
              offset: 20,
              fontSize: 18,
              minFontSize: 1,
              borderWidth: 1,
              rectPaddingX: 5,
              rectPaddingY: 2,
              // whenStackedAndNotAvg: 'first',
              doWrap: true,
            },
            header: {
              enabled: true,
              text: 'Point Change',
              textField: 'label',
              height: 40,
              width: 60,
              fontSize: 18,
              nMaxLineCount: 2
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
            enabled: false,
            text: 'CHART TITLE',
            fontSize: 15,
            fontWeight: 600,
            fontFamily: 'Open Sans',
            fontColor: 'black',
            halign: 'middle',
            valign: 'middle',
            maxNLines: 3,
            isWordBreak: false,
            ellipsisToLastWord: true,
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
      yField: 'value'
      // xField: 'x',
      // yField: 'y'
    }
  };

  $scope.optionsName = 'options'
  $scope.optionsNameChange = () => {
    $scope.options = $scope[$scope.optionsName]
  }
  $scope.optionsNameChange()

  $scope.dataName = 'data5'
  $scope.dataNameChange = () => {
    $scope.data = $scope[$scope.dataName]
  }
  $scope.dataNameChange()

});
