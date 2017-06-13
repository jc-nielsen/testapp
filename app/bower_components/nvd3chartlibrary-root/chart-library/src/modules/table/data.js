nv.modules.table.Data = class {
  constructor(data = {}, config = {}) {
    if(this._isDataValid(data)) {
      this.__isDataValid = true
      this.__initialData = data
      this.__headRow = data.rows[0]
      this.__config = config
      Object.defaultsDeep(this.__config, {
        autoAddFirstColumn: true
      })
    } else {
      this.__isDataValid = false
    }
  }

  _isDataValid(data) {
    const defaultErrorMessage = 'Failed to instantiate discreteBarChartWithTable.Data'
    const defaultWarningMessage = 'Warning in discreteBarChartWithTable.Data'
    if(!data.rows) {
      console.error(`${defaultErrorMessage}: field ".rows" not specified`)
      return false
    }
    if(!Array.isArray(data.rows)) {
      console.error(`${defaultErrorMessage}: field ".rows" is not array`)
      return false
    }
    if(data.rows.length < 1) {
      console.error(`${defaultErrorMessage}: field ".rows" doesn\'t contain any row`)
      return false
    }
    if(!data.columns) {
      console.error(`${defaultErrorMessage}: field ".columns" not specified`)
      return false
    }
    if(!Array.isArray(data.columns)) {
      console.error(`${defaultErrorMessage}: field ".columns" is not array`)
      return false
    }
    if(data.columns.length < 1) {
      console.error(`${defaultErrorMessage}: field ".columns" doesnt contain any column`)
      return false
    }

    if(data.rows.length === 1) {
      console.warn(`${defaultWarningMessage}: field ".rows" contains only one head row`)
    }

    return true
  }

  _byEachInitialDataColumn(fn) {
    for(let i = 0; i < this.__initialData.columns.length; i++) {
      let column = this.__initialData.columns[i]
      fn(column, i)
    }
  }

  _byEachInitialDataRow(fn) {
    for(let j = 0; j < this.__initialData.rows.length; j++) {
      let row = this.__initialData.rows[j]
      fn(row, j)
    }
  }

  //data formatters
  chart(rowNumber) {
    if(!this.__isDataValid || !rowNumber || !Number.isInteger(rowNumber) || rowNumber < 1 || rowNumber >= this.__initialData.rows.length) {
      return null
    }

    const row = this.__initialData.rows[rowNumber]
    let data = {
      key: row.displayName,
      values: []
    }
    this._byEachInitialDataColumn((column, i) => {
      if(i === 0 && !this.__config.autoAddFirstColumn){
        return
      }
      data.values.push({
        label: column[this.__headRow.fieldName],
        value: column[row.fieldName]
      })
    })
    return [data]
  }


  table(){
    const columnSlug = i => (this.__config.autoAddFirstColumn ? i + 1 : i).toString()

    let data = {
      columns: [],
      rows: []
    }

    if(this.__config.autoAddFirstColumn){
      data.columns.push({
        slug: '0'
      })
    }

    this._byEachInitialDataColumn((column, i) => {
      let tableColumn = {
        slug: columnSlug(i)
      }
      data.columns.push(tableColumn)
    })

    Object.assign(data.columns[0], {
      strictWidth: nv.modules.table.constants.TABLE_FIRST_COLUMN_WIDTH,
      align: nv.modules.table.constants.TABLE_FIRST_COLUMN_ALIGN,
      textXCorrection: nv.modules.table.constants.TABLE_FIRST_COLUMN_TEXT_X_CORRECTION
    })

    this._byEachInitialDataRow((row, j) => {
      let tableRow = {
        slug: row.fieldName
      }
      if(this.__config.autoAddFirstColumn){
        tableRow['0'] = new nv.modules.table.TableCell(row.displayName)
      }
      this._byEachInitialDataColumn((column, i) => {
        let string = column[row.fieldName]
        let TableCellClass = nv.modules.table.TableCell
        let tableColumn = data.columns[columnSlug(i)]
        tableRow[tableColumn.slug] = new TableCellClass(string)
      })
      data.rows.push(tableRow)
    })

    return data
  }
}
