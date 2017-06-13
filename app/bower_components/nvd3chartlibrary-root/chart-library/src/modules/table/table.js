nv.modules.table.Table = class {
  constructor() {
    this.isRendering = 0
    this.isDrawing = 0
  }

  init(instance, config, data) {
    this.instance = instance
    this.initContainer(this.instance.extendedChart.container)
    this.initConfig(config)
    this.initData(data)
    this.build()
  }

  initContainer(svg) {
    this.svg = d3.select(svg)
  }

  initConfig(config) {
    //defaults for customizable options
    const defaultsForCustomizableOptions = {
      rowLineHeight: nv.modules.table.constants.TABLE_ROW_LINE_HEIGHT,
      fontSize: nv.modules.table.constants.TABLE_FONT_SIZE,
      tooltipFontSize: nv.modules.table.constants.TABLE_TOOLTIP_FONT_SIZE,
      tooltipHoverOpacity: nv.modules.table.constants.TABLE_TOOLTIP_HOVER_OPACITY,
      tooltipTheme: nv.modules.table.constants.TABLE_TOOLTIP_THEME,
      fontWeight: nv.modules.table.constants.TABLE_FONT_WEIGHT,
      fill: nv.modules.table.constants.TABLE_FILL,
      stroke: nv.modules.table.constants.TABLE_STROKE,
      strokeWidth: nv.modules.table.constants.TABLE_STROKE_WIDTH,
      align: nv.modules.table.constants.TABLE_ALIGN,
      valign: nv.modules.table.constants.TABLE_VALIGN,
      maxNLines: nv.modules.table.constants.TABLE_MAX_N_LINES,
      colors: nv.modules.table.constants.TABLE_COLORS,
      conditionalFormat: nv.modules.table.constants.CONDITIONAL_FORMAT_DEFAULT
    }

    //uncustomizable options
    const uncustomizableOptions = {
      height: 300,
      width: '100%',
      offsetX: nv.modules.table.constants.TABLE_OFFSET_X,
      offsetY: nv.modules.table.constants.TABLE_OFFSET_Y,
      loaderSize: nv.modules.table.constants.TABLE_LOADER_SIZE,
      minColWidth: nv.modules.table.constants.TABLE_MIN_COL_WIDTH,
      flags: {
        isLongWordBreakingOn: false,
        isEllipsisToLastWordOn: false
      },
      // chartActualHeight: this.svg.select('.nvd3').node().getBBox().height
      // chartActualHeight: this.svg.select('.nvd3 .nv-y.nv-axis').node().getBBox().height + this.instance.extendedChart.margin().top
      chartActualHeight: this.instance.extendedChart.height()

    }

    this.config = Object.defaultsDeep(uncustomizableOptions, config, defaultsForCustomizableOptions)

    if(Number.isNumber(config.offsetX)) {
      this.config.offsetX += config.offsetX
    }
    if(Number.isNumber(config.offsetY)) {
      this.config.offsetY += config.offsetY
    }
  }

  initData(data) {
    if(data != null) {
      this.data = data
    } else {
      this.data = {
        columns: [
          {
            slug: 'name',
            strictWidth: nv.modules.table.constants.TABLE_FIRST_COLUMN_WIDTH,
            align: 'start',
            textXCorrection: 10
          },
          {
            slug: 'salesYearAgo'
          },
          {
            slug: 'prod1'
          },
          {
            slug: 'prod2'
          },
          {
            slug: 'prod3'
          },
          {
            slug: 'prod4'
          },
          {
            slug: 'prod5'
          },
          {
            slug: 'prod6'
          },
          {
            slug: 'salesThisYear'
          }
        ],
        rows: [
          {
            slug: 'head',
            name: new nv.modules.table.TableCell('_', {
              hideText: true,
            }),
            salesYearAgo: new nv.modules.table.TableCell('$ Sales Year Ago ASda wf qwf we'),
            prod1: new nv.modules.table.TableCell('Product 1'),
            prod2: new nv.modules.table.TableCell('Product 2'),
            prod3: new nv.modules.table.TableCell('Product 3'),
            prod4: new nv.modules.table.TableCell('Product 4'),
            prod5: new nv.modules.table.TableCell('Product 5'),
            prod6: new nv.modules.table.TableCell('Product 6'),
            salesThisYear: new nv.modules.table.TableCell('SalesThisYearSalesThisYearSalesThis Year Sales This Year Sales This Year')
          },
          {
            slug: 'totalSales',
            name: new nv.modules.table.TableCell('Total $ Sales'),
            salesYearAgo: new nv.modules.table.TableCellMoneyFormat(796),
            prod1: new nv.modules.table.TableCellMoneyFormat(132),
            prod2: new nv.modules.table.TableCellMoneyFormat(116),
            prod3: new nv.modules.table.TableCellMoneyFormat(100),
            prod4: new nv.modules.table.TableCellMoneyFormat(87),
            prod5: new nv.modules.table.TableCellMoneyFormat(132),
            prod6: new nv.modules.table.TableCellMoneyFormat(116),
            salesThisYear: new nv.modules.table.TableCellMoneyFormat(874533732212),
          },
          {
            slug: 'percentOfCategorySales',
            name:new nv.modules.table.TableCell('% of Category Sales'),
            prod1: new nv.modules.table.TableCell('16.5%'),
            prod2: new nv.modules.table.TableCell('14.5%'),
            prod3: new nv.modules.table.TableCell('12.5%'),
            prod4: new nv.modules.table.TableCell('10.8%'),
            prod5: new nv.modules.table.TableCell('12%'),
            prod6: new nv.modules.table.TableCell('-3%'),
            salesThisYear: new nv.modules.table.TableCell('3%')
          },
          {
            slug: 'salesChangePercent',
            // maxNLines: 1,
            name: new nv.modules.table.TableCell('$ Sales % Change Asfsd gg wer er re er ASD'),
            prod1: new nv.modules.table.TableCell('-2%'),
            prod2: new nv.modules.table.TableCell('2%'),
            prod3: new nv.modules.table.TableCell('5%'),
            prod4: new nv.modules.table.TableCell('-2%'),
            prod5: new nv.modules.table.TableCell('12%'),
            prod6: new nv.modules.table.TableCell('123'),
            salesThisYear: new nv.modules.table.TableCell('3%')
          },
          {
            slug: 'qweqweqwe',
            name: new nv.modules.table.TableCell('QQ Sales % Change'),
            prod1: new nv.modules.table.TableCell('-2%'),
            prod2: new nv.modules.table.TableCell('2%'),
            prod3: new nv.modules.table.TableCell('5%'),
            prod4: new nv.modules.table.TableCell('-2%'),
            prod5: new nv.modules.table.TableCell('12%'),
            prod6: new nv.modules.table.TableCell('123'),
            salesThisYear: new nv.modules.table.TableCell('3%')
          }
        ]
      }
    }

    this.byEachCell((cell, column, row, i, j) => {
      if(i == 0 || j == 0) {
        cell.makeBold()
      }
    })

    this.nAutoWidthColumns = this.data.columns.filter((column) => {
      return column.strictWidth == undefined
    }).length
    this.nStrictWidthColumnsSum = this.data.columns.reduce((sum, column) => {
      if(column.strictWidth != undefined) sum += column.strictWidth
      return sum
    }, 0)
  }

  getId(column, row) {
    return `${column.slug}-${row.slug}`
  }

  getCell(column, row) {
    return row[column.slug]
  }

  getText (column, row, i, j) {
    let cell = this.getCell(column, row)
    let text = cell.text

    // if(this.config.flags.isLongWordBreakingOn) {
    //   //splitting long words by spaces
    //   let t = this.getTestTextElement()
    //   let fullAllowedWidth = this.getFullAllowedWidth(cell, column, row)
    //   let words = text.split(' ')
    //   for(let word of words) {
    //     t.text(word)
    //     let wordWantedWidth = t.node().getBBox().width
    //     if(wordWantedWidth > fullAllowedWidth) {
    //       let currentWordPart = ''
    //       let wordWithSpaces = ''
    //       for(let k = 0; k < word.length; k++) {
    //         let char = word[k]
    //         currentWordPart += char
    //         t.text(currentWordPart)
    //         let currentWordPartWantedWidth = t.node().getBBox().width
    //         if(currentWordPartWantedWidth > fullAllowedWidth){
    //           wordWithSpaces += currentWordPart.slice(0, currentWordPart.length-1) + ' '
    //           currentWordPart = currentWordPart.slice(currentWordPart.length-1)
    //         }
    //       }
    //       wordWithSpaces += currentWordPart
    //       text = text.insertInstead(text.indexOf(word), word.length, wordWithSpaces)
    //     }
    //   }
    //   t.remove()
    // }

    //returning conditional format for text, sending row number if not first cell
    return this.config.conditionalFormat(text, i !== 0 ? j : null)
  }

  getFullAllowedWidth (cell, column, row) {
    // return cell.width - (column.textXCorrection || 0) - this.config.cellXPadding * 2
    // return cell.width - (column.textXCorrection || 0)
    // return cell.width
    return cell.width - (column.textXCorrection || 0) * 2
  }


  getTestTextElement() {
    let t = this.svg.append('text')
    t.style('font-size', this.config.fontSize).style('visibility', 'hidden')
    return t
  }

  getTestGroupElement() {
    let g = this.svg.append('g')
    g.style('visibility', 'hidden')
    return g
  }


  byEachColumn(fn) {
    for(let i = 0; i < this.data.columns.length; i++) {
      let column = this.data.columns[i]
      fn(column, i)
    }
  }

  byEachRow(fn) {
    for(let j = 0; j < this.data.rows.length; j++) {
      let row = this.data.rows[j]
      fn(row, j)
    }
  }

  byEachCell(fn, callWhenCellIsNull) {
    this.byEachColumn((column, i) => {
      this.byEachRow((row, j) => {
        let cell = this.getCell(column, row)
        cell != null || callWhenCellIsNull ? fn(cell, column, row, i, j) : null
      })
    })
  }

  render() {
    let actualViewportWidth
    try{
      actualViewportWidth = this.svg.node().width.baseVal.value;
    } catch(e) {
      let container
      if(this.config.container && (container = d3.select(this.config.container).node()) != null && Function.isFunction(container.getBoundingClientRect)) {
        actualViewportWidth = container.getBoundingClientRect().width
        console.warn("NVD3 Chart-library Warning: Table module: table.js: set width to container width because svg element not ready/broken")
      } else {
        actualViewportWidth = 2 * this.config.offsetX + 50
        console.error("NVD3 Chart-library Error: Table module: table.js: set width to default because svg element not ready/broken")
      }
    }
    const viewportWidth = actualViewportWidth - 2 * this.config.offsetX

    //rendering column widths and x
    const columnWidth = (viewportWidth - this.nStrictWidthColumnsSum) / this.nAutoWidthColumns
    this.byEachColumn((column) => {
      let width = column.strictWidth == undefined ? columnWidth : column.strictWidth
      if(width < this.config.minColWidth) width = this.config.minColWidth
      column.width = width
    })

    let prevColumn;
    this.byEachColumn((column) => {
      column.x = prevColumn!=null ? prevColumn.x + prevColumn.width : this.config.offsetX
      prevColumn = column
    })

    //rendering cell widths and x
    this.byEachCell((cell, column, row, i, j) => {
      cell.width = column.width
      cell.x = column.x

      //merging 1st and 2nd cells if 2nd is empty
      if(i === 0) {
        let secondColumn = this.data.columns[1]

        let secondColumnCell = this.getCell(secondColumn, row)
        if(!secondColumnCell || !secondColumnCell.text || secondColumnCell.options.hideText){
          cell.width += secondColumn.width
          secondColumnCell.makeHidden()
        }
      }
    })

    //rendering row heights and lines
    this.byEachRow((row) => {
      row.nLines = null
      row.height = 0
    })
    let cellPromises = []
    this.byEachCell((cell, column, row, i, j) => {
      const formatted = this.getText(column, row, i, j)

      // //calculating wanted width
      // let t = this.getTestTextElement()
      // t.text(text)
      // let wantedWidth = t.node().getBBox().width
      // t.remove()

      //calculating nLines and height
      // let fullWantedWidth = wantedWidth
      // let fullWantedWidth = wantedWidth
      // let fullWantedWidth = wantedWidth
      // let fullWantedWidth = wantedWidth //+ (column.textXCorrection || 0)
      // let fullAllowedWidth = this.getFullAllowedWidth(cell, column, row)
      // let nLines = Math.floor(fullWantedWidth / fullAllowedWidth) + 1
      // nLines = Math.min(nLines, row.maxNLines || this.config.maxNLines)
      let promise = new Promise((resolve, reject) => {
        let g = this.getTestGroupElement()
        let testWrapperOptions = {
          x: 0,
          y: 0,
          width: cell.width - (column.textXCorrection || 0),
          fontSize: this.config.fontSize,
          fontWeight: cell.options.fontWeight || this.config.fontWeight,
          textAnchor: column.align || this.config.align,
          verticalAlign: cell.valign || row.valign || column.valign || this.config.valign,
          lineHeight: this.config.rowLineHeight,
          fontFamily: 'Roboto, Open Sans, sans-serif',
          fontColor: formatted.color,
          maxLineCount: row.maxNLines || this.config.maxNLines,
          renderCallback: (data) => {
            let nLines = data.linesNumber
            row.height = Math.max(row.height || 0, this.config.rowLineHeight * (nLines + 0.5))
            cell.nLines = row.nLines = Math.max(row.nLines || 0, nLines)
            g.remove()
            resolve()
          },
          isWordBreak: this.config.flags.isLongWordBreakingOn,
          title:false
        }
        this.config.textWrap({
          text: formatted.text,
          targetElement: g,
          options: testWrapperOptions
        })
      })
      cellPromises.push(promise)
    })


    return Promise.all(cellPromises).then(() => {

      //rendering cell heights and y
      this.byEachCell((cell, column, row, i, j) => {
        cell.height = row.height
        let y = this.config.chartActualHeight + this.config.offsetY
        for(let k = 0; k < j; k++) {
          let prependingRow = this.data.rows[k]
          y += prependingRow.height
        }
        cell.y = y
      })

      // //rendering paths for wrapping text
      // this.byEachCell((cell, column, row) => {
      //  let d = ''
      //  for(let k = 0; k < cell.nLines; k++){
      //    let xstart = cell.x + (column.textXCorrection || 0) + this.config.cellXPadding
      //    let ystart = cell.y + this.config.rowLineHeight * (k + .5)
      //    let xend = cell.x + cell.width - this.config.cellXPadding
      //    d += `M${xstart},${ystart} H${xend} `
      //  }
      //  let path = {
      //    d
      //  }
      //  cell.path = path
      // })

      //rendering table height
      let height = this.config.offsetY + this.config.rowLineHeight
      this.byEachRow((row) => {
        height += row.height
      })
      this.config.height = height

      //rendering cells additional attrs
      this.byEachCell((cell) => {
        if(Number.isNumber(cell.text) || /\%/.test(cell.text)){
          let number = parseFloat(cell.text)
          if(!Number.isNaN(number)){
            // cell.additionalAttrs.fill = number > 0 ? this.config.colors.green : number < 0 ? this.config.colors.red : this.config.colors.default
            cell.additionalAttrs['font-weight'] = 'bold'
          }
        }
      })

      //rendering rects
      // this.data.rects = []
      this.byEachColumn((column) => {
        column.rects = []
      })
      this.byEachRow((row) => {
        row.rects = []
      })
      this.byEachCell((cell, column, row, i, j) => {
        let rect = {
          columnIndex: i,
          rowIndex: j,
          x: cell.x,
          y: cell.y,
          width: cell.width,
          height: cell.height
        }

        if(j % 2 == 1){
          rect.fill = this.config.fill
        } else {
          rect.fill = 'white'
        }


        //finally setting rendered rect to table
        // this.data.rects.push(rect);

        row.rects.push(rect)
        column.rects.push(rect)
        cell.rect = rect
      })
    })
  }

  //draw rendered table
  draw() {
    this.clean()

    this.tableWrapper = this.svg.append('g')
    this.tableWrapper.attrs({
      class: nv.modules.table.constants.TABLE_CLASS
    })
    let elemCells = this.tableWrapper.append('g').attrs({
      class: `${nv.modules.table.constants.TABLE_CLASS}-cells`
    })

    let cellPromises = []
    this.byEachCell((cell, column, row, i, j) => {
      let id = this.getId(column, row)
      let idClipPath = `${id}-clip-path`
      let idText = `${id}-text`

      cell.elemG = elemCells.append('g')
      cell.elemG.attrs({
        class: `${nv.modules.table.constants.TABLE_CLASS}-cell`,
        id,
        transform: `translate(${cell.rect.x}, ${cell.rect.y})`
      })

      //clip-paths
      let elemClipPath = cell.elemG.append('clipPath').attrs({
        id: idClipPath
      })
      let elemClipPathRect = elemClipPath.append('rect').attrs({
        x: 0,
        y: 0,
        width: cell.rect.width,
        height: cell.rect.height
      })
      //bounding rects
      cell.elemRect = cell.elemG.append('rect').attrs({
        x: 0,
        y: 0,
        width: cell.rect.width,
        height: cell.rect.height,
        fill: cell.rect.fill || this.config.fill,
        stroke: cell.rect.stroke || this.config.stroke,
        'stroke-width': cell.rect.strokeWidth || this.config.strokeWidth
      }).styles({
        fill: cell.rect.fill || this.config.fill,
        stroke: cell.rect.stroke || this.config.stroke,
        'stroke-width': cell.rect.strokeWidth || this.config.strokeWidth
      })
      // //text
      // let elemTextAttrs = Object.assign({}, cell.additionalAttrs, {
      //   id,
      //   'font-size': `${this.config.fontSize}px`,
      //   'clip-path': `url(#${idClipPath})`
      // })
      // if(i == 0 || j == 0) {
      //   elemTextAttrs['font-weight'] = 'bold'
      // }
      // let elemText = cell.elemG.append('text').attrs(elemTextAttrs)
      // if(cell.options.hideText){
      //   elemText.style('visibility', 'hidden')
      // }

      //text drawing and wrapping
      let promise = new Promise((resolve, reject) => {
        const formatted = this.getText(column, row, i, j)
        const wrapOptions = {
          x: (column.textXCorrection || 0),
          y: -0.25 * this.config.rowLineHeight,
          width: cell.rect.width - (column.textXCorrection || 0),
          height: cell.rect.height,
          fontSize: this.config.fontSize,
          fontWeight: cell.options.fontWeight,
          textAnchor: column.align || this.config.align,
          verticalAlign: cell.valign || row.valign || column.valign || this.config.valign,
          lineHeight: this.config.rowLineHeight,
          fontFamily: 'Roboto, Open Sans, sans-serif',
          fontColor: formatted.color,
          maxLineCount: row.maxNLines || this.config.maxNLines,
          id: idText,
          renderCallback: (data) => {
            let textElemAttrs = Object.assign({}, cell.additionalAttrs, {
              'font-size': `${this.config.fontSize}px`,
              'clip-path': `url(#${idClipPath})`
            })
            if(i == 0 || j == 0) {
              textElemAttrs['font-weight'] = 'bold'
            }
            data.textElem.attrs(textElemAttrs)
            if(cell.options.hideText){
              data.textElem.style('visibility', 'hidden')
            }
            if(cell.options.hideCell) {
              d3.select(data.textElem.node().parentNode).style('display', 'none')
            }
            cell.elemText = data.textElem

            resolve()
          },
          isWordBreak: this.config.flags.isLongWordBreakingOn,
          ellipsisToLastWord: this.config.flags.isEllipsisToLastWordOn,
          tooltip: !cell.options.hideText,
          title: false
        }
        this.config.textWrap({
          text: formatted.text,
          targetElement: cell.elemG,
          options: wrapOptions
        })
      })
      cellPromises.push(promise)
    })

    //take care of summary svg height
    let tableActualHeight = this.tableWrapper.node().getBBox().height
    let svgSummaryHeight
    let container
    let chartContainerVisibility = 'visible'

    if(this.config.squeezeChartHeight && this.config.container != null && (container = d3.select(this.config.container).node()) != null && Function.isFunction(container.getBoundingClientRect)) {
      // const baseHeight = this.instance.originalOptions.height
      // const baseHeight = container.getBoundingClientRect().height
      const baseHeight = Math.min(container.getBoundingClientRect().height, this.config.chartWantedHeight || Infinity)
      svgSummaryHeight = baseHeight + this.config.rowLineHeight * 3 / 2
      const limit = this.instance.extendedChart.margin().top + 30
      let chartHeight = baseHeight - tableActualHeight
      if(chartHeight < limit) {
        chartHeight = limit
        this.tableWrapper.attrs({
          transform: `translate(0, -${this.config.chartActualHeight - this.instance.extendedChart.margin().top})`
        })
        chartContainerVisibility = 'hidden'

      }
      this.instance.extendedChart.height(chartHeight)
      // this.config.scheduleAndSkipNextUpdate()
    } else {
      svgSummaryHeight = this.config.chartActualHeight + tableActualHeight + this.config.rowLineHeight
    }
    const chartContainer = this.svg.select('.nv-wrap')
    chartContainer.styles({
      visibility: chartContainerVisibility
    })

    svgSummaryHeight = Math.max(tableActualHeight + this.config.rowLineHeight * 3 / 2, svgSummaryHeight)
    this.svg.attrs({
      height: svgSummaryHeight
    })
    this.svg.style('height', `${svgSummaryHeight}px`)

    // //wrapText
    // this.wrapText()

    //tooltips
    // this.drawTooltips()

    return Promise.all(cellPromises)
  }

  // wrapText() {
  //   //wrapping text using d3plus
  //   this.byEachCell((cell, column, row, i, j) => {
  //     let id = this.getId(column, row)
  //     let textElem = d3.select(`#${id}`)
  //     let text = this.getText(column, row, i, j)
  //     // textElem.text(text)
  //     let config = {
  //       width: cell.width,
  //       shape: 'square',
  //       align: column.align || this.config.align,
  //       valign: 'top',
  //       // x: cell.x + 10,
  //       x: cell.x,
  //       y: cell.y,
  //       width: cell.width - (column.textXCorrection || 0),
  //       // width: cell.width,
  //       // height: cell.height,
  //       text: {
  //         split: [' '],
  //         value: text
  //       },
  //       // resize: true,
  //     }
  //     textElem.attr('dy', this.config.rowLineHeight)
  //     d3plus
  //       .textwrap()
  //       .config(config)
  //       .container(textElem)
  //       .draw()


  //     //applying text left indent
  //     if(column.textXCorrection) {
  //       let transform = textElem.attr('transform')
  //       textElem.attr('transform', `${transform}translate(${column.textXCorrection})`)
  //     }

  //     //setting beautiful top indent in cell
  //     let firstTspan = d3.select(`#${id}`).selectAll('tspan:first-child')
  //     firstTspan.attr('dy', this.config.rowLineHeight / 1.25)

  //     //centering cell vertically
  //     let wantedVAlign = cell.valign || row.valign || column.valign || this.config.valign
  //     if(['middle', 'center'].includes(wantedVAlign)) {
  //       let tspans = textElem.selectAll('tspan')
  //       let nLinesDiff = row.nLines - tspans[0].length
  //       if(nLinesDiff > 0) {
  //         let yAddition = nLinesDiff / 2 * this.config.rowLineHeight
  //         textElem.attr('y', parseFloat(textElem.attr('y')) + yAddition)
  //       }
  //     }
  //   })
  // }

  clean() {
    if(this.tableWrapper != null) {
      this.tableWrapper.remove()
      this.tableWrapper = null
    }
  }

  drawLoader() {
    let viewportWidth
    try{
      viewportWidth = this.svg.node().width.baseVal.value
    } catch(e) {
      return
    }
    let top = this.config.chartActualHeight + this.config.offsetY
    let left = viewportWidth / 2 - this.config.loaderSize / 2

    if(this.loader == null) {
      // this.svg.attrs({
      //   height: this.config.chartActualHeight + 150
      // })
      let g = this.svg.append('g')
      g.attrs({
        transform: `translate(${top}, ${left})`
      })
      // g.html(`
      //   <path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
      //     s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
      //     c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>
      //   <path fill="#000" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
      //     C22.32,8.481,24.301,9.057,26.013,10.047z">
      //     <animateTransform attributeType="xml"
      //       attributeName="transform"
      //       type="rotate"
      //       from="0 20 20"
      //       to="360 20 20"
      //       dur="0.5s"
      //       repeatCount="indefinite"/>
      //   </path>
      // `)
      // g.html(`
      //   <foreignObject width="${this.config.loaderSize}" height="${this.config.loaderSize}" >
      //     <img src='../../img/loader.gif' height='${this.config.loaderSize}' width='${this.config.loaderSize}'/>
      //   </foreignObject>
      // `)
      g.html(`
        <foreignObject width="100%" height="${this.config.loaderSize}" >
          <body>
          <div class="sk-circle" style='top:${top}px'>
            <div class="sk-circle1 sk-child"></div>
            <div class="sk-circle2 sk-child"></div>
            <div class="sk-circle3 sk-child"></div>
            <div class="sk-circle4 sk-child"></div>
            <div class="sk-circle5 sk-child"></div>
            <div class="sk-circle6 sk-child"></div>
            <div class="sk-circle7 sk-child"></div>
            <div class="sk-circle8 sk-child"></div>
            <div class="sk-circle9 sk-child"></div>
            <div class="sk-circle10 sk-child"></div>
            <div class="sk-circle11 sk-child"></div>
            <div class="sk-circle12 sk-child"></div>
          </div>
          </body>
          <style type="text/css" media="screen">
            .sk-circle {
              margin: 10px auto;
              width: 40px;
              height: 40px;
              position: relative;
            }
            .sk-circle .sk-child {
              width: 100%;
              height: 100%;
              position: absolute;
              left: 0;
              top: 0;
            }
            .sk-circle .sk-child:before {
              content: '';
              display: block;
              margin: 0 auto;
              width: 15%;
              height: 15%;
              background-color: #333;
              border-radius: 100%;
              -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;
                      animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;
            }
            .sk-circle .sk-circle2 {
              -webkit-transform: rotate(30deg);
                  -ms-transform: rotate(30deg);
                      transform: rotate(30deg); }
            .sk-circle .sk-circle3 {
              -webkit-transform: rotate(60deg);
                  -ms-transform: rotate(60deg);
                      transform: rotate(60deg); }
            .sk-circle .sk-circle4 {
              -webkit-transform: rotate(90deg);
                  -ms-transform: rotate(90deg);
                      transform: rotate(90deg); }
            .sk-circle .sk-circle5 {
              -webkit-transform: rotate(120deg);
                  -ms-transform: rotate(120deg);
                      transform: rotate(120deg); }
            .sk-circle .sk-circle6 {
              -webkit-transform: rotate(150deg);
                  -ms-transform: rotate(150deg);
                      transform: rotate(150deg); }
            .sk-circle .sk-circle7 {
              -webkit-transform: rotate(180deg);
                  -ms-transform: rotate(180deg);
                      transform: rotate(180deg); }
            .sk-circle .sk-circle8 {
              -webkit-transform: rotate(210deg);
                  -ms-transform: rotate(210deg);
                      transform: rotate(210deg); }
            .sk-circle .sk-circle9 {
              -webkit-transform: rotate(240deg);
                  -ms-transform: rotate(240deg);
                      transform: rotate(240deg); }
            .sk-circle .sk-circle10 {
              -webkit-transform: rotate(270deg);
                  -ms-transform: rotate(270deg);
                      transform: rotate(270deg); }
            .sk-circle .sk-circle11 {
              -webkit-transform: rotate(300deg);
                  -ms-transform: rotate(300deg);
                      transform: rotate(300deg); }
            .sk-circle .sk-circle12 {
              -webkit-transform: rotate(330deg);
                  -ms-transform: rotate(330deg);
                      transform: rotate(330deg); }
            .sk-circle .sk-circle2:before {
              -webkit-animation-delay: -1.1s;
                      animation-delay: -1.1s; }
            .sk-circle .sk-circle3:before {
              -webkit-animation-delay: -1s;
                      animation-delay: -1s; }
            .sk-circle .sk-circle4:before {
              -webkit-animation-delay: -0.9s;
                      animation-delay: -0.9s; }
            .sk-circle .sk-circle5:before {
              -webkit-animation-delay: -0.8s;
                      animation-delay: -0.8s; }
            .sk-circle .sk-circle6:before {
              -webkit-animation-delay: -0.7s;
                      animation-delay: -0.7s; }
            .sk-circle .sk-circle7:before {
              -webkit-animation-delay: -0.6s;
                      animation-delay: -0.6s; }
            .sk-circle .sk-circle8:before {
              -webkit-animation-delay: -0.5s;
                      animation-delay: -0.5s; }
            .sk-circle .sk-circle9:before {
              -webkit-animation-delay: -0.4s;
                      animation-delay: -0.4s; }
            .sk-circle .sk-circle10:before {
              -webkit-animation-delay: -0.3s;
                      animation-delay: -0.3s; }
            .sk-circle .sk-circle11:before {
              -webkit-animation-delay: -0.2s;
                      animation-delay: -0.2s; }
            .sk-circle .sk-circle12:before {
              -webkit-animation-delay: -0.1s;
                      animation-delay: -0.1s; }

            @-webkit-keyframes sk-circleBounceDelay {
              0%, 80%, 100% {
                -webkit-transform: scale(0);
                        transform: scale(0);
              } 40% {
                -webkit-transform: scale(1);
                        transform: scale(1);
              }
            }

            @keyframes sk-circleBounceDelay {
              0%, 80%, 100% {
                -webkit-transform: scale(0);
                        transform: scale(0);
              } 40% {
                -webkit-transform: scale(1);
                        transform: scale(1);
              }
            }
          </style>
        </foreignObject>
      `)
      this.loader = g
    }
  }

  cleanLoader() {
    if(this.loader != null) {
      this.loader.remove()
      this.loader = null
    }
  }

  build() {
    this.drawLoader()
    this.clean()
    this.isRendering++
    this.render().then(() => {
      this.isRendering--
      this.isDrawing++
      this.draw().then(() => {
        this.isDrawing--
        if(this.isDrawing == 0 && this.isRendering == 0) {
          this.cleanLoader()
        }
      })
    })
  }
}
