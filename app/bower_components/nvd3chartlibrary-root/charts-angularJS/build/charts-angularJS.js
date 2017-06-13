'use strict';

angular.module('nlsn.chart.components.util.colors', []).constant('$nlsnColors', {
  stdcolors: ['#A6CEE3', '#1F78B4', '#B2DF8A', '#33A02C', '#FB9A99', '#E31A1C', '#FDBF6F', '#FF7F00', '#CAB2D6', '#6A3D9A', '#FFFF99', '#B15928']
});

(function () {

  angular.module('nlsn.chart.components.helper', ['nlsn.chart.components.util.colors']).service('chartHelpers', ['$nlsnColors', chartHelpers]);

  function chartHelpers($nlsnColors) {
    var helpers = {
      //old fns
      // formatAbbreviation: function (x) {
      //   if (isNaN(x)) {
      //     x = x.slice(1, x.length);
      //   }
      //   var s = d3.format(".3s")(x);
      //   switch (s[s.length - 1]) {
      //     case "G":
      //       return s.slice(0, -1) + "B";
      //   }
      //   return s;
      // },


      // wrap: function (text, width) {
      //   text.each(function () {
      //     var text = d3.select(this),
      //       dy = 0,
      //       start = 0,
      //       limit = width,
      //       words = [];
      //     if (text.text()) {
      //       /* for(var i=0;i<=text.text().length/limit;i++){
      //        start = i * limit;
      //        words.push(text.text().substr(start, limit));
      //        }
      //        words = words.reverse();
      //        */
      //       var prevItem = '';
      //       text.text().split(/\s+/).map(function (item, index, array) {
      //         return item + " ";
      //       }).forEach(function (item) {
      //         if ((item + prevItem).length <= limit) {
      //           prevItem = prevItem + item;
      //         }
      //         else {
      //           words.push(prevItem);
      //           prevItem = item;
      //         }
      //       });
      //       words.push(prevItem);
      //       words.reverse();

      //       var word,
      //         line = [],
      //         lineNumber = 0,
      //         lineHeight = 1, // ems
      //         y = text.attr("y") - ((words.length + 1) * 4),
      //         dy = parseFloat(text.attr("dy")),
      //         tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");

      //       while (word = words.pop()) {
      //         line.push(word);
      //         tspan.text(line.join(" "));
      //         if (tspan.node().getComputedTextLength() > width) {
      //           line.pop();
      //           tspan.text(line.join(" "));
      //           line = [word];
      //           tspan = text.append("tspan").attr("x", -6).attr("y", y - 5).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
      //         }
      //       }
      //     }
      //   });
      // },


      // wrapAxisLabel: function (text, width) {
      //   var dy = 0,
      //     start = 0,
      //     limit = width,
      //     words = [];
      //   if (text[0][0] != null && text.text()) {
      //     // for(var i=0;i<=text.text().length/limit;i++){
      //     // start = i * limit;
      //     // words.push(text.text().substr(start, limit));
      //     // }
      //     // words = words.reverse();
      //     var prevItem = '';
      //     text.text().split(/\s+/).map(function (item, index, array) {
      //       return item + " ";
      //     }).forEach(function (item) {
      //       if ((item + prevItem).length <= limit) {
      //         prevItem = prevItem + item;
      //       }
      //       else {
      //         words.push(prevItem);
      //         prevItem = item;
      //       }
      //     });
      //     words.push(prevItem);
      //     words.reverse();
      //     var word,
      //       line = [],
      //       lineNumber = 0,
      //       lineHeight = 1, // ems
      //       y = text.attr("y") - ((words.length + 1) * 4),
      //       tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
      //     var count = 0;

      //     while (word = words.pop()) {
      //       line.push(word);
      //       tspan.text(line.join(" "));
      //       if (tspan.node().getComputedTextLength() > width) {
      //         line.pop();
      //         tspan.text(line.join(" "));
      //         line = [word];
      //         tspan = text.append("tspan").attr("x", -60).attr("y", y + 5).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
      //       }
      //       count++;
      //     }
      //   }
      // },


      // labelWrapper: function () {
      //   $timeout(function () {
      //     var chart = d3.select('.nv-x');
      //     chart.selectAll('text').call(helpers.wrap, 12);

      //     var yaxislabel = d3.select('.nv-y .nv-axislabel')
      //     yaxislabel.call(helpers.wrapAxisLabel, 25);
      //     // yaxislabel.attr("style", "text-anchor:end");
      //   }, 500);
      // },

      // convertColor: function (colorName) {
      //   var colorNames = {
      //     "colorGreen": "#5BB433",
      //     "colorRed": "#FF524F",
      //     "colorBlack": "#000000"
      //   };

      //   return colorNames[colorName];
      // },

      // getConditionalFormatColor: function (currValue, formatStr) {
      //   formatStr = (formatStr && formatStr != "") ? formatStr : "[Black]#.#;[Black]#.#;[Black]0;";
      //   var FormattingRule = formatStr.split(';');
      //   var posColor = 'color' + FormattingRule[0].substring(FormattingRule[0].indexOf('[') + 1, FormattingRule[0].indexOf(']'));
      //   var negColor = 'color' + FormattingRule[1].substring(FormattingRule[1].indexOf('[') + 1, FormattingRule[1].indexOf(']'));

      //   return Number(currValue) >= 0 ? helpers.convertColor(posColor) : helpers.convertColor(negColor);
      // }


      //properties
      NVD3DataXMetricName: 'xmetric',
      NVD3DataXMetricDisplayName: 'xmetricDisplayed',
      NVD3DataYMetricName: 'ymetric',
      NVD3DataYMetricDisplayName: 'ymetricDisplayed',
      NVD3DataEntryKeyName: 'key',

      defaults: {
        legend: {},
        font: {
          fontFamily: 'Roboto, "Open Sans", sans-serif',
          fontSize: 12,
          fontWeight: 'normal',
          fontColor: 'rgb(136, 136, 136)'
        },
        config: {
          axisConfig: {
            // showXaxis: true,
            // showYaxis: true,
            xAxis: {
              showAxisLabel: true,
              showAxisLine: true,
              showMaxMin: false,
              font: {}
            },
            yAxis: {
              showAxisLabel: true,
              showAxisLine: true,
              showMaxMin: false,
              font: {}
            }
          }
        },
        properties: {
          margin: {},
          legend: {},
          showControls: true,
          showLegend: true,
          showTitle: true,
          showValues: true,
          showXaxis: true,
          showYaxis: true,
          showMarker: true,
          showTable: false
        }
      },

      //data and options builders
      getXMetricByGroupingLevel: function getXMetricByGroupingLevel(config, level) {
        //level: number [0,1,....]
        return config.dataDefinition.xaxis[config.dataDefinition.xaxis.length - 1 - level];
      },

      buildData: function buildData(yMetrics, externalData, metadata, config) {
        var data = [];

        var xMetric = helpers.getXMetricByGroupingLevel(config, 0);
        var xMetricName = xMetric.value;
        var xMetricDisplayName = xMetric.displayValue || xMetric.value;

        // if(config.dataDefinition.dynamicSeries) {
        if (config.dataDefinition.yaxis != null && config.dataDefinition.series != null && config.dataDefinition.series.length == 1) {
          yMetrics = [];
          var modifiedExternalData = [];
          var processedMetricNames = [];
          var baseMetricName = config.dataDefinition.series[0].value;
          for (var j = 0; j < externalData.length; j++) {
            var item = externalData[j];
            var metricName = item[baseMetricName];
            if (!processedMetricNames.includes(metricName)) {
              yMetrics.push({ value: metricName });
              processedMetricNames.push(metricName);
              externalData.filter(function (item) {
                return item[baseMetricName] == metricName;
              }).forEach(function (item, index) {
                if (modifiedExternalData[index] == null) {
                  modifiedExternalData[index] = {};
                  modifiedExternalData[index][xMetricName] = item[xMetricName];
                }
                modifiedExternalData[index][metricName] = item[config.dataDefinition.yaxis.value];
              });
            }
          }
          externalData = modifiedExternalData;
        }

        yMetrics.forEach(function (yMetric, index) {
          var yMetricName = yMetric.value;
          var yMetricDisplayName = yMetric.displayValue;
          var metricMetadata = metadata[yMetricName];
          var dataEntry = {
            values: []
          };
          dataEntry[helpers.NVD3DataEntryKeyName] = metricMetadata ? metricMetadata.title : yMetricName;
          //colors, showValues, showMarker etc.
          if (config.seriesConfigs != null && config.seriesConfigs[yMetricName] != null) {
            Object.assign(dataEntry, angular.copy(config.seriesConfigs[yMetricName]));
          }
          //color
          if (!dataEntry.color) {
            dataEntry.color = helpers.getColorFromPaletteByIndex(config, index);
          }

          for (var j = 0; j < externalData.length; j++) {
            var item = externalData[j];
            var dataEntrySerie = {};
            dataEntrySerie[helpers.NVD3DataXMetricName] = item[xMetricName];
            dataEntrySerie[helpers.NVD3DataXMetricDisplayName] = item[xMetricDisplayName] || item[xMetricName];
            dataEntrySerie[helpers.NVD3DataYMetricName] = item[yMetricName];
            dataEntrySerie[helpers.NVD3DataYMetricDisplayName] = item[yMetricDisplayName] || item[yMetricName];
            if (Array.isArray(config.tooltip)) {
              var tooltipSerie;
              for (var i = 0; i < config.tooltip.length; i++) {
                tooltipSerie = config.tooltip[i];
                dataEntrySerie[tooltipSerie.column] = item[tooltipSerie.column];
              }
            }
            dataEntry.values.push(dataEntrySerie);
          }

          // if (config.axisConfig.yAxis.reversePlotOrder) {
          //   dataEntry.values.reverse()
          // }

          data.push(dataEntry);
        });

        return data;
      },

      getColorFromPaletteByIndex: function getColorFromPaletteByIndex(config, index) {
        return config.colorPalette != null ? config.colorPalette[index] : $nlsnColors.stdcolors[index % 10];
      },

      xMetricSort: function xMetricSort(data) {
        angular.forEach(data, function (val, key) {
          val.values.sort(function (a, b) {
            if (a.pri_display_order && b.pri_display_order) {
              return a.pri_display_order - b.pri_display_order;
            }
          });
        });

        return data;
      },

      seriesSort: function seriesSort(data) {
        angular.forEach(data, function (val, key) {
          val.values.forEach(function (obj) {
            if (obj.sec_display_order) val.sec_display_order = obj.sec_display_order;
          });
        });
        data.sort(function (a, b) {
          if (a.sec_display_order && b.sec_display_order) {
            return a.sec_display_order - b.sec_display_order;
          }
        });
        return data;
      },

      buildOptions: function buildOptions(config, properties) {
        var options = {
          chart: {
            // height: 298,
            duration: 0,
            transitionDuration: 0,
            margin: properties.margin || {},
            legend: {
              margin: properties.legend !== null ? properties.legend.margin || {} : {}
            },
            stacked: true,
            showControls: properties.showControls,
            showLegend: properties.showLegend,
            showValues: properties.showValues,
            showXAxis: config.axisConfig.showXaxis !== null ? config.axisConfig.showXaxis : properties.showXaxis,
            showYAxis: config.axisConfig.showYaxis !== null ? config.axisConfig.showYaxis : properties.showYaxis,
            tooltip: {
              duration: 0,
              gravity: 'w',
              hideDelay: 0,
              distance: 20,
              snapDistance: 0
            },
            xAxis: {
              axisLabel: config.axisConfig.xAxis.axisLabel,
              axisLabelDistance: config.axisConfig.xAxis.axisLabelDistance || 0,
              showMaxMin: config.axisConfig.xAxis.showMaxMin,
              fontSize: config.axisConfig.xAxis.font.size,
              tickPadding: 5,
              tickFormat: function tickFormat(d) {
                var displayed = JSON.parse(d)[helpers.NVD3DataXMetricDisplayName];
                if (config.axisConfig.xAxis.displayFormat && Number.isNumber(displayed) && d3CustomUtils.nf) {
                  var type = config.axisConfig.xAxis.type || '';
                  var nf = new d3CustomUtils.nf(displayed, type, config.axisConfig.xAxis.displayFormat, { options: { locale: 'en-US' } });
                  return nf.perform().text;
                }
                return displayed;
              }
            },
            yAxis: {
              axisLabel: config.axisConfig.yAxis.axisLabel,
              axisLabelDistance: config.axisConfig.yAxis.axisLabelDistance || 0,
              showMaxMin: config.axisConfig.yAxis.showMaxMin,
              fontSize: config.axisConfig.yAxis.font.size,
              ticks: config.axisConfig.yAxis.ticks,
              tickPadding: 5,
              tickFormat: function tickFormat(d) {
                if (config.axisConfig.yAxis.displayFormat && Number.isNumber(d) && d3CustomUtils.nf) {
                  var type = config.axisConfig.yAxis.type || '';
                  var nf = new d3CustomUtils.nf(d, type, config.axisConfig.yAxis.displayFormat, { options: { locale: 'en-US' } });
                  return nf.perform().text;
                }
                return d;
              }
            },
            x: function x(d) {
              var obj = {};
              obj[helpers.NVD3DataXMetricName] = d[helpers.NVD3DataXMetricName];
              obj[helpers.NVD3DataXMetricDisplayName] = d[helpers.NVD3DataXMetricDisplayName];
              return JSON.stringify(obj);
            },
            y: function y(d) {
              var value = d[helpers.NVD3DataYMetricName];
              var parsedValue = parseFloat(value);
              return isNaN(parsedValue) ? value : parsedValue;
            },
            xField: helpers.NVD3DataXMetricName,
            yField: helpers.NVD3DataYMetricName,
            clipEdge: true,
            // callback: function () {
            //   helpers.labelWrapper();
            // },
            modules: [],
            modulesObj: {}
          }
        };

        //height
        if (properties.height) {
          options.chart.height = properties.height;
        }

        //xDomain
        if (config.axisConfig.xAxis.bound != null) {
          options.chart.xDomain = [config.axisConfig.xAxis.bound.minValue, config.axisConfig.xAxis.bound.maxValue];
        }
        //yDomain
        if (config.axisConfig.yAxis.bound != null) {
          options.chart.yDomain = [config.axisConfig.yAxis.bound.minValue, config.axisConfig.yAxis.bound.maxValue];
        }
        //xAxis.tickValues
        if (config.axisConfig.xAxis.unit != null) {
          if (config.axisConfig.xAxis.unit.major) {
            options.chart.xAxis.tickValues = function () {
              var arr = [];
              var i = 0;
              do {
                arr.push(i);
                i += config.axisConfig.xAxis.unit.major;
              } while (i < config.axisConfig.yAxis.bound.maxValue);
              i = 0;
              do {
                arr.push(i);
                i -= config.axisConfig.xAxis.unit.major;
              } while (i > config.axisConfig.yAxis.bound.minValue);
              return arr;
            };
          }
        }
        //yAxis.tickValues
        if (config.axisConfig.yAxis.unit != null) {
          if (config.axisConfig.yAxis.unit.major) {
            options.chart.yAxis.tickValues = function () {
              var arr = [];
              var i = 0;
              do {
                arr.push(i);
                i += config.axisConfig.yAxis.unit.major;
              } while (i < config.axisConfig.yAxis.bound.maxValue);
              i = 0;
              do {
                arr.push(i);
                i -= config.axisConfig.yAxis.unit.major;
              } while (i > config.axisConfig.yAxis.bound.minValue);
              return arr;
            };
          }
        }

        if (config.dataDefinition.series != null && config.seriesConfigs != null) {
          options.chart.barColor = function (d, i) {
            var color;
            var serie = config.dataDefinition.series[d.series];
            if (serie != null) {
              var yMetricName = serie.value;
              var seriesConfig = config.seriesConfigs[yMetricName];
              if (seriesConfig != null) {
                var formatStr = seriesConfig.dataLabel != null ? seriesConfig.dataLabel.displayFormat : seriesConfig.displayFormat;
                if (formatStr) {
                  var value = d[helpers.NVD3DataYMetricName];
                  color = d3CustomUtils.numberFormat(value, formatStr).color;
                } else {
                  if (seriesConfig.color != null) {
                    color = seriesConfig.color;
                  }
                }
              }
            }
            if (!color) {
              color = helpers.getColorFromPaletteByIndex(config, d.series);
            }
            return color;
          };
        }

        return options;
      },

      _buildOptions_module: function _buildOptions_module(name, options, args) {
        var module = helpers['__buildOptions_module_' + name](args);
        options.chart.modules.push(module);
        options.chart.modulesObj[name] = module;
      },

      __buildOptions_module_format: function __buildOptions_module_format() {
        return {
          // name: 'format',
          name: 'numberFormat',
          options: {
            // formatString: ',.1f'
          }
        };
      },

      __buildOptions_module_wrapper: function __buildOptions_module_wrapper() {
        return {
          name: 'wrapper',
          options: {
            common: {
              space: 80,
              distance: 5,
              fontSize: 12,
              valign: 'middle',
              halign: 'middle',
              maxLineCount: 3,
              isWordBreak: false,
              doClipPath: false,
              dontWrapNumbers: true
            }
          }
        };
      },

      __buildOptions_module_nesting: function __buildOptions_module_nesting(args) {
        var xMetric = helpers.getXMetricByGroupingLevel(args.config, 1);
        var xGroupField = xMetric.value;
        var xGroupDisplayField = xMetric.displayValue;
        var groups = [],
            groupId,
            groupName,
            group,
            d;
        args.externalData.forEach(function (d) {
          groupId = d[xGroupField];
          groupName = d[xGroupDisplayField] || d[xGroupField];
          group = null;
          groups.forEach(function (g) {
            if (g.id === groupId) {
              group = g;
            }
          });
          if (group == null) {
            group = {
              id: groupId,
              name: groupName,
              data: []
            };
            groups.push(group);
          }
          group.data.push(d);
        });
        args.externalData = [];
        groups.forEach(function (group) {
          group.data.forEach(function (d) {
            args.externalData.push(d);
          });
        });
        return {
          name: 'nesting',
          options: {
            barsInGroup: groups[0].data.length,
            groupId: function groupId(n) {
              return groups[n].id;
            },
            groupName: function groupName(n) {
              return groups[n].name;
            },
            minBottomMargin: 80,
            groupLabel: {
              height: 35,
              borderWhitespaceYOffset: 20,
              text: {
                width: 120,
                height: parseFloat(args.config.axisConfig.xAxis.font.size) * 3 + 1,
                fontSize: parseFloat(args.config.axisConfig.xAxis.font.size),
                fontFamily: args.config.axisConfig.xAxis.font.fontFamily,
                fontWeight: args.config.axisConfig.xAxis.font.fontWeight,
                nMaxLineCount: 3
              },
              colors: {
                border: args.config.axisConfig.xAxis.font.fontColor,
                text: args.config.axisConfig.xAxis.font.fontColor
              }
            }
          }
        };
      },

      __buildOptions_module_labels: function __buildOptions_module_labels(args) {
        var labelsData = helpers.buildData(args.labelsConfig.dataDefinition.series, args.externalData, args.metadata, args.config);
        var isHorizontal = helpers.isChartConfigHorizontal(args.config);
        var name = isHorizontal ? 'horizontal-labels' : 'top-labels';
        var axisConfig = isHorizontal ? args.labelsConfig.axisConfig.yAxis : args.labelsConfig.axisConfig.xAxis;
        return {
          name: name,
          options: {
            data: labelsData,
            isAvg: false,
            labels: {
              offsetY: 20,
              fontSize: parseFloat(axisConfig.font.size),
              fontFamily: axisConfig.font.fontFamily,
              fontWeight: axisConfig.font.fontWeight,
              fontColor: axisConfig.font.fontColor,
              minFontSize: 1,
              borderWidth: 1,
              rectPaddingX: 5,
              rectPaddingY: 2
            },
            header: {
              enabled: axisConfig.showAxisLabel,
              textField: helpers.NVD3DataEntryKeyName,
              height: 80,
              width: 100,
              fontSize: parseFloat(axisConfig.font.size),
              fontFamily: axisConfig.font.fontFamily,
              fontWeight: axisConfig.font.fontWeight,
              nMaxLineCount: 3
            },
            colors: {
              header: axisConfig.font.fontColor,
              labelBorder: '#CCCCCC',
              labelFont: 'black'
            },
            formatString: axisConfig.displayFormat
          }
        };
      },

      __buildOptions_module_table: function __buildOptions_module_table(args) {

        // // prepare lines for chart
        // var chartLines = []
        // for(var i = 0; i < args.config.dataDefinition.series.length; i++){
        //   var serie = args.config.dataDefinition.series[i]
        //   var metricName = serie.value
        //   if(metricName === args.config.dataDefinition.yaxis.value) {
        //     chartLines.push(i)
        //     break
        //   }
        // }
        // var tableLines = []
        // for(var j = 0; j < args.tableProperties.dataDefinition.length; j++){
        //   const tableRowDefinition = args.tableProperties.dataDefinition[j]
        //   for(var i = 0; i < args.config.dataDefinition.series.length; i++){
        //     var serie = args.config.dataDefinition.series[i]
        //     var metricName = serie.value
        //     if(metricName === tableRowDefinition.value) {
        //       tableLines.push(i)
        //       break
        //     }
        //   }
        // }

        //prepare lines for chart
        var chartLines = [];
        for (var i = 0; i < args.yMetrics.length; i++) {
          var serie = args.yMetrics[i];
          var metricName = serie.value;
          if (metricName === args.config.dataDefinition.yaxis.value) {
            chartLines.push(i);
          }
        }

        //prepare lines for table
        var tableFormatStrings = {};
        var tableLines = [];
        for (var i = 0; i < args.yMetrics.length; i++) {
          var serie = args.yMetrics[i];
          var metricName = serie.value;
          if (metricName !== args.config.dataDefinition.yaxis.value) {
            tableLines.push(i);
            var serieConfig = args.config.seriesConfigs[metricName];
            if (serieConfig != null) {
              tableFormatStrings[i] = serieConfig.dataLabel != null ? serieConfig.dataLabel.displayFormat : serieConfig.displayFormat;
            }
          }
        }
        return {
          name: 'table',
          options: {
            formatString: args.config.axisConfig.yAxis.displayFormat || '[green]0.0;[red]0.0;[black]0.0',
            metadata: {
              chart: {
                lines: chartLines
              },
              table: {
                lines: tableLines,
                formatStrings: tableFormatStrings,
                showHeadRow: args.tableProperties.showHeadRow
              }
            },

            rowLineHeight: 25,
            fontSize: 14,
            fontWeight: 'bold',
            fill: '#f5f5f5',
            stroke: '#bbbbbb',
            strokeWidth: 1,
            align: 'middle',
            valign: 'middle',
            // offsetY: 11,
            offsetY: -5,
            // offsetX: 100,
            maxNLines: 3,
            colors: {
              green: 'yellowgreen',
              red: 'brown'
            }
          }
        };
      },

      //config prepeparations
      isChartConfigHorizontal: function isChartConfigHorizontal(config) {
        var horizontalChartsNames = ['MULTIBAR_HORIZONTAL', 'STACKED_HORIZONTAL'];
        return horizontalChartsNames.includes(config.chartType);
      },

      adjustConfig_setBounds_calcValues: function adjustConfig_setBounds_calcValues(data, bound, config, noOfTick, clipFactor) {
        var newArr = [];

        if (config.chartType == "STACKED_VERTICAL" || config.chartType == "STACKED_HORIZONTAL") {
          var stacked = config.dataDefinition.xaxis[0].value;
          var keyValue = bound[0];
          data.forEach(function (obj) {
            if (!this[obj[stacked]]) {
              this[obj[stacked]] = { name: obj[stacked], value: +obj[keyValue] };
              newArr.push(this[obj[stacked]]);
            } else {
              this[obj[stacked]].value += +obj[keyValue];
            }
          }, {});

          var minValue = Math.min.apply(Math, newArr.map(function (el) {
            return el.value;
          }));
          var maxValue = Math.max.apply(Math, newArr.map(function (el) {
            return el.value;
          }));
        } else {
          for (var i = 0; i < bound.length; i++) {
            data.forEach(function (obj) {
              newArr.push(obj[bound[i]]);
            }, {});
          }

          var minValue = Math.min.apply(Math, newArr);
          var maxValue = Math.max.apply(Math, newArr);
        }

        // clipping
        if (clipFactor) {
          var clip = (maxValue - minValue) * clipFactor;
          minValue = minValue + clip;
        } else {
          if (minValue > 0) {
            minValue = 0;
          }
        }

        var diff = Math.abs(maxValue - minValue);
        var tickGap = diff / parseFloat(noOfTick);

        return {
          minValue: minValue,
          maxValue: maxValue,
          tickGap: tickGap
        };
      },

      adjustConfig_setBounds: function adjustConfig_setBounds(config, data) {
        var values;
        if (config.chartType == "MULTIBAR_HORIZONTAL" || config.chartType == "STACKED_HORIZONTAL") {
          if (data && config.axisConfig && config.axisConfig.xAxis) {
            var clipFactor;
            if (config.axisConfig.xAxis.bound) {
              clipFactor = config.axisConfig.xAxis.bound.clipFactor;
            }
            var xBound = [];
            if (config.dataDefinition.yaxis) {
              xBound.push(config.dataDefinition.yaxis.value);
            } else {
              xBound = config.dataDefinition.series.map(function (item) {
                return item.value;
              });
            }

            values = helpers.adjustConfig_setBounds_calcValues(data, xBound, config, config.axisConfig.xAxis.noOfTick, clipFactor);

            config.axisConfig.xAxis.bound = {
              minValue: values.minValue,
              maxValue: values.maxValue
            };
            config.axisConfig.xAxis.unit = {
              major: values.tickGap
            };
          }
        } else {
          if (data && config.axisConfig && config.axisConfig.yAxis) {
            var clipFactor;
            if (config.axisConfig.yAxis.bound) {
              clipFactor = config.axisConfig.yAxis.bound.clipFactor;
            }
            var yBound = [];
            if (config.dataDefinition.yaxis) {
              yBound.push(config.dataDefinition.yaxis.value);
            } else {
              yBound = config.dataDefinition.series.map(function (item) {
                return item.value;
              });
            }

            values = helpers.adjustConfig_setBounds_calcValues(data, yBound, config, config.axisConfig.yAxis.noOfTick, clipFactor);

            config.axisConfig.yAxis.bound = {
              minValue: values.minValue,
              maxValue: values.maxValue
            };
            config.axisConfig.yAxis.unit = {
              major: values.tickGap
            };
          }
        }
      },

      adjustConfig_swapAxisConfigs: function adjustConfig_swapAxisConfigs(config) {
        if (this.isChartConfigHorizontal(config)) {
          var yAxisConfig = config.axisConfig.yAxis || {};
          var xAxisConfig = config.axisConfig.xAxis || {};
          if (yAxisConfig.yBound) {
            yAxisConfig.xBound = yAxisConfig.yBound;
            delete yAxisConfig.yBound;
          }
          if (xAxisConfig.xBound) {
            xAxisConfig.yBound = xAxisConfig.xBound;
            delete xAxisConfig.xBound;
          }
          config.axisConfig.yAxis = config.axisConfig.xAxis;
          config.axisConfig.xAxis = yAxisConfig;
        }
      },

      adjustConfig: function adjustConfig(config, data) {
        Object.defaultsDeep(config, helpers.defaults.config);
        Object.defaultsDeep(config.axisConfig.xAxis.font, helpers.defaults.font);
        Object.defaultsDeep(config.axisConfig.yAxis.font, helpers.defaults.font);
        helpers.adjustConfig_swapAxisConfigs(config);
        helpers.adjustConfig_setBounds(config, data);
      },

      findConfig: function findConfig(type, configs) {
        var config;
        configs.forEach(function (c) {
          if (c.chartType == type) {
            config = c;
          }
        });
        return config;
      },

      getConfig: function getConfig(types, configs, data) {
        var i, config;
        for (i = 0; i < types.length; i++) {
          config = helpers.findConfig(types[i], configs);
          if (config != null) break;
        }
        if (config != null) {
          helpers.adjustConfig(config, data);
        }
        return config;
      },

      //properties preparations
      getProperties: function getProperties(properties) {
        Object.defaultsDeep(properties, helpers.defaults.properties);
        return properties;
      },

      //convert all pieces of data and configurations into nvd3-acceptable options and data
      convert: function convert(args) {
        var target = args.target;
        args = angular.copy(args);

        var config = helpers.getConfig(args.configTypes, args.configs, args.externalData);
        var properties = helpers.getProperties(args.properties);

        //OPTIONS
        var options = helpers.buildOptions(config, properties);

        //format module
        helpers._buildOptions_module('format', options);
        //wrapper module
        helpers._buildOptions_module('wrapper', options);
        //nesting module
        if (config.dataDefinition.xaxis.length > 1) {
          helpers._buildOptions_module('nesting', options, {
            config: config,
            externalData: args.externalData
          });
        }
        //labels module
        // if(properties.enableLabels) {
        var labelsConfig = helpers.getConfig(['LABELS'], args.configs);
        if (labelsConfig != null) {
          helpers._buildOptions_module('labels', options, {
            config: config,
            labelsConfig: labelsConfig,
            externalData: args.externalData,
            metadata: args.metadata
          });
        }
        // }

        //prepare yMetrics
        var yMetrics = [];
        if (properties.showTable && args.tableProperties != null) {
          yMetrics = args.tableProperties.dataDefinition.filter(function (serie) {
            var xMetric = helpers.getXMetricByGroupingLevel(config, 0);
            return serie.value != xMetric.value && serie.value != xMetric.displayValue;
          });
          yMetrics.push(config.dataDefinition.yaxis);
        } else {
          if (config.dataDefinition.series != null) {
            yMetrics = config.dataDefinition.series;
          } else {
            yMetrics = [config.dataDefinition.yaxis];
          }
        }

        //table module
        if (properties.showTable && args.tableProperties != null) {
          helpers._buildOptions_module('table', options, {
            config: config,
            tableProperties: args.tableProperties,
            yMetrics: yMetrics
          });
        }

        //DATA
        var data = helpers.buildData(yMetrics, args.externalData, args.metadata, config);

        //write results to target
        Object.assign(target, {
          options: options,
          data: data,
          config: config
        });
      }
    };

    return helpers;
  }
})();

