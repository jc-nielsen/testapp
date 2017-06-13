nv.ChartHelpers = class {
  constructor(alternativeColorsPalette = []) {
    this.alternativeColorsPalette = alternativeColorsPalette
  }

  //properties
  get NVD3DataXMetricName() {
    return 'xmetric'
  }
  get NVD3DataXMetricDisplayName() {
    return 'xmetricDisplayed'
  }
  get NVD3DataYMetricName() {
    return 'ymetric'
  }
  get NVD3DataYMetricDisplayName() {
    return 'ymetricDisplayed'
  }
  get NVD3DataEntryKeyName() {
    return 'key'
  }
  get ChartWithTableContainerAttributeName() {
    return 'chart-with-table-container-attribute'
  }

  get defaults() {
    return {
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
            font: {
              size: 12
            }
          },
          yAxis: {
            showAxisLabel: true,
            showAxisLine: true,
            showMaxMin: false,
            font: {
              size: 12
            }
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
    }
  }

  //data and options builders
  getXMetricByGroupingLevel(config, level) {  //level: number [0,1,....]
    return config.dataDefinition.xaxis[config.dataDefinition.xaxis.length - 1 - level]
  }

  buildData(yMetrics, externalData, metadata, config) {
    var data = []

    var xMetric = this.getXMetricByGroupingLevel(config, 0)
    var xMetricName = xMetric.value
    var xMetricDisplayName = xMetric.displayValue || xMetric.value

    // if(config.dataDefinition.dynamicSeries) {
    if (config.dataDefinition.yaxis != null && config.dataDefinition.series != null && config.dataDefinition.series.length == 1) {
      yMetrics = []
      var modifiedExternalData = [];
      var processedMetricNames = []
      var baseMetricName = config.dataDefinition.series[0].value
      for (var j = 0; j < externalData.length; j++) {
        var item = externalData[j]
        var metricName = item[baseMetricName]
        if (!processedMetricNames.includes(metricName)) {
          yMetrics.push({value: metricName})
          processedMetricNames.push(metricName)
          externalData.filter((item) => {
            return item[baseMetricName] == metricName
          }).forEach((item, index) => {
            if (modifiedExternalData[index] == null) {
              modifiedExternalData[index] = {};
              modifiedExternalData[index][xMetricName] = item[xMetricName];
            }
            modifiedExternalData[index][metricName] = item[config.dataDefinition.yaxis.value]
          })
        }
      }
      externalData = modifiedExternalData
    }

    yMetrics.forEach((yMetric, index) => {
      var yMetricName = yMetric.value
      var yMetricDisplayName = yMetric.displayValue
      var metricMetadata = metadata[yMetricName]
      var dataEntry = {
        values: []
      }
      dataEntry[this.NVD3DataEntryKeyName] = metricMetadata ? metricMetadata.title : yMetricName
      //colors, showValues, showMarker etc.
      if (config.seriesConfigs != null && config.seriesConfigs[yMetricName] != null) {
        Object.assign(dataEntry, Object.copyDeep(config.seriesConfigs[yMetricName]))
      }
      //real serie index
      dataEntry.realSerie = index
      //color
      if (!dataEntry.color) {
        dataEntry.color = this.getColorFromPaletteByIndex(config, index)
      }

      for (var j = 0; j < externalData.length; j++) {
        var item = externalData[j]
        var dataEntrySerie = {}
        dataEntrySerie[this.NVD3DataXMetricName] = item[xMetricName]
        dataEntrySerie[this.NVD3DataXMetricDisplayName] = item[xMetricDisplayName] || item[xMetricName]
        dataEntrySerie[this.NVD3DataYMetricName] = item[yMetricName]
        dataEntrySerie[this.NVD3DataYMetricDisplayName] = item[yMetricDisplayName] || item[yMetricName]
        //real serie index
        dataEntrySerie.realSerie = index
        //TODO: double check next commented line, maybe it's needed
        // dataEntrySerie.color = dataEntry.color
        if(Array.isArray(config.tooltip)) {
          var tooltipSerie
          for(var i = 0; i < config.tooltip.length; i++) {
            tooltipSerie = config.tooltip[i]
            dataEntrySerie[tooltipSerie.column] = item[tooltipSerie.column]
          }
        }
        dataEntry.values.push(dataEntrySerie)
      }

      // if (config.axisConfig.yAxis.reversePlotOrder) {
      //   dataEntry.values.reverse()
      // }

      data.push(dataEntry)
    })

    return data
  }

  getColorFromPaletteByIndex(config, index) {
    return config.colorPalette != null ? config.colorPalette[index] : this.alternativeColorsPalette[index % 10]
  }

  xMetricSort(data) {
    data.forEach(function(val,key){
      val.values.sort(function(a,b){
        if(a.pri_display_order && b.pri_display_order){
          return a.pri_display_order - b.pri_display_order;
        }
      })
    })

    return data;
  }

  seriesSort(data) {
    data.forEach(function(val,key){
      val.values.forEach(function(obj){
        if(obj.sec_display_order)
          val.sec_display_order = obj.sec_display_order;
      })
    })
    data.sort(function(a,b){
      if(a.sec_display_order && b.sec_display_order){
        return a.sec_display_order - b.sec_display_order;
      }
    })
    return data;
  }

  buildOptions(config, properties) {
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
          snapDistance: 0,
        },
        xAxis: {
          axisLabel: config.axisConfig.xAxis.axisLabel,
          axisLabelDistance: config.axisConfig.xAxis.axisLabelDistance || 0,
          showMaxMin: config.axisConfig.xAxis.showMaxMin,
          fontSize: config.axisConfig.xAxis.font.fontSize || config.axisConfig.xAxis.font.size,
          tickPadding: 5,
          tickFormat: (d) => {
            var displayed = JSON.parse(d)[this.NVD3DataXMetricDisplayName]
            if (config.axisConfig.xAxis.displayFormat && Number.isNumber(displayed) && d3CustomUtils.nf) {
              var type = config.axisConfig.xAxis.type || '';
              var nf = new d3CustomUtils.nf(displayed, type, config.axisConfig.xAxis.displayFormat, {options: {locale: 'en-US'}})
              return nf.perform().text;
            }
            return displayed
          }
        },
        yAxis: {
          axisLabel: config.axisConfig.yAxis.axisLabel,
          axisLabelDistance: config.axisConfig.yAxis.axisLabelDistance || 0,
          showMaxMin: config.axisConfig.yAxis.showMaxMin,
          fontSize: config.axisConfig.yAxis.font.fontSize || config.axisConfig.yAxis.font.size,
          ticks: config.axisConfig.yAxis.ticks,
          tickPadding: 5,
          tickFormat: (d) => {
            if (config.axisConfig.yAxis.displayFormat && Number.isNumber(d) && d3CustomUtils.nf) {
              var type = config.axisConfig.yAxis.type || '';
              var nf = new d3CustomUtils.nf(d, type, config.axisConfig.yAxis.displayFormat, {options: {locale: 'en-US'}})
              return nf.perform().text;
            }
            return d
          }
        },
        x: (d) => {
          var obj = {}
          obj[this.NVD3DataXMetricName] = d[this.NVD3DataXMetricName]
          obj[this.NVD3DataXMetricDisplayName] = d[this.NVD3DataXMetricDisplayName]
          return JSON.stringify(obj)
        },
        y: (d) => {
          var value = d[this.NVD3DataYMetricName]
          var parsedValue = parseFloat(value)
          return isNaN(parsedValue) ? value : parsedValue
        },
        xField: this.NVD3DataXMetricName,
        yField: this.NVD3DataYMetricName,
        clipEdge: true,
        // callback: () => {
        //   this.labelWrapper();
        // },
        modules: [],
        modulesObj: {}
      }
    }

    //height
    if(properties.height) {
      options.chart.height = properties.height
    }

    //xDomain
    if (config.axisConfig.xAxis.bound != null) {
      options.chart.xDomain = [
        config.axisConfig.xAxis.bound.minValue,
        config.axisConfig.xAxis.bound.maxValue
      ]
    }
    //yDomain
    if (config.axisConfig.yAxis.bound != null) {
      options.chart.yDomain = [
        config.axisConfig.yAxis.bound.minValue,
        config.axisConfig.yAxis.bound.maxValue
      ]
    }
    //tickValues
    const tickValues = (axis) => {
      const min = axis.bound.minValue
      const max = axis.bound.maxValue
      const step = axis.unit.major
      let i, arr = []
      if(0 <= max && 0 >= min) {
        arr.push(0)
        i = step
        while(i <= max && i >= min) {
          arr.push(i)
          i += step
        }
        i = -step
        while(i <= max && i >= min) {
          arr.push(i)
          i -= step
        }
      } else {
        i = min
        while(i <= max) {
          arr.push(i)
          i += step
        }
      }
      return arr
    }
    //xAxis.tickValues
    if (config.axisConfig.xAxis.unit != null) {
      if (config.axisConfig.xAxis.unit.major) {
        options.chart.xAxis.tickValues = () => tickValues(config.axisConfig.xAxis)
      }
    }
    //yAxis.tickValues
    if (config.axisConfig.yAxis.unit != null) {
      if (config.axisConfig.yAxis.unit.major) {
        options.chart.yAxis.tickValues = () => tickValues(config.axisConfig.yAxis)
      }
    }

    if(config.dataDefinition.series != null && config.seriesConfigs != null) {
      options.chart.barColor = (d, i) => {
        var color = d.color
        if(!color) {
          var serie = config.dataDefinition.series[d.realSerie != null ? d.realSerie : d.series]
          if(serie != null) {
            var yMetricName = serie.value
            var seriesConfig = config.seriesConfigs[yMetricName]
            if(seriesConfig != null) {
              var formatStr = seriesConfig.dataLabel != null ? seriesConfig.dataLabel.displayFormat : seriesConfig.displayFormat
              if(formatStr) {
                var value = d[this.NVD3DataYMetricName]
                if (formatStr && Number.isNumber(value) && d3CustomUtils.nf) {
                  var type = config.axisConfig.xAxis.type || ''; // TODO: use right type from metadata
                  var nf = new d3CustomUtils.nf(value, type, formatStr, { options: { locale: 'en-US' } }); // TODO: use current locale
                  color = nf.perform().color;
                }
              } else {
                if(seriesConfig.color != null) {
                  color = seriesConfig.color
                }
              }
            }
          }
          if(!color) {
            color = this.getColorFromPaletteByIndex(config, d.series)
          }
        }
        return color
      }
    }

    return options
  }

  _buildOptions_module(name, options, args) {
    var module = this[`__buildOptions_module_${name}`](args)
    // module.options.enabled = false
    options.chart.modules.push(module)
    options.chart.modulesObj[name] = module
  }

  __buildOptions_module_format() {
    return {
      // name: 'format',
      name: 'numberFormat',
      options: {
        enabled: true,
        // formatString: ',.1f'
      }
    }
  }

  __buildOptions_module_wrapper() {
    return {
      name: 'wrapper',
      options: {
        enabled: true,
        tooltipMaxWidth: 800,
        tooltipMinWidth: 100,
        tooltipAutoWidth: true,
        relativeAdjustmentGap: 5,
        enableAutopositioning: true,
        common: {
          space: 80,
          distance: 5,
          fontSize: 12,
          valign: 'middle',
          halign: 'middle',
          maxLineCount: 3,
          isWordBreak: false,
          doClipPath: false,
          dontWrapNumbers: false
        }
      }
    }
  }

  __buildOptions_module_nesting(args) {
    var xMetric = this.getXMetricByGroupingLevel(args.config, 1)
    var xGroupField = xMetric.value
    var xGroupDisplayField = xMetric.displayValue
    var groups = [], groupId, groupName, group, d
    args.externalData.forEach((d) => {
      groupId = d[xGroupField]
      groupName = d[xGroupDisplayField] || d[xGroupField]
      group = null
      groups.forEach((g) => {
        if(g.id === groupId) {
          group = g
        }
      })
      if(group == null) {
        group = {
          id: groupId,
          name: groupName,
          data: []
        }
        groups.push(group)
      }
      group.data.push(d)
    })
    args.externalData.splice(0, args.externalData.length);
    // args.externalData = []
    groups.forEach((group) => {
      group.data.forEach((d) => {
        args.externalData.push(d)
      })
    })
    return {
      name: 'nesting',
      options: {
        barsInGroup: groups[0].data.length,
        insertEmptyBars: false,
        groupId: (n) => {
          return groups[n].id
        },
        groupName: (n) => {
          return groups[n].name
        },
        minBottomMargin: 80,
        groupLabel: {
          height: (parseFloat(args.config.axisConfig.xAxis.font.fontSize || args.config.axisConfig.xAxis.font.size) * 3 + 1) / 2 + 10,
          borderWhitespaceYOffset: 0,
          text: {
            width: 120,
            height: parseFloat(args.config.axisConfig.xAxis.font.fontSize || args.config.axisConfig.xAxis.font.size) * 3 + 1,
            fontSize: parseFloat(args.config.axisConfig.xAxis.font.fontSize || args.config.axisConfig.xAxis.font.size),
            fontFamily: args.config.axisConfig.xAxis.font.fontFamily,
            fontWeight: args.config.axisConfig.xAxis.font.fontWeight,
            nMaxLineCount: 3
          },
          colors: {
            border: args.config.axisConfig.xAxis.font.fontColor,
            text: args.config.axisConfig.xAxis.font.fontColor
          }
        },
      }
    }
  }

  __buildOptions_module_labels(args) {
    var labelsData = this.buildData(args.labelsConfig.dataDefinition.series, args.externalData, args.metadata, args.config)
    var isHorizontal = this.isChartConfigHorizontal(args.config)
    var name = isHorizontal ? 'horizontal-labels' : 'top-labels'
    var axisConfig = isHorizontal ? args.labelsConfig.axisConfig.yAxis : args.labelsConfig.axisConfig.xAxis
    return {
      name: name,
      options: {
        data: labelsData,
        isAvg: false,
        labels: {
          offsetY: 20,
          fontSize: parseFloat(axisConfig.font.fontSize || axisConfig.font.size),
          fontFamily: axisConfig.font.fontFamily,
          fontWeight: axisConfig.font.fontWeight,
          fontColor: axisConfig.font.fontColor,
          fontOffsetCorrectionMultiplier: 33/50,
          minFontSize: 1,
          borderWidth: 1,
          rectPaddingX: 5,
          rectPaddingY: 2,
        },
        header: {
          enabled: axisConfig.showAxisLabel,
          textField: this.NVD3DataEntryKeyName,
          height: 80,
          width: 100,
          fontSize: parseFloat(axisConfig.font.fontSize || axisConfig.font.size),
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
    }
  }

  __buildOptions_module_table(args) {

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
    var chartLines = []
    for(var i = 0; i < args.yMetrics.length; i++) {
      var serie = args.yMetrics[i]
      var metricName = serie.value
      if(metricName === args.config.dataDefinition.yaxis.value) {
        chartLines.push(i)
      }
    }

    //prepare lines for table
    var tableFormatStrings = {}
    var tableLines = []
    for(var i = 0; i < args.yMetrics.length; i++) {
      var serie = args.yMetrics[i]
      var metricName = serie.value
      if(metricName !== args.config.dataDefinition.yaxis.value) {
        tableLines.push(i)
        var serieConfig = args.config.seriesConfigs[metricName]
        if(serieConfig != null) {
          tableFormatStrings[i] = serieConfig.dataLabel != null ? serieConfig.dataLabel.displayFormat : serieConfig.displayFormat
        }
      }
    }

    var attributeValue = Date.now()
    d3.select(args.tableContainer).attr(this.ChartWithTableContainerAttributeName, attributeValue)
    return {
      name: 'table',
      options: {
        enabled: true,
        squeezeChartHeight: true,
        container: '['+this.ChartWithTableContainerAttributeName+'="'+attributeValue+'"]',
        formatString: args.config.axisConfig.yAxis.displayFormat || '[green]0.0;[red]0.0;[black]0.0',
        metadata: {
          chart: {
            lines: chartLines
          },
          table: {
            lines: tableLines,
            formatStrings: tableFormatStrings,
            showHeadRow: args.tableProperties.headerRow
          }
        },

        rowLineHeight: 18,
        fontSize: 13,
        fontWeight: 'bold',
        fill: '#f5f5f5',
        stroke: '#bbbbbb',
        strokeWidth: 1,
        align: 'middle',
        valign: 'middle',
        // offsetY: 11,
        offsetY: -5,
        // offsetX: 100,
        maxNLines: 2,
        colors: {
          green: 'yellowgreen',
          red: 'brown'
        }
      }
    }
  }

  __buildOptions_module_title(args) {
    return {
      name: 'title',
      options: {
        enabled: true,
        text: args.title,
        height: 60,
        minWidth: 100,
        fontSize: 12,
        fontWeight: 'normal',
        fontFamily: 'Open Sans',
        fontColor: 'black',
        halign: 'middle',
        valign: 'middle',
        maxNLines: 3,
        isWordBreak: false,
        ellipsisToLastWord: false,
        tooltip: true,
        title: false
      }
    }
  }


  //config prepeparations
  isChartConfigHorizontal(config) {
    const horizontalChartsNames = [
      'MULTIBAR_HORIZONTAL',
      'STACKED_HORIZONTAL'
    ]
    return horizontalChartsNames.includes(config.chartType)
  }

  adjustConfig_setBounds_calcValues(data, bound, config, noOfTick, clipFactor) {
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
    if(clipFactor) {
      var clip = (maxValue - minValue) * clipFactor;
      minValue = minValue - clip;
    } else {
      if (minValue > 0) {
        minValue = 0;
      } else if (minValue < 0 && maxValue < 0 ) {
        maxValue = 0;
      }
    }

    var diff = Math.abs(maxValue - minValue);
    var tickGap = diff / parseFloat(noOfTick);

    return {
      minValue: minValue,
      maxValue: maxValue,
      tickGap: tickGap
    };
  }

  adjustConfig_setBounds(config, data) {
    var values;

    if (data && config.axisConfig && config.axisConfig.yAxis) {
      var clipFactor;
      if(config.axisConfig.yAxis.bound) {
        clipFactor = config.axisConfig.yAxis.bound.clipFactor;
      }
      var yBound = [];
      if(config.dataDefinition.yaxis) {
        yBound.push(config.dataDefinition.yaxis.value);
      } else {
        yBound = config.dataDefinition.series.map(function(item) {return item.value;});
      }

      values = this.adjustConfig_setBounds_calcValues(data, yBound, config, config.axisConfig.yAxis.noOfTick, clipFactor);

      config.axisConfig.yAxis.bound = {
        minValue: values.minValue,
        maxValue: values.maxValue
      };
      config.axisConfig.yAxis.unit = {
        major: values.tickGap
      };
    }
  }

  adjustConfig_swapAxisConfigs(config) {
    if(this.isChartConfigHorizontal(config)) {
      const yAxisConfig = config.axisConfig.yAxis || {}
      const xAxisConfig = config.axisConfig.xAxis || {}
      if(yAxisConfig.yBound) {
        yAxisConfig.xBound = yAxisConfig.yBound
        delete yAxisConfig.yBound
      }
      if(xAxisConfig.xBound) {
        xAxisConfig.yBound = xAxisConfig.xBound
        delete xAxisConfig.xBound
      }
      config.axisConfig.yAxis = config.axisConfig.xAxis
      config.axisConfig.xAxis = yAxisConfig
    }
  }

  adjustConfig(config, data) {
    Object.defaultsDeep(config, this.defaults.config)
    Object.defaultsDeep(config.axisConfig.xAxis.font, this.defaults.font)
    Object.defaultsDeep(config.axisConfig.yAxis.font, this.defaults.font)
    this.adjustConfig_swapAxisConfigs(config)
    this.adjustConfig_setBounds(config, data)
  }

  findConfig(type, configs) {
    var config;
    configs.forEach((c) => {
      if (c.chartType == type) {
        config = c
      }
    })
    return config
  }

  getConfig(types, configs, data) {
    var i, config
    for(i = 0; i < types.length; i++) {
      config = this.findConfig(types[i], configs)
      if(config != null) break
    }
    if(config != null) {
      this.adjustConfig(config, data)
    }
    return config
  }


  //properties preparations
  getProperties(properties) {
    Object.defaultsDeep(properties, this.defaults.properties)
    return properties
  }

  //convert all pieces of data and configurations into nvd3-acceptable options and data
  convert(args) {
    var target = args.target
    const originalTableContainer = args.tableContainer
    args = window.clone(args)
    args.tableContainer = originalTableContainer

    var config = this.getConfig(args.configTypes, args.configs, args.externalData)
    var properties = this.getProperties(args.properties)
    if(properties.height == null) {
      properties.height = args.height
    }

    //OPTIONS
    var options = this.buildOptions(config, properties)

    //format module
    this._buildOptions_module('format', options)
    //wrapper module
    this._buildOptions_module('wrapper', options)
    //nesting module
    if(config.dataDefinition.xaxis.length > 1) {
      this._buildOptions_module('nesting', options, {
        config: config,
        externalData: args.externalData
      })
    }
    //labels module
    // if(properties.enableLabels) {
      const labelsConfig = this.getConfig(['LABELS'], args.configs)
      if(labelsConfig != null) {
        this._buildOptions_module('labels', options, {
          config: config,
          labelsConfig: labelsConfig,
          externalData: args.externalData,
          metadata: args.metadata,
        })
      }
    // }

    //prepare yMetrics
    var yMetrics = []
    if (properties.showTable && properties.chartTableProperty != null) {
      yMetrics = properties.chartTableProperty.dataDefinition.filter((serie) => {
        var xMetric = this.getXMetricByGroupingLevel(config, 0)
        return serie.value != xMetric.value && serie.value != xMetric.displayValue
      })
      yMetrics.push(config.dataDefinition.yaxis)
    } else {
      if(config.dataDefinition.series != null) {
        yMetrics = config.dataDefinition.series
      } else {
        yMetrics = [config.dataDefinition.yaxis]
      }
    }

    //table module
    if (properties.showTable && properties.chartTableProperty != null) {
      this._buildOptions_module('table', options, {
        config: config,
        tableProperties: properties.chartTableProperty,
        yMetrics: yMetrics,
        tableContainer: args.tableContainer
      })
    }

    // //title module
    // if(properties.showTitle) {
    //   properties.showTitle = false
    //   this._buildOptions_module('title', options, {
    //     title: args.title
    //   })
    // }

    //DATA
    var data = this.buildData(yMetrics, args.externalData, args.metadata, config)

    //write results to target
    Object.assign(target, {
      options: options,
      data: data,
      config: config
    })
  }

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
  //     chart.selectAll('text').call(this.wrap, 12);

  //     var yaxislabel = d3.select('.nv-y .nv-axislabel')
  //     yaxislabel.call(this.wrapAxisLabel, 25);
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

  //   return Number(currValue) >= 0 ? this.convertColor(posColor) : this.convertColor(negColor);
  // }


}
