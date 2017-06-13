var app = angular.module('nvd3-dp', ['nvd3']);

app.controller('MainCtrl', function ($scope, $timeout) {
  $scope.data = barData

  $scope.options = {
    chart: {
      type: 'multiBarChartExt',
      height: 450,
      margin: {
        top: 55,
        right: 20,
        bottom: 100,
        left: 45
      },
      stacked: false,
      yAxis: {
        showMaxMin: false
      },
      modules: [
        // {
        //   name: 'nesting',
        //   options: {
        //     barsInGroup: 3,
        //     groupName: (n) => {
        //       return `Group ${n} QWeqweqwe qwd qw erbb`
        //     },
        //     groupLabel: {
        //       text: {
        //         width: 160,
        //         nMaxLineCount: 2
        //       }
        //     }
        //   }
        // },
        {
          name: 'top-labels',
          options: {
            data: angular.copy($scope.data),
            isAvg: true,
            labels: {
              offset: 20,
              fontSize: 18,
              minFontSize: 1,
              borderWidth: 1,
              rectPaddingX: 5,
              rectPaddingY: 2
            },
            header: {
              enabled: true,
              text: 'Average',
              textField: 'label',
              height: 40,
              width: 110,
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
      ],
      x: d => d.x,
      y: d => parseFloat(d.y),
      // x: d => d.label,
      // y: d => parseFloat(d.value),
      // xField: 'label',
      // yField: 'value'
    }
  }
});
