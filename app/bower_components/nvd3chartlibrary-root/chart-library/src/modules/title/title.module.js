class TitleModule extends nv.Module {
  constructor(instance, options){
    super({
      name: 'title',
      supportedCharts: ['*']
    }, instance, options, {
      text: null,
      height: null,
      //autoheight:
      // if true, module makes title to take minimal space which it needs by clipping both top and bottom whitespaces
      // if false, module will automatically clip only top whitespace
      autoheight: true,
      padding: {
        top: 0,
        right: 0,
        bottom: 20,
        left: 0,
      },
      //minWidth:
      // specifies when should we add more top margin to put legend/controls on another line with title (if legend or controls are at top of chart)
      minWidth: 100,
      //moveLegendControlsToTop:
      // if true and title width is smaller than minWidth and legend/controls at top, then legend/controls will be moved on the line above the title
      // if false and title width is smaller than minWidth and legend/controls at top, then legend/controls will be moved on the line beneath the title
      moveLegendControlsToTop: true,
      //verticalDistanceBetweenTitleAndLegendControls:
      // this number is used when title and legend/controls are on different lines
      verticalDistanceBetweenTitleAndLegendControls: 10,
      fontSize: 15,
      fontWeight: 600,
      fontFamily: 'Open Sans',
      fontColor: 'black',
      halign: 'middle',
      valign: 'middle',
      maxNLines: 3,
      isWordBreak: false,
      ellipsisToLastWord: false,
      tooltip: true,
      title: true
    })

    //additional defaults
    Object.defaultsDeep(this.options, {
      height: Math.max(this.options.fontSize + 1, this.options.fontSize * this.options.maxNLines)
    })
  }

  static get _name() {
    return 'title'
  }

  prepare() {
    this.svg = d3.select(this.instance.extendedChart.container)

    this.originalOptions = {
      height: this.options.height
    }
  }

  process() {
    const containerElem = d3.select(this.svg.select('.nv-barsWrap').node().parentNode)
    const bbox = containerElem.select('.nv-barsWrap .nv-wrap').node().getBBox()

    const controlsElem = this.svg.select('.nv-controlsWrap')
    const controlsTransform = d3.transform(controlsElem.attr('transform'))
    const controlsBbox = controlsElem.node().getBBox()
    const legendElem = this.svg.select('.nv-legendWrap')
    const legendTransform = d3.transform(legendElem.attr('transform'))
    const legendBbox = legendElem.node().getBBox()
    let padding_allowedDueToControls
    const isControlsAtTop = this.instance.extendedChart.showControls() && controlsTransform.translate[1] < 0
    if(isControlsAtTop) {
      padding_allowedDueToControls = controlsBbox.x + controlsBbox.width + controlsTransform.translate[0]
    } else {
      padding_allowedDueToControls = 0
    }
    let padding_allowedDueToLegend
    const isLegendAtTop = this.instance.extendedChart.showLegend() && legendTransform.translate[1] < 0
    if(isLegendAtTop) {
      padding_allowedDueToLegend = bbox.width - legendBbox.x - legendTransform.translate[0]
    } else {
      padding_allowedDueToLegend = 0
    }
    const padding_allowed = Math.max(padding_allowedDueToControls, padding_allowedDueToLegend)
    const leftPadding = Math.max(this.options.padding.left, padding_allowed)
    const rightPadding = Math.max(this.options.padding.right, padding_allowed)
    let bottomPadding = this.options.padding.bottom

    let width = bbox.width - leftPadding - rightPadding
    let x = leftPadding
    this.options.minTopMargin = this.options.height + this.options.padding.top + bottomPadding
    if(width < this.options.minWidth && (isControlsAtTop || isLegendAtTop)) {
      const legendcontrolsLineHeight = Math.max((isControlsAtTop ? controlsBbox.height : 0), (isLegendAtTop ? legendBbox.height : 0))
      const legendcontrolsOffset = legendcontrolsLineHeight + this.options.verticalDistanceBetweenTitleAndLegendControls
      this.options.minTopMargin += legendcontrolsOffset
      if(this.options.moveLegendControlsToTop) {
        legendTransform.translate[1] = -this.options.minTopMargin + legendcontrolsLineHeight / 2 - legendBbox.height / 2
        legendElem.attr('transform', legendTransform)
        controlsTransform.translate[1] = -this.options.minTopMargin + legendcontrolsLineHeight / 2 - controlsBbox.height / 2
        controlsElem.attr('transform', controlsTransform)
      } else {
        bottomPadding += legendcontrolsOffset
        legendTransform.translate[1] = -legendcontrolsLineHeight / 2 - legendBbox.height / 2 - 10
        legendElem.attr('transform', legendTransform)
        controlsTransform.translate[1] = -legendcontrolsLineHeight / 2 - controlsBbox.height / 2 - 10
        controlsElem.attr('transform', controlsTransform)
      }
      width = bbox.width
      x = 0
    }
    const y = -this.options.height - bottomPadding
    const gElem = containerElem.append('g')
    this.appendedElements.push(gElem)
    const promise = new Promise((resolve, reject) => {
      const wrapperOptions = {
        containerX: x,
        containerY: y,
        x: 0,
        y: 0,
        width,
        height: this.options.height,
        lineHeight: this.options.fontSize,
        maxLineCount: this.options.maxNLines,
        textAnchor: this.options.halign,
        verticalAlign: this.options.valign,
        fontSize: this.options.fontSize,
        fontWeight: this.options.fontWeight,
        fontFamily: this.options.fontFamily,
        fontColor: this.options.fontColor,
        isWordBreak: this.options.isWordBreak,
        ellipsisToLastWord: this.options.ellipsisToLastWord,
        tooltip: this.options.tooltip,
        title: this.options.tooltip ? false : this.options.title,
        class: 'title-by-title-module',
        renderCallback: (result) => {
          if(this.options.autoheight) {
            const newHeight = result.textElem.node().getBBox().height
            this.options.minTopMargin -= this.options.height - newHeight
            this.options.height = newHeight
          } else {
            this.options.minTopMargin -= parseFloat(result.textElem.attr('y'))
          }
          resolve()
        }
      }
      this.instance.utils.textWrap.fn({
        text: this.options.text,
        targetElement: gElem,
        options: wrapperOptions
      })
    })

    this.scheduleAndSkipNextUpdate()

    return promise
  }
}

nv.Module.register(TitleModule)
