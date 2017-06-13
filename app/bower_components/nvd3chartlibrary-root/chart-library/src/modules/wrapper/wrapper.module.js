class WrapperModule extends nv.Module {
  constructor(instance, options){
    super({
      name: 'wrapper',
      // supportedCharts: ['*']
      supportedCharts: [
        'multiBarChartExt',
        'multiBarHorizontalChartExt',
        'waterfall',
        // 'multiChartExt'
      ]
    }, instance, options, {
      tooltipMaxWidth: 800,
      tooltipMinWidth: 100,
      tooltipAutoWidth: true,
      tooltipContentGenerator: (d) => {
        let tooltipWidth
        if(this.options.tooltipAutoWidth) {
          const tooltipPossibleLeftWidth = d3.event.clientX - this.tooltip.distance() - 50
          const tooltipPossibleRightWidth = window.innerWidth - d3.event.clientX - this.tooltip.distance() - 50
          tooltipWidth = Math.max(tooltipPossibleLeftWidth, tooltipPossibleRightWidth)
          tooltipWidth = Math.max(tooltipWidth, this.options.tooltipMinWidth)
          tooltipWidth = Math.min(tooltipWidth, this.options.tooltipMaxWidth)
        } else {
          tooltipWidth = this.options.tooltipMaxWidth
        }
        return `
          <div
            style='
              padding: 5px;
              max-width: ${tooltipWidth}px;
              white-space: normal;
              text-align: center;
              word-wrap: break-word;
            '
          >
            ${d.value}
          </div>
        `
      },
      relativeAdjustmentGap: 5,
      enableAutopositioning: true,
      common: {
        space: 40,
        distance: 5,
        fontSize: 12,
        valign: 'middle',
        halign: 'middle',
        maxLineCount: 3,
        padding: 5,
        enableTooltips: true,
        isWordBreak: false,
        doClipPath: false,
        dontWrapNumbers: false,
        tooltip: true,
        title: true,
      },
      xTicks: {
        enabled: true,
        space: null,
        distance: instance != null ? instance.extendedChart.xAxis.tickPadding() : null,
        fontSize: instance != null ? instance.extendedChart.xAxis.fontSize() : null,
        fontWeight: null,
        fontFamily: null,
        fontColor: null,
        valign: null,
        halign: null,
        maxLineCount: null,
        padding: 5,
        enableTooltips: false,
        isWordBreak: null,
        doClipPath: null,
        dontWrapNumbers: null
      },
      yTicks: {
        enabled: true,
        space: null,
        distance: instance != null ? instance.extendedChart.yAxis.tickPadding() : null,
        fontSize: instance != null ? instance.extendedChart.yAxis.fontSize() : null,
        fontWeight: null,
        fontFamily: null,
        fontColor: null,
        valign: null,
        halign: null,
        maxLineCount: null,
        padding: 5,
        enableTooltips: false,
        isWordBreak: null,
        doClipPath: null,
        dontWrapNumbers: null
      },
      xMaxMinTicks: {
        enabled: true,
        space: null,
        distance: instance != null ? instance.extendedChart.xAxis.tickPadding() : null,
        fontSize: instance != null ? instance.extendedChart.xAxis.fontSize() : null,
        fontWeight: null,
        fontFamily: null,
        fontColor: null,
        valign: null,
        halign: null,
        maxLineCount: null,
        padding: 5,
        enableTooltips: false,
        isWordBreak: null,
        doClipPath: null,
        dontWrapNumbers: null
      },
      yMaxMinTicks: {
        enabled: true,
        space: null,
        distance: instance != null ? instance.extendedChart.yAxis.tickPadding() : null,
        fontSize: instance != null ? instance.extendedChart.yAxis.fontSize() : null,
        fontWeight: null,
        fontFamily: null,
        fontColor: null,
        valign: null,
        halign: null,
        maxLineCount: null,
        padding: 5,
        enableTooltips: false,
        isWordBreak: null,
        doClipPath: null,
        dontWrapNumbers: null
      },
      xLabel: {
        enabled: true,
        space: null,
        width: null,
        height: null,
        distance: instance != null ? instance.extendedChart.xAxis.axisLabelDistance() : null,
        fontSize: instance != null ? instance.extendedChart.xAxis.fontSize() : null,
        fontWeight: null,
        fontFamily: null,
        fontColor: null,
        valign: null,
        halign: null,
        maxLineCount: null,
        padding: 5,
        enableTooltips: false,
        isWordBreak: null,
        doClipPath: null,
        dontWrapNumbers: null
      },
      yLabel: {
        enabled: true,
        space: null,
        width: null,
        height: null,
        distance: instance != null ? instance.extendedChart.yAxis.axisLabelDistance() : null,
        fontSize: instance != null ? instance.extendedChart.yAxis.fontSize() : null,
        fontWeight: null,
        fontFamily: null,
        fontColor: null,
        valign: null,
        halign: null,
        maxLineCount: null,
        padding: 5,
        enableTooltips: false,
        isWordBreak: null,
        doClipPath: null,
        dontWrapNumbers: null
      },
      additionalAxesOrientationTickLabelOptions: {
        left: {
          halign: 'end',
        },
        bottom: {
          valign: 'top',
        },
        right: {
          halign: 'start',
        },
        top: {
          valign: 'bottom',
        }
      },
      additionalAxesOrientationLabelOptions: {
        left: {
          valign: 'bottom',
        },
        bottom: {
          valign: 'top',
        },
        right: {
          valign: 'bottom',
        },
        top: {
          valign: 'bottom',
        }
      }
    })
  }

  static get _name() {
    return 'wrapper'
  }

  _initTooltip() {
    this.tooltip = nv.models.tooltip()
    this.tooltip
      .duration(0)
      .contentGenerator((d) => {
        return this.options.tooltipContentGenerator(d)
      })
      .position(() => {
        return {
          left: d3.event.clientX,
          top: d3.event.clientY
        }
      })
  }

  _showTooltip(data) {
    this.tooltip
      .data(data)
      .hidden(false)()
  }

  _hideTooltip() {
    this.tooltip.hidden(true)
  }

  _revokeTooltip() {
    this.tooltip()
  }

  beforeInstancePrepareData() {
    this._initTooltip()

    const originalTextWrapFn = this.instance.utils.textWrap.fn
    /*
     * Input parameters - one parameter, Object with next fields:
     * {
     *  text: string.
     *  targetElement: SVGElement,
     *  options: {
     *    tooltip: boolean,
     *    title: boolean,   //title will be forced to false if tooltip is true
     *    ...others same as d3CustomUtils wrapping function
     *  }
     * }
     */
    this.instance.utils.textWrap.replace((...args) => {
      const originalResult = originalTextWrapFn(...args)

      if(args[0] != null && args[0].options != null && args[0].options.tooltip) {
        args[0].targetElement.on('mouseover', (e) => {
          this._showTooltip({
            value: args[0].text,
            series: []
          })
        })

        args[0].targetElement.on('mouseout', (e) => {
          this._hideTooltip()
        })

        args[0].targetElement.on('mousemove', (e) => {
          this._revokeTooltip()
        })
        args[0].options.title = false
      }

      return originalResult
    })
  }

  // beforeInstanceUpdate() {
  //   this.process()
  // }

  _preserveOriginalMargin() {
    this.originalMargin = this.instance.extendedChart.margin()
  }

  prepare() {
    this.svg = d3.select(this.instance.extendedChart.container)
    this._preserveOriginalMargin()
  }

  process() {
    const xOrientation = this.instance.extendedChart.xAxis.orient()
    const yOrientation = this.instance.extendedChart.yAxis.orient()

    let xAxisPromise = Promise.all([
      this._drawAxisTickLabels(this.svg.selectAll(`.nv-x .tick`), this.options.xTicks, xOrientation)
      ,
      this._drawAxisTickLabels(this.svg.selectAll(`.nv-x .nv-axisMaxMin`), this.options.xMaxMinTicks, xOrientation)
      ,
      this._drawAxisLabel(this.svg.select('.nv-x .nv-axislabel'), this.options.xLabel, xOrientation)
    ])
    if(this.options.enableAutopositioning) {
      xAxisPromise = xAxisPromise.then(() => {
        this._autoPosition_ticks('x', xOrientation)
        this._autoPosition_labels('x', xOrientation)
      })
    }

    let yAxisPromise = Promise.all([
      this._drawAxisTickLabels(this.svg.selectAll(`.nv-y .tick`), this.options.yTicks, yOrientation)
      ,
      this._drawAxisTickLabels(this.svg.selectAll(`.nv-y .nv-axisMaxMin`), this.options.yMaxMinTicks, yOrientation)
      ,
      this._drawAxisLabel(this.svg.select('.nv-y .nv-axislabel'), this.options.yLabel, yOrientation)
    ])
    if(this.options.enableAutopositioning) {
      yAxisPromise = yAxisPromise.then(() => {
        this._autoPosition_ticks('y', yOrientation)
        this._autoPosition_labels('y', yOrientation)
      })
    }

    let resultingPromise = Promise.all([xAxisPromise, yAxisPromise])

    if(this.options.enableAutopositioning) {
      resultingPromise = resultingPromise.then(() => {
        if(this.SKIP_CHECK_NEXT_UPDATE) {
          this.SKIP_CHECK_NEXT_UPDATE = false
          return true
        }
        this.SKIP_CHECK_NEXT_UPDATE = true
        this.instance.scheduleChartReupdateAfterModulesChainFinished()
        return true
      })
    }

    return resultingPromise
  }

  _autoPosition_ticks(axis, orientation) {
    let minMargin_allowedDueToTicks = 0
    this.svg.selectAll(`.nv-${axis} .wrapper-module-product-axis-tick-label`)[0].forEach((elem) => {
      const elemd3 = d3.select(elem)
      const bbox = elem.getBBox()
      if(elem.innerHTML && elemd3.style('visibility') != 'hidden' && elemd3.style('display') != 'none') {
        let currentMargin_allowedDueToTicks
        switch(orientation) {
          case 'bottom':
            currentMargin_allowedDueToTicks = d3.transform(d3.select(elemd3.node().parentNode).attr('transform')).translate[1] + bbox.height + bbox.y
            break
          case 'left':
            currentMargin_allowedDueToTicks = Math.abs(d3.transform(d3.select(elemd3.node().parentNode).attr('transform')).translate[0] + bbox.x)
            break
        }
        minMargin_allowedDueToTicks = Math.max(minMargin_allowedDueToTicks, currentMargin_allowedDueToTicks)
      }
    })
    switch(orientation) {
      case 'bottom':
        this.options.minBottomMargin = minMargin_allowedDueToTicks
        break
      case 'left':
        this.options.minLeftMargin = minMargin_allowedDueToTicks
        break
    }
  }

  _autoPosition_labels(axis, orientation) {
    const wrappedLabelElem = this.svg.select(`.nv-${axis} .wrapper-module-product-axis-label`)
    if(wrappedLabelElem.node() == null) {
      return
    }
    const wrappedLabelBbox = wrappedLabelElem.node().getBBox()
    const wrappedLabelParentElem = d3.select(wrappedLabelElem.node().parentNode)
    const wrappedLabelParentTransform = d3.transform(wrappedLabelParentElem.attr('transform'))
    let wrappedLabelRealOffset
    switch(orientation) {
      case 'bottom':
        wrappedLabelRealOffset = wrappedLabelParentTransform.translate[1]
        break
      case 'left':
        wrappedLabelRealOffset = wrappedLabelParentTransform.translate[0]
        break
    }
    let minDistance_allowedDueToTicks
    switch(orientation) {
      case 'bottom':
        minDistance_allowedDueToTicks = this.options.relativeAdjustmentGap
        break
      case 'left':
        minDistance_allowedDueToTicks = -wrappedLabelBbox.height - wrappedLabelBbox.y - this.options.relativeAdjustmentGap
        break
    }
    this.svg.selectAll(`.nv-${axis} .wrapper-module-product-axis-tick-label`)[0].forEach((elem) => {
      const elemd3 = d3.select(elem)
      const bbox = elem.getBBox()
      if(elem.innerHTML && elemd3.style('visibility') != 'hidden' && elemd3.style('display') != 'none') {
        let currentDistance_allowedDueToTicks
        switch(orientation) {
          case 'bottom':
            currentDistance_allowedDueToTicks = d3.transform(d3.select(elemd3.node().parentNode).attr('transform')).translate[1] + bbox.height + bbox.y + this.options.relativeAdjustmentGap
            minDistance_allowedDueToTicks = Math.max(minDistance_allowedDueToTicks, currentDistance_allowedDueToTicks)
            break
          case 'left':
            currentDistance_allowedDueToTicks = d3.transform(d3.select(elemd3.node().parentNode).attr('transform')).translate[0] + bbox.x - wrappedLabelBbox.height - wrappedLabelBbox.y - this.options.relativeAdjustmentGap
            minDistance_allowedDueToTicks = Math.min(minDistance_allowedDueToTicks, currentDistance_allowedDueToTicks)
            break
        }
      }
    })
    switch(orientation) {
      case 'bottom':
        wrappedLabelParentTransform.translate[1] = Math.max(wrappedLabelRealOffset, minDistance_allowedDueToTicks)
        break
      case 'left':
        wrappedLabelParentTransform.translate[0] = Math.min(wrappedLabelRealOffset, minDistance_allowedDueToTicks)
        break
    }
    wrappedLabelParentElem.attr('transform', wrappedLabelParentTransform)

    switch(orientation) {
      case 'bottom':
        this.options.minBottomMargin = Math.max(wrappedLabelParentTransform.translate[1] + wrappedLabelElem.node().getBBox().height, minDistance_allowedDueToTicks)
        break
      case 'left':
        this.options.minLeftMargin = Math.max(Math.abs(wrappedLabelParentTransform.translate[0]) - wrappedLabelBbox.y, minDistance_allowedDueToTicks)
        break
    }
  }

  // _autoPosition_yLabels(orientation) {
  //   const wrappedLabelElem = this.svg.select('.nv-y .wrapper-module-product-axis-label')
  //   if(wrappedLabelElem.node() == null) {
  //     return
  //   }
  //   const wrappedLabelBbox = wrappedLabelElem.node().getBBox()
  //   const wrappedLabelParentElem = d3.select(wrappedLabelElem.node().parentNode)
  //   const wrappedLabelParentTransform = d3.transform(wrappedLabelParentElem.attr('transform'))
  //   let wrappedLabelRealOffset
  //   switch(orientation) {
  //     case 'bottom':
  //       wrappedLabelRealOffset = wrappedLabelParentTransform.translate[1]
  //       break
  //     case 'left':
  //       wrappedLabelRealOffset = wrappedLabelParentTransform.translate[0]
  //       break
  //   }
  //   let minDistance_allowedDueToTicks
  //   switch(orientation) {
  //     case 'bottom':
  //       minDistance_allowedDueToTicks = this.options.relativeAdjustmentGap
  //       break
  //     case 'left':
  //       minDistance_allowedDueToTicks = -wrappedLabelBbox.height - wrappedLabelBbox.y - this.options.relativeAdjustmentGap
  //       break
  //   }
  //   this.svg.selectAll('.nv-y .wrapper-module-product-axis-tick-label')[0].forEach((elem) => {
  //     const elemd3 = d3.select(elem)
  //     const bbox = elem.getBBox()
  //     if(elem.innerHTML && elemd3.style('visibility') != 'hidden' && elemd3.style('display') != 'none') {
  //       let currentDistance_allowedDueToTicks
  //       switch(orientation) {
  //         case 'bottom':
  //           currentDistance_allowedDueToTicks = d3.transform(d3.select(elemd3.node().parentNode).attr('transform')).translate[1] + bbox.height + bbox.y + this.options.relativeAdjustmentGap
  //           minDistance_allowedDueToTicks = Math.max(minDistance_allowedDueToTicks, currentDistance_allowedDueToTicks)
  //           break
  //         case 'left':
  //           currentDistance_allowedDueToTicks = d3.transform(d3.select(elemd3.node().parentNode).attr('transform')).translate[0] + bbox.x - wrappedLabelBbox.height - wrappedLabelBbox.y - this.options.relativeAdjustmentGap
  //           minDistance_allowedDueToTicks = Math.min(minDistance_allowedDueToTicks, currentDistance_allowedDueToTicks)
  //           break
  //       }
  //     }
  //   })
  //   switch(orientation) {
  //     case 'bottom':
  //       wrappedLabelParentTransform.translate[1] = Math.max(wrappedLabelRealOffset, minDistance_allowedDueToTicks)
  //       break
  //     case 'left':
  //       wrappedLabelParentTransform.translate[0] = Math.min(wrappedLabelRealOffset, minDistance_allowedDueToTicks)
  //       break
  //   }
  //   wrappedLabelParentElem.attr('transform', wrappedLabelParentTransform)

  //   switch(orientation) {
  //     case 'bottom':
  //       this.options.minBottomMargin = wrappedLabelParentTransform.translate[1] + wrappedLabelElem.node().getBBox().height
  //       break
  //     case 'left':
  //       this.options.minLeftMargin = Math.abs(wrappedLabelParentTransform.translate[0]) - wrappedLabelBbox.y
  //       break
  //   }
  // }

  _buildWrapperOptions(options, textElem, additionalOptions) {
    let result = Object.mergeDeep({}, additionalOptions, {
      lineHeight: options.fontSize,
      maxLineCount: options.maxLineCount,
      textAnchor: options.halign,
      verticalAlign: options.valign,
      fontSize: options.fontSize,
      fontWeight: options.fontWeight,
      fontFamily: options.fontFamily,
      fontColor: options.fontColor,
      isWordBreak: options.isWordBreak,
      tooltip: options.tooltip,
      title: options.tooltip ? false : options.title
    })
    Object.defaultsDeep(result, {
      fontSize: textElem.style('font-size'),
      fontWeight: textElem.style('font-weight'),
      fontFamily: textElem.style('font-family'),
      fontColor: textElem.style('fill')
    })
    return result
  }

  _drawWrappedText(textElem, parentElem, options, additionalOptions) {
    const text = textElem.text()
    if(options.dontWrapNumbers && Number.isNumber(text)) {
      return Promise.resolve()
    }

    textElem.styles({
      // display: 'none !important',
      // display: 'none',
      // opacity: 0,
      visibility: 'hidden',
    })

    const targetElem = parentElem.append('g')
    this.appendedElements.push(targetElem)

    const wrapperOptions = this._buildWrapperOptions(options, textElem, additionalOptions)
    const promise = new Promise((resolve, reject) => {
      wrapperOptions.renderCallback = (wrapperOptions.renderCallback || (() => {})).wrap((original, ...args) => {
        original(...args)
        resolve()
      })
      this.instance.utils.textWrap.fn({
        text,
        targetElement: targetElem,
        options: wrapperOptions
      })
    })
    return promise
  }

  _drawAxisTickLabels(tickElems, options, orientation) {
    // return Promise.resolve()
    if(!options.enabled) {
      return
    }
    if(!tickElems[0].length) {
      return
    }

    tickElems[0] = tickElems[0].filter((tickElem) => {
      const tickElemd3 = d3.select(tickElem)
      const tickTextElemd3 = tickElemd3.select('text')
      const attrOpacity = tickTextElemd3.attr('opacity')
      const styleOpacity = tickTextElemd3.style('opacity')
      const attrDisplay = tickTextElemd3.attr('display')
      const styleDisplay = tickTextElemd3.style('display')
      return (attrOpacity === '' || attrOpacity == null || attrOpacity > 0) && (styleOpacity === '' || styleOpacity == null || styleOpacity > 0) && attrDisplay != 'none' && styleDisplay != 'none'
    })

    let barsContainerElem = this.svg.select('.nv-barsWrap > .nv-wrap defs clipPath rect')
    if(!barsContainerElem.node()) {
      barsContainerElem = this.svg.select('.nv-barsWrap > .nv-wrap')
    }

    let width
    let height
    let x
    let y

    Object.defaultsDeep(options, this.options.additionalAxesOrientationTickLabelOptions[orientation])
    Object.defaultsDeep(options, this.options.common)

    let distanceAmongTicks
    if(tickElems[0].length <= 1) {
      switch(orientation) {
        case 'left':
          distanceAmongTicks = barsContainerElem.node().getBBox().height
          break
        case 'bottom':
          distanceAmongTicks = barsContainerElem.node().getBBox().width
          break
      }
    } else {
      const tick1 = d3.select(tickElems[0][0])
      const tick2 = d3.select(tickElems[0][1])
      const tick1transform = d3.transform(tick1.attr('transform'))
      const tick2transform = d3.transform(tick2.attr('transform'))
      switch(orientation) {
        case 'left':
          distanceAmongTicks = tick2transform.translate[1] - tick1transform.translate[1]
          break
        case 'bottom':
          distanceAmongTicks = tick2transform.translate[0] - tick1transform.translate[0]
          break
      }
    }
    distanceAmongTicks = Math.abs(distanceAmongTicks)

    switch(orientation) {
      case 'left':
        width = options.space
        height = Math.max(distanceAmongTicks, options.fontSize) + 1
        x = -width - options.distance
        y = -height / 2
        break
      case 'bottom':
        width = distanceAmongTicks - 2 * options.padding
        height = options.space
        x = -width / 2
        y = options.distance
        break
    }

    let promises = []
    tickElems[0].forEach((tickElem) => {
      const tickElemd3 = d3.select(tickElem)
      const textElem = tickElemd3.select('text')
      if(textElem.node() == null) return

      promises.push(
        this._drawWrappedText(textElem, tickElemd3, options, {
          containerX: x,
          containerY: y,
          width,
          height,
          class: `wrapper-module-product wrapper-module-product-axis-tick-label`,
        })
      )
    })
    return Promise.all(promises)
  }

  _drawAxisLabel(labelElem, options, orientation) {
    if(!options.enabled) {
      return
    }
    if(!labelElem || !labelElem.node()) {
      return
    }
    let barsContainerElem = this.svg.select('.nv-barsWrap > .nv-wrap defs clipPath rect')
    if(!barsContainerElem.node()) {
      barsContainerElem = this.svg.select('.nv-barsWrap > .nv-wrap')
    }
    const barsContainerElemBBox = barsContainerElem.node().getBBox()

    Object.defaultsDeep(options, this.options.additionalAxesOrientationLabelOptions[orientation])
    Object.defaultsDeep(options, this.options.common)

    let x
    let y
    let width
    let height
    let rotate
    switch(orientation) {
      case 'left':
        height = options.height || options.space
        width = options.width || barsContainerElemBBox.height
        x = -height - options.distance - this.instance.constants.nvd3UncustomizableVerticalLeftAxisLabelOffset
        y = barsContainerElemBBox.height / 2 + width / 2
        rotate = -90
        break
      case 'bottom':
        width = options.width || barsContainerElemBBox.width
        height = options.height || options.space
        x = barsContainerElemBBox.width / 2 - width / 2
        y = options.distance + this.instance.constants.nvd3UncustomizableHorizontalBottomAxisLabelOffset
        rotate = 0
        break
    }

    const labelContainerElem = d3.select(labelElem.node().parentNode)
    return this._drawWrappedText(labelElem, labelContainerElem, options, {
      containerX: x,
      containerY: y,
      containerRotate: rotate,
      width,
      height,
      class: `wrapper-module-product wrapper-module-product-axis-label`,
    })
  }
}

nv.Module.register(WrapperModule)
