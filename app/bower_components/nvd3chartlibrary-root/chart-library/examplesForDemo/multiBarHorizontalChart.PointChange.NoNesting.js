var app = angular.module('nvd3-dp', ['nvd3']);

app.controller('MainCtrl', function ($scope, $timeout) {
  $scope.data = barData

  $scope.options = {
    chart: {
      type: 'multiBarHorizontalChartExt',
      height: 700,
      margin: {
        top: 75,
        right: 200,
        left: 45,
        bottom: 100
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
        //       return `Group ${n} !`
        //     },
        //     groupLabel: {
        //       borderWhitespaceYOffset: 5,
        //       height: 25,
        //       text: {
        //         width: 80,
        //         height: 20,
        //       }
        //     }
        //   }
        // },

        {
          name: 'horizontal-labels',
          options: {
            data: angular.copy($scope.data),
            // data: $scope.hlaData,
            isAvg: false,
            labels: {
              offset: 20,
              fontSize: 14,
              minFontSize: 1,
              borderWidth: 1,
              rectPaddingX: 5,
              rectPaddingY: 5
            },
            header: {
              text: 'Average Values',
              textField: 'label',
              height: 60,
              width: 100,
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
      // x: d => d.x,
      // y: d => d.y,
      x: d => d.label || d.x,
      y: (d) => {
        const value = d.value || d.y
        const parsedValue = parseFloat(value)
        return isNaN(parsedValue) ? value : parsedValue
      },
      // xField: 'label',
      // yField: 'value'
      xField: 'x',
      yField: 'y'
    }
  }

});
