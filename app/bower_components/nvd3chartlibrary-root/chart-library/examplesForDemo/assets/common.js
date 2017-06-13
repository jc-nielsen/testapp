const colors = [
  'rgba(0, 102, 153, 1)',
  'rgba(68, 170, 170, 1)',
  'rgba(68, 119, 51, 1)',
  'rgba(187, 170, 68, 1)'
]

const barData = [
  {
    "key": "Stream0",
    "color": colors[0],
    "label": "Total Beverages",
    "values": [
      {
        "x": 0,
        "y": 9,
      },
      {
        "x": 1,
        "y": 7
      },
      {
        "x": 2,
        "y": 7
      },
      {
        "x": 3,
        "y": 8
      },
      {
        "x": 4,
        "y": 7
      },
      {
        "x": 5,
        "y": 7
      },
      {
        "x": 6,
        "y": 8
      },
      {
        "x": 7,
        "y": 7
      },
      {
        "x": 8,
        "y": 7
      },
      {
        "x": 9,
        "y": 8
      },
      {
        "x": 10,
        "y": 7
      },
      {
        "x": 11,
        "y": 7
      }
    ]
  },
  {
    "key": "Stream1",
    "color": colors[1],
    "label": "Carbonated Beverages",
    "values": [
      {
        "x": 0,
        "y": 6
      },
      {
        "x": 1,
        "y": 5
      },
      {
        "x": 2,
        "y": 5
      },
      {
        "x": 3,
        "y": 12
      },
      {
        "x": 4,
        "y": 5
      },
      {
        "x": 5,
        "y": 5
      },
      {
        "x": 6,
        "y": 5
      },
      {
        "x": 7,
        "y": 5
      },
      {
        "x": 8,
        "y": 5
      },
      {
        "x": 9,
        "y": 8
      },
      {
        "x": 10,
        "y": 7
      },
      {
        "x": 11,
        "y": 7
      }
    ]
  },
  {
    "key": "Stream3",
    "color": colors[2],
    "label": "Carbonated Beverages",
    "values": [
      {
        "x": 0,
        "y": 2
      },
      {
        "x": 1,
        "y": 6
      },
      {
        "x": 2,
        "y": 4
      },
      {
        "x": 3,
        "y": 5
      },
      {
        "x": 4,
        "y": 8
      },
      {
        "x": 5,
        "y": 7
      },
      {
        "x": 6,
        "y": 6
      },
      {
        "x": 7,
        "y": 5
      },
      {
        "x": 8,
        "y": 7
      },
      {
        "x": 9,
        "y": 4
      },
      {
        "x": 10,
        "y": 9
      },
      {
        "x": 11,
        "y": 11
      }
    ]
  },
  {
    "key": "Stream3",
    "color": colors[3],
    "label": "Carbonated Beverages",
    "values": [
      {
        "x": 0,
        "y": 8
      },
      {
        "x": 1,
        "y": 6
      },
      {
        "x": 2,
        "y": 4
      },
      {
        "x": 3,
        "y": 5
      },
      {
        "x": 4,
        "y": 8
      },
      {
        "x": 5,
        "y": 10
      },
      {
        "x": 6,
        "y": 6
      },
      {
        "x": 7,
        "y": 5
      },
      {
        "x": 8,
        "y": 7
      },
      {
        "x": 9,
        "y": 4
      },
      {
        "x": 10,
        "y": 9
      },
      {
        "x": 11,
        "y": 8
      }
    ]
  }
]

const hlaData = [
  {
    "key": "Stream0",
    "label": "Total Beverages",
    "values": [
      {
        "x": 0,
        "y": 'STRING',
      },
      {
        "x": 1,
        "y": 7
      },
      {
        "x": 2,
        "y": 89123
      },
      {
        "x": 3,
        "y": 'LONG STRING'
      },
      {
        "x": 4,
        "y": 7
      },
      {
        "x": 5,
        "y": 7
      },
      {
        "x": 6,
        "y": 823
      },
      {
        "x": 7,
        "y": 7
      },
      {
        "x": 8,
        "y": 7
      },
      {
        "x": 9,
        "y": 8
      },
      {
        "x": 10,
        "y": 7
      },
      {
        "x": 11,
        "y": 7
      }
    ]
  }
]

