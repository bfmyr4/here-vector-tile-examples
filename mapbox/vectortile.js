let json = {
  "version": 8,
  "name": "HERE Berlin - Base",
  "metadata": {},
  "sources": {
    "omv": {
      "type": "vector",
      "tiles": [
        "https://vector.hereapi.com/v2/vectortiles/base/mc/{z}/{x}/{y}/omv?apikey=cs8PbVJlZsPFPtYMvoyu_kvoGksy3Z5QgCIb7wr8vmg"
      ],
      "maxzoom": 17
    }
  },
  "glyphs": "https://assets.vector.hereapi.com/fonts/{fontstack}/{range}.pbf",
  "layers": [
    {
      "id": "background",
      "type": "background",
      "paint": {
        "background-color": "rgba(135, 149, 154, 1)"
      }
    },
    {
      "id": "landuse-urban-copy",
      "type": "fill",
      "source": "omv",
      "source-layer": "landuse",
      "filter": [
        "all"
      ],
      "layout": {
        "visibility": "none"
      },
      "paint": {
        "fill-color": "rgba(220, 1, 195, 1)"
      }
    },
    {
      "id": "landuse-urban",
      "type": "fill",
      "source": "omv",
      "source-layer": "landuse",
      "filter": [
        "==",
        "kind",
        "urban"
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "rgba(145, 158, 163, 1)"
      }
    },
    {
      "id": "landuse-urban-area",
      "type": "fill",
      "source": "omv",
      "source-layer": "landuse",
      "filter": [
        "==",
        [
          "get",
          "kind"
        ],
        "urban_area"
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "rgba(145, 158, 163, 0.8)"
      }
    },
    {
      "id": "landuse-park",
      "type": "fill",
      "source": "omv",
      "source-layer": "landuse",
      "filter": [
        "match",
        [
          "get",
          "kind"
        ],
        [
          "nature",
          "park",
          "wood",
          "forest",
          "natural_wood",
          "grass",
          "meadow",
          "village_green",
          "dog_park",
          "garden",
          "nature_reserve",
          "protected_area"
        ],
        true,
        false
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "rgba(108, 148, 120, 1)"
      }
    },
    {
      "id": "landuse-park-national",
      "type": "fill",
      "source": "omv",
      "source-layer": "landuse",
      "filter": [
        "==",
        [
          "get",
          "kind"
        ],
        "national_park"
      ],
      "paint": {
        "fill-color": "rgba(120, 145, 133, 1)"
      }
    },
    {
      "id": "landuse-pitch",
      "type": "fill",
      "source": "omv",
      "source-layer": "landuse",
      "filter": [
        "==",
        [
          "get",
          "kind"
        ],
        "pitch"
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "rgba(113, 137, 137, 1)"
      }
    },
    {
      "id": "landuse-hospital",
      "type": "fill",
      "source": "omv",
      "source-layer": "landuse",
      "filter": [
        "==",
        [
          "get",
          "kind"
        ],
        "hospital"
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "rgba(137, 135, 138, 1)"
      }
    },
    {
      "id": "landuse-cemetery",
      "type": "fill",
      "source": "omv",
      "source-layer": "landuse",
      "filter": [
        "==",
        [
          "get",
          "kind"
        ],
        "cemetery"
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "rgba(113, 137, 137, 1)"
      }
    },
    {
      "id": "landuse-bridge",
      "type": "fill",
      "source": "omv",
      "source-layer": "landuse",
      "filter": [
        "==",
        [
          "get",
          "kind"
        ],
        "bridge"
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "rgba(113, 137, 137, 1)"
      }
    },
    {
      "id": "landuse-farmyard",
      "type": "fill",
      "source": "omv",
      "source-layer": "landuse",
      "filter": [
        "match",
        [
          "get",
          "kind"
        ],
        [
          "animal",
          "aviary",
          "zoo",
          "farm",
          "farmland",
          "farmyard"
        ],
        true,
        false
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "rgba(191, 249, 13, 1)"
      }
    },
    {
      "id": "landuse-zoo",
      "type": "fill",
      "source": "omv",
      "source-layer": "landuse",
      "filter": [
        "match",
        [
          "get",
          "kind"
        ],
        [
          "sport",
          "sports_centre",
          "attraction",
          "zoo"
        ],
        true,
        false
      ],
      "paint": {
        "fill-color": "rgba(114, 137, 137, 1)"
      }
    },
    {
      "id": "landuse-religion",
      "type": "fill",
      "source": "omv",
      "source-layer": "landuse",
      "filter": [
        "==",
        [
          "get",
          "kind"
        ],
        "religion"
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "rgba(13, 243, 237, 1)"
      }
    },
    {
      "id": "landuse-industrial",
      "type": "fill",
      "source": "omv",
      "source-layer": "landuse",
      "minzoom": 4,
      "filter": [
        "match",
        [
          "get",
          "kind"
        ],
        [
          "military",
          "industrial",
          "surface",
          "common"
        ],
        true,
        false
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "rgba(123, 137, 144, 1)"
      }
    },
    {
      "id": "landuse-beach",
      "type": "fill",
      "source": "omv",
      "source-layer": "landuse",
      "filter": [
        "==",
        [
          "get",
          "kind"
        ],
        "beach"
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "rgba(169, 169, 146, 1)"
      }
    },
    {
      "id": "landuse-aerodrome",
      "type": "fill",
      "source": "omv",
      "source-layer": "landuse",
      "filter": [
        "==",
        [
          "get",
          "kind"
        ],
        "aerodrome"
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "rgba(113, 129, 137, 1)"
      }
    },
    {
      "id": "landuse-runway",
      "type": "fill",
      "source": "omv",
      "source-layer": "landuse",
      "filter": [
        "==",
        [
          "get",
          "kind"
        ],
        "aeroway"
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "rgba(106, 122, 130, 1)"
      }
    },
    {
      "id": "water",
      "type": "fill",
      "source": "omv",
      "source-layer": "water",
      "filter": [
        "all",
        [
          "==",
          "$type",
          "Polygon"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "#436981"
      }
    },
    {
      "id": "pier",
      "type": "line",
      "source": "omv",
      "source-layer": "roads",
      "filter": [
        "all",
        [
          "!=",
          "kind",
          "rail"
        ],
        [
          "==",
          "kind_detail",
          "pier"
        ],
        [
          "==",
          "landuse_kind",
          "pier"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(250, 253, 254, 1)",
        "line-width": {
          "stops": [
            [
              13,
              1.5
            ],
            [
              14,
              1.2
            ],
            [
              15,
              0.9
            ]
          ]
        }
      }
    },
    {
      "id": "ferry",
      "type": "line",
      "source": "omv",
      "source-layer": "roads",
      "minzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "kind",
          "ferry"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(24, 79, 110, 1)",
        "line-width": 1,
        "line-dasharray": [
          4,
          4
        ]
      }
    },
    {
      "id": "ferry-label",
      "type": "symbol",
      "source": "omv",
      "source-layer": "roads",
      "filter": [
        "all",
        [
          "!=",
          "kind",
          "rail"
        ],
        [
          "==",
          "kind",
          "ferry"
        ]
      ],
      "layout": {
        "symbol-placement": "line",
        "text-field": "{name}",
        "text-size": 12.8,
        "visibility": "visible",
        "text-font": [
          "Fira GO Regular"
        ]
      },
      "paint": {
        "text-color": "rgba(0, 0, 0, 1)",
        "text-halo-color": "rgba(255, 255, 255, 0.5)",
        "text-halo-width": 1
      }
    },
    {
      "id": "Railway-S-Bahn-dash",
      "type": "line",
      "source": "omv",
      "source-layer": "roads",
      "minzoom": 8,
      "filter": [
        "all",
        [
          "==",
          "kind",
          "rail"
        ],
        [
          "in",
          "kind_detail",
          "rail",
          "light_rail",
          "tram"
        ],
        [
          "!has",
          "is_tunnel"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(105, 106, 107, 1)",
        "line-width": {
          "stops": [
            [
              9,
              0.1
            ],
            [
              13,
              2.5
            ],
            [
              15,
              6
            ],
            [
              17,
              8
            ]
          ]
        },
        "line-dasharray": [
          0.2,
          2
        ]
      }
    },
    {
      "id": "Railway-S-Bahn",
      "type": "line",
      "source": "omv",
      "source-layer": "roads",
      "minzoom": 8,
      "filter": [
        "all",
        [
          "==",
          "kind",
          "rail"
        ],
        [
          "in",
          "kind_detail",
          "rail",
          "light_rail",
          "tram"
        ],
        [
          "!has",
          "is_tunnel"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(105, 106, 107, 1)",
        "line-width": {
          "stops": [
            [
              9,
              0.75
            ],
            [
              11,
              1
            ],
            [
              13,
              1
            ],
            [
              14,
              1
            ],
            [
              15,
              1.5
            ],
            [
              17,
              1.5
            ]
          ]
        }
      }
    },
    {
      "id": "pedestrian-case",
      "type": "line",
      "source": "omv",
      "source-layer": "roads",
      "filter": [
        "all",
        [
          "==",
          "kind",
          "path"
        ],
        [
          "any",
          [
            "in",
            "kind_detail",
            "pedestrian",
            "footway"
          ]
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(58, 76, 105, 1)",
        "line-width": {
          "stops": [
            [
              13,
              2
            ],
            [
              14,
              2.5
            ],
            [
              16,
              3
            ],
            [
              18,
              3.5
            ]
          ]
        }
      }
    },
    {
      "id": "pedestrian",
      "type": "line",
      "source": "omv",
      "source-layer": "roads",
      "filter": [
        "all",
        [
          "==",
          "kind",
          "path"
        ],
        [
          "any",
          [
            "in",
            "kind_detail",
            "pedestrian",
            "footway"
          ]
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(177, 181, 182, 1)",
        "line-width": {
          "stops": [
            [
              13,
              1
            ],
            [
              14,
              1.5
            ],
            [
              16,
              2
            ],
            [
              18,
              2.5
            ]
          ]
        }
      }
    },
    {
      "id": "case-residential",
      "type": "line",
      "source": "omv",
      "source-layer": "roads",
      "minzoom": 12,
      "filter": [
        "all",
        [
          "==",
          "kind",
          "minor_road"
        ],
        [
          "in",
          "kind_detail",
          "unclassified",
          "residential",
          "service"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(58, 76, 105, 1)",
        "line-width": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          13,
          3,
          14,
          4,
          16,
          8,
          18,
          10
        ]
      }
    },
    {
      "id": "case-secondary",
      "type": "line",
      "source": "omv",
      "source-layer": "roads",
      "minzoom": 10,
      "filter": [
        "all",
        [
          "==",
          "kind",
          "major_road"
        ],
        [
          "in",
          "kind_detail",
          "secondary"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(58, 76, 105, 1)",
        "line-width": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          10,
          2,
          11,
          3,
          12,
          4,
          13,
          5,
          14,
          6,
          16,
          7,
          18,
          8
        ]
      }
    },
    {
      "id": "case-tertiary",
      "type": "line",
      "source": "omv",
      "source-layer": "roads",
      "filter": [
        "all",
        [
          "==",
          "kind",
          "major_road"
        ],
        [
          "==",
          "kind_detail",
          "tertiary"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(58, 76, 105, 1)",
        "line-width": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          11,
          2.5,
          12,
          3.5,
          13,
          4.5,
          14,
          5.5,
          16,
          6.5,
          18,
          7.5
        ]
      }
    },
    {
      "id": "case-trunk",
      "type": "line",
      "source": "omv",
      "source-layer": "roads",
      "minzoom": 5,
      "filter": [
        "all",
        [
          "==",
          "kind",
          "highway"
        ],
        [
          "in",
          "kind_detail",
          "trunk"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(58, 76, 105, 1)",
        "line-width": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          5,
          1,
          6,
          2.25,
          7,
          2.5,
          8,
          3,
          9,
          3.5,
          10,
          4,
          11,
          4.5,
          12,
          5,
          13,
          5.5,
          14,
          6,
          16,
          6.5,
          18,
          7
        ]
      }
    },
    {
      "id": "case-primary",
      "type": "line",
      "source": "omv",
      "source-layer": "roads",
      "minzoom": 8,
      "filter": [
        "all",
        [
          "==",
          "kind",
          "major_road"
        ],
        [
          "==",
          "kind_detail",
          "primary"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-join": "round",
        "line-cap": "round"
      },
      "paint": {
        "line-color": "rgba(58, 76, 105, 1)",
        "line-width": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          8,
          2.5,
          9,
          3,
          10,
          3.5,
          11,
          4,
          12,
          4.5,
          13,
          5,
          14,
          5.5,
          16,
          6,
          18,
          6.5
        ]
      }
    },
    {
      "id": "case-highway-link",
      "type": "line",
      "source": "omv",
      "source-layer": "roads",
      "minzoom": 5,
      "filter": [
        "all",
        [
          "has",
          "is_link"
        ],
        [
          "==",
          "kind",
          "highway"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-join": "round",
        "line-cap": "round"
      },
      "paint": {
        "line-color": "rgba(58, 76, 105, 1)",
        "line-width": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          12,
          3.5,
          13,
          4,
          14,
          5,
          16,
          10,
          18,
          15
        ]
      }
    },
    {
      "id": "case-highway",
      "type": "line",
      "source": "omv",
      "source-layer": "roads",
      "minzoom": 5,
      "filter": [
        "all",
        [
          "==",
          "kind",
          "highway"
        ],
        [
          "==",
          "kind_detail",
          "motorway"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-join": "round",
        "line-cap": "round"
      },
      "paint": {
        "line-color": "rgba(58, 76, 105, 1)",
        "line-width": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          5,
          1.5,
          6,
          3,
          7,
          4,
          8,
          4.5,
          9,
          5,
          10,
          5.5,
          11,
          6,
          12,
          7,
          13,
          7.5,
          14,
          8,
          16,
          19.5,
          18,
          25.5
        ]
      }
    },
    {
      "id": "road-residential",
      "type": "line",
      "source": "omv",
      "source-layer": "roads",
      "minzoom": 12,
      "filter": [
        "all",
        [
          "!=",
          "kind",
          "rail"
        ],
        [
          "==",
          "kind",
          "minor_road"
        ],
        [
          "in",
          "kind_detail",
          "unclassified",
          "residential",
          "service"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-join": "round",
        "line-cap": "round"
      },
      "paint": {
        "line-color": "rgba(209, 208, 191, 1)",
        "line-width": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          13,
          2,
          14,
          3.5,
          16,
          7.5,
          18,
          9.5
        ]
      }
    },
    {
      "id": "road-secondary",
      "type": "line",
      "source": "omv",
      "source-layer": "roads",
      "minzoom": 10,
      "filter": [
        "all",
        [
          "==",
          "kind",
          "major_road"
        ],
        [
          "in",
          "kind_detail",
          "secondary"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-join": "round",
        "line-cap": "round"
      },
      "paint": {
        "line-color": "rgba(227, 212, 154, 1)",
        "line-width": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          10,
          1,
          11,
          2,
          12,
          3,
          13,
          4,
          14,
          5,
          16,
          6,
          18,
          7
        ]
      }
    },
    {
      "id": "road-tertiary",
      "type": "line",
      "source": "omv",
      "source-layer": "roads",
      "filter": [
        "all",
        [
          "==",
          "kind",
          "major_road"
        ],
        [
          "==",
          "kind_detail",
          "tertiary"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "rgba(234, 228, 196, 1)",
        "line-width": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          11,
          1.5,
          12,
          2.5,
          13,
          3.5,
          14,
          4.5,
          16,
          5.5,
          18,
          6.5
        ]
      }
    },
    {
      "id": "road-trunk",
      "type": "line",
      "source": "omv",
      "source-layer": "roads",
      "minzoom": 5,
      "filter": [
        "all",
        [
          "==",
          "kind",
          "highway"
        ],
        [
          "in",
          "kind_detail",
          "trunk"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "rgba(240, 232, 181, 1)",
        "line-width": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          5,
          1,
          6,
          1.25,
          7,
          1.5,
          8,
          2,
          9,
          2.5,
          10,
          3,
          11,
          3.5,
          12,
          4,
          13,
          4.5,
          14,
          5,
          16,
          5.5,
          18,
          6
        ]
      }
    },
    {
      "id": "road-primary",
      "type": "line",
      "source": "omv",
      "source-layer": "roads",
      "minzoom": 8,
      "filter": [
        "all",
        [
          "==",
          "kind",
          "major_road"
        ],
        [
          "==",
          "kind_detail",
          "primary"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-join": "round",
        "line-cap": "round"
      },
      "paint": {
        "line-color": "rgba(240, 232, 181, 1)",
        "line-width": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          8,
          1.5,
          9,
          2,
          10,
          2.5,
          11,
          3,
          12,
          3.5,
          13,
          4,
          14,
          4.5,
          16,
          5,
          18,
          5.5
        ]
      }
    },
    {
      "id": "road-highway-link",
      "type": "line",
      "source": "omv",
      "source-layer": "roads",
      "minzoom": 5,
      "filter": [
        "all",
        [
          "has",
          "is_link"
        ],
        [
          "==",
          "kind",
          "highway"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-join": "round",
        "line-cap": "round"
      },
      "paint": {
        "line-color": "rgba(214, 199, 137, 1)",
        "line-width": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          12,
          3,
          13,
          3.5,
          14,
          4,
          16,
          9,
          18,
          14
        ]
      }
    },
    {
      "id": "road-highway",
      "type": "line",
      "source": "omv",
      "source-layer": "roads",
      "minzoom": 5,
      "filter": [
        "all",
        [
          "==",
          "kind",
          "highway"
        ],
        [
          "==",
          "kind_detail",
          "motorway"
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-join": "round",
        "line-cap": "round"
      },
      "paint": {
        "line-color": "rgba(214, 199, 137, 1)",
        "line-width": [
          "interpolate",
          [
            "linear"
          ],
          [
            "zoom"
          ],
          5,
          1.5,
          6,
          2.5,
          7,
          3,
          8,
          3.5,
          9,
          4,
          10,
          4.5,
          11,
          5,
          12,
          5.5,
          13,
          6,
          14,
          6.5,
          16,
          18,
          18,
          24
        ]
      }
    },
    {
      "id": "service-todo",
      "type": "line",
      "source": "omv",
      "source-layer": "roads",
      "filter": [
        "all",
        [
          "!=",
          "kind",
          "rail"
        ],
        [
          "in",
          "kind_detail",
          "driveway",
          "parking_aisle",
          "drive_through"
        ]
      ],
      "layout": {
        "visibility": "none"
      },
      "paint": {
        "line-color": "rgba(168, 171, 168, 1)",
        "line-width": 5
      }
    },
    {
      "id": "industrial-rail",
      "type": "line",
      "source": "omv",
      "source-layer": "roads",
      "filter": [
        "all",
        [
          "==",
          "kind",
          "rail"
        ],
        [
          "in",
          "kind_detail",
          "rail",
          "light_rail",
          "tram"
        ],
        [
          "in",
          "service",
          "siding",
          "industrial",
          "yard",
          "spur",
          "crossover"
        ]
      ],
      "layout": {
        "visibility": "none"
      },
      "paint": {
        "line-color": "rgba(164, 168, 162, 1)",
        "line-width": 1.5
      }
    },
    {
      "id": "tram",
      "type": "line",
      "source": "omv",
      "source-layer": "roads",
      "filter": [
        "all",
        [
          "==",
          "kind",
          "rail"
        ],
        [
          "in",
          "kind_detail",
          "rail",
          "light_rail",
          "tram"
        ]
      ],
      "layout": {
        "visibility": "none"
      },
      "paint": {
        "line-color": "rgba(185, 185, 185, 1)",
        "line-width": {
          "stops": [
            [
              13,
              1.5
            ],
            [
              16,
              0.75
            ],
            [
              17,
              0.4
            ]
          ]
        }
      }
    },
    {
      "id": "country-border-case",
      "type": "line",
      "source": "omv",
      "source-layer": "boundaries",
      "filter": [
        "all",
        [
          "==",
          "kind",
          "country"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-width": 0.5,
        "line-color": "rgba(82, 103, 110, 1)"
      }
    },
    {
      "id": "country-border",
      "type": "line",
      "source": "omv",
      "source-layer": "boundaries",
      "filter": [
        "all",
        [
          "==",
          "kind",
          "country"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-width": 0.25,
        "line-color": "rgba(47, 68, 75, 1)"
      }
    },
    {
      "id": "disputed-border-case",
      "type": "line",
      "source": "omv",
      "source-layer": "boundaries",
      "filter": [
        "all",
        [
          "in",
          "kind",
          "disputed",
          "indefinite",
          "indeterminate",
          "lease_limit",
          "line_of_control",
          "overlay_limit"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-width": 1,
        "line-color": "rgba(82, 103, 110, 1)",
        "line-dasharray": []
      }
    },
    {
      "id": "disputed-border",
      "type": "line",
      "source": "omv",
      "source-layer": "boundaries",
      "filter": [
        "all",
        [
          "in",
          "kind",
          "disputed",
          "indefinite",
          "indeterminate",
          "lease_limit",
          "line_of_control",
          "overlay_limit"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-width": 0.5,
        "line-color": "rgba(47, 68, 75, 1)",
        "line-dasharray": [
          4,
          4
        ]
      }
    },
    {
      "id": "lake-label",
      "type": "symbol",
      "source": "omv",
      "source-layer": "water",
      "filter": [
        "all",
        [
          "==",
          "$type",
          "Point"
        ]
      ],
      "layout": {
        "text-field": [
          "coalesce",
          [
            "get",
            "name:en"
          ],
          [
            "get",
            "name"
          ]
        ],
        "visibility": "visible",
        "text-size": {
          "stops": [
            [
              2,
              14
            ],
            [
              4,
              14
            ]
          ]
        },
        "symbol-placement": "point",
        "text-font": [
          "Fira GO Regular"
        ],
        "text-max-width": 6,
        "text-line-height": 1
      },
      "paint": {
        "text-color": "rgba(1, 35, 55, 1)",
        "text-opacity": 1,
        "text-halo-color": "rgba(255, 255, 255, 0.3)",
        "text-halo-width": 1
      }
    },
    {
      "id": "river-label",
      "type": "symbol",
      "source": "omv",
      "source-layer": "water",
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ]
      ],
      "layout": {
        "text-font": [
          "Fira GO Regular"
        ],
        "text-field": [
          "coalesce",
          [
            "get",
            "name:en"
          ],
          [
            "get",
            "name"
          ]
        ],
        "visibility": "visible",
        "text-size": 11,
        "symbol-placement": "line-center",
        "text-max-angle": 45,
        "text-letter-spacing": 0
      },
      "paint": {
        "text-color": "rgba(1, 35, 55, 1)",
        "text-opacity": 1,
        "text-halo-color": "rgba(255, 255, 255, 0.3)",
        "text-halo-width": 1
      }
    },
    {
      "id": "building_level15_outline",
      "type": "line",
      "source": "omv",
      "source-layer": "buildings",
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(23, 32, 35, 0.2)",
        "line-blur": 0,
        "line-width": {
          "stops": [
            [
              13,
              0
            ],
            [
              14,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "building_level15",
      "type": "fill-extrusion",
      "source": "omv",
      "source-layer": "buildings",
      "minzoom": 14,
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-extrusion-color": "rgba(180, 185, 182, 1)",
        "fill-extrusion-opacity": 0.9,
        "fill-extrusion-height": [
          "get",
          "height"
        ]
      }
    },
    {
      "id": "region-label",
      "type": "symbol",
      "source": "omv",
      "source-layer": "places",
      "filter": [
        "all",
        [
          "in",
          "kind",
          "region"
        ]
      ],
      "layout": {
        "text-field": "{name}",
        "text-font": [
          "Fira GO Regular"
        ],
        "text-size": {
          "stops": [
            [
              3,
              9.6
            ],
            [
              4,
              10.88
            ],
            [
              5,
              12.8
            ],
            [
              6,
              14.4
            ]
          ]
        },
        "visibility": "none"
      },
      "paint": {
        "text-halo-color": "rgba(255, 255, 255, 0.5)",
        "text-halo-width": 1,
        "text-color": "rgba(6, 6, 6, 0.8)"
      }
    },
    {
      "id": "pedestrian-label",
      "type": "symbol",
      "source": "omv",
      "source-layer": "roads",
      "minzoom": 14,
      "filter": [
        "all",
        [
          "!=",
          "kind",
          "rail"
        ],
        [
          "==",
          "kind",
          "path"
        ],
        [
          "any",
          [
            "in",
            "kind_detail",
            "pedestrian",
            "path",
            "footway"
          ],
          [
            "in",
            "landuse_kind",
            "resedential",
            "park",
            "footway",
            "garden",
            "pedestrian",
            "grass",
            "allotments",
            "forest",
            "cemetery",
            "natural_wood"
          ]
        ]
      ],
      "layout": {
        "symbol-placement": "line",
        "text-font": [
          "Fira GO Regular"
        ],
        "text-field": [
          "coalesce",
          [
            "get",
            "name:en"
          ],
          [
            "get",
            "name"
          ]
        ],
        "text-size": {
          "stops": [
            [
              14,
              4
            ],
            [
              16,
              16
            ]
          ]
        },
        "visibility": "visible"
      },
      "paint": {
        "text-color": "rgba(0, 0, 0, 1)",
        "text-halo-width": 1,
        "text-halo-color": "rgba(255, 255, 255, 0.5)"
      }
    },
    {
      "id": "residential-label",
      "type": "symbol",
      "source": "omv",
      "source-layer": "roads",
      "minzoom": 15,
      "filter": [
        "all",
        [
          "!=",
          "kind",
          "rail"
        ],
        [
          "==",
          "kind",
          "minor_road"
        ],
        [
          "in",
          "kind_detail",
          "unclassified",
          "residential",
          "service"
        ]
      ],
      "layout": {
        "text-font": [
          "Fira GO Regular"
        ],
        "text-field": [
          "coalesce",
          [
            "get",
            "name:en"
          ],
          [
            "get",
            "name"
          ]
        ],
        "symbol-placement": "line-center",
        "text-size": {
          "stops": [
            [
              14,
              12
            ],
            [
              16,
              16
            ]
          ]
        },
        "visibility": "visible"
      },
      "paint": {
        "text-color": "rgba(0, 0, 0, 1)",
        "text-halo-color": "rgba(255, 255, 255, 0.5)",
        "text-halo-width": 1
      }
    },
    {
      "id": "secondary-label",
      "type": "symbol",
      "source": "omv",
      "source-layer": "roads",
      "minzoom": 8,
      "filter": [
        "all",
        [
          "!=",
          "kind",
          "rail"
        ],
        [
          "==",
          "kind",
          "major_road"
        ],
        [
          "in",
          "kind_detail",
          "secondary"
        ]
      ],
      "layout": {
        "symbol-placement": "line-center",
        "text-field": [
          "coalesce",
          [
            "get",
            "name:en"
          ],
          [
            "get",
            "name"
          ]
        ],
        "visibility": "visible",
        "text-size": {
          "stops": [
            [
              12,
              12
            ],
            [
              14,
              14
            ],
            [
              16,
              16
            ]
          ]
        },
        "text-font": [
          "Fira GO Regular"
        ],
        "text-allow-overlap": false,
        "text-max-angle": 45
      },
      "paint": {
        "text-color": "rgba(0, 0, 0, 1)",
        "text-halo-color": "rgba(255, 255, 255, 0.5)",
        "text-halo-width": 1
      }
    },
    {
      "id": "tertiary-label",
      "type": "symbol",
      "source": "omv",
      "source-layer": "roads",
      "minzoom": 8,
      "filter": [
        "all",
        [
          "!=",
          "kind",
          "rail"
        ],
        [
          "==",
          "kind",
          "major_road"
        ],
        [
          "in",
          "kind_detail",
          "primary",
          "tertiary"
        ]
      ],
      "layout": {
        "symbol-placement": "line-center",
        "text-font": [
          "Fira GO Regular"
        ],
        "text-field": [
          "coalesce",
          [
            "get",
            "name:en"
          ],
          [
            "get",
            "name"
          ]
        ],
        "visibility": "visible",
        "text-size": {
          "stops": [
            [
              12,
              12
            ],
            [
              14,
              14
            ],
            [
              16,
              16
            ]
          ]
        },
        "symbol-avoid-edges": false,
        "text-allow-overlap": false,
        "text-ignore-placement": false,
        "text-rotation-alignment": "auto",
        "text-pitch-alignment": "auto",
        "text-padding": 1
      },
      "paint": {
        "text-color": "rgba(0, 0, 0, 1)",
        "text-halo-color": "rgba(255, 255, 255, 0.5)",
        "text-halo-width": 1
      }
    },
    {
      "id": "primary-label",
      "type": "symbol",
      "source": "omv",
      "source-layer": "roads",
      "filter": [
        "all",
        [
          "!=",
          "kind",
          "rail"
        ],
        [
          "==",
          "kind",
          "highway"
        ],
        [
          "in",
          "kind_detail",
          "motorway",
          "primary"
        ]
      ],
      "layout": {
        "symbol-placement": "line",
        "text-font": [
          "Fira GO Regular"
        ],
        "text-field": [
          "coalesce",
          [
            "get",
            "name:en"
          ],
          [
            "get",
            "name"
          ]
        ],
        "visibility": "visible",
        "text-size": {
          "stops": [
            [
              12,
              14
            ],
            [
              14,
              14
            ],
            [
              16,
              16
            ]
          ]
        },
        "text-padding": 5,
        "icon-padding": 2,
        "icon-rotation-alignment": "auto",
        "icon-ignore-placement": false,
        "icon-allow-overlap": false,
        "icon-optional": false,
        "text-optional": true,
        "text-keep-upright": true,
        "text-justify": "center",
        "text-pitch-alignment": "auto",
        "text-rotation-alignment": "auto",
        "text-ignore-placement": false,
        "text-allow-overlap": false,
        "symbol-avoid-edges": false,
        "symbol-spacing": 1000
      },
      "paint": {
        "text-color": "rgba(0, 0, 0, 1)",
        "text-halo-color": "rgba(255, 255, 255, 0.5)",
        "text-halo-width": 1
      }
    },
    {
      "id": "locality-label",
      "type": "symbol",
      "source": "omv",
      "source-layer": "places",
      "minzoom": 10,
      "filter": [
        "all",
        [
          "in",
          "kind",
          "locality"
        ],
        [
          "<=",
          "population",
          10000
        ]
      ],
      "layout": {
        "text-field": [
          "coalesce",
          [
            "get",
            "name:en"
          ],
          [
            "get",
            "name"
          ]
        ],
        "text-size": {
          "stops": [
            [
              10,
              13
            ],
            [
              12,
              14.4
            ]
          ]
        },
        "text-font": [
          "Fira GO Regular"
        ],
        "visibility": "visible"
      },
      "paint": {
        "text-halo-color": "rgba(255, 255, 255, 0.5)",
        "text-halo-width": {
          "stops": [
            [
              10,
              1
            ],
            [
              12,
              1
            ]
          ]
        },
        "text-color": "rgba(0, 0, 0, 1)"
      }
    },
    {
      "id": "locality-label-10k",
      "type": "symbol",
      "source": "omv",
      "source-layer": "places",
      "minzoom": 7,
      "filter": [
        "all",
        [
          "==",
          "kind",
          "locality"
        ],
        [
          ">",
          "population",
          10000
        ]
      ],
      "layout": {
        "text-field": [
          "coalesce",
          [
            "get",
            "name:en"
          ],
          [
            "get",
            "name"
          ]
        ],
        "text-size": {
          "stops": [
            [
              7,
              14
            ],
            [
              9,
              14
            ],
            [
              11,
              18
            ]
          ]
        },
        "text-font": [
          "Fira GO Regular"
        ],
        "visibility": "visible"
      },
      "paint": {
        "text-halo-color": "rgba(255, 255, 255, 0.5)",
        "text-halo-width": {
          "stops": [
            [
              7,
              1
            ],
            [
              9,
              1
            ]
          ]
        },
        "text-color": "rgba(0, 0, 0, 1)"
      }
    },
    {
      "id": "locality-label-50k",
      "type": "symbol",
      "source": "omv",
      "source-layer": "places",
      "minzoom": 7,
      "filter": [
        "all",
        [
          "==",
          "kind",
          "locality"
        ],
        [
          ">",
          "population",
          50000
        ]
      ],
      "layout": {
        "text-field": [
          "coalesce",
          [
            "get",
            "name:en"
          ],
          [
            "get",
            "name"
          ]
        ],
        "text-size": {
          "stops": [
            [
              7,
              14
            ],
            [
              9,
              18
            ],
            [
              11,
              22
            ],
            [
              13,
              24
            ]
          ]
        },
        "text-font": [
          "Fira GO Regular"
        ],
        "visibility": "visible"
      },
      "paint": {
        "text-halo-color": "rgba(255, 255, 255, 0.5)",
        "text-halo-width": {
          "stops": [
            [
              7,
              1
            ],
            [
              9,
              1
            ],
            [
              11,
              1.5
            ]
          ]
        },
        "text-color": "rgba(0, 0, 0, 1)"
      }
    },
    {
      "id": "locality-label-100k",
      "type": "symbol",
      "source": "omv",
      "source-layer": "places",
      "minzoom": 5,
      "filter": [
        "all",
        [
          "==",
          "kind",
          "locality"
        ],
        [
          ">",
          "population",
          100000
        ]
      ],
      "layout": {
        "text-field": [
          "coalesce",
          [
            "get",
            "name:en"
          ],
          [
            "get",
            "name"
          ]
        ],
        "text-size": {
          "stops": [
            [
              5,
              12
            ],
            [
              6,
              16
            ],
            [
              8,
              22
            ],
            [
              11,
              24
            ]
          ]
        },
        "text-font": [
          "Fira GO Regular"
        ],
        "visibility": "visible",
        "text-max-width": 24
      },
      "paint": {
        "text-halo-color": "rgba(255, 255, 255, 0.4)",
        "text-halo-width": {
          "stops": [
            [
              5,
              1
            ],
            [
              7,
              1.5
            ],
            [
              11,
              3
            ]
          ]
        },
        "text-color": "rgba(0, 0, 0, 1)"
      }
    },
    {
      "id": "locality-label-400k",
      "type": "symbol",
      "source": "omv",
      "source-layer": "places",
      "minzoom": 3,
      "filter": [
        "all",
        [
          "==",
          "kind",
          "locality"
        ],
        [
          ">",
          "population",
          400000
        ]
      ],
      "layout": {
        "text-field": [
          "coalesce",
          [
            "get",
            "name:en"
          ],
          [
            "get",
            "name"
          ]
        ],
        "text-size": {
          "stops": [
            [
              3,
              12
            ],
            [
              6,
              18
            ],
            [
              8,
              26
            ],
            [
              11,
              28
            ]
          ]
        },
        "text-font": [
          "Fira GO Regular"
        ],
        "visibility": "visible",
        "text-allow-overlap": false,
        "text-max-width": 22
      },
      "paint": {
        "text-halo-color": "rgba(255, 255, 255, 0.5)",
        "text-halo-width": {
          "stops": [
            [
              3,
              0.5
            ],
            [
              5,
              1
            ],
            [
              7,
              1.5
            ],
            [
              9,
              2
            ],
            [
              11,
              3
            ]
          ]
        },
        "text-color": "rgba(0, 0, 0, 1)"
      }
    },
    {
      "id": "locality-label-1million",
      "type": "symbol",
      "source": "omv",
      "source-layer": "places",
      "filter": [
        "any",
        [
          "==",
          "region_capital",
          true
        ],
        [
          ">",
          "population",
          1000000
        ]
      ],
      "layout": {
        "text-field": [
          "coalesce",
          [
            "get",
            "name:en"
          ],
          [
            "get",
            "name"
          ]
        ],
        "text-size": {
          "stops": [
            [
              3,
              13
            ],
            [
              6,
              16
            ],
            [
              8,
              24
            ],
            [
              10,
              32
            ],
            [
              12,
              16
            ]
          ]
        },
        "text-font": [
          "Fira GO Regular"
        ],
        "visibility": "visible"
      },
      "paint": {
        "text-halo-color": "rgba(255, 255, 255, 0.5)",
        "text-halo-width": {
          "stops": [
            [
              3,
              0.5
            ],
            [
              7,
              1.5
            ],
            [
              9,
              2
            ],
            [
              10,
              3
            ],
            [
              12,
              1
            ]
          ]
        },
        "text-color": "rgba(0, 0, 0, 1)"
      }
    },
    {
      "id": "locality-label-10million-capital",
      "type": "symbol",
      "source": "omv",
      "source-layer": "places",
      "minzoom": 1,
      "filter": [
        "any",
        [
          "==",
          "country_capital",
          true
        ],
        [
          ">",
          "population",
          10000000
        ]
      ],
      "layout": {
        "text-field": [
          "coalesce",
          [
            "get",
            "name:en"
          ],
          [
            "get",
            "name"
          ]
        ],
        "text-size": {
          "stops": [
            [
              1,
              10
            ],
            [
              3,
              14
            ],
            [
              5,
              18
            ],
            [
              7,
              24
            ],
            [
              9,
              28
            ]
          ]
        },
        "text-font": [
          "Fira GO Bold"
        ],
        "visibility": "visible",
        "symbol-placement": "point",
        "text-allow-overlap": false,
        "text-ignore-placement": false
      },
      "paint": {
        "text-halo-color": "rgba(255, 255, 255, 0.4)",
        "text-halo-width": {
          "stops": [
            [
              1,
              0.5
            ],
            [
              3,
              1.5
            ],
            [
              5,
              2
            ],
            [
              7,
              3
            ],
            [
              9,
              3
            ]
          ]
        },
        "text-color": "rgba(6, 6, 6, 0.8)"
      }
    },
    {
      "id": "locality-label-10million",
      "type": "symbol",
      "source": "omv",
      "source-layer": "places",
      "minzoom": 1,
      "filter": [
        "any",
        [
          ">",
          "population",
          10000000
        ]
      ],
      "layout": {
        "text-field": [
          "coalesce",
          [
            "get",
            "name:en"
          ],
          [
            "get",
            "name"
          ]
        ],
        "text-size": {
          "stops": [
            [
              3,
              12
            ],
            [
              5,
              18
            ]
          ]
        },
        "text-font": [
          "Fira GO Regular"
        ],
        "visibility": "visible",
        "symbol-placement": "point"
      },
      "paint": {
        "text-halo-color": "rgba(255, 255, 255, 0.5)",
        "text-halo-width": 1,
        "text-color": "rgba(6, 6, 6, 0.8)"
      }
    },
    {
      "id": "country-label",
      "type": "symbol",
      "source": "omv",
      "source-layer": "places",
      "filter": [
        "all",
        [
          "in",
          "kind",
          "country"
        ]
      ],
      "layout": {
        "text-field": [
          "coalesce",
          [
            "get",
            "name:en"
          ],
          [
            "get",
            "name"
          ]
        ],
        "text-size": {
          "stops": [
            [
              1,
              9
            ],
            [
              3,
              15
            ],
            [
              5,
              16
            ]
          ]
        },
        "visibility": "visible",
        "text-transform": "uppercase",
        "text-font": [
          "Fira GO Regular"
        ],
        "text-max-width": 18
      },
      "paint": {
        "text-halo-color": "rgba(255, 255, 255, 0.5)",
        "text-halo-width": {
          "stops": [
            [
              3,
              0.5
            ],
            [
              5,
              1
            ]
          ]
        },
        "text-color": "rgba(63, 24, 33, 1)"
      }
    },
    {
      "id": "earth-labels-island",
      "type": "symbol",
      "source": "omv",
      "source-layer": "earth",
      "minzoom": 11,
      "filter": [
        "any",
        [
          "in",
          "kind",
          "island"
        ]
      ],
      "layout": {
        "text-font": [
          "Fira GO Regular"
        ],
        "text-field": [
          "coalesce",
          [
            "get",
            "name:en"
          ],
          [
            "get",
            "name"
          ]
        ],
        "text-size": {
          "stops": [
            [
              11,
              14
            ],
            [
              13,
              16
            ]
          ]
        },
        "visibility": "visible"
      },
      "paint": {
        "text-halo-color": "rgba(255, 255, 255, 0.6)",
        "text-halo-width": 0,
        "text-color": "rgba(87, 86, 77, 1)"
      }
    },
    {
      "id": "earth-labels",
      "type": "symbol",
      "source": "omv",
      "source-layer": "earth",
      "filter": [
        "all",
        [
          "!in",
          "kind",
          "island"
        ]
      ],
      "layout": {
        "text-font": [
          "Fira GO Regular"
        ],
        "text-field": [
          "coalesce",
          [
            "get",
            "name:en"
          ],
          [
            "get",
            "name"
          ]
        ],
        "text-size": {
          "stops": [
            [
              1,
              24
            ],
            [
              3,
              24
            ]
          ]
        },
        "visibility": "visible",
        "text-transform": "uppercase"
      },
      "paint": {
        "text-halo-color": "rgba(255, 255, 255, 0.6)",
        "text-halo-width": 0,
        "text-color": "rgba(63, 24, 33, 1)"
      }
    },
    {
      "id": "building_address",
      "type": "symbol",
      "source": "omv",
      "source-layer": "buildings",
      "filter": [
        "all",
        [
          "==",
          "kind",
          "address"
        ]
      ],
      "layout": {
        "visibility": "none"
      },
      "paint": {}
    }
  ],
  "id": "omv"
};