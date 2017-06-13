class Factory{
  constructor(config = {}, defaults = {}, properties){
    this._initConfig(config, defaults)
    this._initProperties(properties)
  }

  _initConfig(config, defaults) {
    this.config = Object.defaultsDeep(config, defaults)
  }

  _initProperties(properties) {
    for(let propertyName in properties){
      this[propertyName] = properties[propertyName]
    }
  }
}
