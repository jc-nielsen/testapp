nv.models.multiBarHorizontalChartWithAvgOld = function () {
  'use strict';

  //============================================================
  // Public Variables with Default Settings
  //------------------------------------------------------------

  var multibar = nv.models.multiBarHorizontal()
    , xAxis = nv.models.axis()
    , yAxis = nv.models.axis()
    , legend = nv.models.legend().height(30)
    , controls = nv.models.legend().height(30)
    , tooltip = nv.models.tooltip()
    ;

  var margin = {top: 30, right: 20, bottom: 50, left: 60}
    , marginTop = null
    , width = null
    , height = null
    , color = nv.utils.defaultColor()
    , showControls = true
    , controlsPosition = 'top'
    , controlLabels = {}
    , showLegend = true
    , legendPosition = 'top'
    , showXAxis = true
    , showYAxis = true
    , stacked = false
    , x //can be accessed via chart.xScale()
    , y //can be accessed via chart.yScale()
    , state = nv.utils.state()
    , defaultState = null
    , noData = null
    , dispatch = d3.dispatch('stateChange', 'changeState', 'renderEnd')
    , controlWidth = function () {
    return showControls ? 180 : 0
  }
    , duration = 250;

  state.stacked = false; // DEPRECATED Maintained for backward compatibility

  multibar.stacked(stacked);

  xAxis
    .orient('left')
    .tickPadding(5)
    .showMaxMin(false)
    .tickFormat(function (d) {
      return d;
    });

  yAxis
    .orient('bottom')
    .tickFormat(d3.format(',.1f'));

  tooltip
    .duration(0)
    .valueFormatter(function (d, i) {
      return yAxis.tickFormat()(d, i);
    })
    .headerFormatter(function (d, i) {
      return xAxis.tickFormat()(d, i);
    });

  controls.updateState(false);

  //============================================================
  // Private Variables
  //------------------------------------------------------------

  var stateGetter = function (data) {
    return function () {
      return {
        active: data.map(function (d) {
          return !d.disabled
        }),
        stacked: stacked
      };
    }
  };

  var stateSetter = function (data) {
    return function (state) {
      if (state.stacked !== undefined)
        stacked = state.stacked;
      if (state.active !== undefined)
        data.forEach(function (series, i) {
          series.disabled = !state.active[i];
        });
    }
  };

  var renderWatch = nv.utils.renderWatch(dispatch, duration);

  function chart(selection) {
    renderWatch.reset();
    renderWatch.models(multibar);

    if (showXAxis) {
      renderWatch.models(xAxis);
    }
    if (showYAxis) {
      renderWatch.models(yAxis);
    }

    selection.each(function (data) {
      var container = d3.select(this),
        that = this;

      nv.utils.initSVG(container);

      var availableWidth = nv.utils.availableWidth(width, container, margin),
        availableHeight = nv.utils.availableHeight(height, container, margin);

      chart.update = function () {
        chart.containerWidth = parseFloat(d3.select(".nv-multiBarHorizontalChart .nv-groups").node().getBBox().width);

        applyCustomization();

        container.transition().duration(duration).call(chart);
      };

      chart.container = this;

      stacked = multibar.stacked();

      state
        .setter(stateSetter(data), chart.update)
        .getter(stateGetter(data))
        .update();

      // DEPRECATED set state.disableddisabled
      state.disabled = data.map(function (d) {
        return !!d.disabled;
      });

      if (!defaultState) {
        var key;
        defaultState = {};
        for (key in state) {
          if (state[key] instanceof Array) {
            defaultState[key] = state[key].slice(0);
          } else {
            defaultState[key] = state[key];
          }
        }
      }

      // Display No Data message if there's nothing to show.
      if (!data || !data.length || !data.filter(function (d) {
          return d.values.length
        }).length) {
        nv.utils.noData(chart, container);
        return chart;
      } else {
        chart.data = data;
        container.selectAll('.nv-noData').remove();
      }

      // Setup Scales
      x = multibar.xScale();
      y = multibar.yScale().clamp(true);

      // Setup containers and skeleton of chart
      var wrap = container.selectAll('g.nv-wrap.nv-multiBarHorizontalChart').data([data]);
      var gEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-multiBarHorizontalChart').append('g');
      var g = wrap.select('g');

      gEnter.append('g').attr('class', 'nv-x nv-axis');
      gEnter.append('g').attr('class', 'nv-y nv-axis')
        .append('g').attr('class', 'nv-zeroLine')
        .append('line');

      gEnter.append('g').attr('class', 'nv-barsWrap');
      gEnter.append('g').attr('class', 'nv-legendWrap');
      gEnter.append('g').attr('class', 'nv-controlsWrap');

      // Legend
      if (!showLegend) {
        g.select('.nv-legendWrap').selectAll('*').remove();
      } else {
        legend.width(availableWidth - controlWidth());

        g.select('.nv-legendWrap')
          .datum(data)
          .call(legend);
        if (legendPosition === 'bottom') {
          margin.bottom = xAxis.height() + legend.height();
          availableHeight = nv.utils.availableHeight(height, container, margin);
          g.select('.nv-legendWrap')
            .attr('transform', 'translate(' + controlWidth() + ',' + (availableHeight + xAxis.height()) + ')');
        } else if (legendPosition === 'top') {

          if (!marginTop && legend.height() !== margin.top) {
            margin.top = legend.height();
            availableHeight = nv.utils.availableHeight(height, container, margin);
          }

          g.select('.nv-legendWrap').attr('transform', 'translate(' + controlWidth() + ',' + (-margin.top) + ')');
        }
      }

      // Controls
      if (!showControls) {
        g.select('.nv-controlsWrap').selectAll('*').remove();
      } else {
        var controlsData = [
          {key: controlLabels.grouped || 'Grouped', disabled: multibar.stacked()},
          {key: controlLabels.stacked || 'Stacked', disabled: !multibar.stacked()}
        ];

        controls.width(controlWidth()).color(['#444', '#444', '#444']);

        if (controlsPosition === 'bottom') {
          margin.bottom = xAxis.height() + legend.height();
          availableHeight = nv.utils.availableHeight(height, container, margin);
          g.select('.nv-controlsWrap')
            .datum(controlsData)
            .attr('transform', 'translate(0,' + (availableHeight + xAxis.height()) + ')')
            .call(controls);

        } else if (controlsPosition === 'top') {
          g.select('.nv-controlsWrap')
            .datum(controlsData)
            .attr('transform', 'translate(0,' + (-margin.top) + ')')
            .call(controls);
        }
      }

      wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

      // Main Chart Component(s)
      multibar
        .disabled(data.map(function (series) {
          return series.disabled
        }))
        .width(availableWidth)
        .height(availableHeight)
        .color(data.map(function (d, i) {
          return d.color || color(d, i);
        }).filter(function (d, i) {
          return !data[i].disabled
        }));

      var barsWrap = g.select('.nv-barsWrap')
        .datum(data.filter(function (d) {
          return !d.disabled
        }));

      barsWrap.transition().call(multibar);

      // Setup Axes
      if (showXAxis) {
        xAxis
          .scale(x)
          ._ticks(nv.utils.calcTicksY(availableHeight / 24, data))
          .tickSize(-availableWidth, 0);

        g.select('.nv-x.nv-axis').call(xAxis);

        var xTicks = g.select('.nv-x.nv-axis').selectAll('g');

        xTicks
          .selectAll('line, text');
      }

      if (showYAxis) {
        yAxis
          .scale(y)
          ._ticks(nv.utils.calcTicksX(availableWidth / 100, data))
          .tickSize(-availableHeight, 0);

        g.select('.nv-y.nv-axis')
          .attr('transform', 'translate(0,' + availableHeight + ')');
        g.select('.nv-y.nv-axis').call(yAxis);
      }

      // Zero line
      g.select(".nv-zeroLine line")
        .attr("x1", y(0))
        .attr("x2", y(0))
        .attr("y1", 0)
        .attr("y2", -availableHeight)
      ;

      //============================================================
      // Event Handling/Dispatching (in chart's scope)
      //------------------------------------------------------------

      legend.dispatch.on('stateChange', function (newState) {
        for (var key in newState) {
          state[key] = newState[key];
        }
        dispatch.stateChange(state);
        chart.update();
      });

      controls.dispatch.on('legendClick', function (d, i) {
        if (!d.disabled) return;
        controlsData = controlsData.map(function (s) {
          s.disabled = true;
          return s;
        });
        d.disabled = false;

        switch (d.key) {
          case 'Grouped':
          case controlLabels.grouped:
            multibar.stacked(false);
            break;
          case 'Stacked':
          case controlLabels.stacked:
            multibar.stacked(true);
            break;
        }

        state.stacked = multibar.stacked();
        dispatch.stateChange(state);
        stacked = multibar.stacked();

        chart.update();
      });

      // Update chart from a state object passed to event handler
      dispatch.on('changeState', function (e) {

        if (typeof e.disabled !== 'undefined') {
          data.forEach(function (series, i) {
            series.disabled = e.disabled[i];
          });

          state.disabled = e.disabled;
        }

        if (typeof e.stacked !== 'undefined') {
          multibar.stacked(e.stacked);
          state.stacked = e.stacked;
          stacked = e.stacked;
        }

        chart.update();
      });
    });

    window.onload = function () {
      d3.selectAll('.nv-series')
        .each(function (d, i) {
          var group = d3.select(this),
            circle = group.select('circle');

          var color = circle.style('fill');
          circle.remove();

          var symbol = group.append('path')
            .attr('d', d3.svg.symbol().type('square'))
            .style('stroke', color)
            .style('fill', color);
        });
    };

    applyCustomization();

    renderWatch.renderEnd('multibar horizontal chart immediate');
    return chart;
  }

  //============================================================
  // Customizing charts
  //------------------------------------------------------------

  function applyCustomization() {
    chart.containerWidth = parseFloat(d3.select(".nv-multiBarHorizontalChart .nv-groups").node().getBBox().width);

    var legend = d3.select(".nv-legendWrap");
    legend.attr("transform", "translate(" + -(chart.containerWidth / 2 - 230) + "," + (height - 60) + ")");

    var svg = d3.select("svg"),
      lastRects, rectWidth,
      dpBarValues = [];

    // We get one positive rect of each serie from the svg (here the last serie)
    lastRects = svg.selectAll("g.nv-group")
      .filter(
        function (d, i) {
          return i === 0;
        }).selectAll("rect");

    chart.data[0].values.forEach(function (item, i) {
      var d1 = chart.data[0].values[i].value;
      var d2 = chart.data[1].values[i].value;

      var dif = d2 - d1;
      dpBarValues.push(d3.format(',.2f')(dif));
    });

    var seriesCounts = 0;
    svg.selectAll("g.nv-group")
      .filter(function (d, i) {
        seriesCounts++;
      });

    var barHeight = parseFloat(svg.select("g.nv-group .nv-bar rect").attr("height"));
    var yShift = (barHeight * seriesCounts) / 2;

    var groupLabels = svg.select("g.nv-barsWrap").append("g");

    d3.selectAll('.dp-bar-chart-label').remove();

    // Set header
    svg.append("text")
      .attr("x", chart.containerWidth + 110)
      .attr("y", 20)
      .text("Point")
      .attr("class", "dp-bar-chart-label")
      .style("font-size", "18px")
      .style("font-family", "monospace")
      .style("fill", "#999999");

    svg.append("text")
      .attr("x", chart.containerWidth + 105)
      .attr("y", 40)
      .text("Change")
      .attr("class", "dp-bar-chart-label")
      .style("font-size", "18px")
      .style("font-family", "monospace")
      .style("fill", "#999999");


    lastRects.each(
      function (d, index) {
        var transformAttr = d3.select(this).attr("transform");

        var xPos = chart.containerWidth + 20;
        var text = groupLabels.append("text");
        text.attr("x", xPos)
        // We add a padding of 5 above the highest rect
          .attr("y", d3.transform(d3.select(this.parentNode).attr("transform")).translate[1] + yShift + 5) // We center the label)
          .text(dpBarValues[index])
          .attr("transform", transformAttr)
          .attr("class", "dp-bar-chart-label")
          .style("font-size", "18px")
          .style("font-weight", "bold")
          .style("fill", dpBarValues[index] < 0 ? "red" : "green");

        var bbox = text[0][0].getBBox();

        groupLabels.append("rect")
          .attr("class", "dp-bar-chart-label")
          .attr('x', bbox.x - 5)
          .attr('y', bbox.y - 5)
          .attr('width', bbox.width + 10)
          .attr('height', bbox.height + 10)
          .style("stroke", "#CCCCCC")
          .style("fill", "none")
          .style("stroke-width", 2);
      });
  }

  //============================================================
  // Event Handling/Dispatching (out of chart's scope)
  //------------------------------------------------------------

  multibar.dispatch.on('elementMouseover.tooltip', function (evt) {
    evt.value = chart.x()(evt.data);
    evt['series'] = {
      key: evt.data.key,
      value: chart.y()(evt.data),
      color: evt.color
    };
    tooltip.data(evt).hidden(false);
  });

  multibar.dispatch.on('elementMouseout.tooltip', function (evt) {
    tooltip.hidden(true);
  });

  multibar.dispatch.on('elementMousemove.tooltip', function (evt) {
    tooltip();
  });

  //============================================================
  // Expose Public Variables
  //------------------------------------------------------------

  // expose chart's sub-components
  chart.dispatch = dispatch;
  chart.multibar = multibar;
  chart.legend = legend;
  chart.controls = controls;
  chart.xAxis = xAxis;
  chart.yAxis = yAxis;
  chart.state = state;
  chart.tooltip = tooltip;

  chart.options = nv.utils.optionsFunc.bind(chart);

  chart._options = Object.create({}, {
    // simple options, just get/set the necessary values
    width: {
      get: function () {
        return width;
      }, set: function (_) {
        width = _;
      }
    },
    height: {
      get: function () {
        return height;
      }, set: function (_) {
        height = _;
      }
    },
    showLegend: {
      get: function () {
        return showLegend;
      }, set: function (_) {
        showLegend = _;
      }
    },
    legendPosition: {
      get: function () {
        return legendPosition;
      }, set: function (_) {
        legendPosition = _;
      }
    },
    controlsPosition: {
      get: function () {
        return controlsPosition;
      }, set: function (_) {
        controlsPosition = _;
      }
    },
    showControls: {
      get: function () {
        return showControls;
      }, set: function (_) {
        showControls = _;
      }
    },
    controlLabels: {
      get: function () {
        return controlLabels;
      }, set: function (_) {
        controlLabels = _;
      }
    },
    showXAxis: {
      get: function () {
        return showXAxis;
      }, set: function (_) {
        showXAxis = _;
      }
    },
    showYAxis: {
      get: function () {
        return showYAxis;
      }, set: function (_) {
        showYAxis = _;
      }
    },
    defaultState: {
      get: function () {
        return defaultState;
      }, set: function (_) {
        defaultState = _;
      }
    },
    noData: {
      get: function () {
        return noData;
      }, set: function (_) {
        noData = _;
      }
    },

    // options that require extra logic in the setter
    margin: {
      get: function () {
        return margin;
      }, set: function (_) {
        if (_.top !== undefined) {
          margin.top = _.top;
          marginTop = _.top;
        }
        margin.right = _.right !== undefined ? _.right : margin.right;
        margin.bottom = _.bottom !== undefined ? _.bottom : margin.bottom;
        margin.left = _.left !== undefined ? _.left : margin.left;
      }
    },
    duration: {
      get: function () {
        return duration;
      }, set: function (_) {
        duration = _;
        renderWatch.reset(duration);
        multibar.duration(duration);
        xAxis.duration(duration);
        yAxis.duration(duration);
      }
    },
    color: {
      get: function () {
        return color;
      }, set: function (_) {
        color = nv.utils.getColor(_);
        legend.color(color);
      }
    },
    barColor: {
      get: function () {
        return multibar.barColor;
      }, set: function (_) {
        multibar.barColor(_);
        legend.color(function (d, i) {
          return d3.rgb('#ccc').darker(i * 1.5).toString();
        })
      }
    }
  });

  nv.utils.inheritOptions(chart, multibar);
  nv.utils.initOptions(chart);

  return chart;
};