const waterfallData = [
  {
    "key": "Brand Contribution to $ Sales Change(M)",
    "values": [
      {
        "label": "$ Sales Year Ago",
        "value": "5.0935309887000006E8",
        "series": 0
      },
      {
        "label": "CTL BR",
        "value": "-8994347.700000003",
        "series": 0
      },
      {
        "label": "ANGEL SOFT",
        "value": "1.5548076279999996E7",
        "series": 0
      },
      {
        "label": "CHARMIN",
        "value": "574850.47",
        "series": 0
      },
      {
        "label": "COTTONELLE",
        "value": "2725431.2200000016",
        "series": 0
      },
      {
        "label": "SCOTT",
        "value": "-972819.7100000009",
        "series": 0
      },
      {
        "label": "QUILTED NORTHERN",
        "value": "428826.0300000004",
        "series": 0
      },
      {
        "label": "MD",
        "value": "-14.35",
        "series": 0
      },
      {
        "label": "$ Sales This Year",
        "value": "5.186630951000002E8",
        "series": 0
      }
    ],
    "color": "#3e45d6",
    "showValues": false,
    "showMarker": false
  },
  {
    "key": "DG $ Sales",
    "values": [
      {
        "label": "$ Sales Year Ago",
        "value": null
      },
      {
        "label": "CTL BR",
        "value": "1.5116443607E8"
      },
      {
        "label": "ANGEL SOFT",
        "value": "1.4061622859E8"
      },
      {
        "label": "CHARMIN",
        "value": "8.016452815999998E7"
      },
      {
        "label": "COTTONELLE",
        "value": "6.136860984E7"
      },
      {
        "label": "SCOTT",
        "value": "5.8849053010000005E7"
      },
      {
        "label": "QUILTED NORTHERN",
        "value": "2.6500236419999998E7"
      },
      {
        "label": "MD",
        "value": "0.01"
      },
      {
        "label": "$ Sales This Year",
        "value": "5.186630951000002E8"
      }
    ],
    "color": "#3ed65c",
    "showValues": false,
    "showMarker": false
  },
  {
    "key": "% of DG POG Sales",
    "values": [
      {
        "label": "$ Sales Year Ago",
        "value": null
      },
      {
        "label": "CTL BR",
        "value": "29.145014846459226"
      },
      {
        "label": "ANGEL SOFT",
        "value": "27.111284746968295"
      },
      {
        "label": "CHARMIN",
        "value": "15.45599232282836"
      },
      {
        "label": "COTTONELLE",
        "value": "11.832075661401724"
      },
      {
        "label": "SCOTT",
        "value": "11.346296577868854"
      },
      {
        "label": "QUILTED NORTHERN",
        "value": "5.109335264135315"
      },
      {
        "label": "MD",
        "value": "1.9280338420978195E-9"
      },
      {
        "label": "$ Sales This Year",
        "value": "100"
      }
    ],
    "color": "#3ed197",
    "showValues": false,
    "showMarker": false
  },
  {
    "key": "DG $ Sales % Change",
    "values": [
      {
        "label": "$ Sales Year Ago",
        "value": "1.8278079098083877"
      },
      {
        "label": "CTL BR",
        "value": "-5.615894107260807"
      },
      {
        "label": "ANGEL SOFT",
        "value": "12.43168304066872"
      },
      {
        "label": "CHARMIN",
        "value": "0.722267618973191"
      },
      {
        "label": "COTTONELLE",
        "value": "4.647482084251322"
      },
      {
        "label": "SCOTT",
        "value": "-1.6261940085917137"
      },
      {
        "label": "QUILTED NORTHERN",
        "value": "1.644813316906253"
      },
      {
        "label": "MD",
        "value": "-99.93036211699165"
      },
      {
        "label": "$ Sales This Year",
        "value": "1.8278079098083877"
      }
    ],
    "color": "#3edbba",
    "showValues": false,
    "showMarker": false
  },
  {
    "key": "% of DG Sales vs % of XAOC Remaining Market Sales",
    "values": [
      {
        "label": "$ Sales Year Ago",
        "value": null
      },
      {
        "label": "CTL BR",
        "value": "6.872316748052942"
      },
      {
        "label": "ANGEL SOFT",
        "value": "13.696877968872892"
      },
      {
        "label": "CHARMIN",
        "value": "-12.789355736304199"
      },
      {
        "label": "COTTONELLE",
        "value": "1.1532130983023192"
      },
      {
        "label": "SCOTT",
        "value": "-3.111375526111308"
      },
      {
        "label": "QUILTED NORTHERN",
        "value": "-3.694496772734463"
      },
      {
        "label": "MD",
        "value": "-0.01901285838108875"
      },
      {
        "label": "$ Sales This Year",
        "value": "0"
      }
    ],
    "color": "#3ed43f",
    "showValues": false,
    "showMarker": false
  }
]
