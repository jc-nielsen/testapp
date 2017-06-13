{
  nv.ModelExtension.Utils = class ModelExtensionUtils {
    constructor() {
      for(let Util of nv.ModelExtension.Utils.Util.kit){
        const util = new Util()
        this[util.name] = util
      }
    }
  }


  nv.ModelExtension.Utils.Util = class {
    constructor(name, fn) {
      this.name = name
      if(this.fn == null) this.fn = fn
    }

    replace(fn) {
      this.fn = fn
    }
  }

  nv.ModelExtension.Utils.Util.kit = [
    class ConditionalFormat extends nv.ModelExtension.Utils.Util {
      constructor() {
        super('conditionalFormat')
      }

      /*
       * d: any
       */
      fn(d) {
        return {
          text: (d || '').toString()
        }
      }
    },

    class TextWrap extends nv.ModelExtension.Utils.Util {
      constructor() {
        super('textWrap')
      }

      /*
       * args: Object
       *   {
       *    text: string,
       *    targetElement: SVGElement,
       *    options: Object
       *   }
       */
      fn(args) {
        return d3CustomUtils.DrawWrappedText(args.text, args.targetElement, args.options)
      }
    }
  ]
}
