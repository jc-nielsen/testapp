nv.modules.table.constants = {
  //table uncustomizable
  TABLE_FIRST_COLUMN_WIDTH: 180,
  TABLE_FIRST_COLUMN_ALIGN: 'start',
  TABLE_FIRST_COLUMN_TEXT_X_CORRECTION: 10,
  TABLE_OFFSET_X: 30,
  TABLE_OFFSET_Y: 5,
  TABLE_LOADER_SIZE: 70,
  TABLE_MIN_COL_WIDTH: 0,
  //table customizable defaults
  TABLE_ROW_LINE_HEIGHT: 25,
  TABLE_FONT_SIZE: 13,
  TABLE_TOOLTIP_FONT_SIZE: 13,
  TABLE_TOOLTIP_HOVER_OPACITY: 0.7,
  TABLE_TOOLTIP_THEME: 'discreteBarChartWithTable',
  TABLE_FONT_WEIGHT: 'normal',
  TABLE_FILL: 'gainsboro',
  TABLE_STROKE: 'gray',
  TABLE_STROKE_WIDTH: 1,
  TABLE_ALIGN: 'middle',
  TABLE_VALIGN: 'middle',
  TABLE_MAX_N_LINES: 2,
  TABLE_COLORS: {
    green: '#26B910',
    red: '#E00020',
    default: '#151921'
  },
  TABLE_SHOW_HEAD_ROW: true,
  TABLE_FIRST_CELL_CONTENT: '_',
  TABLE_CLASS: 'table-by-table-module',

  //chart
  CHART_DEFAULT_METRIC: 1 // correct values are [1 .. rows.length-1]
}

nv.modules.table.config = {
  CONDITIONAL_FORMAT_DEFAULT: d => {
    return { text: d, color: '#151921' }
  }
}
