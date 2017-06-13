let App = angular.module('nvd3-dp', ['nvd3'])

App.controller('MainCtrl', ['$scope', function ($scope) {

  $scope.options = {
    chart: {
      type: 'waterfall',
      height: 450,
      x: (d) => {
        return d.label
      },
      y: (d) => {
        return d.value
      },
      yAxis: {
        tickFormat: (d) => {
          return d3.format(".3s")(d)
        },
        showMaxMin: false
      },
      waterfallColors: {
        boundary: 'black',
        positive: 'yellowgreen',
        negative: 'red'
      },
      modules: [
        {
          name: 'table',
          options: {
            metadata: {
              chart: {
                lines: [0]
              },
              table: {
                lines: [0,1,2,3,4],
                showHeadRow: true
              }
            },

            rowLineHeight: 25,
            fontSize: 15,
            fontWeight: 'bold',
            fill: 'gainsboro',
            stroke: 'grey',
            strokeWidth: 2,
            align: 'middle',
            valign: 'middle',
            offsetY: 0,
            offsetX: 0,
            maxNLines: 2,
            colors: {
              green: 'yellowgreen',
              red: 'red'
            },


            // //not implemented yet
            // rowClick: (row) => {
            //   console.log(row)
            // },
            // changeChartSeriesOnRowClick: true,
          }
        }
      ]
    }
  }

  $scope.data = waterfallData

  $scope.nForChart = $scope.options.chart.modules[0].options.metadata.chart.lines[0]
  $scope.nForChartChange = () => {
    $scope.options.chart.modules[0].options.metadata.chart.lines = [$scope.nForChart]
  }

}]);
