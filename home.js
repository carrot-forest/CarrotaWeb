const pageHome = 
{
  "type": "page",
  "title": "Carrota2.0 开发者平台",
  "id": "u:eee1a51982aa",
  "toolbar": [
  ],
  "asideResizor": false,
  "pullRefresh": {
    "disabled": true
  },
  "regions": [
    "body",
    "header"
  ],
  "aside": [
  ],
  "body": [
    {
      "type": "grid",
      "columns": [
      ],
      "id": "u:fa03c7855a23"
    },
    {
      "type": "grid",
      "columns": [
        {
          "body": [
            {
              "type": "panel",
              "title": "BOT列表",
              "body": [
                {
                  "type": "service",
                  "body": [
                    {
                      "type": "pagination-wrapper",
                      "inputName": "rows",
                      "outputName": "rows",
                      "perPage": 3,
                      "position": "bottom",
                      "body": [
                        {
                          "type": "table",
                          "source": "$rows",
                          "columns": [
                            {
                              "type": "avatar",
                              "showtype": "image",
                              "icon": "",
                              "fit": "cover",
                              "style": {
                                "width": 40,
                                "height": 40,
                                "borderRadius": 20
                              },
                              "id": "u:c21b7f20adc7",
                              "label": "",
                              "placeholder": "",
                              "src": "${url}",
                              "gap": 4
                            },
                            {
                              "type": "container",
                              "body": [
                                {
                                  "type": "container",
                                  "body": [
                                    {
                                      "type": "tpl",
                                      "tpl": "${name}",
                                      "inline": true,
                                      "wrapperComponent": "",
                                      "id": "u:37329881f5e0"
                                    },
                                    {
                                      "type": "tpl",
                                      "tpl": "${status}",
                                      "inline": true,
                                      "wrapperComponent": "",
                                      "id": "u:bfd8c7e55289",
                                      "themeCss": {
                                        "baseControlClassName": {
                                          "padding-and-margin:default": {
                                            "marginTop": "var(--sizes-size-4)",
                                            "marginRight": "var(--sizes-size-4)",
                                            "marginBottom": "var(--sizes-size-4)",
                                            "marginLeft": "var(--sizes-size-4)"
                                          }
                                        }
                                      }
                                    },
                                    {
                                      "type": "tpl",
                                      "tpl": "${agent}",
                                      "inline": true,
                                      "wrapperComponent": "",
                                      "id": "u:250f2bc6f653",
                                      "themeCss": {
                                        "baseControlClassName": {
                                          "padding-and-margin:default": {
                                            "marginTop": "var(--sizes-size-4)",
                                            "marginRight": "var(--sizes-size-4)",
                                            "marginBottom": "var(--sizes-size-4)",
                                            "marginLeft": "var(--sizes-size-4)"
                                          }
                                        }
                                      }
                                    }
                                  ],
                                  "style": {
                                    "position": "static",
                                    "display": "block"
                                  },
                                  "size": "none",
                                  "wrapperBody": false,
                                  "id": "u:327738d96afa"
                                },
                                {
                                  "type": "container",
                                  "body": [
                                    {
                                      "type": "tpl",
                                      "tpl": "最近上报时间： ${time}",
                                      "inline": true,
                                      "wrapperComponent": "",
                                      "id": "u:cd307836f958"
                                    }
                                  ],
                                  "style": {
                                    "position": "static",
                                    "display": "block"
                                  },
                                  "size": "none",
                                  "wrapperBody": false,
                                  "id": "u:39ae06d6389d"
                                }
                              ],
                              "style": {
                                "position": "static",
                                "display": "block"
                              },
                              "size": "none",
                              "wrapperBody": false,
                              "id": "u:123ae8ed9782",
                              "label": ""
                            }
                          ],
                          "id": "u:62c08a928901"
                        }
                      ],
                      "id": "u:b3d22c47b264"
                    }
                  ],
                  "id": "u:d006e2c5e958",
                  "dsType": "api",
                  "api": {
                    "url": "https://www.fastmock.site/mock/0f958767495ad5a899bcb5d37bfbbe97/mock/bots",
                    "method": "get",
                    "requestAdaptor": "",
                    "adaptor": "",
                    "messages": {
                    },
                    "dataType": "json"
                  }
                }
              ],
              "id": "u:51be67e9790c",
              "affixFooter": false,
              "headerClassName": "",
              "subFormMode": ""
            },
            {
              "type": "panel",
              "title": "插件列表",
              "body": [
                {
                  "type": "service",
                  "body": [
                    {
                      "type": "pagination-wrapper",
                      "inputName": "rows",
                      "outputName": "rows",
                      "perPage": 3,
                      "position": "bottom",
                      "body": [
                        {
                          "type": "table",
                          "source": "$rows",
                          "columns": [
                            {
                              "type": "container",
                              "body": [
                                {
                                  "type": "container",
                                  "body": [
                                    {
                                      "type": "grid",
                                      "columns": [
                                        {
                                          "body": [
                                            {
                                              "type": "tpl",
                                              "tpl": "${name}\n",
                                              "inline": true,
                                              "wrapperComponent": "",
                                              "id": "u:7d18fcdedf24",
                                              "editorSetting": {
                                                "mock": {
                                                  "tpl": "weather"
                                                }
                                              },
                                              "wrapperCustomStyle": {
                                              }
                                            }
                                          ],
                                          "valign": "middle",
                                          "id": "u:15f4fe351a39"
                                        },
                                        {
                                          "body": [
                                            {
                                              "type": "tpl",
                                              "tpl": "${author}",
                                              "inline": true,
                                              "wrapperComponent": "",
                                              "id": "u:ffb402b72826",
                                              "editorSetting": {
                                                "mock": {
                                                  "tpl": "作者"
                                                }
                                              },
                                              "themeCss": {
                                                "baseControlClassName": {
                                                  "padding-and-margin:default": {
                                                    "marginTop": "var(--sizes-size-9)",
                                                    "marginRight": "var(--sizes-size-9)",
                                                    "marginBottom": "var(--sizes-size-9)",
                                                    "marginLeft": "var(--sizes-size-9)"
                                                  }
                                                }
                                              }
                                            }
                                          ],
                                          "md": "auto",
                                          "valign": "middle",
                                          "id": "u:f95ba56ed5a9"
                                        }
                                      ],
                                      "id": "u:0b4ca2493760",
                                      "align": "left"
                                    }
                                  ],
                                  "style": {
                                    "position": "static",
                                    "display": "block"
                                  },
                                  "size": "none",
                                  "wrapperBody": false,
                                  "id": "u:15e23c84a95f"
                                },
                                {
                                  "type": "container",
                                  "body": [
                                    {
                                      "type": "tpl",
                                      "tpl": "${readme}",
                                      "inline": true,
                                      "wrapperComponent": "",
                                      "id": "u:a8fd1257d4e8",
                                      "editorSetting": {
                                        "mock": {
                                          "tpl": "一个天气插件"
                                        }
                                      },
                                      "themeCss": {
                                        "baseControlClassName": {
                                          "padding-and-margin:default": {
                                            "marginTop": "var(--sizes-size-9)",
                                            "marginRight": "var(--sizes-size-9)",
                                            "marginBottom": "var(--sizes-size-9)",
                                            "marginLeft": "var(--sizes-size-9)"
                                          }
                                        }
                                      }
                                    }
                                  ],
                                  "style": {
                                    "position": "static",
                                    "display": "block"
                                  },
                                  "size": "none",
                                  "wrapperBody": false,
                                  "id": "u:d0502201a0b6"
                                },
                                {
                                  "type": "container",
                                  "body": [
                                    {
                                      "type": "grid",
                                      "columns": [
                                        {
                                          "body": [
                                            {
                                              "type": "tpl",
                                              "tpl": "最近调用时间：${time}",
                                              "inline": true,
                                              "wrapperComponent": "",
                                              "id": "u:97f7f0f9f179",
                                              "editorSetting": {
                                                "mock": {
                                                  "tpl": "时间"
                                                }
                                              },
                                              "themeCss": {
                                                "baseControlClassName": {
                                                  "padding-and-margin:default": {
                                                    "marginTop": "var(--sizes-size-9)",
                                                    "marginRight": "var(--sizes-size-9)",
                                                    "marginBottom": "var(--sizes-size-9)",
                                                    "marginLeft": "var(--sizes-size-9)"
                                                  }
                                                }
                                              }
                                            }
                                          ],
                                          "valign": "middle",
                                          "id": "u:bd200434136c"
                                        },
                                        {
                                          "body": [
                                            {
                                              "type": "tpl",
                                              "tpl": "${activate}",
                                              "inline": true,
                                              "wrapperComponent": "",
                                              "id": "u:1dca536f2f17",
                                              "editorSetting": {
                                                "mock": {
                                                  "tpl": "高活跃"
                                                }
                                              },
                                              "themeCss": {
                                                "baseControlClassName": {
                                                  "padding-and-margin:default": {
                                                    "marginTop": "var(--sizes-size-9)",
                                                    "marginRight": "var(--sizes-size-9)",
                                                    "marginBottom": "var(--sizes-size-9)",
                                                    "marginLeft": "var(--sizes-size-9)"
                                                  }
                                                }
                                              }
                                            }
                                          ],
                                          "md": "auto",
                                          "valign": "middle",
                                          "id": "u:47eb022ecc4d"
                                        }
                                      ],
                                      "id": "u:94a4065974f2"
                                    }
                                  ],
                                  "style": {
                                    "position": "static",
                                    "display": "block"
                                  },
                                  "size": "none",
                                  "wrapperBody": false,
                                  "id": "u:76bb78058716"
                                }
                              ],
                              "style": {
                                "position": "static",
                                "display": "block"
                              },
                              "size": "none",
                              "wrapperBody": false,
                              "id": "u:a70975f8051e",
                              "label": ""
                            }
                          ],
                          "id": "u:4502152e18ca"
                        }
                      ],
                      "id": "u:ccf62d78a264"
                    }
                  ],
                  "id": "u:b4e76d96c3b1",
                  "dsType": "api",
                  "api": {
                    "url": "https://www.fastmock.site/mock/0f958767495ad5a899bcb5d37bfbbe97/mock/plugins",
                    "method": "get",
                    "requestAdaptor": "",
                    "adaptor": "",
                    "messages": {
                    },
                    "dataType": "json"
                  }
                }
              ],
              "id": "u:d6be6601fe69",
              "affixFooter": false,
              "headerClassName": "",
              "subFormMode": ""
            }
          ],
          "id": "u:2b0f78242970",
          "md": 3
        },
        {
          "md": 6,
          "body": [
            {
              "body": {
                "type": "chart",
                "api": {
                  "method": "get",
                  "url": "https://www.fastmock.site/mock/0f958767495ad5a899bcb5d37bfbbe97/mock/monitor/bot/"
                },
                "config": {
                  "xAxis": {
                    "type": "category",
                    "data": "${xAxisData}"
                  },
                  "yAxis": {
                    "type": "value"
                  },
                  "series": [
                    {
                      "data": [
                        4,
                        19,
                        13,
                        4,
                        6,
                        11,
                        15,
                        11,
                        10,
                        9,
                        1,
                        18
                      ],
                      "type": "line"
                    },
                    {
                      "data": [
                        15,
                        20,
                        1,
                        17,
                        4,
                        12,
                        19,
                        1,
                        5,
                        5,
                        9,
                        7
                      ],
                      "type": "line"
                    },
                    {
                      "data": [
                        8,
                        17,
                        14,
                        4,
                        14,
                        6,
                        1,
                        7,
                        12,
                        2,
                        11,
                        17
                      ],
                      "type": "line"
                    },
                    {
                      "data": [
                        19,
                        1,
                        16,
                        10,
                        14,
                        18,
                        14,
                        9,
                        3,
                        11,
                        15,
                        12
                      ],
                      "type": "line"
                    },
                    {
                      "data": [
                        9,
                        5,
                        9,
                        5,
                        1,
                        8,
                        2,
                        9,
                        16,
                        13,
                        11,
                        9
                      ],
                      "type": "line"
                    }
                  ]
                },
                "dataFilter": "config.series = []; Object.keys(data.seriesData).forEach(function(key) {config.series.push({data: data.seriesData[key], type: 'line'})})"
              },
              "asideResizor": false,
              "regions": [
                "body"
              ],
              "toolbar": [
              ],
              "type": "container"
            },
            {
              "body": [
                {
                  "type": "chart",
                  "api": {
                    "method": "get",
                    "url": "https://www.fastmock.site/mock/0f958767495ad5a899bcb5d37bfbbe97/mock/monitor/bot/"
                  },
                  "config": {
                    "xAxis": {
                      "type": "category",
                      "data": "${xAxisData}",
                      "id": "u:e4f469e0b4bb"
                    },
                    "yAxis": {
                      "type": "value",
                      "id": "u:6dd13e27db48"
                    },
                    "series": [
                      {
                        "data": [
                          4,
                          19,
                          13,
                          4,
                          6,
                          11,
                          15,
                          11,
                          10,
                          9,
                          1,
                          18
                        ],
                        "type": "line",
                        "id": "u:56518d38c116"
                      },
                      {
                        "data": [
                          15,
                          20,
                          1,
                          17,
                          4,
                          12,
                          19,
                          1,
                          5,
                          5,
                          9,
                          7
                        ],
                        "type": "line",
                        "id": "u:d2a176883aa3"
                      },
                      {
                        "data": [
                          8,
                          17,
                          14,
                          4,
                          14,
                          6,
                          1,
                          7,
                          12,
                          2,
                          11,
                          17
                        ],
                        "type": "line",
                        "id": "u:543bce5e5804"
                      },
                      {
                        "data": [
                          19,
                          1,
                          16,
                          10,
                          14,
                          18,
                          14,
                          9,
                          3,
                          11,
                          15,
                          12
                        ],
                        "type": "line",
                        "id": "u:3a2a6079041e"
                      },
                      {
                        "data": [
                          9,
                          5,
                          9,
                          5,
                          1,
                          8,
                          2,
                          9,
                          16,
                          13,
                          11,
                          9
                        ],
                        "type": "line",
                        "id": "u:4e600f5f0e6c"
                      }
                    ]
                  },
                  "dataFilter": "config.series = []; Object.keys(data.seriesData).forEach(function(key) {config.series.push({data: data.seriesData[key], type: 'line'})})",
                  "id": "u:b3c2ebbaab1f"
                },
                {
                  "body": {
                    "type": "chart",
                    "api": {
                      "method": "get",
                      "url": "https://www.fastmock.site/mock/0f958767495ad5a899bcb5d37bfbbe97/mock/monitor/bot/"
                    },
                    "config": {
                      "xAxis": {
                        "type": "category",
                        "data": "${xAxisData}",
                        "id": "u:9f90f7a945e3"
                      },
                      "yAxis": {
                        "type": "value",
                        "id": "u:868cd2d5a6f3"
                      },
                      "series": [
                        {
                          "data": [
                            4,
                            19,
                            13,
                            4,
                            6,
                            11,
                            15,
                            11,
                            10,
                            9,
                            1,
                            18
                          ],
                          "type": "line",
                          "id": "u:b30764a6b423"
                        },
                        {
                          "data": [
                            15,
                            20,
                            1,
                            17,
                            4,
                            12,
                            19,
                            1,
                            5,
                            5,
                            9,
                            7
                          ],
                          "type": "line",
                          "id": "u:2fa492f4ef70"
                        },
                        {
                          "data": [
                            8,
                            17,
                            14,
                            4,
                            14,
                            6,
                            1,
                            7,
                            12,
                            2,
                            11,
                            17
                          ],
                          "type": "line",
                          "id": "u:2cffb8330b30"
                        },
                        {
                          "data": [
                            19,
                            1,
                            16,
                            10,
                            14,
                            18,
                            14,
                            9,
                            3,
                            11,
                            15,
                            12
                          ],
                          "type": "line",
                          "id": "u:138b2cc72231"
                        },
                        {
                          "data": [
                            9,
                            5,
                            9,
                            5,
                            1,
                            8,
                            2,
                            9,
                            16,
                            13,
                            11,
                            9
                          ],
                          "type": "line",
                          "id": "u:df021577c03c"
                        }
                      ]
                    },
                    "dataFilter": "config.series = []; Object.keys(data.seriesData).forEach(function(key) {config.series.push({data: data.seriesData[key], type: 'line'})})",
                    "id": "u:2e8efec1b008"
                  },
                  "asideResizor": false,
                  "regions": [
                    "body"
                  ],
                  "toolbar": [
                  ],
                  "type": "container",
                  "id": "u:c30331eabd70"
                }
              ],
              "asideResizor": false,
              "regions": [
                "body"
              ],
              "toolbar": [
              ],
              "type": "container",
              "id": "u:94eb43324ad2"
            }
          ],
          "id": "u:efa5b69cc4ba"
        },
        {
          "body": [
            {
              "type": "panel",
              "title": "数据统计",
              "body": [
                {
                  "type": "service",
                  "body": [
                    {
                      "type": "container",
                      "body": [
                        {
                          "type": "grid",
                          "columns": [
                            {
                              "body": [
                                {
                                  "type": "tpl",
                                  "tpl": "插件中心累计运行时长：",
                                  "inline": true,
                                  "wrapperComponent": "",
                                  "id": "u:865fbbe6a6dc"
                                }
                              ],
                              "valign": "middle",
                              "id": "u:ea6f942467d9"
                            },
                            {
                              "body": [
                                {
                                  "type": "tpl",
                                  "tpl": "${total_run_time}",
                                  "inline": true,
                                  "wrapperComponent": "",
                                  "id": "u:f416a1b4788e",
                                  "editorSetting": {
                                    "mock": {
                                      "tpl": "10天4小时10分钟"
                                    }
                                  },
                                  "wrapperCustomStyle": {
                                    "right": {
                                      "text-align": "right"
                                    }
                                  }
                                }
                              ],
                              "valign": "middle",
                              "md": "auto",
                              "id": "u:005f02a3971b"
                            }
                          ],
                          "id": "u:14cbda4a498f"
                        },
                        {
                          "type": "grid",
                          "columns": [
                            {
                              "body": [
                                {
                                  "type": "tpl",
                                  "tpl": "最近更新时间：",
                                  "inline": true,
                                  "wrapperComponent": "",
                                  "id": "u:5f15ae619064"
                                }
                              ],
                              "valign": "middle",
                              "id": "u:9c57e51ddd55"
                            },
                            {
                              "body": [
                                {
                                  "type": "tpl",
                                  "tpl": "${recent_update_time}",
                                  "inline": true,
                                  "wrapperComponent": "",
                                  "id": "u:f767b35e2a06",
                                  "editorSetting": {
                                    "mock": {
                                      "tpl": "10天4小时10分钟"
                                    }
                                  },
                                  "wrapperCustomStyle": {
                                    "right": {
                                      "text-align": "right"
                                    }
                                  }
                                }
                              ],
                              "valign": "middle",
                              "md": "auto",
                              "id": "u:4cbcc51e1dac"
                            }
                          ],
                          "id": "u:c2a301c37873"
                        },
                        {
                          "type": "grid",
                          "columns": [
                            {
                              "body": [
                                {
                                  "type": "tpl",
                                  "tpl": "累计插件注册个数：",
                                  "inline": true,
                                  "wrapperComponent": "",
                                  "id": "u:48007e847072"
                                }
                              ],
                              "valign": "middle",
                              "id": "u:243f29747123"
                            },
                            {
                              "body": [
                                {
                                  "type": "tpl",
                                  "tpl": "${total_plugins}",
                                  "inline": true,
                                  "wrapperComponent": "",
                                  "id": "u:c49095ce310a",
                                  "editorSetting": {
                                    "mock": {
                                      "tpl": "10天4小时10分钟"
                                    }
                                  },
                                  "wrapperCustomStyle": {
                                    "right": {
                                      "text-align": "right"
                                    }
                                  }
                                }
                              ],
                              "valign": "middle",
                              "md": "auto",
                              "id": "u:6707c221f79c"
                            }
                          ],
                          "id": "u:9644de7dfacd"
                        },
                        {
                          "type": "grid",
                          "columns": [
                            {
                              "body": [
                                {
                                  "type": "tpl",
                                  "tpl": "累计插件唤起个数：",
                                  "inline": true,
                                  "wrapperComponent": "",
                                  "id": "u:2575b39fefce"
                                }
                              ],
                              "valign": "middle",
                              "id": "u:d8aa81a57a7f"
                            },
                            {
                              "body": [
                                {
                                  "type": "tpl",
                                  "tpl": "${total_plugins_count}",
                                  "inline": true,
                                  "wrapperComponent": "",
                                  "id": "u:0e00d3e013ff",
                                  "editorSetting": {
                                    "mock": {
                                      "tpl": "10天4小时10分钟"
                                    }
                                  },
                                  "wrapperCustomStyle": {
                                    "right": {
                                      "text-align": "right"
                                    }
                                  }
                                }
                              ],
                              "valign": "middle",
                              "md": "auto",
                              "id": "u:773b56e35aa3"
                            }
                          ],
                          "id": "u:5155d59c39e2"
                        },
                        {
                          "type": "grid",
                          "columns": [
                            {
                              "body": [
                                {
                                  "type": "tpl",
                                  "tpl": "最新注册插件：",
                                  "inline": true,
                                  "wrapperComponent": "",
                                  "id": "u:0c235fc00ca0"
                                }
                              ],
                              "valign": "middle",
                              "id": "u:c4ebc61ad14f"
                            },
                            {
                              "body": [
                                {
                                  "type": "tpl",
                                  "tpl": "${recent_plugin}",
                                  "inline": true,
                                  "wrapperComponent": "",
                                  "id": "u:f30b3e8625d3",
                                  "editorSetting": {
                                    "mock": {
                                      "tpl": "10天4小时10分钟"
                                    }
                                  },
                                  "wrapperCustomStyle": {
                                    "right": {
                                      "text-align": "right"
                                    }
                                  }
                                }
                              ],
                              "valign": "middle",
                              "md": "auto",
                              "id": "u:82aca2adcb2d"
                            }
                          ],
                          "id": "u:2378c1c16ea1"
                        },
                        {
                          "type": "grid",
                          "columns": [
                            {
                              "body": [
                                {
                                  "type": "tpl",
                                  "tpl": "累计BOT接入数量：",
                                  "inline": true,
                                  "wrapperComponent": "",
                                  "id": "u:195c1e0241f4"
                                }
                              ],
                              "valign": "middle",
                              "id": "u:5d3a39af92c1"
                            },
                            {
                              "body": [
                                {
                                  "type": "tpl",
                                  "tpl": "${total_bot_count}",
                                  "inline": true,
                                  "wrapperComponent": "",
                                  "id": "u:6e18b46862f2",
                                  "editorSetting": {
                                    "mock": {
                                      "tpl": "10天4小时10分钟"
                                    }
                                  },
                                  "wrapperCustomStyle": {
                                    "right": {
                                      "text-align": "right"
                                    }
                                  }
                                }
                              ],
                              "valign": "middle",
                              "md": "auto",
                              "id": "u:d0825d762932"
                            }
                          ],
                          "id": "u:9215efd0d55a"
                        },
                        {
                          "type": "grid",
                          "columns": [
                            {
                              "body": [
                                {
                                  "type": "tpl",
                                  "tpl": "累计消息上报条数：",
                                  "inline": true,
                                  "wrapperComponent": "",
                                  "id": "u:7d3b512e612a"
                                }
                              ],
                              "valign": "middle",
                              "id": "u:e7748c1fc14d"
                            },
                            {
                              "body": [
                                {
                                  "type": "tpl",
                                  "tpl": "${total_message_count}",
                                  "inline": true,
                                  "wrapperComponent": "",
                                  "id": "u:3d2aacaf4ede",
                                  "editorSetting": {
                                    "mock": {
                                      "tpl": "10天4小时10分钟"
                                    }
                                  },
                                  "wrapperCustomStyle": {
                                    "right": {
                                      "text-align": "right"
                                    }
                                  }
                                }
                              ],
                              "valign": "middle",
                              "md": "auto",
                              "id": "u:0e9afbeea4ec"
                            }
                          ],
                          "id": "u:0496f758569b"
                        },
                        {
                          "type": "grid",
                          "columns": [
                            {
                              "body": [
                                {
                                  "type": "tpl",
                                  "tpl": "最近上报时间：",
                                  "inline": true,
                                  "wrapperComponent": "",
                                  "id": "u:62ff25afdfd8"
                                }
                              ],
                              "valign": "middle",
                              "id": "u:42c26cadb5de"
                            },
                            {
                              "body": [
                                {
                                  "type": "tpl",
                                  "tpl": "${recent_post_time}",
                                  "inline": true,
                                  "wrapperComponent": "",
                                  "id": "u:157f84954961",
                                  "editorSetting": {
                                    "mock": {
                                      "tpl": "10天4小时10分钟"
                                    }
                                  },
                                  "wrapperCustomStyle": {
                                    "right": {
                                      "text-align": "right"
                                    }
                                  }
                                }
                              ],
                              "valign": "middle",
                              "md": "auto",
                              "id": "u:f108cd5e7caa"
                            }
                          ],
                          "id": "u:9853d69d8fed"
                        }
                      ],
                      "style": {
                        "position": "static",
                        "display": "block"
                      },
                      "size": "none",
                      "wrapperBody": false,
                      "id": "u:a47cbb6d1ef1"
                    }
                  ],
                  "id": "u:0cd607e61ced",
                  "dsType": "api",
                  "api": {
                    "url": "https://www.fastmock.site/mock/0f958767495ad5a899bcb5d37bfbbe97/mock/data",
                    "method": "get"
                  }
                }
              ],
              "id": "u:0446ffdc16c9",
              "affixFooter": false
            },
            {
              "type": "panel",
              "title": "插件中心日志",
              "body": [
                {
                  "type": "service",
                  "body": [
                    {
                      "type": "table",
                      "columns": [
                        {
                          "label": "",
                          "name": "",
                          "type": "text",
                          "id": "u:3c6b1cc70d5a",
                          "inline": true,
                          "tpl": "${time} : ${log_level} 插件 ${action} - 插件名称: \"${message}\" "
                        }
                      ],
                      "id": "u:d0925afc3e66",
                      "source": "$list"
                    }
                  ],
                  "id": "u:9bb704784536",
                  "dsType": "api",
                  "api": {
                    "url": "https://www.fastmock.site/mock/0f958767495ad5a899bcb5d37bfbbe97/mock/log",
                    "method": "get",
                    "requestAdaptor": "",
                    "adaptor": "",
                    "messages": {
                    },
                    "dataType": "json"
                  }
                }
              ],
              "id": "u:23f9b75fb814",
              "affixFooter": false,
              "bodyClassName": ""
            }
          ],
          "id": "u:14fba4ed03bf"
        }
      ],
      "id": "u:c00303191257"
    }
  ]
}