(function () {
  'use strict';
  /**
    *
   * @module nlsn.chart.components.chartCore
   * @name nlsn-chart-core
   * @restrict E
   * @description
   * nlsn chart core
   *
   * * @usage
   <nlsn-chart-core chart-options=Different optional options   data=Data to display on charts  height= Height of the chart  xaxislabel= Label on X-axis  yaxislabel= Label on Y-axis>
   </nlsn-chart-core>
   @example
   <nlsn-chart-core  opt='options' data='data' height='chartHeight' xaxislabel='xaxislabel' yaxislabel='yaxislabel'>
   </nlsn-chart-core>
    <!-- opt-->
   Options of chart.
    <!-- data -->
   Data to display on charts.
    <!-- height-->
   Height of the chart.
    <!-- xaxislabel -->
   Label on X-axis.
    <!-- yaxislabel-->
   Label on Y-axis.
   **/

  angular.module('nlsn.chart.components.chartCore', []).component('nlsnChartCore', {
    controller: ["$timeout", nlsnChartCoreCtrl],
    controllerAs: 'nlsnChartCore',
    bindings: {
      opt: "<",
      data: "=",
      type: "@",
      height: "=",
      xaxislabel: "=",
      yaxislabel: "=",
      axisoptions: "<",
      chartOptions: "=",
      charttitle: "=",
      tooltip: "<",
      metadata: "<"

    },
    template: '<nvd3 options="nlsnChartCore.options"\n                       data="nlsnChartCore.data" \n                       config="nlsnChartCore.config" \n                       on-ready="nlsnChartCore.callback">\n                </nvd3>'
  });

  /** @ngInject */
  function nlsnChartCoreCtrl($timeout) {
    var vm = this;
    this.$onChanges = function (changesObj) {
      if (changesObj.hasOwnProperty("opt")) {
        updateOptions();
      }
    };
    /*Code for rotaion of x axis*/
    if (vm.axisoptions) {
      if (vm.axisoptions.bound) {
        vm.tickLength = countTicks(vm.axisoptions, vm.opt);
        calculateRotateAfterPoints(vm.tickLength, vm.opt, vm.axisoptions.rotateAfterPoints, vm.axisoptions.tickLabelRotationAngle);
      } else {
        calculateRotateAfterPoints(vm.data.length, vm.opt, vm.axisoptions.rotateAfterPoints, vm.axisoptions.tickLabelRotationAngle);
      }
    }

    updateOptions();

    vm.type = vm.type || "pieChart"; // set 'pieChart' as default

    vm.config = {
      visible: true, // default: true
      extended: false, // default: false
      disabled: false, // default: false
      refreshDataOnly: true, // default: true
      deepWatchOptions: true, // default: true
      deepWatchData: true, // default: true
      deepWatchDataDepth: 10, // default: 2
      debounce: 10 // default: 10
    };

    function updateOptions() {
      vm.options = {
        chart: {
          type: vm.type,
          height: vm.height,
          useInteractiveGuideline: false,
          showLabels: false,
          //showValues:false,
          valueFormat: function valueFormat(d) {
            return d3.format(',.4f')(d);
          },
          showXAxis: vm.chartOptions.showXaxis ? vm.chartOptions.showXaxis : true,
          showYAxis: vm.chartOptions.showYaxis ? vm.chartOptions.showYaxis : true,
          legend: {
            align: vm.chartOptions.legend && vm.chartOptions.legend.align ? vm.chartOptions.legend.align : "TOP",
            rightAlign: false,
            justified: vm.chartOptions.legend && vm.chartOptions.legend.justified ? vm.chartOptions.legend.justified : "",
            margin: vm.chartOptions.legend && vm.chartOptions.legend.margin ? vm.chartOptions.legend.margin : {}
          },
          clipEdge: false,
          transitionDuration: 0,
          color: ['#A6CEE3', '#1F78B4', '#B2DF8A', '#33A02C', '#FB9A99', '#E31A1C', '#FDBF6F', '#FF7F00', '#CAB2D6', '#6A3D9A', '#FFFF99', '#B15928']
        }
      };
      if (vm.tooltip && vm.tooltip.length > 0) {
        vm.options.chart.tooltip = {
          contentGenerator: function contentGenerator(e) {
            var series = e.series[0];
            var data = e.data;

            var titleHtml;
            var valueHtml;
            var rows = "";
            var header = "";
            var metadata = vm.metadata;
            var title = "";
            var tooltip;
            for (var kk = 0; kk < vm.tooltip.length; kk++) {
              var tooltip = vm.tooltip[kk];
              if (metadata[tooltip.column] && metadata[tooltip.column].title) {
                title = metadata[tooltip.column].title;
              } else title = tooltip.column;

              var displayFormat = tooltip.displayFormat;
              if (displayFormat && displayFormat.length == 0) {
                displayFormat = ",.2f";
              }

              var value = data[tooltip.column];
              if (angular.isNumber(value)) {
                value = d3.format(displayFormat)(value);
                /* For display format as per current implementation*/
              }

              if (tooltip.showTitle) {
                titleHtml = "<td class='key tableDivision'>" + title + "</td>";
              }
              if (tooltip.showValue) {
                valueHtml = "<td class='key tableDivision'>" + value + "</td>";
              }
              rows += "<tr class='key table'>" + titleHtml + valueHtml + "</tr>";
            }

            header += "<thead class='key table '>" + "<tr>" + "<td class='key tableDivision'><strong>" + series.key + "</strong></td>" + "<td class='legend-color-guide tableDivision'><div style='background-color: " + series.color + ";'></div></td>" + "</tr>" + "</thead>";

            var html = "<table class='tableTooltip'>" + header + "<tbody>" + rows + "</tbody>" + "</table>";

            // html = "<table class='tableTooltip'><thead class='key table '><tr><td class='key tableDivision'><strong>Total Co-ops/GB</strong></td><td class='legend-color-guide tableDivision'><div style='background-color: rgb(0, 102, 153);'></div></td></tr></thead><tbody><tr class='key table'><td class='key tableDivision'   style='text-align:'LEFT;color:string;font-family:san-serif;font-size:0>Total Co-ops/GB</td><td class='key tableDivision' ng-hide='true' style='text-align:'LEFT;color:string;font-family:san-serif;font-size:0>7.7</td></tr></tbody></table>"
            return html;
          }
        };
      }
      /* custom legend icon*/
      vm.legendShapeMapper = {
        'circle': '\uF111',
        "square": '\uF0C8',
        'line': '\uF068',
        'diamond': '\uF219',
        "rectangle": '\uF0C8'
      };
      if (vm.chartOptions.legend && vm.chartOptions.legend.shape) {
        vm.legendShape = vm.chartOptions.legend && vm.chartOptions.legend.shape;
        vm.legendShape = vm.legendShape.toLocaleLowerCase();
        if (vm.legendShapeMapper[vm.legendShape]) {
          vm.options.chart.legend.legendIcon = vm.legendShapeMapper[vm.legendShape];
        } else {
          vm.options.chart.legend.legendIcon = null;
        }
      }
      /*custom legend icon*/

      if (vm.chartOptions) {
        if (vm.chartOptions.margin) {
          vm.options.chart.margin = vm.chartOptions.margin;
        }
        if (vm.chartOptions.showControls == true || vm.chartOptions.showControls == false) {
          vm.options.chart.showControls = vm.chartOptions.showControls;
        }
        if (vm.chartOptions.showLegend == true || vm.chartOptions.showLegend == false) {
          vm.options.chart.showLegend = vm.chartOptions.showLegend;
        }
        if (vm.chartOptions.showValues == true || vm.chartOptions.showValues == false) {
          vm.options.chart.showValues = vm.chartOptions.showValues;
        }

        if (vm.chartOptions.showTitle) {
          vm.options.title = {
            enable: true,
            text: vm.charttitle
          };
        }
        if (vm.chartOptions.gapWidth) {
          vm.options.chart.groupSpacing = vm.chartOptions.gapWidth / 100;
        }
        if (vm.chartOptions.colorPalette) {
          vm.options.chart.barColor = function (d, i) {
            return vm.chartOptions.colorPalette[i];
          };
        }
        //ToDo : Custom Legend
        vm.opt.chart.legend = vm.chartOptions.legend;
        if (vm.opt.chart.legend) {
          if (vm.opt.chart.legend.align == 'BOTTOM' || vm.opt.chart.legend.align == 'LEFT' || vm.opt.chart.legend.align == 'RIGHT') {
            vm.options.chart.legend.rightAlign = false;
          } else {
            // Top Position
            vm.options.chart.legend.rightAlign = true;
          }

          if (vm.chartOptions.legend.margin) {
            vm.options.chart.legend.margin = vm.chartOptions.legend.margin;
          }
        }
      }
      vm.callback = function (scope) {
        vm.api = scope.api;
        vm.chart = scope.chart;
        vm.svg = scope.svg;

        var _chartElem = scope.svg;

        var legendPositionCb = function (_svg) {
          return function () {
            $timeout(function () {
              var legends = d3.select($(_svg[0]).find("g.nv-legendWrap, .legendWrap")[0]);
              legends.attr('transform', function () {
                if (d3.select(_svg).length > 0 && d3.select(_svg).node()[0][0]) {
                  var containerWidth = d3.select(_svg).node()[0][0].getBBox().width;
                  var width = this.getBBox().width;
                  var center = containerWidth / 2 - width / 2;

                  return "translate(" + center + ", " + d3.transform(d3.select(this).attr("transform")).translate[1] + ")";
                } else {
                  return "translate(0,0)";
                }
              });
            }, 50);
          };
        }(_chartElem);

        // Added timer to avoid first time load issue.
        $timeout(function () {
          window.dispatchEvent(new Event('resize'));
        }, 1000);

        if (vm.opt.chart.legend.justified == "CENTER") {
          window.addEventListener('resize', legendPositionCb);

          scope.$on('$destroy', function () {
            window.removeEventListener('resize', legendPositionCb);
          });

          var legendControlClickHandler = function legendControlClickHandler(event) {
            $timeout(function () {
              window.dispatchEvent(new Event('resize'));
            }, 50);
          };
          $(_chartElem[0]).find("g.nv-legendWrap, .legendWrap").off("click", legendControlClickHandler).on("click", legendControlClickHandler);
        }
      };

      if (vm.opt) {

        angular.merge(vm.options, vm.opt);
      }
    }

    function countTicks(xAxis, axisoptions) {
      var arr = [];
      vm.xmax = xAxis.bound.maxValue;
      vm.xmin = xAxis.bound.minValue;

      var i = 0;
      do {
        arr.push(i);
        i = i + xAxis.unit.major;
      } while (i < vm.xmax);
      i = 0;
      do {
        arr.push(i);
        i = i - xAxis.unit.major;
      } while (i > vm.xmin);
      // vm.ticklength = arr.length;
      axisoptions.chart.xAxis.tickValues = arr;
      return arr.length;
    }

    function calculateRotateAfterPoints(ticklength, axisoptions, rotateAfterPoints, tickLabelRotationAngle) {
      /*  if (rotateAfterPoints) {
       if (rotateAfterPoints < ticklength) {
       axisoptions.chart.xAxis.rotateLabels = 45;
       }
       }
       else {
       if (tickLabelRotationAngle) {
       axisoptions.chart.xAxis.rotateLabels = tickLabelRotationAngle;
       }
       else {
       axisoptions.chart.xAxis.rotateLabels = 0;
       }
       }*/

      if (rotateAfterPoints) {
        if (rotateAfterPoints < ticklength && tickLabelRotationAngle) {
          axisoptions.chart.xAxis.rotateLabels = tickLabelRotationAngle;
        }
      }
    }

    window.dispatchEvent(new Event('resize'));
  }
})();

