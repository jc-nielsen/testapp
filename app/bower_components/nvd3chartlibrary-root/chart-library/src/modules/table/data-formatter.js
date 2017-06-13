nv.modules.table.DataFormatter = class {
  constructor(__initialData = {}, __options = {}) {
    this.__initialData = __initialData
    this.__options = __options
  }

  _byEachRow(fn) {
    let lines = this.__options.lines
    if(!Array.isArray(lines)){
      lines = Object.keys(this.__initialData).map(i => parseInt(i))
    }
    for(let j of lines) {
      if(j >= 0 && j < this.__initialData.length) {
        const row = this.__initialData[j]
        fn(row, j)
      }
    }
  }

  _byEachCellOfRow(row, fn) {
    for(let i = 0; i < row.values.length; i++) {
      const cell = row.values[i]
      fn(cell, i)
    }
  }

  table(){
    let data = {
      columns: [],
      rows: []
    }

    data.columns.push({
      slug: 'first_column',
      strictWidth: nv.modules.table.constants.TABLE_FIRST_COLUMN_WIDTH,
      align: nv.modules.table.constants.TABLE_FIRST_COLUMN_ALIGN,
      textXCorrection: nv.modules.table.constants.TABLE_FIRST_COLUMN_TEXT_X_CORRECTION
    })

    this._byEachCellOfRow(this.__initialData[0], (cell, i) => {
      const tableColumn = {
        slug: this.__options.x(cell)
      }
      data.columns.push(tableColumn)
    })

    if(this.__options.showHeadRow) {
      let firstRow = {
        first_column: new nv.modules.table.TableCell(this.__options.firstCellContent, {
          hideText: false,
        })
      }
      this._byEachCellOfRow(this.__initialData[0], (cell, i) => {
        const label = this.__options.x(cell)
        let text
        if(label != null) {
          text = this.__options.xTickFormat(label)
        }
        firstRow[label] = new nv.modules.table.TableCell(text)
      })
      data.rows.push(firstRow)
    }

    this._byEachRow((row, j) => {
      let tableRow = {
        slug: row.key,
        first_column: new nv.modules.table.TableCell(row.key)
      }
      this._byEachCellOfRow(row, (cell, i) => {
        const label = this.__options.x(cell)
        const value = this.__options.y(cell)
        // let text
        // if(value != null) {
        //   text = this.__options.yTickFormat(value)
        // }
        // tableRow[label] = new nv.modules.table.TableCell(text)
        tableRow[label] = new nv.modules.table.TableCell(value)
      })
      data.rows.push(tableRow)
    })

    return data
  }
}
