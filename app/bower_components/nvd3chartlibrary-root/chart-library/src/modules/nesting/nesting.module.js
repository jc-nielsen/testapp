class NestingModule extends nv.Module {
  // AVAILABLE OPTIONS
  // barsInGroup: number
  // groupName: function(nOfGroup: number)
  // groupLabel: {
  //    height: number
  //    borderWhitespaceYOffset: number
  //    text: {
  //      width: number
  //      height: number
  //      fontSize: number
  //      nMaxLineCount: number
  //    }
  //    colors: {
  //      border: string
  //      text: string
  //    }
  // }
  constructor(instance, options){
    super({
      name: 'nesting',
      supportedCharts: [
        'multiBarChartExt',
        'multiBarHorizontalChartExt'
      ]
    }, instance, options, {
      insertEmptyBars: true,
      tickLabelsOutside: false,
      groupId: (n) => {
        return n
      },
      groupName: (n) => {
        return n
      },
      relativeAdjustmentGap: 5,
      groupLabel: {
        height: 55,
        borderWhitespaceYOffset: 20,
        minSideGap: 3,
        text: {
          width: 120,
          height: 50,
          fontSize: 13,
          nMaxLineCount: 1
        },
        colors: {
          border: '#CCCCCC',
          text: '#999999'
        }
      }
    })

  }

  __setOptionsToVerticalChart() {
    //margin
    this.options.minBottomMargin = this.options.groupLabel.height + this.options.groupLabel.text.height / 2
    //reduceXTicks
    this.instance.extendedChart.reduceXTicks(false)
  }

  __setOptionsToHorizontalChart() {

    //margin
    this.options.minLeftMargin = this.options.groupLabel.height + this.options.groupLabel.text.height / 2

    // //xAxis.axisLabelDistance
    // const wantedXaxisTickPadding = this.instance.extendedChart.xAxis.tickPadding()
    // const newXaxisTickPadding = originalLeftMargin + wantedXaxisTickPadding - newLeftMargin
    // this.instance.extendedChart.xAxis.tickPadding(newXaxisTickPadding)
  }

  _setOptionsToChart() {
    //x
    let xds = {}
    const xOriginal = this.instance.extendedChart.x()
    this.instance.extendedChart.x((d, iSeriesEntry) => {
      iSeriesEntry = iSeriesEntry != null ? iSeriesEntry : d.iSeriesEntry
      let result
      if(d.isEmptyBarForNesting) {
        const xField = this.instance.extendedChart.xField()
        result = d[xField]
      } else {
        const originalResult = xOriginal(d)
        const groupN = this.__calcGroupN(iSeriesEntry)
        result = `${originalResult} ${this.options.groupId(groupN)}_${iSeriesEntry}`
        xds[result] = d
        xds[result].iSeriesEntry = iSeriesEntry
      }
      return result
    })
    //xAxis.tickFormat
    const data = this.instance.selection.datum()
    const xAxisTickFormatOriginal = this.instance.extendedChart.xAxis.tickFormat()
    this.instance.extendedChart.xAxis.tickFormat((str) => {
      const xd = xds[str]
      if(xd != null) {
        str = xOriginal(xd)
        const originalResult = xAxisTickFormatOriginal(str)
        if (this.options.insertEmptyBars && xd.iSeriesEntry % (this.options.barsInGroup + 1) === this.options.barsInGroup) {
          return ""
        } else {
          return originalResult
        }
      } else {
        return ""
      }
    })

    switch(this.instance.config.name) {
      case 'multiBarChartExt':
        this.__setOptionsToVerticalChart()
        break;
      case 'multiBarHorizontalChartExt':
        this.__setOptionsToHorizontalChart()
        break;
    }
  }

  __calcGroupN(nSerieEntry) {
    return Math.floor(nSerieEntry / (this.options.barsInGroup + 1))
  }

  // __makeUniqueXField(serieEntries, nSerieEntry) {
  //   const xField = this.instance.extendedChart.xField()
  //   const groupN = Math.floor(nSerieEntry / this.options.barsInGroup)
  //   const groupId = this.options.groupId(groupN)
  //   serieEntries[nSerieEntry][xField] = `${serieEntries[nSerieEntry][xField]} ${groupId}`
  // }

  // __getDisplayedX(serieEntry) {
  //   const xDisplayField = this.instance.extendedChart.xDisplayField()
  //   return serieEntry[xDisplayField]
  // }

  _prepareData() {
    const data = this.instance.selection.datum()

    if(this.options.insertEmptyBars && !data.__isModified) {

      const xField = this.instance.extendedChart.xField()
      const yField = this.instance.extendedChart.yField()

      // //set unique x-axis values
      // for(let i = 0; i < data.length; i++) {
      //   for(let j = 0; j < data[i].values.length; j++) {
      //     this.__makeUniqueXField(data[i].values, j)
      //   }
      // }

      //inserting 'invisible' bars to split into groups
      const fnGroups = data[0].values.length / this.options.barsInGroup
      const nGroups = Math.floor(fnGroups)
      let emptyColumnsToInsertCount = nGroups
      if(fnGroups == nGroups) {
        emptyColumnsToInsertCount = nGroups - 1
      }
      for(var i = 0; i < emptyColumnsToInsertCount; i++) {
        const positionToInsert = ((i + 1) * this.options.barsInGroup) + i

        for(let dI = 0; dI < data.length; dI++) {
          data[dI].values.splice(positionToInsert, 0, {
            [xField]: positionToInsert,
            [yField]: 0,
            isEmptyBarForNesting: true
          })
        }
      }

      data.__isModified = true;
    }
  }

  _calcOrientation() {
    switch(this.instance.config.name) {
      case 'multiBarChartExt':
        this.orientation = 'vertical'
        break;
      case 'multiBarHorizontalChartExt':
        this.orientation = 'horizontal'
        break;
    }
  }

  _preserveOriginalOptions() {
    this.originalOptions = Object.copyDeep(this.options)
  }

  prepare() {
    this._calcOrientation()
    this._setOptionsToChart()
    this._prepareData()
    this._preserveOriginalOptions()
  }

  beforeInstanceUpdate() {
    this.process()
  }


  _checkTitlesAndTryToResizeNesting_vertical() {
    Object.mergeDeep(this.options, {
      groupLabel: {
        height: this.originalOptions.groupLabel.height,
        borderWhitespaceYOffset: this.originalOptions.groupLabel.borderWhitespaceYOffset
      }
    })

    let wereAdjustmentsApplied = false
    //try to adjust due to axis labels
    const tryToAdjust = (elems, sizeFn) => {
      elems[0].forEach((elem) => {
        const elemd3 = d3.select(elem)
        if(elem.innerHTML && elemd3.style('visibility') != 'hidden' && elemd3.style('display') != 'none') {
          const minBorderWhitespaceYOffset_allowedDueToElement = sizeFn(elemd3) + this.options.relativeAdjustmentGap
          this.options.groupLabel.borderWhitespaceYOffset = Math.max(this.options.groupLabel.borderWhitespaceYOffset, minBorderWhitespaceYOffset_allowedDueToElement)
          const maxBorderWhitespaceYOffset_wantedByNesting = this.options.groupLabel.height - this.options.groupLabel.text.height / 2
          if(this.options.groupLabel.borderWhitespaceYOffset > maxBorderWhitespaceYOffset_wantedByNesting) {
            const correction = this.options.groupLabel.borderWhitespaceYOffset - maxBorderWhitespaceYOffset_wantedByNesting
            this.options.groupLabel.height += correction
          }
          wereAdjustmentsApplied = true
        }
      })
    }
    tryToAdjust(this.svg.selectAll('.nv-x .nv-axislabel'), (elemd3) => {
      return parseFloat(elemd3.attr('y')) + elemd3.node().getBBox().height
    })
    tryToAdjust(this.svg.selectAll('.nv-x .wrapper-module-product-axis-label'), (elemd3) => {
      return d3.transform(d3.select(elemd3.node().parentNode).attr('transform')).translate[1] + elemd3.node().getBBox().height
    })
    tryToAdjust(this.svg.selectAll('.nv-x .tick > text'), (elemd3) => {
      return parseFloat(elemd3.attr('y')) + elemd3.node().getBBox().height
    })
    tryToAdjust(this.svg.selectAll('.nv-x .tick .wrapper-module-product-axis-tick-label'), (elemd3) => {
      return d3.transform(d3.select(elemd3.node().parentNode).attr('transform')).translate[1] + elemd3.node().getBBox().height
    })
    if(wereAdjustmentsApplied) {
      if(this.SKIP_CHECK_NEXT_UPDATE_VERTICAL) {
        this.SKIP_CHECK_NEXT_UPDATE_VERTICAL = false
        return
      }
      this.__setOptionsToVerticalChart()
      this.SKIP_CHECK_NEXT_UPDATE_VERTICAL = true
      this.instance.scheduleChartReupdateAfterModulesChainFinished()
    }
  }

  _checkTitlesAndTryToResizeNesting_horizontal() {
    Object.mergeDeep(this.options, {
      groupLabel: {
        height: this.originalOptions.groupLabel.height,
        borderWhitespaceYOffset: this.originalOptions.groupLabel.borderWhitespaceYOffset
      }
    })

    let wereAdjustmentsApplied = false
    //try to adjust due to axis labels
    const tryToAdjust = (elems, sizeFn) => {
      elems[0].forEach((elem) => {
        const elemd3 = d3.select(elem)
        if(elem.innerHTML && elemd3.style('visibility') != 'hidden' && elemd3.style('display') != 'none') {
          const minBorderWhitespaceYOffset_allowedDueToElement = sizeFn(elemd3) + this.options.relativeAdjustmentGap
          this.options.groupLabel.borderWhitespaceYOffset = Math.max(this.options.groupLabel.borderWhitespaceYOffset, minBorderWhitespaceYOffset_allowedDueToElement)
          const maxBorderWhitespaceYOffset_wantedByNesting = this.options.groupLabel.height - this.options.groupLabel.text.height / 2
          if(this.options.groupLabel.borderWhitespaceYOffset > maxBorderWhitespaceYOffset_wantedByNesting) {
            const correction = this.options.groupLabel.borderWhitespaceYOffset - maxBorderWhitespaceYOffset_wantedByNesting
            this.options.groupLabel.height += correction
          }
          wereAdjustmentsApplied = true
        }
      })
    }
    tryToAdjust(this.svg.selectAll('.nv-x .nv-axislabel'), (elemd3) => {
      return Math.abs(parseFloat(elemd3.attr('y')) - elemd3.node().getBBox().height)
    })
    tryToAdjust(this.svg.selectAll('.nv-x .wrapper-module-product-axis-label'), (elemd3) => {
      return Math.abs(d3.transform(d3.select(elemd3.node().parentNode).attr('transform')).translate[0] + elemd3.node().getBBox().y)
    })
    tryToAdjust(this.svg.selectAll('.nv-x .tick > text'), (elemd3) => {
      return Math.abs(parseFloat(elemd3.attr('x')) - elemd3.node().getBBox().width)
    })
    tryToAdjust(this.svg.selectAll('.nv-x .tick .wrapper-module-product-axis-tick-label'), (elemd3) => {
      return Math.abs(d3.transform(d3.select(elemd3.node().parentNode).attr('transform')).translate[0] + elemd3.node().getBBox().x)
    })
    if(wereAdjustmentsApplied) {
      if(this.SKIP_CHECK_NEXT_UPDATE_HORIZONTAL) {
        this.SKIP_CHECK_NEXT_UPDATE_HORIZONTAL = false
        return
      }
      this.__setOptionsToHorizontalChart()
      this.SKIP_CHECK_NEXT_UPDATE_HORIZONTAL = true
      this.instance.scheduleChartReupdateAfterModulesChainFinished()
    }
  }

  _checkTitlesAndTryToResizeNesting() {
    switch(this.instance.config.name) {
      case 'multiBarChartExt':
        this._checkTitlesAndTryToResizeNesting_vertical()
        break;
      case 'multiBarHorizontalChartExt':
        this._checkTitlesAndTryToResizeNesting_horizontal()
        break;
    }
  }

  process() {
    this._checkTitlesAndTryToResizeNesting()

    //hide additional bars
    if(this.options.insertEmptyBars) {
      this.svg.selectAll('.nv-group')[0].forEach((group) => {
        d3.select(group).selectAll('.nv-bar')[0].forEach((bar, i) => {
          bar = d3.select(bar)
          if((i + 1) % (this.options.barsInGroup + 1) == 0) {
            bar.style('display', 'none')
          }
        })
      })
    }

    switch(this.orientation) {
      case 'vertical':
        this.__processSpecificForVertical()
        break;
      case 'horizontal':
        this.__processSpecificForHorizontal()
        break;
    }
  }

  __processSpecificForVertical() {
    var startGroupBars = this.svg.selectAll("g.nv-group")
      .filter((d, i) => i === 0)
      .selectAll('.nv-bar')
      .filter((d, i) => {
        return i % (this.options.barsInGroup + (this.options.insertEmptyBars ? 1 : 0)) == 0
      })

    var svgNvGroupCount = this.svg.selectAll("g.nv-group")[0].filter((g) => {
      return d3.select(g).selectAll('.nv-bar')[0].length > 0
    }).length;

    var endGroupBars = this.svg.selectAll("g.nv-group")
      .filter((d, i) => i === (svgNvGroupCount - 1))
      .selectAll('.nv-bar')
      .filter((d, i) => {
        return i % (this.options.barsInGroup + (this.options.insertEmptyBars ? 1 : 0)) == (this.options.barsInGroup - 1)
      })

    var columnWidth = startGroupBars[0][0].getBBox().width;

    var isStacked = this.instance.extendedChart.stacked();
    if(!isStacked) {
      columnWidth = columnWidth * svgNvGroupCount;
    }

    const containerHeight = parseFloat(this.svg.select(".nv-y path.domain").node().getBBox().height)

    for(var i = 0; i < endGroupBars[0].length; i++) {
      let startBar = startGroupBars[0][i]
      let endBar = endGroupBars[0][i]


      let elemForAppending = this.svg.select('.nv-barsWrap')

      const groupWidth = endBar.getBoundingClientRect().right - startBar.getBoundingClientRect().left
      const groupLabelX = startBar.transform.baseVal.consolidate().matrix.e
      const groupLabelY = containerHeight

      //draw label rect with borders
      let rect = elemForAppending.append("rect");
      rect.attrs({
        class: "dp-bar-chart-label",
        x: groupLabelX,
        y: groupLabelY,
        width: groupWidth,
        height: this.options.groupLabel.height,
      }).styles({
        "stroke": this.options.groupLabel.colors.border,
        "fill": "none",
        "stroke-width": 2,
        "stroke-dasharray": `0 ${groupWidth + this.options.groupLabel.borderWhitespaceYOffset} ${groupWidth + 2 * this.options.groupLabel.height - this.options.groupLabel.borderWhitespaceYOffset * 2} ${this.options.groupLabel.borderWhitespaceYOffset}`
      })
      this.appendedElements.push(rect)

      //draw text
      const labelTextWidth = Math.max(0, Math.min(groupWidth - 2 * this.options.groupLabel.minSideGap, this.options.groupLabel.text.width))
      const textX = groupLabelX + (groupWidth - labelTextWidth) / 2
      const textY = groupLabelY + this.options.groupLabel.height - this.options.groupLabel.text.height / 2
      let rectWhiteBg = elemForAppending.append("rect");
      rectWhiteBg.attrs({
        class: "dp-bar-chart-label-bg",
        x: textX,
        y: textY,
        width: labelTextWidth,
        height: this.options.groupLabel.text.height
      }).styles({
        "fill": "#FFFFFF"
      })
      this.appendedElements.push(rectWhiteBg)

      let rectTitle = elemForAppending.append("g");
      rectTitle.attrs({
        class: "dp-bar-chart-label-bg",
        transform: `translate(${textX},${textY})`,
        width: labelTextWidth,
        height: this.options.groupLabel.text.height
      })
      this.appendedElements.push(rectTitle)

      const text = Function.isFunction(this.options.groupName) ? this.options.groupName(i) : i
      this.instance.utils.textWrap.fn({
        text,
        targetElement: rectTitle,
        options: {
          width: labelTextWidth,
          height: this.options.groupLabel.text.height,
          fontSize: this.options.groupLabel.text.fontSize,
          fontColor: this.options.groupLabel.colors.text,
          maxLineCount: this.options.groupLabel.text.nMaxLineCount,
          textAnchor: 'middle',
          verticalAlign: 'middle',
          tooltip: true,
          title:false
        }
      });
    }
  }

  __processSpecificForHorizontal() {
    var startGroupBars = this.svg.selectAll("g.nv-group")
      .filter((d, i) => i === 0)
      .selectAll('.nv-bar')
      .filter((d, i) => {
        return i % (this.options.barsInGroup + (this.options.insertEmptyBars ? 1 : 0)) == 0
      })

    var svgNvGroupCount = this.svg.selectAll("g.nv-group")[0].filter((g) => {
      return d3.select(g).selectAll('.nv-bar')[0].length > 0
    }).length;

    var endGroupBars = this.svg.selectAll("g.nv-group")
      .filter((d, i) => i === svgNvGroupCount - 1)
      .selectAll('.nv-bar')
      .filter((d, i) => {
        return (i % (this.options.barsInGroup + (this.options.insertEmptyBars ? 1 : 0)) == (this.options.barsInGroup - 1))
      })

    var columnHeight = startGroupBars[0][0].getBBox().height;

    var isStacked = this.instance.extendedChart.stacked();
    if(!isStacked) {
      columnHeight = columnHeight * svgNvGroupCount;
    }

    for(var i = 0; i < endGroupBars[0].length; i++) {
      let startBar = startGroupBars[0][i]
      let endBar = endGroupBars[0][i]

      const groupHeight = endBar.getBoundingClientRect().bottom - startBar.getBoundingClientRect().top

      let elemForAppending = this.svg.select('.nv-barsWrap')

      const groupLabelX = -this.options.groupLabel.height
      const groupLabelY = startBar.transform.baseVal.consolidate().matrix.f

      //draw label rect with borders
      let rect = elemForAppending.append("rect");
      rect.attrs({
        class: "dp-bar-chart-label",
        transform: `translate(${groupLabelX}, ${groupLabelY})`,
        width: this.options.groupLabel.height,
        height: groupHeight,
      }).styles({
        "stroke": this.options.groupLabel.colors.border,
        "fill": "none",
        "stroke-width": 2,
        "stroke-dasharray": `${this.options.groupLabel.height - this.options.groupLabel.borderWhitespaceYOffset} ${groupHeight + 2 * this.options.groupLabel.borderWhitespaceYOffset} ${groupHeight + 2 * this.options.groupLabel.height - this.options.groupLabel.borderWhitespaceYOffset * 2}`
      })
      this.appendedElements.push(rect)

      //draw text
      const textTransformStr = `translate(${groupLabelX - this.options.groupLabel.text.height / 2},${groupLabelY + this.options.groupLabel.text.width + (groupHeight - this.options.groupLabel.text.width) / 2})rotate(-90)`
      let rectWhiteBg = elemForAppending.append("rect");
      rectWhiteBg.attrs({
        class: "dp-bar-chart-label-bg",
        transform: textTransformStr,
        width: this.options.groupLabel.text.width,
        height: this.options.groupLabel.text.height
      }).styles({
        "fill": "#FFFFFF"
      })
      this.appendedElements.push(rectWhiteBg)

      let rectTitle = elemForAppending.append("g");
      rectTitle.attrs({
        class: "dp-bar-chart-label-bg",
        transform: textTransformStr,
        width: this.options.groupLabel.text.width,
        height: this.options.groupLabel.text.height
      })
      this.appendedElements.push(rectTitle)

      const text = Function.isFunction(this.options.groupName) ? this.options.groupName(i) : i
      this.instance.utils.textWrap.fn({
        text,
        targetElement: rectTitle,
        options: {
          width: this.options.groupLabel.text.width,
          height: this.options.groupLabel.text.height,
          fontSize: this.options.groupLabel.text.fontSize,
          fontColor: this.options.groupLabel.colors.text,
          maxLineCount: this.options.groupLabel.text.nMaxLineCount,
          textAnchor: 'middle',
          verticalAlign: 'middle',
          tooltip: true,
          title:false
        }
      })

      // move bars labels
      if(this.options.tickLabelsOutside) {
        const labelHorizontalCorrection = this.options.groupLabel.height + this.options.groupLabel.text.height / 2
        this.svg.selectAll('.nv-x .tick text')[0].forEach((label) => {
          label = d3.select(label)
          let x = label.attr('x') || 0
          label.attr('transform', `translate(${-labelHorizontalCorrection},0)`)
        })
      }
    }
  }
}

nv.Module.register(NestingModule)