(function () {
  'use strict';

  angular.module('nlsn.chart.components.dpMultiBarChart', []).component('nlsnDpMultiBarChart', {
    controller: ['chartHelpers', NlsnDpMultiBarChartCtrl],
    controllerAs: 'NlsnDpMultiBarChart',
    bindings: {
      externalData: "=data",
      properties: "=",
      configs: "=",
      metadata: "=",
      height: "=",
      xaxislabel: "=",
      yaxislabel: "=",
      charttitle: "="
    },
    template: '<nlsn-chart-core type="multiBarChartExt" \n                                  data="NlsnDpMultiBarChart.data" \n                                  opt="NlsnDpMultiBarChart.options" \n                                  chart-options="NlsnDpMultiBarChart.properties" \n                                  metadata="NlsnDpMultiBarChart.metadata" \n                                  charttitle="NlsnDpMultiBarChart.charttitle" \n                                  height="NlsnDpMultiBarChart.height" \n                                  axisoptions="NlsnDpMultiBarChart.config.axisConfig.xAxis" \n                                  tooltip="NlsnDpMultiBarChart.config.tooltip" \n                                  xaxislabel="NlsnDpMultiBarChart.xaxislabel" \n                                  yaxislabel="NlsnDpMultiBarChart.yaxislabel" \n                                  ng-class="{ \'hide-x-label\': !NlsnDpMultiBarChart.config.axisConfig.xAxis.showAxisLabel, \'hide-x-line\': !NlsnDpMultiBarChart.config.axisConfig.xAxis.showAxisLine, \'hide-y-label\': !NlsnDpMultiBarChart.config.axisConfig.yAxis.showAxisLabel, \'hide-y-line\': !NlsnDpMultiBarChart.config.axisConfig.yAxis.showAxisLine }">\n               </nlsn-chart-core>'
  });

  /** @ngInject */
  function NlsnDpMultiBarChartCtrl(chartHelpers) {
    var vm = this;

    chartHelpers.convert({
      target: vm,
      configTypes: ['MULTIBAR_VERTICAL', 'STACKED_VERTICAL'],
      configs: vm.configs,
      properties: vm.properties,
      externalData: vm.externalData,
      metadata: vm.metadata
    });

    //chart options adjustment
    Object.mergeDeep(vm.options.chart, {
      stacked: vm.config.chartType === 'STACKED_VERTICAL',
      xAxis: {
        axisLabelDistance: -10,
        tickPadding: 3
      }
    });
  }
})();

