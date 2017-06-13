class HorizontalLabelsModule extends LabelsModule {
  constructor(...args) {
    super({
      name: 'horizontal-labels',
      supportedCharts: [
        'multiBarHorizontalChartExt'
      ]
    }, ...args)

    Object.mergeDeep(this.options, {
      header: {
        textAnchor: 'middle'
      }
    })
  }

  _getContainerWidth() {
    return parseFloat(this.svg.select('.nv-y .nv-axis path.domain').node().getBBox().width)
  }

  process() {
    const resultingPromise = super.process()


    //very dirty hack because path.domain of yaxis doesnt draw syncronously, but calculations must be based on that
    resultingPromise.then(() => {
      let i = 0
      const interval = setInterval(() => {
        this.__preprocess()
        super.process()
        if(++i == 20) {
          clearInterval(interval)
        }
      }, 100)
    })


    return resultingPromise
  }

  _prepareOptions() {
    if(this.options.header.enabled) {
      this.options.minTopMargin = this.options.header.height
    }
  }

  _calcAdjustedSizes(barHeight) {
    const wantedYPadding = (barHeight - this.options.labels.fontSize) / 2

    let fontSize
    let padding

    if(wantedYPadding <= 0) {
      fontSize = Math.max(barHeight, this.options.labels.minFontSize)
      padding = 0
    } else {
      fontSize = this.options.labels.fontSize
      padding = wantedYPadding
    }

    return {fontSize, padding}
  }

  _adjustTextElements(textElems) {
    //calc max width of labels
    let maxWidth = 0
    for(var i = 0; i < textElems.length; i++) {
      const textElem = textElems[i].elem
      const bbox = textElem.getBBox()
      if(maxWidth < bbox.width) {
        maxWidth = bbox.width
      }
    }
    this.maxLabelTextWidth = maxWidth

    //set x to texts, draw rects
    for(var i = 0; i < textElems.length; i++) {
      const textElem = textElems[i]

      const bbox = textElem.elem.getBBox()
      const width = bbox.width
      const correction = (maxWidth - width) / 2
      const rectPaddingX = this.options.labels.rectPaddingX + correction
      const rectPaddingY = Math.min(this.options.labels.rectPaddingY, textElem.adjustedSizes.padding)
      const x = this._getContainerWidth() + this.options.labels.offset + rectPaddingX

      d3.select(textElem.elem).attrs({x})

      this.groupLabelsElement.append('rect').attrs({
        x: x - rectPaddingX,
        y: bbox.y - rectPaddingY + (bbox.height - textElem.adjustedSizes.fontSize) * (1 - this.options.labels.fontOffsetCorrectionMultiplier),
        width: width + 2 * rectPaddingX,
        height: textElem.adjustedSizes.fontSize + 2 * rectPaddingY,
        stroke: this.options.colors.labelBorder,
        'stroke-width': this.options.labels.borderWidth,
        fill: 'none'
      })
    }

    this.options.minRightMargin = this.maxLabelTextWidth + this.options.labels.offset + 2 * this.options.labels.rectPaddingX
  }

  _processForAvg() {
    //prepare labels data
    var data = this.options.data
    let labelsData = []
    data[0].values.forEach((item, i) => {
      const columnVal = this.instance.extendedChart.y()(data[0].values[i])
      labelsData.push(columnVal)
    });

    //draw labels
    const nvEnabledGroups = this.svg.selectAll('g.nv-group').filter(function(d, i) {
      return this.childNodes.length > 0
    })
    let startBars = nvEnabledGroups.filter((d, i) => {
      return i === 0
    }).selectAll('.nv-bar')[0].filter((bar) => {
      return d3.select(bar).style('display') !== 'none'
    })
    let endBars = nvEnabledGroups.filter((d, i) => {
      return i === nvEnabledGroups[0].length - 1
    }).selectAll('.nv-bar')[0].filter((bar) => {
      return d3.select(bar).style('display') !== 'none'
    })

    let textElems = []
    for(let i = 0; i < startBars.length; i++) {
      let startBar = startBars[i]
      let endBar = endBars[i]

      const groupHeight = endBar.getBoundingClientRect().bottom - startBar.getBoundingClientRect().top
      const adjustedSizes = this._calcAdjustedSizes(groupHeight)
      const y = d3.transform(d3.select(startBar).attr('transform')).translate[1] + groupHeight / 2 + adjustedSizes.fontSize * this.options.labels.fontOffsetCorrectionMultiplier

      const formatted = this.format(labelsData[i])
      let textElem = this.groupLabelsElement.append('text')
      textElem.attrs({
        y
      }).styles({
        // fill: this.options.colors.labelFont,
        fill: formatted.color,
        'font-size': adjustedSizes.fontSize,
        'font-family': this.options.labels.fontFamily
      })
      .text(formatted.text)
      textElems.push({
        elem: textElem.node(),
        adjustedSizes,
        text: labelsData[i]
      })
    }

    this._adjustTextElements(textElems)
  }

  _processForPointChange() {
    //prepare labels data
    const chartData = this.instance.selection.datum()
    const data = this.options.data
    let labelsData = []
    data[0].values.forEach((item, i) => {
      let labelsDataEntry = []
      for(var iD = 0; iD < data.length; iD++) {
        if(chartData[iD].disabled) {
          continue
        }
        const columnVal = this.instance.extendedChart.y()(data[iD].values[i])
        labelsDataEntry.push(columnVal)
        if(this.instance.extendedChart.stacked()){
          break
        }
      }
      labelsData.push(labelsDataEntry)
    });

    //draw labels
    const nvEnabledGroups = this.svg.selectAll('g.nv-group').filter(function(d, i) {
      return this.childNodes.length > 0
    })
    let textElems = []
    for(let iGroup = 0; iGroup < labelsData.length; iGroup++) {
      for (let iBar = 0; iBar < labelsData[iGroup].length; iBar++) {
        const bar = nvEnabledGroups.filter((d, i) => {
          return i === iBar
        }).selectAll('.nv-bar')[0].filter((bar) => {
          return d3.select(bar).style('display') !== 'none'
        }).filter((b, i) => {
          return i === iGroup
        })[0]

        const barHeight = bar.getBoundingClientRect().bottom - bar.getBoundingClientRect().top
        const adjustedSizes = this._calcAdjustedSizes(barHeight)
        const y = d3.transform(d3.select(bar).attr('transform')).translate[1] + barHeight / 2 + adjustedSizes.fontSize * this.options.labels.fontOffsetCorrectionMultiplier

        const formatted = this.format(labelsData[iGroup][iBar])
        const textElem = this.groupLabelsElement.append('text')
        textElem.attrs({
          y
        }).styles({
          // fill: this.options.colors.labelFont,
          fill: formatted.color,
          'font-size': adjustedSizes.fontSize,
          'font-family': this.options.labels.fontFamily
        })
        .text(formatted.text)
        textElems.push({
          elem: textElem.node(),
          adjustedSizes,
          text: formatted.text
        })
      }
    }

    this._adjustTextElements(textElems)
  }

  _wrapLabels(opts) {
    const g = this.groupLabelsElement.append('g')
    let wrapOptions = {
      containerX: opts.x,
      containerY: opts.y,
      x: 0,
      y: 0,
      width: opts.width,
      height: this.options.labels.fontSize + 1,
      fontSize: this.options.labels.fontSize,
      fontWeight: this.options.labels.fontWeight,
      textAnchor: 'middle',
      verticalAlign: 'middle',
      lineHeight: this.options.labels.fontSize,
      fontFamily: this.options.labels.fontFamily,
      fontColor: opts.formatted.color,
      maxLineCount: 1,
      id: opts.idTextElem,
      renderCallback: (info) => {
        this._drawBorders(g, info.textElem, opts.width)
      },
      tooltip: true,
      title: false
    }
    this.instance.utils.textWrap.fn({
      text: opts.formatted.text,
      targetElement: g,
      options: wrapOptions
    })
  }

}

nv.Module.register(HorizontalLabelsModule)
