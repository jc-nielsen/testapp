{
  class MultiBarChartWithNesting extends nv.ModelExtension {
    constructor() {
      super({
        name: 'multiBarChartWithNesting',
        parent: 'multiBarChart'
      })
    }

    draw(){

      var _itemsInGroup = window.ITEMS_IN_GROUPS;

      var data = this.selection.data()[0];

      if(data.IsModified != true) {

        var emptyColumnsToInsertCount = Math.floor(data[0].values.length / _itemsInGroup);

        for(var i = 1; i < emptyColumnsToInsertCount; i++) {
          var positionToInsertEmpty = (i * _itemsInGroup) + (i -1);

          for(var dI = 0; dI < data.length; dI++) {
            data[dI].values.splice(positionToInsertEmpty, 0, {
                  "x": positionToInsertEmpty,
                  "y": 0
                });

          }
        }

        // Set proper X-axis values after empty columns has been added

        for(var i = 0; i < data[0].values.length; i++) {
          for(var dI = 0; dI < data.length; dI++) {
            data[dI].values[i].x = i;
          }
        }

        /*data = [
        {
          "key": "Stream0",
          "color": "#561c8a",
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
            {
              "x": 3,
              "y": 0
            },
            {
              "x": 4,
              "y": 8
            },
            {
              "x": 5,
              "y": 7
            },
            {
              "x": 6,
              "y": 7
            },
            {
              "x": 7,
              "y": 0
            },
            {
              "x": 8,
              "y": 8
            },
            {
              "x": 9,
              "y": 7
            },
            {
              "x": 10,
              "y": 7
            },
            {
              "x": 11,
              "y": 0
            },
            {
              "x": 12,
              "y": 8
            },
            {
              "x": 13,
              "y": 7
            },
            {
              "x": 14,
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
            {
              "x": 3,
              "y": 0
            },
            {
              "x": 4,
              "y": 5
            },
            {
              "x": 5,
              "y": 5
            },
            {
              "x": 6,
              "y": 5
            },
            {
              "x": 7,
              "y": 0
            },
            {
              "x": 8,
              "y": 5
            },
            {
              "x": 9,
              "y": 5
            },
            {
              "x": 10,
              "y": 5
            },
            {
              "x": 11,
              "y": 0
            },
            {
              "x": 12,
              "y": 8
            },
            {
              "x": 13,
              "y": 7
            },
            {
              "x": 14,
              "y": 7
            }
          ]
        }];*/

        data.IsModified = true;

        this.selection.data([data])
        this.extendedChart.update();

        return;
      }


      // chart - это this.extendedChart
      var svg = d3.select(this.extendedChart.container);

      var containerHeight = parseFloat(svg.select(".nv-multiBarWithLegend .nv-groups").node().getBBox().height);

      var startGroupRects = svg.selectAll("g.nv-group")
        .filter(
          function (d, i) {
            return i === 0;
          }).selectAll("rect").filter(function (d, i) {
            return (i % (_itemsInGroup + 1) == 0);
          });

      var svgNvGroupCount = svg.selectAll("g.nv-group")[0].length;
      var endGroupRects = svg.selectAll("g.nv-group")
        .filter(
          function (d, i) {
            return i === (svgNvGroupCount - 1);
          }).selectAll("rect").filter(function (d, i) {
            return (i % (_itemsInGroup + 1) == (_itemsInGroup - 1));
          });

      var columnWidth = startGroupRects[0][0].getBBox().width;

      var isStacked = this.extendedChart.stacked();
      if(isStacked == false) {
        columnWidth = columnWidth * svgNvGroupCount;
      }

      for(var i = 0; i < endGroupRects[0].length; i++) {
        var xStart = d3.transform(d3.select(d3.select(startGroupRects[0][i])[0][0]).attr("transform")).translate[0];
        var xEnd = d3.transform(d3.select(d3.select(endGroupRects[0][i])[0][0]).attr("transform")).translate[0] + columnWidth;


        var rectHeight = 55;
        var groupWidth = xEnd - xStart;
        var textWidth = 120;

        var rect = svg.append("rect");
        rect
          .attr("class", "dp-bar-chart-label")
          .attr('x', xStart + 45)
          .attr('y', containerHeight + rectHeight)
          //.attr("transform", transformAttr)
          .attr('width', groupWidth)
          .attr('height', rectHeight)
          .style("stroke", "#CCCCCC")
          .style("fill", "none")
          .style("stroke-width", 2);

        var rectWhiteBg = svg.append("rect");
        rectWhiteBg
          .attr("class", "dp-bar-chart-label-bg")
          .attr('x', xStart + 45 + (groupWidth / 2) - (textWidth/2))
          .attr('y', containerHeight + rectHeight + 30)
          //.attr("transform", transformAttr)
          .attr('width', textWidth)
          .attr('height', 50)
          .style("fill", "#FFFFFF")

        /*var text = svg.append("text");
        text
          .attr("x", xStart + 45 + (groupWidth / 2) - (textWidth/2))
          .attr("y", containerHeight + rectHeight*2 + 5)
          .text("Share Change")
          .attr("class", "dp-bar-chart-label")
          .style("font-size", "18px")
          .style("font-family", "monospace")
          .style("fill", "#999999")*/

        var rectLeftWhiteBg = svg.append("rect");
        rectLeftWhiteBg
          .attr("class", "dp-bar-chart-label")
          .attr('x', xStart + 35)
          .attr('y', containerHeight + rectHeight + 1)
          //.attr("transform", transformAttr)
          .attr('width', 20)
          .attr('height', 10)
          .style("fill", "#FFFFFF")

        var rectRightWhiteBg = svg.append("rect");
        rectRightWhiteBg
          .attr("class", "dp-bar-chart-label")
          .attr('x', xStart + groupWidth + 35)
          .attr('y', containerHeight + rectHeight + 1)
          //.attr("transform", transformAttr)
          .attr('width', 20)
          .attr('height', 10)
          .style("fill", "#FFFFFF")


        var rectTitle = svg.append("g");
        rectTitle
          .attr("class", "dp-bar-chart-label-bg")
          .attr('transform', "translate(" + (xStart + 50 + (groupWidth / 2) - (textWidth/2)) + ", " + (containerHeight + rectHeight + 40) + ")")
          //.attr("transform", transformAttr)
          .attr('width', textWidth)
          .attr('height', 50)

        d3CustomUtils.DrawWrappedText("Share Change dfgdf dg df dfg dfgdfgdgdg", rectTitle, {
           width: textWidth,
           height: rectHeight * 2,
           fontSize: 13,
           fontColor: "#999999",
           maxLineCount: 2});
      }


    }
  }

  nv.ModelExtension.register(MultiBarChartWithNesting)
}
