class TopLabelsModule extends LabelsModule {
  constructor(...args){
    super({
      name: 'top-labels',
      supportedCharts: [
        'multiBarChartExt'
      ]
    }, ...args)

    //additional defaults
    Object.defaultsDeep(this.options, {
      labels: {
        topPadding: 10
      }
    })

    //calculations
    const labelsHeight = Math.max(this.options.labels.fontSize + 1, this.options.labels.fontSize * this.options.labels.maxLineCount + 2 * this.options.labels.rectPaddingY)
    const headerHeight = this.options.header.fontSize * this.options.header.nMaxLineCount + 1
    const headerY = -this.options.labels.offset - labelsHeight / 2 - headerHeight / 2
    Object.mergeDeep(this.options, {
      labels: {
        height: labelsHeight
      },
      header: {
        y: headerY,
        height: headerHeight
      },
      minTopMargin: Math.max(this.options.minTopMargin, labelsHeight + this.options.labels.offset + this.options.labels.topPadding, Math.abs(headerY)),
      minLeftMargin: Math.max(this.options.minLeftMargin, this.options.header.width)
    })
  }

  _processForAvg() {
    //prepare data to be displayed
    const data = this.options.data
    let labelsData = []
    data[0].values.forEach((item, i) => {
      const columnVal = this.instance.extendedChart.y()(data[0].values[i])
      labelsData.push([columnVal])
    });

    //find start and end bars of each group
    const nvGroups = this.svg.selectAll('g.nv-group').filter(function(d, i) {
      return this.childNodes.length > 0
    })
    let startBars = nvGroups.filter((d, i) => {
      return i === 0
    }).selectAll('.nv-bar')[0].filter((bar) => {
      return d3.select(bar).style('display') !== 'none'
    })
    let endBars = nvGroups.filter((d, i) => {
      return i === nvGroups[0].length - 1
    }).selectAll('.nv-bar')[0].filter((bar) => {
      return d3.select(bar).style('display') !== 'none'
    })

    //draw labels
    for(let iGroup = 0; iGroup < labelsData.length; iGroup++) {
      for (let iBar = 0; iBar < labelsData[iGroup].length; iBar++) {
        const startBar = startBars[iGroup]
        const endBar = endBars[iGroup]
        const startBard3 = d3.select(startBar)

        const groupWidth = endBar.getBoundingClientRect().right - startBar.getBoundingClientRect().left
        const groupX = d3.transform(startBard3.attr("transform")).translate[0] + parseFloat(startBard3.attr('x'))
        const y = -this.options.labels.offset - this.options.labels.rectPaddingY

        const formatted = this.format(labelsData[iGroup][iBar])

        const idTextElem = `${this.instance.id}-${iGroup}-${iBar}-label-text`
        if(this.options.labels.doWrap) {
          this._wrapLabels({
            x: groupX,
            y: y - this.options.labels.fontSize,
            width: groupWidth,
            formatted,
            idTextElem
          })
        } else {
          const textElem = this.groupLabelsElement.append('text')
          textElem.attrs({y}).styles({
            // fill: this.options.colors.labelFont,
            fill: formatted.color,
            'font-size': this.options.labels.fontSize,
            'font-family': this.options.labels.fontFamily
          })
          .text(formatted.text)

          const bbox = textElem.node().getBBox()
          const x = d3.transform(d3.select(startBar).attr("transform")).translate[0] + parseFloat(d3.select(startBar).attr('x')) + groupWidth / 2 - bbox.width / 2
          textElem.attrs({x})

          this._drawBorders(this.groupLabelsElement, textElem, groupWidth)
        }
      }
    }
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

    const nvEnabledGroups = this.svg.selectAll('g.nv-group').filter(function(d, i) {
      return this.childNodes.length > 0
    })
    for(let iGroup = 0; iGroup < labelsData.length; iGroup++) {
      for (let iBar = 0; iBar < labelsData[iGroup].length; iBar++) {
        const bar = nvEnabledGroups.filter((d, i) => {
          return i === iBar
        }).selectAll('.nv-bar')[0].filter((bar) => {
          return d3.select(bar).style('display') !== 'none'
        }).filter((b, i) => {
          return i === iGroup
        })[0]
        const bard3 = d3.select(bar)

        const barWidth = bar.getBoundingClientRect().right - bar.getBoundingClientRect().left
        const barX = d3.transform(bard3.attr("transform")).translate[0] + parseFloat(bard3.attr('x'))
        const y = -this.options.labels.offset - this.options.labels.rectPaddingY

        const formatted = this.format(labelsData[iGroup][iBar])

        const idTextElem = `${this.instance.id}-${iGroup}-${iBar}-label-text`
        if(this.options.labels.doWrap) {
          this._wrapLabels({
            x: barX,
            y: y - this.options.labels.fontSize,
            width: barWidth,
            formatted,
            idTextElem
          })
        } else {
          const textElem = this.groupLabelsElement.append('text')
          textElem.attrs({y}).styles({
            fill: formatted.color,
            'font-size': this.options.labels.fontSize,
            'font-family': this.options.labels.fontFamily
          })
          .text(formatted.text)

          const bbox = textElem.node().getBBox()
          const x = barX + barWidth / 2 - bbox.width / 2
          textElem.attrs({x})
          this._drawBorders(this.groupLabelsElement, textElem, barWidth)
        }
      }
    }
  }

