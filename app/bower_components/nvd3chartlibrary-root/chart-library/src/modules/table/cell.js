nv.modules.table.TableCell = class {
  constructor(text = '', options = {}) {
    this._text = text != null && text !== '' ? text : '_'
    this.options = options
    this.additionalAttrs = {}
    if(this.text === '_'){
      this.makeTextHidden()
    }
  }

  //format
  format(text) {
    return text.toString().trim().replace(/\s\s+/g, ' ')
  }

  //options manipulating
  makeTextHidden() {
    this.options.hideText = true
  }

  makeHidden() {
    this.options.hideCell = true
  }

  makeBold() {
    this.options.fontWeight = 'bold'
  }

  //getters/setters
  get text() {
    return this.format(this._text)
  }
}


nv.modules.table.TableCellMoneyFormat = class extends nv.modules.table.TableCell {
  format(text) {
    return `$${super.format(text)}M`
  }
}
