d3CustomUtils = {};

(function () {
  const defaultLocale = 'en-US';
  const defaultCurrency = 'USD';

  const NumberType = {
    number: 'number',
    currency: 'currency',
    percent: 'percent'
  };

  const Colors = {
    positive: '#26B910',
    negative: '#E00020',
    neutral: '#151921'
  };

  /**
   * Constructor
   *
   * @param {Number} num
   * @param {string} type
   * @param {string} formatString
   * @param {Object|null} options
   */
  class NumberFormatter {
    constructor(num, type = NumberType.number, formatString, options = {}) {
      this.num = num;
      this.type = type;
      this.formatString = formatString;
      this.options = options;

      Object.defaultsDeep(options, {
        locale: defaultLocale,
        currency: defaultCurrency,
        percents: {
          maximumFractionDigits: 4
        }
      });

      this.result = {};
    }

    /**
     * Make rounding then abbreviate number.
     *
     * @private
     */
    __rounding() {
      let roundedStr;
      let roundedNum;
      let abbr;

      if (this.type !== NumberType.percent && this.result.num >= 10000) {
        roundedStr = abbreviateNum(Number(this.result.num));
        roundedNum = roundedStr.toString().slice(0, -1);
        abbr = roundedStr.toString().slice(-1);
      } else {
        roundedNum = this.result.num;
        abbr = '';
      }

      if (this.type === NumberType.percent && Math.abs(this.num) > 1) {
        roundedStr = abbreviateNum(Math.abs(this.result.num));
        roundedNum = roundedStr.toString().slice(0, -1);
        abbr = roundedStr.toString().slice(-1);
      }

      this.result.num = Math.abs(roundedNum);
      this.result.abbr = abbr;
    }

    /**
     * Apply mask to rounded number.
     *
     * @private
     */
    __format() {
      const colorPattern = /\[(.*)]/;
      const maskPattern = /(\[.*])?(.*)/;

      const parts = this.formatString.split(';');

      let colors = {};
      let masks = {};

      for (let i = 0; i < parts.length; i++) {
        if (!parts[i]) {
          break
        }

        const color = parts[i].match(colorPattern);
        const mask = parts[i].match(maskPattern);

        const colorPresent = color && color[1].length;

        switch (true) {
          case i === 0:
            colors.positive = colorPresent ? color[1] : Colors.positive;
            colors.negative = Colors.negative;
            colors.neutral = Colors.neutral;

            masks.positive = mask[2];
            masks.negative = mask[2];
            masks.neutral = mask[2];
            break;
          case i === 1:
            colors.negative = colorPresent ? color[1] : Colors.negative;
            masks.negative = mask[2];
            break;
          case i === 2:
            colors.neutral = colorPresent ? color[1] : Colors.neutral;
            masks.neutral = mask[2];
            break
        }
      }

      let text;
      let color;
      let num = this.result.num;

      switch (true) {
        case Number.isNumber(this.result.num):
          text = d3.format(num > 0 ? masks.positive : num < 0 ? masks.negative : masks.neutral)(Number(num));
          color = this.num > 0 ? colors.positive : this.num < 0 ? colors.negative : colors.neutral;
          // text = SSF.format(num > 0 ? masks.positive : num < 0 ? masks.negative : masks.neutral, Number(num));
          // color = this.num > 0 ? colors.positive : this.num < 0 ? colors.negative : colors.neutral;
          break;
        case String.isString(num):
          text = num;
          color = 'black';
          break;
        default:
          text = JSON.stringify(num);
          color = 'black'
      }

      this.result.num = text;
      this.result.color = color;
    }

    /**
     * Apply localization to percent.
     * @private
     */
    __percent() {
      if (this.type === NumberType.percent) {
        this.result.typeSign = '%';
        this.result.typeSignPos = 'end';


        this.result.num = this.num.toLocaleString(this.options.locale, {
          style: 'percent',
          maximumFractionDigits: this.options.percents.maximumFractionDigits
        });

        this.result.num = this.result.num.slice(0, this.result.num.length - 1);

        if (Math.abs(this.num) < 1) {
          this.result.num = SSF.format(this.formatString, Number(this.result.num));
          return;
        }

        this.result.num = this.result.num.replace(',', '');
      }
    }

    /**
     * Apply localization to rounded and formatted number.
     *
     * @private
     */
    __currency() {
      switch (true) {
        case this.type === NumberType.percent: {
          break;
        }

        case this.type === NumberType.currency: {
          const localizedStr = Number(this.result.num).toLocaleString(this.options.locale, {
            style: this.type,
            currency: this.options.currency
          });

          if (Number(localizedStr.charAt(0))) {
            this.result.typeSign = localizedStr.charAt(localizedStr.length - 1);
            this.result.typeSignPos = 'end';
            break;
          }

          this.result.typeSign = localizedStr.charAt(0);
          this.result.typeSignPos = 'start';
          break;
        }

        default: {
          this.result.typeSign = this.type === NumberType.number ? '' : ` ${this.type}`;
          this.result.typeSignPos = 'end';
        }
      }
    }

    /**
     * Detect number's sign.
     *
     * @private
     */
    __sign() {
      this.result.num = Math.abs(this.num);

      if (this.num >= 0) {
        this.result.sign = '';
        return;
      }
      this.result.sign = '-';
    }

    /**
     *
     * @returns {{text: string, color: string}}
     */
    perform() {
      this.__sign();
      this.__percent();
      this.__rounding();
      this.__format();
      this.__currency();

      const startTypeSign = `${this.result.typeSignPos == 'start' ? this.result.typeSign : ''}`;
      const endTypeSign = `${this.result.typeSignPos == 'end' ? this.result.typeSign : ''}`;

      return {
        text: `${this.result.sign}${startTypeSign}${this.result.num}${this.result.abbr}${endTypeSign}`,
        color: this.result.color
      };
    }
  }

  /**
   * Abbreviate number
   *
   * @param {Number} number
   * @param {Number} decimalPlaces
   * @returns {String}
   */
  function abbreviateNum(number, decimalPlaces = 2) {
    const suffixes = ['K', 'M', 'B', 'T'];

    decimalPlaces = Math.pow(10, decimalPlaces);

    for (let i = suffixes.length - 1; i >= 0; i--) {
      const size = Math.pow(10, (i + 1) * 3);

      if (size <= number) {
        var number = Math.round(number * decimalPlaces / size) / decimalPlaces;

        if ((number == 1000) && (i < suffixes.length - 1)) {
          number = 1;
          i++;
        }

        number += suffixes[i];
        break;
      }
    }

    return number.toString();
  }

  /**
   * Wrapping large strings
   *
   * @param {string} text
   * @param {Object} targetElement
   * @param {Object} options
   */
  function drawWrappedText(text, targetElement, options = {}) {
    Object.defaultsDeep(options, {
      fontSize: 16,
      isWordBreak: false,
      doClipPath: false,
      ellipsisToLastWord: false,
      title: true,
    })

    var maxLineCount = (options && options.maxLineCount) ? (options.maxLineCount) : null;
    var width = (options && options.width) ? (options.width) : null;
    var height = (options && options.height) ? (options.height) : null;
    var x = (options && options.x) ? (options.x) : null;
    var y = (options && options.y) ? (options.y) : null;
    var fontColor = (options && options.fontColor) ? (options.fontColor) : null;
    var fontSize = (options && options.fontSize) ? (options.fontSize) : 16;
    var textAnchor = (options && options.textAnchor) ? (options.textAnchor) : null;
    var rotate = (options && options.rotate) ? (options.rotate) : null;
    var containerRotate = (options && options.containerRotate) ? (options.containerRotate) : null;
    var containerX = (options && options.containerX) ? (options.containerX) : null;
    var containerY = (options && options.containerY) ? (options.containerY) : null;
    var verticalAlign = (options && options.verticalAlign) ? (options.verticalAlign) : null;
    var split = (options && options.split) ? (options.split) : null;
    var lineHeight = (options && options.lineHeight) ? (options.lineHeight) : null;
    var overflow = (options && options.overflow) ? (options.overflow) : null;
    var fontFamily = (options && options.fontFamily) ? (options.fontFamily) : null;
    var fontWeight = (options && options.fontWeight) ? (options.fontWeight) : null;
    var renderCallback = (options && options.renderCallback) ? (options.renderCallback) : null;
    var isWordBreak = (options && options.isWordBreak) ? (options.isWordBreak) : false;
    var doClipPath = (options && options.doClipPath) ? (options.doClipPath) : false;
    var ellipsisToLastWord = (options && options.ellipsisToLastWord) ? (options.ellipsisToLastWord) : false;

    if (ellipsisToLastWord) {
      // Temporary disable for correct calculation
      isWordBreak = false;
      textAnchor = null;
      doClipPath = true;
    }

    if (isWordBreak && !Number.isNumber(text)) {
      isWordBreak = false;
    }

    var textBox = new d3plus.TextBox();

    var useClip = true;

    if (isWordBreak && !Number.isNumber(text)) {
      isWordBreak = false;
    }

    if (isWordBreak) {
      var minFontSize = 8;
      var baseFontSize = 12;
      var fontScaleKoef = 6.5;
      var widthScaleKoef = 2.35;
      var defaultFontSize = 16;
      if (fontSize < minFontSize) {
        fontSize = minFontSize; // otherwise particular character in text too small
      }
      var backspacedText = text.replace(/\s/gi, function (m) {
        return "  ";
      });
      var spacedText = backspacedText.split('').join(" ");
      targetElement.style('letter-spacing', '-2');
      var data = [
        {text: spacedText}
      ];
      width = width * ((fontScaleKoef + Math.abs(fontSize - baseFontSize)) / (fontSize * (fontSize / defaultFontSize)));

      if (fontSize < baseFontSize) {
        width = width / ((baseFontSize + 1) / fontSize);
      }

      width = width * widthScaleKoef;

      textAnchor = null;
    }
    else {
      var data = [
        {text: text}
      ];
    }

    textBox.data(data);
    if (width) {
      textBox.width(width)
    }
    if (height) {
      textBox.height(height)
    }
    if (x) {
      textBox.x(x)
    }
    if (y) {
      textBox.y(y)
    }
    if (fontColor) {
      textBox.fontColor(fontColor)
    }
    if (fontSize) {
      textBox.fontSize(fontSize)
    }
    if (rotate) {
      textBox.rotate(rotate)
    }
    if (textAnchor) {
      textBox.textAnchor(textAnchor)
    }
    if (verticalAlign) {
      textBox.verticalAlign(verticalAlign)
    }
    if (split) {
      textBox.split(split)
    }
    if (lineHeight) {
      textBox.lineHeight(lineHeight)
    }
    if (overflow) {
      textBox.overflow(overflow)
    }
    if (fontFamily) {
      textBox.fontFamily(fontFamily)
    }

    if (fontWeight) {
      textBox.fontWeight(fontWeight)
    }


    targetElement.attr("opacity", "0");

    //container dimensions and transform
    let transform = d3.transform(targetElement.attr('transform'))
    if (containerRotate) {
      transform.rotate = containerRotate
    }
    if (containerX) {
      transform.translate[0] = containerX
    }
    if (containerY) {
      transform.translate[1] = containerY
    }
    targetElement.attrs({
      transform,
      width,
      height
    })

    textBox.select(targetElement.node())
      .render(function () {
        var textElem = targetElement.select("text");

        //clip everything outside targetElement
        if (doClipPath) {
          const idClipPath = Date.now()
          const elemClipPath = targetElement.append('clipPath').attrs({
            id: idClipPath
          })
          const elemClipPathRect = elemClipPath.append('rect').attrs({
            x: 0,
            y: 0,
            width,
            height
          })
          textElem.attrs({
            'clip-path': `url(#${idClipPath})`
          })
        }

        //add class to textElem
        if (options.class) {
          textElem.attrs({
            class: options.class
          })
          targetElement.attrs({
            class: `${options.class}-g`
          })
        }


        var rows = targetElement.select("text").selectAll("tspan");

        rows.filter(function (tspan, i) {
          return options.maxLineCount != null && i >= options.maxLineCount;
        }).remove();

        targetElement.attr("opacity", "1");

        if (options.title) {
          targetElement.select("text").append("title").text(text);
        }

        if (isWordBreak) {
          targetElement.selectAll("tspan").attr("xml:space", "preserve");
        }

        //set styles to text element
        let styles = {}
        if (fontColor) {
          styles.fill = fontColor
        }
        if (fontSize) {
          styles['font-size'] = fontSize
        }
        if (fontFamily) {
          styles['font-family'] = fontFamily
        }
        if (fontWeight) {
          styles['font-weight'] = fontWeight
        }
        textElem.styles(styles)

        function centerTextIntoCell() {
          var parentContainerBBox = targetElement.node().getBBox();
          var textBBox = textElem.node().getBBox();

          if (parentContainerBBox.width > textBBox.width) {
            var leftShift = (parentContainerBBox.width - textBBox.width) / 2;
            textElem.attrs({
              transform: "translate(" + leftShift + ", 0)"
            })
          }
        }

        if (ellipsisToLastWord) {
          //textElem.attr("text-anchor", "left")

          var svg = null;

          var parent = textElem.node();
          while (parent != null) {
            parent = parent.parentNode;
            if (parent != null && parent.nodeName == "svg") {
              svg = parent;
              break;
            }
          }

          if (textElem.select('tspan')[0][0] != null && targetElement.node() != null && svg != null) {
            var point = svg.createSVGPoint();
            var _textCellBBox = targetElement.node().getBBox();
            var oldTspanText = textElem.select('tspan').text();
            textElem.select('tspan').text(text);
            var textWidth = textElem.node().getBBox().width;
            textElem.select('tspan').text(oldTspanText);

            if (textElem.selectAll('tspan')[0].length == 1 && _textCellBBox.width < textWidth) {
              point.x = _textCellBBox.width;
              point.y = _textCellBBox.height;

              //point.x += d3.transform(targetElement.attr("transform")).translate[0];
              //point.y += d3.transform(targetElement.attr("transform")).translate[1];
              try {
                point.y = textElem[0][0].getEndPositionOfChar(0).y;

                textElem.selectAll('tspan').text('');
                textElem.select('tspan').text(text);
                var allCharsCount = textElem[0][0].getNumberOfChars();
                var numberOfSymbolsToShow = textElem[0][0].getCharNumAtPosition(point);


                var textToShow = (numberOfSymbolsToShow != -1 && allCharsCount > numberOfSymbolsToShow) ? (text.substring(0, (numberOfSymbolsToShow - 3)) + "...") : text;
                textElem.select('tspan').text(textToShow);
              }
              catch (e) {
                console.log(e);
              }
            }
          }

          if (options && options.textAnchor == "middle" && textElem.node() != null && svg != null) {
            centerTextIntoCell();
          }
        }

        if (renderCallback) {
          var tspans = textElem.selectAll("tspan");
          var linesNumber = tspans.length > 0 ? tspans[0].length : 0;

          var result = {
            linesNumber: linesNumber,
            textContainerElem: targetElement,
            textElem: textElem
          };

          renderCallback(result);

          if (isWordBreak == true && (options && options.textAnchor == "middle")) {
            centerTextIntoCell();
          }
        }
      });
  }

  d3CustomUtils.nf = NumberFormatter;
  d3CustomUtils.abbreviateNum = abbreviateNum;
  d3CustomUtils.DrawWrappedText = drawWrappedText;
})();