  _wrapLabels(opts) {
    const g = this.groupLabelsElement.append('g')
    let wrapOptions = {
      containerX: opts.x,
      containerY: opts.y,
      x: 0,
      y: 0,
      width: opts.width,
      height: this.options.labels.height,
      fontSize: this.options.labels.fontSize,
      fontWeight: this.options.labels.fontWeight,
      textAnchor: 'middle',
      verticalAlign: 'middle',
      lineHeight: this.options.labels.fontSize,
      fontFamily: this.options.labels.fontFamily,
      fontColor: opts.formatted.color,
      maxLineCount: this.options.labels.maxLineCount,
      id: opts.idTextElem,
      renderCallback: (info) => {
        this._drawBorders(g, info.textElem, opts.width)
      },
      tooltip: true,
      title:false
    }
    this.instance.utils.textWrap.fn({
      text: opts.formatted.text,
      targetElement: g,
      options: wrapOptions
    })
  }

  _drawBorders(g, textElem, maxWidth) {
    let bbox = textElem.node().getBBox()
    //calc dimensions
    const wantedWidth = bbox.width + 2 * this.options.labels.rectPaddingX
    let width
    let rectPaddingX
    if(wantedWidth > maxWidth) {
      rectPaddingX = Math.max(0, (maxWidth - wantedWidth) / 2)
      width = Math.min(maxWidth, bbox.width + 2 * rectPaddingX)
      if(bbox.width > width) {
        bbox.x += (bbox.width - width) / 2
        bbox.width = width
      }
    } else {
      width = wantedWidth
      rectPaddingX = this.options.labels.rectPaddingX
    }
    const height = this.options.labels.height
    const x = bbox.x - rectPaddingX
    const y = bbox.y - this.options.labels.rectPaddingY + (bbox.height - this.options.labels.fontSize) * (1 - this.options.labels.fontOffsetCorrectionMultiplier)
    //add rect as border
    g.append("rect").attrs({
      x,
      y,
      width,
      height,
      stroke: this.options.colors.labelBorder,
      'stroke-width': this.options.labels.borderWidth,
      fill: 'none'
    })
    //add clip-path to clip anything outside rect
    const idClipPath = `${textElem.attr('id')}-clip-path`
    const elemClipPath = g.append('clipPath').attrs({
      id: idClipPath
    })
    elemClipPath.append('rect').attrs({
      x,
      y,
      width,
      height
    })
    textElem.attrs({
      'clip-path': `url(#${idClipPath})`
    })
  }
}

nv.Module.register(TopLabelsModule)