(function () {
  'use strict';

  angular.module('nlsn.chart.components.dpMultiBarHorizontalChart', []).component('nlsnDpMultiBarHorizontalChart', {
    controller: ['chartHelpers', NlsnDpMultiBarHorizontalChartCtrl],
    controllerAs: 'NlsnDpMultiBarHorizontalChart',
    bindings: {
      externalData: "=data",
      properties: "=",
      configs: "=",
      metadata: "=",
      height: "=",
      xaxislabel: "=",
      yaxislabel: "=",
      charttitle: "="
    },
    template: '<nlsn-chart-core type="multiBarHorizontalChartExt" \n                                  data="NlsnDpMultiBarHorizontalChart.data" \n                                  opt="NlsnDpMultiBarHorizontalChart.options" \n                                  chart-options="NlsnDpMultiBarHorizontalChart.properties" \n                                  metadata="NlsnDpMultiBarHorizontalChart.metadata" \n                                  charttitle="NlsnDpMultiBarHorizontalChart.charttitle" \n                                  height="NlsnDpMultiBarHorizontalChart.height" \n                                  axisoptions="NlsnDpMultiBarHorizontalChart.config.axisConfig.xAxis" \n                                  tooltip="NlsnDpMultiBarHorizontalChart.config.tooltip" \n                                  xaxislabel="NlsnDpMultiBarHorizontalChart.xaxislabel" \n                                  yaxislabel="NlsnDpMultiBarHorizontalChart.yaxislabel" \n                                  ng-class="{\'hide-x-label\': !NlsnDpMultiBarHorizontalChart.config.axisConfig.xAxis.showAxisLabel,   \'hide-x-line\': !NlsnDpMultiBarHorizontalChart.config.axisConfig.xAxis.showAxisLine,   \'hide-y-label\': !NlsnDpMultiBarHorizontalChart.config.axisConfig.yAxis.showAxisLabel,   \'hide-y-line\': !NlsnDpMultiBarHorizontalChart.config.axisConfig.yAxis.showAxisLine }" >\n                </nlsn-chart-core>'
  });

  /** @ngInject */
  function NlsnDpMultiBarHorizontalChartCtrl(chartHelpers) {
    var vm = this;

    chartHelpers.convert({
      target: vm,
      configTypes: ['MULTIBAR_HORIZONTAL', 'STACKED_HORIZONTAL'],
      configs: vm.configs,
      properties: vm.properties,
      externalData: vm.externalData,
      metadata: vm.metadata
    });

    //chart options adjustment
    Object.mergeDeep(vm.options.chart, {
      stacked: vm.config.chartType === 'STACKED_HORIZONTAL'
    });

    //nesting module adjustment
    if (vm.options.chart.modulesObj.nesting != null) {
      Object.mergeDeep(vm.options.chart.modulesObj.nesting, {
        options: {
          groupLabel: {
            borderWhitespaceYOffset: 60,
            height: 80,
            text: {
              width: 60
            }
          }
        }
      });
      vm.options.chart.xAxis.axisLabelDistance = -40;
    }

    //labels module adjustment
    if (vm.options.chart.modulesObj.labels != null) {
      Object.mergeDeep(vm.options.chart.modulesObj.labels, {
        options: {
          header: {
            height: 40,
            fontSize: 12
          }
        }
      });
    }
  }
})();

(function () {
  'use strict';

  angular.module('nlsn.chart.components.dpMultiChart', []).component('nlsnDpMultiChart', {
    controller: NlsnDpMultiChartCtrl,
    controllerAs: 'NlsnDpMultiChart',
    bindings: {
      externalData: "=data",
      properties: "=",
      configs: "=",
      metadata: "=",
      tableProperties: "=",
      height: "=",
      xaxislabel: "=",
      yaxislabel: "=",
      charttitle: "="
    },
    template: '<nlsn-chart-core type="multiChartExt" \n                                  data="NlsnDpMultiChart.data" \n                                  opt="NlsnDpMultiChart.options" \n                                  chart-options="NlsnDpMultiChart.properties" \n                                  metadata="NlsnDpMultiChart.metadata" \n                                  charttitle="NlsnDpMultiChart.charttitle" \n                                  height="NlsnDpMultiChart.height" \n                                  axisoptions="NlsnDpMultiChart.config.axisConfig.xAxis" \n                                  tooltip="NlsnDpMultiChart.config.tooltip" \n                                  xaxislabel="NlsnDpMultiChart.xaxislabel" \n                                  yaxislabel="NlsnDpMultiChart.yaxislabel" \n                                  ng-class="{ \'hide-x-label\': !NlsnDpMultiChart.config.axisConfig.xAxis.showAxisLabel, \'hide-x-line\': !NlsnDpMultiChart.config.axisConfig.xAxis.showAxisLine, \'hide-y-label\': !NlsnDpMultiChart.config.axisConfig.yAxis.showAxisLabel, \'hide-y-line\': !NlsnDpMultiChart.config.axisConfig.yAxis.showAxisLine }">\n                 </nlsn-chart-core>'
  });

  /** @ngInject */
  function NlsnDpMultiChartCtrl() {
    var vm = this;

    // vm.configs.forEach((config) => {
    //   Object.defaultsDeep(config, chartHelpers.defaults.config)
    //   switch(config.chartType) {
    //     case 'MULTIBAR_VERTICAL':
    //       break
    //     case 'STACKED_VERTICAL':
    //       break
    //   }
    // })
    // //config
    // vm.config = chartHelpers.findConfig('MULTIBAR_VERTICAL', vm.configs) || chartHelpers.findConfig('STACKED_VERTICAL', vm.configs)
    // Object.defaultsDeep(vm.config, chartHelpers.defaults.config)

    // //properties
    // Object.defaultsDeep(vm.properties, chartHelpers.defaults.properties)
    // // vm.properties.colorPalette = vm.properties.colorPalette || vm.config.colorPalette

    // //data
    // var externalData = angular.copy(vm.externalData)

    // //options
    // vm.options = chartHelpers.buildOptions(vm.config, vm.properties)
    // angular.merge(vm.options.chart, {
    //   stacked: vm.config.chartType === 'STACKED_VERTICAL',
    //   xAxis: {
    //     axisLabelDistance: -10,
    //     tickPadding: 3
    //   }
    // })

    // //-- nesting module
    // if(vm.config.dataDefinition.xaxis.length > 1) {
    //   var xGroupField = chartHelpers.getXMetricByGroupingLevel(vm.config, 1).value
    //   var groups = [], groupName, group, d
    //   externalData.forEach(function (d) {
    //     groupName = d[xGroupField]
    //     group = null
    //     groups.forEach(function (g) {
    //       if(g.name === groupName) {
    //         group = g
    //       }
    //     })
    //     if(group == null) {
    //       group = {
    //         name: groupName,
    //         data: []
    //       }
    //       groups.push(group)
    //     }
    //     group.data.push(d)
    //   })
    //   externalData = []
    //   groups.forEach(function (group) {
    //     group.data.forEach(function (d) {
    //       externalData.push(d)
    //     })
    //   })
    //   var nestingModule = {
    //     name: 'nesting',
    //     options: {
    //       barsInGroup: groups[0].data.length,
    //       groupName: function (n) {
    //         return groups[n].name
    //       },
    //       minBottomMargin: 80,
    //       groupLabel: {
    //         height: 55,
    //         borderWhitespaceYOffset: 20,
    //         text: {
    //           width: 120,
    //           height: 50,
    //           fontSize: parseFloat(vm.config.axisConfig.xAxis.font.fontSize),
    //           nMaxLineCount: 2
    //         },
    //         colors: {
    //           border: '#CCCCCC',
    //           text: '#999999'
    //         }
    //       },
    //     }
    //   }

    //   vm.options.chart.modules.push(nestingModule)
    // }

    // //-- labels module
    // if(vm.properties.enableLabels) {
    //   var labelsConfig = chartHelpers.findConfig('LABELS', vm.configs)
    //   Object.defaultsDeep(labelsConfig, chartHelpers.defaults.config)
    //   if (labelsConfig != null) {

    //     var labelsData = chartHelpers.buildData(labelsConfig.dataDefinition.series, vm.externalData, vm.metadata, vm.config);

    //     vm.options.chart.modules.push({
    //       name: 'top-labels',
    //       options: {
    //         data: labelsData,
    //         isAvg: false,
    //         labels: {
    //           offsetY: 20,
    //           fontSize: parseFloat(labelsConfig.axisConfig.xAxis.font.fontSize),
    //           minFontSize: 1,
    //           borderWidth: 1,
    //           rectPaddingX: 5,
    //           rectPaddingY: 2,
    //         },
    //         header: {
    //           enabled: labelsConfig.axisConfig.xAxis.showTitle,
    //           // text: function(serie) {
    //           //   return serie
    //           // },
    //           // text: 'Point Change',
    //           textField: 'key',
    //           height: 80,
    //           width: 100,
    //           fontSize: 15,
    //           nMaxLineCount: 3
    //         },
    //         colors: {
    //           header: '#999999',
    //           labelBorder: '#CCCCCC',
    //           labelFont: 'black'
    //         },
    //         formatString: labelsConfig.axisConfig.xAxis.displayFormat
    //       }
    //     });
    //   }
    // }

    // //data
    // vm.data = chartHelpers.buildData(vm.config.dataDefinition.series, externalData, vm.metadata, vm.config)
  }
})();

(function () {
  'use strict';

  angular.module('nlsn.chart.components.dpWaterfallChart', []).component('nlsnDpWaterfallChart', {
    controller: ["chartHelpers", NlsnDpWaterfallChartCtrl],
    bindings: {
      externalData: "=data",
      properties: "=",
      configs: "=",
      metadata: "=",
      tableProperties: "=",
      height: "=",
      xaxislabel: "=",
      yaxislabel: "=",
      charttitle: "="
    },
    controllerAs: 'NlsnDpWaterfallChart',
    template: '<nlsn-chart-core type="waterfall"\n                                  data="NlsnDpWaterfallChart.data"\n                                  opt="NlsnDpWaterfallChart.options"\n                                  chart-options="NlsnDpWaterfallChart.properties"\n                                  metadata="NlsnDpWaterfallChart.metadata"\n                                  charttitle="NlsnDpWaterfallChart.charttitle"\n                                  height="NlsnDpWaterfallChart.height"\n                                  axisoptions="NlsnDpWaterfallChart.config.axisConfig.xAxis"\n                                  tooltip="NlsnDpWaterfallChart.config.tooltip"\n                                  xaxislabel="NlsnDpWaterfallChart.xaxislabel"\n                                  yaxislabel="NlsnDpWaterfallChart.yaxislabel"\n                                  ng-class="{   \'hide-x-label\': !NlsnDpWaterfallChart.config.axisConfig.xAxis.showAxisLabel,   \'hide-x-line\': !NlsnDpWaterfallChart.config.axisConfig.xAxis.showAxisLine,   \'hide-y-label\': !NlsnDpWaterfallChart.config.axisConfig.yAxis.showAxisLabel,   \'hide-y-line\': !NlsnDpWaterfallChart.config.axisConfig.yAxis.showAxisLine }" >\n                 </nlsn-chart-core>'
  });

  /** @ngInject */
  function NlsnDpWaterfallChartCtrl(chartHelpers) {
    var vm = this;

    chartHelpers.convert({
      target: vm,
      configTypes: ['WATERFALL'],
      configs: vm.configs,
      properties: vm.properties,
      externalData: vm.externalData,
      metadata: vm.metadata,
      tableProperties: vm.tableProperties
    });

    //options adjustment
    if (vm.options.chart.height == null) {
      Object.mergeDeep(vm.options.chart, {
        height: 300
      });
    }
  }
})();

