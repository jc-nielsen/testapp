class LabelsModule extends nv.Module {
  constructor(config, instance, options){
    super(config, instance, options, {
      isAvg: false,
      data: [],
      minTopMargin: 0,
      minLeftMargin: 0,
      formatString: null,
      labels: {
        offset: 20,
        fontSize: 18,
        minFontSize: 6,
        fontFamily: 'monospace',
        fontWeight: 'normal',
        fontOffsetCorrectionMultiplier: 15 / 50,
        borderWidth: 2,
        rectPaddingX: 5,
        rectPaddingY: 5,
        maxLineCount: 1,
        doWrap: true
      },
      header: {
        enabled: true,
        text: 'Point Change',
        textField: null,
        height: 60,
        width: 100,
        fontSize: 18,
        fontFamily: 'monospace',
        fontWeight: 'normal',
        nMaxLineCount: 1,
        textAnchor: 'end',
        verticalAlign: 'middle'
      },
      colors: {
        header: '#999999',
        labelBorder: '#CCCCCC',
        labelFont: 'black'
      }
    })
  }

  format(value) {
    // return this.instance.extendedChart.yAxis.tickFormat()(value)

    // const parsedValue = parseFloat(value)
    // return isNaN(parsedValue) ? value : d3.format(',.0f')(parsedValue)

    return this.instance.utils.conditionalFormat.fn(value, this.options.formatString)
  }

  _prepareOptions(){}

  prepare() {
    this.svg = d3.select(this.instance.extendedChart.container)
    this._prepareOptions()
  }

  process() {
    this.groupLabelsElement = this.svg.select('g.nv-barsWrap').append('g').attrs({class: 'labels-wrap'})
    this.appendedElements.push(this.groupLabelsElement)

    const promises = []

    if(this.options.isAvg) {
      promises.push(Promise.resolve(this._processForAvg()))
    } else {
      promises.push(Promise.resolve(this._processForPointChange()))
    }
    if(this.options.header.enabled) {
      promises.push(this._drawHeader())
    }

    if(!this.SKIPNEXTUPDATE) {
      this.scheduleAndSkipNextUpdate()
    }

    return Promise.all(promises)
  }

  _drawHeader() {
    //draw header
    let headerY
    let headerX
    switch(this.instance.config.name) {
      case 'multiBarChartExt':
        headerY = this.options.header.y
        headerX = -this.options.header.width
        break
      case 'multiBarHorizontalChartExt':
        headerY = -this.options.header.height
        headerX = this._getContainerWidth() + this.options.labels.offset + this.options.labels.rectPaddingX + this.maxLabelTextWidth / 2 - this.options.header.width / 2
        break
    }
    let header = this.groupLabelsElement.append('g')
    this.appendedElements.push(header)

    const text = this._calcHeaderText()
    const promise = new Promise((resolve, reject) => {
      this.instance.utils.textWrap.fn({
        text,
        targetElement: header,
        options: {
          containerX: headerX,
          containerY: headerY,
          width: this.options.header.width,
          height: this.options.header.height,
          fontSize: this.options.header.fontSize,
          fontFamily: this.options.header.fontFamily,
          fontWeight: this.options.header.fontWeight,
          fontColor: this.options.colors.header,
          lineHeight: this.options.header.fontSize,
          maxLineCount: this.options.header.nMaxLineCount,
          textAnchor: this.options.header.textAnchor,
          verticalAlign: this.options.header.verticalAlign,
          class: 'labels-header',
          tooltip: true,
          title:false,
          renderCallback: () => {
            resolve()
          }
        }
      })
    })
    return promise
  }

  _calcHeaderText() {
    if(typeof this.options.header.textField === 'string') {
      const text = this.options.data[0][this.options.header.textField]
      if(text != null) return text
    }
    if(Function.isFunction(this.options.header.text)) {
      return this.options.header.text(this.options.data[0])
    }
    if(typeof this.options.header.text === 'string') {
      return this.options.header.text
    }
    return ''
  }
}
