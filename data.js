var APP_DATA = {
  "scenes": [
    {
      "id": "0-suite",
      "name": "Suite",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.28509945756271193,
        "pitch": 0.07052176386720532,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0050715790182352,
          "pitch": 0.09208463824858093,
          "rotation": 0,
          "target": "1-suite-bedroom"
        },
        {
          "yaw": -2.7717068097891904,
          "pitch": 0.07594547067491142,
          "rotation": 0,
          "target": "5-corridor"
        },
        {
          "yaw": 0.816909141682439,
          "pitch": 0.2189787228399407,
          "rotation": 0,
          "target": "2-bathroom-bathtub"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-suite-bedroom",
      "name": "Suite Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -0.08802456250419155,
        "pitch": 0.05246273810967139,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.4501989108252964,
          "pitch": 0.32873265994772893,
          "rotation": 0,
          "target": "0-suite"
        },
        {
          "yaw": -2.0702251275174888,
          "pitch": 0.12538029450718646,
          "rotation": 0,
          "target": "2-bathroom-bathtub"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bathroom-bathtub",
      "name": "Bathroom Bathtub",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.8404272673421396,
          "pitch": 0.28269520022340444,
          "rotation": 0,
          "target": "1-suite-bedroom"
        },
        {
          "yaw": -2.9664722540276713,
          "pitch": 0.273659833422883,
          "rotation": 0,
          "target": "0-suite"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bathroom-shower",
      "name": "Bathroom Shower",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.84224915754125,
          "pitch": 0.22119461640542326,
          "rotation": 0,
          "target": "5-corridor"
        },
        {
          "yaw": -2.9596609421459608,
          "pitch": 0.21549485564456994,
          "rotation": 0,
          "target": "6-room-double"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-elevators-floor",
      "name": "Elevators floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.055663713773174806,
          "pitch": 0.13820108558742383,
          "rotation": 0,
          "target": "5-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-corridor",
      "name": "Corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.907708366360156,
          "pitch": 0.15937198378878925,
          "rotation": 0,
          "target": "4-elevators-floor"
        },
        {
          "yaw": 1.471055320490522,
          "pitch": 0.09826139276020562,
          "rotation": 0,
          "target": "0-suite"
        },
        {
          "yaw": 0.525248346255351,
          "pitch": 0.057565167604110457,
          "rotation": 0,
          "target": "6-room-double"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-room-double",
      "name": "Room double",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.424458293665988,
          "pitch": 0.4867826250096101,
          "rotation": 0,
          "target": "3-bathroom-shower"
        },
        {
          "yaw": 2.4728497213367557,
          "pitch": 0.031027002149190963,
          "rotation": 0,
          "target": "5-corridor"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