(function () {
  'use strict';
  /**
    *
   * @module nlsn.chart.components.lineChart
   * @name nlsn-line-chart
   * @restrict E
   * @description
   * nlsn line chart
   *
   * * @usage
   <nlsn-line-chart chart-options=Different optional options   data=Data to display on charts  height= Height of the chart  xaxislabel= Label on X-axis  yaxislabel= Label on Y-axis>
   </nlsn-line-chart>
   @example
   <nlsn-line-chart  chart-options='options' data='data' height='chartHeight' xaxislabel='xaxislabel' yaxislabel='yaxislabel'>
   </nlsn-line-chart>
    <!-- chart-options-->
   Additional options for chart.
    <!-- data -->
   Data to display on charts.
    <!-- height-->
   Height of the chart.
    <!-- xaxislabel -->
   Label on X-axis.
    <!-- yaxislabel-->
   Label on Y-axis.
   **/

  angular.module('nlsn.chart.components.lineChart', ['nlsn.chart.components.util.colors']).component('nlsnLineChart', {
    controller: ["$scope", "$nlsnColors", "chartHelpers", nlsnLineChartCtrl],
    controllerAs: 'nlsnLineChart',
    bindings: {
      chartOptions: "<",
      chartSubtype: "=",
      data: "=",
      height: "=",
      xaxislabel: "=",
      yaxislabel: "=",
      parameterData: "=",
      chartconfigs: "=",
      charttype: "=",
      charttitle: "=",
      metadata: "<"
    },
    template: '<nlsn-chart-core axisoptions="nlsnLineChart.xAxis" \n                                  tooltip="nlsnLineChart.tooltip" \n                                  metadata="nlsnLineChart.metadata" \n                                  chartoptions="nlsnLineChart.xAxis"\n                                  chart-options="nlsnLineChart.chartOptions" \n                                  charttitle="nlsnLineChart.charttitle" \n                                  opt="nlsnLineChart.options" \n                                  data="nlsnLineChart.data" \n                                  type="{{nlsnLineChart.chartType}}" \n                                  height="nlsnLineChart.height" \n                                  xaxislabel="nlsnLineChart.xaxislabel" \n                                  yaxislabel="nlsnLineChart.yaxislabel"> \n                  </nlsn-chart-core>'

  });

  /** @ngInject */
  function nlsnLineChartCtrl($scope, $nlsnColors, chartHelpers) {
    var vm = this;
    this.$onChanges = function (changesObj) {
      if (changesObj.hasOwnProperty("chartOptions")) {
        vm.updateOptions();
      }
    };

    $scope.$on(function () {
      return vm.chartOptions;
    }, function () {
      vm.updateOptions();
    });

    if ('SIMPLE' == vm.charttype) {
      vm.exHeight = 0;
      if (vm.chartconfigs && !vm.chartconfigs[0].dataDefinition.yaxis) {
        // no yaxis present use series as y
        var existingData = angular.copy(vm.data);
        var newData = [];
        angular.forEach(vm.chartconfigs[0].dataDefinition.series, function (seriesItem) {
          var currSeriesItem = seriesItem.value;
          var displayName = currSeriesItem;
          if (vm.metadata && vm.metadata[currSeriesItem]) {
            displayName = vm.metadata[currSeriesItem].title;
          }
          var filterData = angular.copy(existingData);
          angular.forEach(filterData, function (rec) {
            rec.seriesDisplay = currSeriesItem;
          });
          newData.push({
            "key": displayName,
            "values": filterData,
            "color": vm.chartconfigs[0].seriesConfigs && vm.chartconfigs[0].seriesConfigs[currSeriesItem] && vm.chartconfigs[0].seriesConfigs[currSeriesItem].color ? vm.chartconfigs[0].seriesConfigs[currSeriesItem].color : vm.chartconfigs[0].colorPalette ? vm.chartconfigs[0].colorPalette[newData.length] : $nlsnColors.stdcolors[newData.length % 10]
          });
        });
        vm.data = newData;
      } else if (vm.chartconfigs && vm.chartconfigs[0].dataDefinition.series) {
        //manipulate data
        var existingData = angular.copy(vm.data);
        var newData = [];
        var uniqueNames = [];
        for (var i = 0; i < existingData.length; i++) {
          var currentSeriesName = existingData[i][vm.chartconfigs[0].dataDefinition.series[0].value];
          if (uniqueNames.indexOf(currentSeriesName) === -1) {
            var recs = existingData.filter(function (rec) {
              return rec[vm.chartconfigs[0].dataDefinition.series[0].value] == currentSeriesName;
            });
            if (existingData[i].is_parent == "true") {
              angular.forEach(recs, function (val, key) {
                val.shape = "diamond";
              });
            }
            newData.push({
              "key": currentSeriesName,
              "values": recs,
              "color": vm.chartconfigs[0].seriesConfigs && vm.chartconfigs[0].seriesConfigs[currentSeriesName] && vm.chartconfigs[0].seriesConfigs[currentSeriesName].color ? vm.chartconfigs[0].seriesConfigs[currentSeriesName].color : vm.chartconfigs[0].colorPalette ? vm.chartconfigs[0].colorPalette[newData.length] : $nlsnColors.stdcolors[newData.length % 10],
              "classed": existingData[i].is_parent == "true" ? "dashed" : ""
            });
            uniqueNames.push(currentSeriesName);
          }
        }
        vm.data = newData;
      }
      vm.data = chartHelpers.xMetricSort(vm.data);
      vm.data = chartHelpers.seriesSort(vm.data);

      angular.forEach(vm.data, function (value, key) {
        value.area = vm.chartSubtype == 'AREA';
      });
      if (!vm.parameterData) {
        vm.exHeight = 25;
      }

      vm.updateOptions = function () {
        vm.options = {
          chart: {
            x: function x(d, i) {
              if (vm.chartconfigs && vm.chartconfigs[0].dataDefinition.xaxis[0].value) return Number(d[vm.chartconfigs[0].dataDefinition.xaxis[0].value]);
              if (d.id) {
                return Number(d.id);
              } else return i;
            },
            pointSize: function pointSize(d) {
              if (d.is_parent == "true") {
                return 50;
              }
              return 30;
            },
            y: function y(d) {
              if (vm.chartconfigs && vm.chartconfigs[0].dataDefinition) {
                var def = vm.chartconfigs[0].dataDefinition;
                if (def.yaxis) {
                  return Number(d[vm.chartconfigs[0].dataDefinition.yaxis.value]);
                } else {
                  var yCol = d['seriesDisplay'];
                  return Number(d[yCol]);
                }
              }
              return Number(d.value);
            }
          }
        };
        if (vm.chartOptions) {
          var chartoptions = {
            chart: {
              xAxis: {
                tickFormat: function tickFormat(d, i, series) {
                  if (vm.chartconfigs[0].dataDefinition) {
                    if (vm.data[0].values[d]) {
                      if (vm.chartconfigs[0].dataDefinition.xaxis[0].displayValue) {
                        return vm.data[0].values[d][vm.chartconfigs[0].dataDefinition.xaxis[0].displayValue];
                      } else return vm.data[0].values[d][vm.chartconfigs[0].dataDefinition.xaxis[0].value];
                    } else return d;
                  }
                  var label = vm.data[0].values[d].id;
                  return label;
                }
              },
              yAxis: {}
            }
          };

          /* Tooltip */
          if (vm.chartconfigs[0].tooltip) {
            vm.tooltip = vm.chartconfigs[0].tooltip;
          }

          if (vm.chartconfigs[0].axisConfig && vm.chartconfigs[0].axisConfig.xAxis) {
            vm.xAxis = vm.chartconfigs[0].axisConfig.xAxis;
            if (vm.chartconfigs[0].axisConfig.xAxis.axisLabel) {
              if (vm.chartconfigs[0].axisConfig.xAxis.showAxisLabel) {
                chartoptions.chart.xAxis = {
                  axisLabel: vm.chartconfigs[0].axisConfig.xAxis.axisLabel
                };
              }
              if (vm.chartconfigs[0].axisConfig.xAxis.bound) {
                vm.xmin = vm.chartconfigs[0].axisConfig.xAxis.bound.minValue;
                vm.xmax = vm.chartconfigs[0].axisConfig.xAxis.bound.maxValue;
                chartoptions.chart.xDomain = [vm.xmin, vm.xmax];
              }
              if (vm.chartconfigs[0].axisConfig.xAxis.unit) {
                if (vm.chartconfigs[0].axisConfig.xAxis.unit.major) {
                  chartoptions.chart.xAxis.tickValues = function () {
                    var arr = [];
                    var i = 0;
                    do {
                      arr.push(i);
                      i = i + vm.chartconfigs[0].axisConfig.xAxis.unit.major;
                    } while (i < vm.xmax);
                    i = 0;
                    do {
                      arr.push(i);
                      i = i - vm.chartconfigs[0].axisConfig.xAxis.unit.major;
                    } while (i > vm.xmin);
                    return arr;
                  };
                }
              }
            }
          }

          if (vm.chartconfigs[0].axisConfig && vm.chartconfigs[0].axisConfig.yAxis) {
            if (vm.chartconfigs[0].axisConfig.yAxis.axisLabel) {
              if (vm.chartconfigs[0].axisConfig.yAxis.showAxisLabel) {
                chartoptions.chart.yAxis = {
                  axisLabel: vm.chartconfigs[0].axisConfig.yAxis.axisLabel
                };
              }
              if (vm.chartconfigs[0].axisConfig.yAxis.bound) {
                vm.ymin = vm.chartconfigs[0].axisConfig.yAxis.bound.minValue;
                vm.ymax = vm.chartconfigs[0].axisConfig.yAxis.bound.maxValue;
                chartoptions.chart.yDomain = [vm.ymin, vm.ymax];
              }
              if (vm.chartconfigs[0].axisConfig.yAxis.displayFormat) {
                if (vm.chartconfigs[0].axisConfig.yAxis.displayFormat == "%") {
                  chartoptions.chart.yAxis.tickFormat = function (d) {
                    return d3.format('.02f')(d) + "%";
                  };
                } else {

                  var displayFormat = vm.chartconfigs[0].axisConfig.yAxis.displayFormat.replace(/"/gi, '');
                  chartoptions.chart.yAxis.tickFormat = function (d) {
                    return d.numberFormat(displayFormat);
                  };
                }
              }
              if (vm.chartconfigs[0].axisConfig.yAxis.unit) {
                if (vm.chartconfigs[0].axisConfig.yAxis.unit.major) {
                  chartoptions.chart.yAxis.tickValues = function () {
                    var arr = [];
                    var i = 0;
                    do {
                      arr.push(i);
                      i = i + vm.chartconfigs[0].axisConfig.yAxis.unit.major;
                    } while (i < vm.ymax);
                    i = 0;
                    do {
                      arr.push(i);
                      i = i - vm.chartconfigs[0].axisConfig.yAxis.unit.major;
                    } while (i > vm.ymin);
                    return arr;
                  };
                }
              }
            }
          }

          angular.merge(vm.options, chartoptions);
          window.dispatchEvent(new Event('resize'));
        }
      };

      vm.updateOptions();
      vm.chartType = "lineChart";
    } else {
      // for folks who are using old
      angular.forEach(vm.data, function (value, key) {
        value.area = vm.chartSubtype == 'AREA' || vm.chartSubtype == 'DASHBOARD-AREA';
      });
      vm.exHeight = 0;
      if (!vm.parameterData) {
        vm.exHeight = 25;
      }

      vm.updateOptions = function () {
        vm.options = {
          chart: {
            x: function x(d, i) {
              if (d.id) {
                return Number(d.id);
              } else return i;
            },
            y: function y(d) {
              return Number(d.value);
            }
          }
        };
        if (vm.chartOptions && vm.chartSubtype == 'AREA') {
          var chartoptions = {
            chart: {
              xAxis: {},
              yAxis: {}
            }
          };

          if (vm.chartOptions.xAxis) {
            if (vm.chartOptions.xAxis.length == 1) {
              if (vm.chartOptions.xAxis[0].axisLabel) {
                if (vm.chartOptions.xAxis[0].showAxisLabel) {
                  chartoptions.chart.xAxis = {
                    axisLabel: vm.chartOptions.xAxis[0].axisLabel
                  };
                }
              }
              if (vm.chartOptions.xAxis[0].bound) {
                vm.xmin = vm.chartOptions.xAxis[0].bound.minValue;
                vm.xmax = vm.chartOptions.xAxis[0].bound.maxValue;
                chartoptions.chart.xDomain = [vm.xmin, vm.xmax];
              }
              if (vm.chartOptions.xAxis[0].unit) {
                if (vm.chartOptions.xAxis[0].unit.major) {
                  chartoptions.chart.xAxis.tickValues = function () {
                    var arr = [];
                    var i = 0;
                    do {
                      arr.push(i);
                      i = i + vm.chartOptions.xAxis[0].unit.major;
                    } while (i < vm.xmax);
                    i = 0;
                    do {
                      arr.push(i);
                      i = i - vm.chartOptions.xAxis[0].unit.major;
                    } while (i > vm.xmin);
                    return arr;
                  };
                }
              }
            }
          }

          if (vm.chartOptions.yAxis) {
            if (vm.chartOptions.yAxis.length == 1) {
              if (vm.chartOptions.yAxis[0].axisLabel) {
                if (vm.chartOptions.yAxis[0].showAxisLabel) {
                  chartoptions.chart.yAxis = {
                    axisLabel: vm.chartOptions.yAxis[0].axisLabel
                  };
                }
              }
              if (vm.chartOptions.yAxis[0].bound) {
                vm.ymin = vm.chartOptions.yAxis[0].bound.minValue;
                vm.ymax = vm.chartOptions.yAxis[0].bound.maxValue;
                chartoptions.chart.yDomain = [vm.ymin, vm.ymax];
              }
              if (vm.chartOptions.yAxis[0].displayFormat) {
                var displayFormat = vm.chartOptions.yAxis[0].displayFormat.replace(/"/gi, '');
                chartoptions.chart.yAxis.tickFormat = function (d) {
                  return d.numberFormat(displayFormat);
                };
              }
              if (vm.chartOptions.yAxis[0].unit) {
                if (vm.chartOptions.yAxis[0].unit.major) {
                  chartoptions.chart.yAxis.tickValues = function () {
                    var arr = [];
                    var i = 0;
                    do {
                      arr.push(i);
                      i = i + vm.chartOptions.yAxis[0].unit.major;
                    } while (i < vm.ymax);
                    i = 0;
                    do {
                      arr.push(i);
                      i = i - vm.chartOptions.yAxis[0].unit.major;
                    } while (i > vm.ymin);
                    return arr;
                  };
                }
              }
            }
          }
          /*if(vm.chartOptions.showXaxis){
           if(vm.chartOptions.xAxis){
           if(vm.chartOptions.xAxis.tickMarkLabelPosition=='NEXT'){
           vm.showXLabel=true;
           }
           if(vm.chartOptions.xAxis.showAxisLine){
           vm.showXLine=true;
           }
           }
           }
           if(vm.chartOptions.showYaxis){
           if(vm.chartOptions.yAxis){
           if(vm.chartOptions.yAxis.tickMarkLabelPosition=='NEXT'){
           vm.showYLabel=true;
           }
           if(vm.chartOptions.yAxis.showAxisLine){
           vm.showYLine=true;
           }
           }
           }*/
          vm.xAxis = vm.chartOptions.xAxis[0];
          angular.merge(vm.options, chartoptions);
          window.dispatchEvent(new Event('resize'));
        }
        //Temporary fix for Dahboard chart- To be removed completely
        else if (vm.chartOptions && vm.chartSubtype == 'DASHBOARD-AREA') {
            angular.merge(vm.options, vm.chartOptions);

            var height = vm.chartOptions.customHeight || 0;
            if (height > 300) {
              vm.options.chart.height = 380 + vm.exHeight;
              vm.options.chart.legend.margin = {
                top: 170 + vm.exHeight,
                bottom: -150
              };
            } else if (height > 0) {
              vm.options.chart.height = 180;
              vm.options.chart.legend.margin = {
                top: 80,
                bottom: -75
              };
            }
          }

        //vm.options = angular.copy(vm.options);
      };
      vm.updateOptions();
      vm.chartType = "lineChart";
    }
  }
})();

(function () {
  'use strict';
  /**
   *
   * @module nlsn.chart.components.multiChart
   * @name nlsn-multi-chart
   * @restrict E
   * @description
   * nlsn multi chart
   *
   * * @usage
   <nlsn-multi-chart chart-options=Different optional options   data=Data to display on charts  height= Height of the chart  xaxislabel= Label on X-axis  yaxislabel= Label on Y-axis>
   </nlsn-multi-chart>
   @example
   <nlsn-multi-chart  chart-options='options' data='data' height='chartHeight' xaxislabel='xaxislabel' yaxislabel='yaxislabel'>
   </nlsn-multi-chart>
    <!-- chart-options-->
   Additional options for chart.
    <!-- data -->
   Data to display on charts.
    <!-- height-->
   Height of the chart.
    <!-- xaxislabel -->
   Label on X-axis.
    <!-- yaxislabel-->
   Label on Y-axis.
   **/

  angular.module('nlsn.chart.components.multiChart', ['nlsn.chart.components.util.colors']).component('nlsnMultiChart', {
    controller: ["$scope", "$nlsnColors", "$timeout", nlsnMultiChartCtrl],
    controllerAs: 'nlsnMultiChart',
    bindings: {
      chartOptions: "<",
      chartconfigs: "<",
      data: "=",
      height: "=",
      xaxislabel: "=",
      y1axislabel: "=",
      y2axislabel: "=",
      parameterData: "=",
      extended: "=",
      chartSubtype: "=",
      charttype: "=",
      metadata: "<",
      charttitle: '='
    },
    template: '<nlsn-chart-core axisoptions="nlsnMultiChart.xAxis" \n                                  tooltip="nlsnMultiChart.tooltips" \n                                  chart-options="nlsnMultiChart.chartOptions" \n                                  opt="nlsnMultiChart.options" \n                                  data="nlsnMultiChart.data" \n                                  metadata="nlsnMultiChart.metadata" \n                                  charttitle="nlsnMultiChart.charttitle" \n                                  type="{{nlsnMultiChart.chartType}}" \n                                  height="nlsnMultiChart.height" \n                                  xaxislabel="nlsnMultiChart.xaxislabel" \n                                  yaxislabel="nlsnMultiChart.yaxislabel">\n                </nlsn-chart-core>'
  });

  /** @ngInject */
  function nlsnMultiChartCtrl($scope, $nlsnColors, $timeout) {
    var vm = this;
    var existingData = angular.copy(vm.data);
    var newData = [];

    function wrap(text, width) {
      text.each(function () {
        var text = d3.select(this),
            dy = 0,
            start = 0,
            limit = width,
            words = [];
        if (text.text()) {
          // for(var i=0;i<=text.text().length/limit;i++){
          // start = i * limit;
          // words.push(text.text().substr(start, limit));
          // }
          // words = words.reverse();
          var prevItem = '';
          text.text().split(/\s+/).map(function (item, index, array) {
            return item + " ";
          }).forEach(function (item) {
            if ((item + prevItem).length <= limit) {
              prevItem = prevItem + item;
            } else {
              words.push(prevItem);
              prevItem = item;
            }
          });
          words.push(prevItem);
          words.reverse();
          var word,
              line = [],
              lineNumber = 0,
              lineHeight = 1,
              // ems
          y = text.attr("y") - (words.length + 1) * 4,
              dy = parseFloat(text.attr("dy")) != "NaN" ? parseFloat(text.attr("dy")) : 0,
              tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
          var cnt = 0;
          while (word = words.pop()) {

            if (cnt == 4) break;
            line.push(word);
            tspan.text(line.join(" "));
            if (tspan.node().getComputedTextLength() > width) {
              line.pop();
              tspan.text(line.join(" "));
              line = [word];
              tspan = text.append("tspan").attr("x", 0).attr("y", y + 10).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
            }
            cnt++;
          }
        }
      });
    }

    vm.labelWrapper = function () {

      $timeout(function () {
        var chart = d3.selectAll('.multiChart .nv-x .nv-axis');
        chart.selectAll('text').call(wrap, 15);
      }, 500);
    };
    vm.originalType = angular.copy(vm.charttype);
    var chartoptions = {
      chart: {
        xAxis: {},
        yAxis1: {},
        yAxis2: {},
        legend: {},
        bars1: {},
        bars2: {}
      }
    };
    if ('SIMPLE' == vm.charttype) {
      if (vm.chartconfigs) {
        // no yaxis present use series as y
        var existingData = angular.copy(vm.data);
        var newData = [];
        vm.tooltips = [];
        angular.forEach(vm.chartconfigs, function (config) {
          /*Tooltips*/
          if (config.tooltip) {
            if (config.tooltip.length == 1) {
              vm.tooltips.push(config.tooltip[0]);
            } else {
              angular.forEach(config.tooltip, function (tooltip) {
                vm.tooltips.push(tooltip);
              });
            }
          }
          /*Tooltips*/
          angular.forEach(config.dataDefinition.series, function (seriesItem) {
            var currSeriesItem = seriesItem.value;
            var displayName = currSeriesItem;
            var uniqueNames = [];
            if (vm.metadata && vm.metadata[currSeriesItem]) {
              displayName = vm.metadata[currSeriesItem].title;
            }
            if (!config.dataDefinition.yaxis) {
              var filterData = angular.copy(existingData);
              var records = filterData.filter(function (rec) {
                return rec[currSeriesItem] != null;
              });
              if (!config.dataDefinition.yAxis) {
                angular.forEach(filterData, function (rec) {
                  rec.seriesDisplay = currSeriesItem;
                });
              }
              var obj = {
                "key": displayName,
                "values": records,
                "type": ("MULTIBAR_VERTICAL" || "STACKED_VERTICAL") == config.chartType ? "bar" : "line",
                "stacked": "STACKED_VERTICAL" == config.chartType,
                "color": config.seriesConfigs && config.seriesConfigs[currSeriesItem] && config.seriesConfigs[currSeriesItem].color ? config.seriesConfigs[currSeriesItem].color : config.colorPalette ? config.colorPalette[newData.length] : $nlsnColors.stdcolors[newData.length % 10]
              };
              if (config.plotOnSecondaryAxis) {
                obj.yAxis = 2;
                vm.yAxis2 = config.axisConfig.yAxis;
                if ("STACKED_VERTICAL" == config.chartType) chartoptions.chart.bars2.stacked = true;
              } else {
                obj.yAxis = 1;
                vm.xAxis = config.axisConfig.xAxis;
                vm.yAxis1 = config.axisConfig.yAxis;
                if ("STACKED_VERTICAL" == config.chartType) chartoptions.chart.bars1.stacked = true;
              }
              newData.push(obj);
            } else {
              for (var i = 0; i < existingData.length; i++) {
                var currentSeriesName = existingData[i][config.dataDefinition.series[0].value];
                if (uniqueNames.indexOf(currentSeriesName) === -1) {
                  var recs = existingData.filter(function (rec) {
                    return rec[currSeriesItem] == currentSeriesName;
                  });
                  var obj = {
                    "key": currentSeriesName,
                    "values": recs,
                    "stacked": "STACKED_VERTICAL" == config.chartType,
                    "color": config.seriesConfigs && config.seriesConfigs[currSeriesItem] && config.seriesConfigs[currSeriesItem].color ? config.seriesConfigs[currSeriesItem].color : config.colorPalette ? config.colorPalette[newData.length] : $nlsnColors.stdcolors[newData.length % 10]

                  };
                  if (config.plotOnSecondaryAxis) {
                    obj.yAxis = 2;
                    vm.yAxis2 = config.axisConfig.yAxis;
                    if ("STACKED_VERTICAL" == config.chartType) chartoptions.chart.bars2.stacked = true;
                  } else {
                    obj.yAxis = 1;
                    vm.xAxis = config.axisConfig.xAxis;
                    vm.yAxis1 = config.axisConfig.yAxis;
                    if ("STACKED_VERTICAL" == config.chartType) chartoptions.chart.bars1.stacked = true;
                  }
                  newData.push(obj);
                  uniqueNames.push(currentSeriesName);
                }
              }
            }
          });
        });

        vm.data = newData;
        console.log(JSON.stringify(vm.data));
      }
    }
    if (vm.data) {
      angular.forEach(vm.data, function (value, key) {
        if (value.chartType == 'MULTIBAR_VERTICAL' || value.chartType == 'STACKED_VERTICAL') {
          value.type = 'bar';
        }
        if (value.chartType == 'LINE') {
          value.type = 'line';
        }
      });
    }
    this.$onChanges = function (changesObj) {
      if (changesObj.hasOwnProperty("chartOptions")) {
        updateOptions();
      }
    };

    $scope.$on(function () {
      return vm.chartOptions;
    }, function () {
      updateOptions();
    });

    updateOptions();
    vm.chartType = "multiChart";

    function updateOptions() {

      vm.options = {
        chart: {
          x: function x(d, i, series) {
            if (series == undefined) series = d.series;
            if (vm.chartconfigs && vm.chartconfigs[series].dataDefinition) {
              return Number(d[vm.chartconfigs[series].dataDefinition.xaxis[0].value]);
            }
            return Number(d.id);
          },
          y: function y(d, i, series) {
            if (series == undefined) series = d.series;
            if (vm.chartconfigs && vm.chartconfigs[series].dataDefinition && vm.chartconfigs[series].dataDefinition) {
              var def = vm.chartconfigs[series].dataDefinition;
              if (def.yaxis) {
                return Number(d[vm.chartconfigs[series].dataDefinition.yaxis.value]);
              } else {
                var yCol = d['seriesDisplay'];
                return Number(d[yCol]);
              }
            }
            return Number(d.value);
          },
          xAxis: {
            axisLabel: vm.originalType == 'SIMPLE' ? vm.chartconfigs[0].axisConfig.xAxis.axisLabel : vm.xaxislabel,
            axisLabelDistance: 0,
            showMaxMin: false,
            tickFormat: function tickFormat(d) {
              if (!vm.chartOptions.showXaxis) return;else if (vm.chartconfigs && vm.chartconfigs[0].dataDefinition) {
                var retValue = "";
                angular.forEach(vm.data[0].values, function (val, key) {
                  if (d == Number(val[vm.chartconfigs[0].dataDefinition.xaxis[0].value])) {
                    var dispValue = vm.chartconfigs[0].dataDefinition.xaxis[0].displayValue ? vm.chartconfigs[0].dataDefinition.xaxis[0].displayValue : vm.chartconfigs[0].dataDefinition.xaxis[0].value;
                    if (vm.chartconfigs[0].dataDefinition.xaxis[0].isDate === true) {
                      var date = new Date(val[dispValue]);
                      var locale = "en-us";
                      retValue = "WE" + ' ' + date.getDate() + '-' + date.toLocaleString(locale, { month: "short" }) + '-' + date.getFullYear();
                    } else {
                      retValue = val[dispValue];
                    }
                  }
                });
                if (retValue != "") {
                  return retValue;
                }
              }
              return d;
            }

          },
          legendRightAxisHint: '',
          yAxis1: {
            tickFormat: function tickFormat(d) {
              if (vm.yAxis1 && vm.yAxis1.displayFormat) {
                if (vm.yAxis1.displayFormat == "%") {
                  return d3.format('.02f')(d) + "%";
                }

                var displayFormat = vm.yAxis1.displayFormat.replace(/"/gi, '');
                return d.numberFormat(displayFormat);
              }
              return d3.format(',.1f')(d);
            },
            axisLabel: vm.originalType == 'SIMPLE' ? vm.chartconfigs[0].axisConfig.yAxis.axisLabel : vm.y1axislabel

          },
          yAxis2: {
            tickFormat: function tickFormat(d) {
              if (vm.yAxis2 && vm.yAxis2.displayFormat) {
                if (vm.yAxis2.displayFormat == "%") {
                  return d3.format('.02f')(d) + "%";
                }
                var displayFormat = vm.yAxis2.displayFormat.replace(/"/gi, '');
                return d.numberFormat(displayFormat);
              }
              return d3.format(',.1f')(d);
            },
            axisLabel: vm.originalType == 'SIMPLE' ? vm.chartconfigs[1].axisConfig.yAxis.axisLabel : vm.y1axislabel
          },
          callback: function callback() {
            vm.labelWrapper();
          }
        }
      };
      if (vm.chartOptions) {

        if (vm.chartOptions.showControls == false || vm.chartOptions.showControls == true) {
          chartoptions.chart.showControls = vm.chartOptions.showControls;
        }
        if (vm.chartOptions.showLegend == false || vm.chartOptions.showLegend == true) {
          chartoptions.chart.showLegend = vm.chartOptions.showLegend;
        }
        if (vm.chartOptions.showTitle == false || vm.chartOptions.showTitle == true) {
          chartoptions.chart.showTitle = vm.chartOptions.showTitle;
        }
        if (vm.chartOptions.showValues == false || vm.chartOptions.showValues == true) {
          chartoptions.chart.showValues = vm.chartOptions.showValues;
        }

        if (vm.chartOptions.margin) {
          chartoptions.chart.margin = vm.chartOptions.margin;
        }
        if (vm.chartOptions.legend) {
          if (vm.chartOptions.legend.justified) {
            if (vm.chartOptions.legend.justified == 'LEFT') {
              chartoptions.chart.legend.rightAlign = false;
            } else {
              chartoptions.chart.legend.rightAlign = true;
            }
          }
          if (vm.chartOptions.legend.margin) {
            chartoptions.chart.legend.margin = vm.chartOptions.legend.margin;
          }
        }

        angular.forEach(vm.chartconfigs, function (config, k1) {
          angular.forEach(config.series, function (val, k2) {
            angular.forEach(vm.data, function (data, k3) {
              if (val == data.key) {
                if (config.chartType == "MULTIBAR_VERTICAL" || config.chartType == "STACKED_VERTICAL") {
                  data.type = "bar";
                } else if (config.chartType == "LINE") {
                  data.type = "line";
                }
                if (config.plotOnSecondaryAxis) {
                  data.yAxis = 2;
                  vm.yAxis2 = config.axisConfig.yAxis;
                  if (config.chartType == "STACKED_VERTICAL") {
                    chartoptions.chart.bars2.stacked = true;
                  }
                  if (vm.yAxis2.bound) {
                    vm.ymin = vm.yAxis2.bound.minValue;
                    vm.ymax = vm.yAxis2.bound.maxValue;
                    chartoptions.chart.yDomain2 = [vm.ymin, vm.ymax];
                  }
                } else {
                  data.yAxis = 1;
                  vm.xAxis = config.axisConfig.xAxis;
                  vm.yAxis1 = config.axisConfig.yAxis;
                  if (config.chartType == "STACKED_VERTICAL") {
                    chartoptions.chart.bars1.stacked = true;
                  }
                  if (vm.yAxis1.bound) {
                    vm.ymin = vm.yAxis1.bound.minValue;
                    vm.ymax = vm.yAxis1.bound.maxValue;
                    chartoptions.chart.yDomain1 = [vm.ymin, vm.ymax];
                  }
                }
              }
            });
          });
        });
        if (vm.yAxis2) {
          chartoptions.chart.yAxis2.axisLabel = vm.yAxis2.axisLabel;
          if (vm.yAxis2.bound) {
            vm.ymin = vm.yAxis2.bound.minValue;
            vm.ymax = vm.yAxis2.bound.maxValue;
            chartoptions.chart.yDomain2 = [vm.ymin, vm.ymax];
          }
          if (vm.yAxis2.axisLabelDistance) {
            chartoptions.chart.yAxis2.axisLabelDistance = vm.yAxis2.axisLabelDistance;
          }
        }

        chartoptions.chart.xAxis.axisLabel = vm.xAxis.axisLabel;
        if (vm.yAxis1) {
          chartoptions.chart.yAxis1.axisLabel = vm.yAxis1.axisLabel;
          if (vm.yAxis1.bound) {
            vm.ymin = vm.yAxis1.bound.minValue;
            vm.ymax = vm.yAxis1.bound.maxValue;
            chartoptions.chart.yDomain1 = [vm.ymin, vm.ymax];
          }
          if (vm.yAxis1.axisLabelDistance) {
            chartoptions.chart.yAxis1.axisLabelDistance = vm.yAxis1.axisLabelDistance;
          }
        }
        angular.merge(vm.options, chartoptions);
        window.dispatchEvent(new Event('resize'));
      }
      nv.utils.windowResize(function () {
        vm.labelWrapper();
      });
    }
  }
})();

(function () {

  'use strict';
  /**
   *
   * @module nlsn.chart.components.scatterChart
   * @name nlsn-pie-chart
   * @restrict E
   * @description
   * nlsn pie chart
   *
   * * @usage
   <nlsn-scatter-chart chart-options=Different optional options   data=Data to display on charts  height= Height of the chart  xaxislabel= Label on X-axis  yaxislabel= Label on Y-axis tool-tip-label-one= label one for tooltip  tool-tip-label-two=label two for tooltip >
   </nlsn-scatter-chart>
   @example
   <nlsn-scatter-chart chart-options='options' data='data' height='chartHeight' xaxislabel='xaxislabel' yaxislabel='yaxislabel' tool-tip-label-one="labelOne" tool-tip-label-two="labelTwo"></nlsn-scatter-chart>
   </nlsn-scatter-chart>
    <!-- chart-options-->
   Additional options for chart.
    <!-- data -->
   Data to display on charts.
    <!-- height-->
   Height of the chart.
    <!-- xaxislabel -->
   Label on X-axis.
    <!-- yaxislabel-->
   Label on Y-axis.
    <!--label one for tooltip-->
   Label one for tooltip.
    <!--label two for tooltip-->
   Label two for tooltip.
   **/

  angular.module('nlsn.chart.components.scatterChart', ['nlsn.chart.components.util.colors']).component('nlsnScatterChart', {
    controller: ["$scope", "$nlsnColors", nlsnScatterChartCtrl],
    controllerAs: 'nlsnScatterChart',
    bindings: {
      chartSubtype: "@",
      chartOptions: "<",
      data: "=",
      height: "=",
      xaxislabel: "=",
      yaxislabel: "=",
      toolTipLabelOne: "=",
      toolTipLabelTwo: "=",
      parameterData: "=",
      livechart: "=",
      chartId: "=",
      charttitle: "=",
      chartconfigs: "=",
      charttype: "=",
      metadata: "<"
    },
    template: '<nlsn-chart-core metadata="nlsnScatterChart.metadata" \n                                  tooltip="nlsnScatterChart.tooltip" \n                                  id="card-{{nlsnScatterChart.chartId}}" \n                                  axisoptions="nlsnScatterChart.xAxis" \n                                  chartconfigs="chartconfigs" \n                                  opt="nlsnScatterChart.options" \n                                  data="nlsnScatterChart.data" \n                                  type="{{nlsnScatterChart.chartType}}" \n                                  height="nlsnScatterChart.height" \n                                  xaxislabel="nlsnScatterChart.xaxislabel" \n                                  yaxislabel="nlsnScatterChart.yaxislabel" \n                                  chart-options="nlsnScatterChart.chartOptions"\n                                  charttitle="nlsnScatterChart.charttitle">\n                  </nlsn-chart-core>'
  });

  /** @ngInject */
  function nlsnScatterChartCtrl($scope, $nlsnColors) {
    var vm = this;
    vm.exHeight = 0;
    if (!vm.parameterData) {
      vm.exHeight = 25;
    }

    vm.createCrossover = function (chart) {
      if (chart) {
        d3.select('#horLine').remove();
        d3.select('#verLine').remove();
        d3.select('#quad1').remove();
        d3.select('#quad2').remove();
        d3.select('#quad3').remove();
        d3.select('#quad4').remove();

        var horLine = d3.select('.nv-scatterChart').select('.nv-y').append('g').attr('id', 'horLine');
        horLine.selectAll('line').data(vm.xgrid).enter().append('line').attr({
          x1: function x1(d) {
            return chart.xAxis.scale()(vm.xmin);
          },
          y1: function y1(d) {
            return chart.yAxis.scale()(d);
          },
          x2: function x2(d) {
            return chart.xAxis.scale()(vm.xmax);
          },
          y2: function y2(d) {
            return chart.yAxis.scale()(d);
          }
        }).style("stroke", "#000000");
        var verLine = d3.select('.nv-scatterChart').select('.nv-y').append('g').attr('id', 'verLine');
        verLine.selectAll('line').data(vm.ygrid).enter().append('line').attr({
          x1: function x1(d) {
            return chart.xAxis.scale()(d);
          },
          y1: function y1(d) {
            return chart.yAxis.scale()(vm.ymin);
          },
          x2: function x2(d) {
            return chart.xAxis.scale()(d);
          },
          y2: function y2(d) {
            return chart.yAxis.scale()(vm.ymax);
          }
        }).style("stroke", "#000000");
      }
    };
    vm.labelGenerator = function (chart) {

      angular.forEach(vm.data, function (val, key) {
        d3.select("#labelWrap" + key).remove();
        var pointlabel = d3.select(".nv-scatterChart").select(".nv-y").append('g').attr("id", "labelWrap" + key);

        pointlabel.selectAll('text').data(val.values).enter().append('text').text(function (d) {
          return d.label;
        }).attr({
          x: function x(d) {
            return chart.xAxis.scale()(d.xvalue);
          },
          y: function y(d) {
            return chart.yAxis.scale()(d.yvalue);
          },
          dx: "2em",
          dy: "0.5em"
        });
      });
    };
    vm.createQuadrant = function (chart, obj) {
      d3.select('#quad1').remove();
      d3.select('#quad2').remove();
      d3.select('#quad3').remove();
      d3.select('#quad4').remove();
      var quad = d3.select('.nv-scatterChart').select('.nv-y');

      quad.append('text').attr({
        id: 'quad1',
        x: function x() {
          return chart.xAxis.scale()(vm.xmin);
        },
        y: function y() {
          return chart.yAxis.scale()(vm.ymax);
        },
        dy: '0.5em',
        dx: '0.5em'
      }).text(obj.quadrant1).style({
        'font-size': '1em',
        'fill': '#000000'
      });
      quad.append('text').attr({
        id: 'quad2',
        x: function x() {
          return chart.xAxis.scale()(vm.xmax);
        },
        y: function y() {
          return chart.yAxis.scale()(vm.ymax);
        },
        'text-anchor': 'end',
        dy: '0.5em',
        dx: '-0.5em'
      }).text(obj.quadrant2).style({
        'font-size': '1em',
        'fill': '#000000'
      });
      quad.append('text').attr({
        id: 'quad3',
        x: function x() {
          return chart.xAxis.scale()(vm.xmax);
        },
        y: function y() {
          return chart.yAxis.scale()(vm.ymin);
        },
        'text-anchor': 'end',
        dy: '-0.5em',
        dx: '-0.5em'
      }).text(obj.quadrant3).style({
        'font-size': '1em',
        'fill': '#000000'
      });
      quad.append('text').attr({
        id: 'quad4',
        x: function x() {
          return chart.xAxis.scale()(vm.xmin);
        },
        y: function y() {
          return chart.yAxis.scale()(vm.ymin);
        },
        dy: '-0.5em',
        dx: '0.5em'
      }).text(obj.quadrant4).style({
        'font-size': '1em',
        'fill': '#000000'
      });
    };
    vm.colorBubbles = function (chart, colorPallete) {
      var points = d3.selectAll(".nv-point")[0];
      angular.forEach(points, function (val, key) {
        d3.select(val).attr("fill", colorPallete[key]).attr("stroke", colorPallete[key]);
      });
    };
    if ('SIMPLE' == vm.charttype) {

      if (vm.chartconfigs && vm.chartconfigs[0].dataDefinition.series[0].value) {
        // manipulate data
        var existingData = angular.copy(vm.data);
        var newData = [];
        var uniqueNames = [];
        for (var i = 0; i < existingData.length; i++) {
          var currentSeriesName = existingData[i][vm.chartconfigs[0].dataDefinition.series[0].value];
          if (uniqueNames.indexOf(currentSeriesName) === -1) {
            var recs = existingData.filter(function (rec) {
              return rec[vm.chartconfigs[0].dataDefinition.series[0].value] == currentSeriesName;
            });
            var currConfig = vm.chartconfigs[0].seriesConfigs[currentSeriesName];
            newData.push({
              "key": currentSeriesName,
              "values": recs,
              "color": currConfig && currConfig.color ? currConfig.color : vm.chartconfigs[0].colorPalette ? vm.chartconfigs[0].colorPalette[newData.length] : $nlsnColors.stdcolors[newData.length % 10]
            });
            uniqueNames.push(currentSeriesName);
          }
        }
        vm.data = newData;
      }

      vm.updateOptions = function () {
        vm.options = {
          chart: {
            x: function x(d) {
              return vm.chartconfigs && vm.chartconfigs[0].dataDefinition.xaxis[0].value ? Number(d[vm.chartconfigs[0].dataDefinition.xaxis[0].value]) : Number(d.xvalue);
            },
            y: function y(d) {
              return vm.chartconfigs && vm.chartconfigs[0].dataDefinition.yaxis.value ? Number(d[vm.chartconfigs[0].dataDefinition.yaxis.value]) : Number(d.yvalue);
            },
            pointSize: function pointSize(d) {
              if (vm.chartconfigs[0].dataDefinition.size) {
                return d[vm.chartconfigs[0].dataDefinition.size.value];
              }
              return d.size || 1;
            },
            xAxis: {
              axisLabel: vm.chartconfigs[0].axisConfig.xAxis.showAxisLabel ? vm.chartconfigs[0].axisConfig.xAxis.axisLabel : "",
              showMaxMin: vm.chartconfigs[0].axisConfig.xAxis.showMaxMin ? vm.chartconfigs[0].axisConfig.xAxis.showMaxMin : false
            },
            yAxis: {
              axisLabel: vm.chartconfigs[0].axisConfig.yAxis.showAxisLabel ? vm.chartconfigs[0].axisConfig.yAxis.axisLabel : "",
              showMaxMin: vm.chartconfigs[0].axisConfig.yAxis.showMaxMin ? vm.chartconfigs[0].axisConfig.yAxis.showMaxMin : false
            },
            pointRange: [500, 1600]

          }
        };

        /* Tooltip */
        if (vm.chartconfigs[0] && vm.chartconfigs[0].tooltip) {
          vm.tooltip = vm.chartconfigs[0].tooltip;
        }
        if (vm.chartOptions) {

          if (vm.chartconfigs[0].axisConfig.xAxis) {
            vm.xAxis = vm.chartconfigs[0].axisConfig.xAxis;
            /*changed scatter***/
            if (vm.chartconfigs[0].axisConfig.xAxis.axisLabel) {
              if (vm.chartconfigs[0].axisConfig.xAxis.bound) {
                vm.xmin = vm.chartconfigs[0].axisConfig.xAxis.bound.minValue;
                vm.xmax = vm.chartconfigs[0].axisConfig.xAxis.bound.maxValue;
                vm.options.chart.xDomain = [vm.xmin, vm.xmax];
              }
              if (vm.chartconfigs[0].axisConfig.xAxis.displayFormat) {
                var displayFormat = vm.chartconfigs[0].axisConfig.xAxis.displayFormat.replace(/"/gi, '');
                vm.options.chart.xAxis.tickFormat = function (d) {
                  return d.numberFormat(displayFormat);
                };
              }
              if (vm.chartconfigs[0].axisConfig.xAxis.unit) {
                if (vm.chartconfigs[0].axisConfig.xAxis.unit.major) {
                  vm.options.chart.xAxis.tickValues = function () {
                    var arr = [];
                    var i = 0;
                    do {
                      arr.push(i);
                      i = i + vm.chartconfigs[0].axisConfig.xAxis.unit.major;
                    } while (i < vm.xmax);
                    i = 0;
                    do {
                      arr.push(i);
                      i = i - vm.chartconfigs[0].axisConfig.xAxis.unit.major;
                    } while (i > vm.xmin);
                    return arr;
                  };
                }
              }
            }
          }

          if (vm.chartconfigs[0].axisConfig.yAxis) {
            if (vm.chartconfigs[0].axisConfig.yAxis.axisLabel) {
              if (vm.chartconfigs[0].axisConfig.yAxis.bound) {
                vm.ymin = vm.chartconfigs[0].axisConfig.yAxis.bound.minValue;
                vm.ymax = vm.chartconfigs[0].axisConfig.yAxis.bound.maxValue;
                vm.options.chart.yDomain = [vm.ymin, vm.ymax];
              }
              if (vm.chartconfigs[0].axisConfig.yAxis.displayFormat) {
                var displayFormat = vm.chartconfigs[0].axisConfig.yAxis.displayFormat.replace(/"/gi, '');
                vm.options.chart.yAxis.tickFormat = function (d) {
                  return d.numberFormat(displayFormat);
                };
              }
              if (vm.chartconfigs[0].axisConfig.yAxis.unit) {
                if (vm.chartconfigs[0].axisConfig.yAxis.unit.major) {
                  vm.options.chart.yAxis.tickValues = function () {
                    var arr = [];
                    var i = 0;
                    do {
                      arr.push(i);
                      i = i + vm.chartconfigs[0].axisConfig.yAxis.unit.major;
                    } while (i < vm.ymax);
                    i = 0;
                    do {
                      arr.push(i);
                      i = i - vm.chartconfigs[0].axisConfig.yAxis.unit.major;
                    } while (i > vm.ymin);
                    return arr;
                  };
                }
              }
            }
          }
          vm.options.chart.callback = function (chart) {
            vm.chart = chart;
            if (vm.chartconfigs[0].axisConfig.xAxis && vm.chartconfigs[0].axisConfig.yAxis) {
              vm.ygrid = [vm.chartconfigs[0].axisConfig.xAxis.crossAt];
              vm.xgrid = [vm.chartconfigs[0].axisConfig.yAxis.crossAt];
            }
            vm.createCrossover(vm.chart);
            if (vm.chartOptions.quadrant) {
              vm.createQuadrant(vm.chart, vm.chartOptions.quadrant);
            }
            if (vm.chartOptions.showValues) {
              vm.labelGenerator(vm.chart);
            }
            if (vm.chartOptions.colorPalette) {
              vm.colorBubbles(vm.chart, vm.chartOptions.colorPalette);
            }
            if (!vm.chartconfigs[0].axisConfig.yAxis.showMajorGridLines) {
              d3.select('.nv-scatterChart').append("style").text(".nv-y .tick line { display: none; }");
            }
            if (!vm.chartconfigs[0].axisConfig.xAxis.showMajorGridLines) {
              d3.select('.nv-scatterChart').append("style").text(".nv-x .tick line { display: none; }");
            }
          };
          window.dispatchEvent(new Event('resize'));
        }
        nv.utils.windowResize(function () {
          if (vm.chart) {
            vm.chart.update();
            vm.createCrossover(vm.chart);
            if (vm.chartOptions.quadrant) {
              vm.createQuadrant(vm.chart, vm.chartOptions.quadrant);
            }
            if (vm.chartOptions.showValues) {
              vm.labelGenerator(vm.chart);
            }
          }
        });
      };
      vm.updateOptions();
      vm.chartType = "scatterChart";
    } else {
      vm.updateOptions = function () {
        vm.options = {
          chart: {
            x: function x(d) {
              return Number(d.xvalue);
            },
            y: function y(d) {
              return Number(d.yvalue);
            },
            pointSize: function pointSize(d) {
              return Number(d.size);
            },
            pointRange: [500, 1600]

          }
        };
        if (vm.chartOptions) {

          var chartoptions = {
            chart: {
              xAxis: {},
              yAxis: {},
              legend: {}
            }
          };

          if (vm.chartOptions.legend) {
            if (vm.chartOptions.legend.align == 'BOTTOM') {
              chartoptions.chart.legendPosition = "bottom";
            }
            if (vm.chartOptions.legend.justified) {
              if (vm.chartOptions.legend.justified == 'LEFT') {
                chartoptions.chart.legend.rightAlign = false;
              } else {
                chartoptions.chart.legend.rightAlign = true;
              }
            }
            if (vm.chartOptions.legend.margin) {
              chartoptions.chart.legend.margin = vm.chartOptions.legend.margin;
            }
          }

          if (vm.chartOptions.xAxis) {
            if (vm.chartOptions.xAxis.length == 1) {
              if (vm.chartOptions.xAxis[0].axisLabel) {
                if (vm.chartOptions.xAxis[0].showAxisLabel) {
                  chartoptions.chart.xAxis = {
                    axisLabel: vm.chartOptions.xAxis[0].axisLabel
                  };
                }
              }
              if (vm.chartOptions.xAxis[0].bound) {
                vm.xmin = vm.chartOptions.xAxis[0].bound.minValue;
                vm.xmax = vm.chartOptions.xAxis[0].bound.maxValue;
                chartoptions.chart.xDomain = [vm.xmin, vm.xmax];
              }
              if (vm.chartOptions.xAxis[0].displayFormat) {
                var displayFormat = vm.chartOptions.xAxis[0].displayFormat.replace(/"/gi, '');
                chartoptions.chart.xAxis.tickFormat = function (d) {
                  return d.numberFormat(displayFormat);
                };
              } else {
                chartoptions.chart.xAxis.tickFormat = function (d) {
                  return d;
                };
              }
              if (vm.chartOptions.xAxis[0].unit) {
                if (vm.chartOptions.xAxis[0].unit.major) {
                  chartoptions.chart.xAxis.tickValues = function () {
                    var arr = [];
                    var i = 0;
                    do {
                      arr.push(i);
                      i = i + vm.chartOptions.xAxis[0].unit.major;
                    } while (i < vm.xmax);
                    i = 0;
                    do {
                      arr.push(i);
                      i = i - vm.chartOptions.xAxis[0].unit.major;
                    } while (i > vm.xmin);
                    return arr;
                  };
                }
              }
            }
          }

          if (vm.chartOptions.yAxis) {
            if (vm.chartOptions.yAxis.length == 1) {
              if (vm.chartOptions.yAxis[0].axisLabel) {
                if (vm.chartOptions.yAxis[0].showAxisLabel) {
                  chartoptions.chart.yAxis = {
                    axisLabel: vm.chartOptions.yAxis[0].axisLabel
                  };
                }
              }
              if (vm.chartOptions.yAxis[0].bound) {
                vm.ymin = vm.chartOptions.yAxis[0].bound.minValue;
                vm.ymax = vm.chartOptions.yAxis[0].bound.maxValue;
                chartoptions.chart.yDomain = [vm.ymin, vm.ymax];
              }
              if (vm.chartOptions.yAxis[0].displayFormat) {
                var displayFormat = vm.chartOptions.yAxis[0].displayFormat.replace(/"/gi, '');
                chartoptions.chart.yAxis.tickFormat = function (d) {
                  return d.numberFormat(displayFormat);
                };
              } else {
                chartoptions.chart.yAxis.tickFormat = function (d) {
                  return d;
                };
              }
              if (vm.chartOptions.yAxis[0].unit) {
                if (vm.chartOptions.yAxis[0].unit.major) {
                  chartoptions.chart.yAxis.tickValues = function () {
                    var arr = [];
                    var i = 0;
                    do {
                      arr.push(i);
                      i = i + vm.chartOptions.yAxis[0].unit.major;
                    } while (i < vm.ymax);
                    i = 0;
                    do {
                      arr.push(i);
                      i = i - vm.chartOptions.yAxis[0].unit.major;
                    } while (i > vm.ymin);
                    return arr;
                  };
                }
              }
            }
          }
          if (vm.chartOptions.xAxis.length == 1 && vm.chartOptions.yAxis.length == 1) {
            vm.ygrid = [vm.chartOptions.xAxis[0].crossAt];
            vm.xgrid = [vm.chartOptions.yAxis[0].crossAt];
            chartoptions.chart.callback = function (chart) {
              vm.chart = chart;
              vm.createCrossover(vm.chart);
              if (vm.chartOptions.quadrant) {
                vm.createQuadrant(vm.chart, vm.chartOptions.quadrant);
              }
              if (vm.chartOptions.showValues) {
                vm.labelGenerator(vm.chart);
              }
              if (vm.chartOptions.colorPalette) {
                vm.colorBubbles(vm.chart, vm.chartOptions.colorPalette);
              }
              if (!vm.chartOptions.yAxis[0].showMajorGridLines) {
                d3.select('.nv-scatterChart').append("style").text(".nv-y .tick line { display: none; }");
              }
              if (!vm.chartOptions.xAxis[0].showMajorGridLines) {
                d3.select('.nv-scatterChart').append("style").text(".nv-x .tick line { display: none; }");
              }
            };
          }
          vm.xAxis = vm.chartOptions.xAxis[0];
          angular.merge(vm.options, chartoptions);
          window.dispatchEvent(new Event('resize'));
        }
        nv.utils.windowResize(function () {
          if (vm.chart) {
            vm.chart.update();
            vm.createCrossover(vm.chart);
            if (vm.chartOptions.quadrant) {
              vm.createQuadrant(vm.chart, vm.chartOptions.quadrant);
            }
            if (vm.chartOptions.showValues) {
              vm.labelGenerator(vm.chart);
            }
          }
        });
      };
      vm.updateOptions();
      vm.chartType = "scatterChart";
    }
    this.$onChanges = function (changesObj) {
      console.log("in here");
      console.log(vm);
      if (changesObj.hasOwnProperty("chartOptions")) {
        vm.updateOptions();
      }
    };

    $scope.$on(function () {
      return vm.chartOptions;
    }, function () {
      vm.updateOptions();
    });
  }
})();

(function () {

  angular.module('nlsn.chart.components', ['nlsn.chart.components.helper', 'nlsn.chart.components.chartCore', 'nlsn.chart.components.dpMultiBarChart', 'nlsn.chart.components.dpMultiBarHorizontalChart', 'nlsn.chart.components.dpMultiChart', 'nlsn.chart.components.dpWaterfallChart', 'nlsn.chart.components.lineChart', 'nlsn.chart.components.multiChart', 'nlsn.chart.components.scatterChart', 'nlsn.chart.components.util.colors']);
})();