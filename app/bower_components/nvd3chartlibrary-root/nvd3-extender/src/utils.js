//window (global fns)
window.clone = function(smth) {
  return JSON.parse(JSON.stringify(smth))
}

window.cloneDeep = function(smth) {
  return Object.copyDeep({smth}).smth
}

window.areEqual = function(smth1, smth2) {
  return JSON.stringify(smth1) == JSON.stringify(smth2)
}

// window.cloneDeep = function(smth) {

//   if (smth instanceof Date) {
//     return new Date(smth)
//   }

//   if (Array.isArray(smth)) {
//     return obj.slice()
//   }

//   if(Function.isFunction(smth)) {
//     return smth.clone()
//   }

//   if (obj instanceof Object) {
//     var copy = new obj.constructor()
//     for (var attr in obj) {
//       if (obj.hasOwnProperty(attr)){
//         if (obj[attr] instanceof Object){
//           copy[attr] = window.cloneDeep(obj[attr])
//         } else {
//           copy[attr] = obj[attr];
//         }
//       }
//     }
//     return copy
//   }
// }

//String proto
String.prototype.withoutLastWord = function () {
  let index = this.lastIndexOf(' ')
  if (index >= 0) {
    return this.slice(0, index)
  } else {
    return ''
  }
}

String.prototype.insertInstead = function (start, count, substr) {
  return `${this.slice(0, start)}${substr}${this.slice(start + count)}`
}

//String
String.isString = function(smth){
  return typeof smth === 'string'
}

//Array proto
Array.prototype.includes = function (item) {
  return this.indexOf(item) >= 0
}

Array.prototype.each = Array.prototype.forEach

Array.prototype.firstWhere = function(prop, value) {
  for(let item of this){
    if(item != null && item[prop] == value){
      return item
    }
  }
}

//Number
Number.isNumber = function (n) {
  if(String.isString(n)) {
    n = n.replace(/\,/g, '')
  }
  const parsed = parseFloat(n)
  return !isNaN(parsed) && isFinite(n)
}


Number.parseNumber = function (smth) {
  if(String.isString(smth)){
    smth = smth.replace(/\,/g, '')
  }
  return parseFloat(smth)
}

//Function proto
Function.prototype.wrap = function (fn) {
  const original = this
  return function (...args) {
    fn(original, ...args)
  }
}

//Function
Function.isFunction = (fn) => {
  return typeof fn === 'function'
}

//Function prototype

//Object
Object.forOwnProps = (o, fn) => {
  for (let k in o) {
    if (o.hasOwnProperty(k)) {
      fn(o[k], k)
    }
  }
}

Object.extendWithOwnProperties = (o1, o2) => {
  Object.forOwnProps(o2, (item, k) => {
    o1[k] = item
  })
}

Object.isObject = (o) => {
  return o != null && typeof o === 'object' && !Array.isArray(o)
}

Object.defaultsDeep = function (target = {}) {
  let copy = (target, current) => {
    Object.forOwnProps(current, (currentValue, key) => {
      let targetValue = target[key]
      if (targetValue == null) {
        target[key] = currentValue
      }
      else if (Object.isObject(targetValue) && Object.isObject(currentValue)) {
        Object.defaultsDeep(targetValue, currentValue)
      }
    })
  }

  let i = 0
  while (i < arguments.length) {
    var obj = arguments[i++]
    if (obj) {
      copy(target, obj)
    }
  }
  return target
}

Object.copyDeep = function (source) {
  let result = {}
  Object.mergeDeep(result, source)
  return result
}

Object.mergeDeep = function (target, ...sources) {
  if (!sources.length) return target
  const source = sources.shift()

  if (Object.isObject(target) && Object.isObject(source)) {
    for (const key in source) {
      if (Object.isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} })
        Object.mergeDeep(target[key], source[key])
      } else {
        Object.assign(target, { [key]: source[key] })
      }
    }
  }

  return Object.mergeDeep(target, ...sources)
}

//PromiseCancelable
class PromiseCancelable {
  constructor(fn) {
    this.fn = fn
    this._createPromise()
  }

  _createPromise() {
    let promise = new Promise(this.fn)

    this.__promise = new Promise((resolve, reject) => {
      promise.then((data) => {
        return this.canceled ? reject({canceled: true}) : resolve(data)
      })
      promise.catch((error) => {
        return this.canceled ? reject({canceled: true}) : reject(error)
      })
    })
  }

  static all(...args){
    return new PromiseCancelable((resolve, reject) => {
      Promise.all(...args).then(resolve, reject)
    })
  }

  static resolve(...args){
    return new PromiseCancelable((resolve, reject) => {
      Promise.resolve(...args).then(resolve, reject)
    })
  }

  cancel() {
    this.canceled = true
  }

  then(fn) {
    return new PromiseCancelable((resolve, reject) => {
      this.__promise.then(fn).then(resolve, reject)
    })
  }

  catch(fn) {
    return this.__promise.catch(fn)
  }
}

if (!d3.easeCubicOut) {
  d3.easeCubicOut = 'easeCubicOut'
}
