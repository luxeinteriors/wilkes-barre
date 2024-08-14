var APP_DATA = {
  "scenes": [
    {
      "id": "0-elevators-floor",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.10114615025647566,
          "pitch": 0.07509391812860855,
          "rotation": 0,
          "target": "1-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-corridor",
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
          "yaw": 0.515395187766293,
          "pitch": 0.100750871854979,
          "rotation": 0,
          "target": "2-room-double"
        },
        {
          "yaw": 1.396337545525082,
          "pitch": 0.19459972167331152,
          "rotation": 0,
          "target": "3-suite"
        },
        {
          "yaw": 2.920806188852932,
          "pitch": 0.1481523386154393,
          "rotation": 0,
          "target": "0-elevators-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-room-double",
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
        "yaw": -0.14835277587727802,
        "pitch": 0.1723285703413424,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.512913288923503,
          "pitch": 0.003931635211744222,
          "rotation": 0,
          "target": "1-corridor"
        },
        {
          "yaw": 2.414697693179244,
          "pitch": 0.47276029389067453,
          "rotation": 0,
          "target": "6-bathroom-shower"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-suite",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8224486218322333,
          "pitch": 0.28688774742913203,
          "rotation": 0,
          "target": "5-bathroom-bathtub"
        },
        {
          "yaw": 0.9516255369425277,
          "pitch": 0.08738095504924814,
          "rotation": 0,
          "target": "4-suite-bedroom"
        },
        {
          "yaw": -2.7094563879691513,
          "pitch": 0.21631264430756225,
          "rotation": 0,
          "target": "1-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-suite-bedroom",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.484249852344215,
          "pitch": 0.29469663322325346,
          "rotation": 0,
          "target": "3-suite"
        },
        {
          "yaw": -2.064100737937032,
          "pitch": 0.24326231140188526,
          "rotation": 0,
          "target": "5-bathroom-bathtub"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bathroom-bathtub",
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
          "yaw": 2.841213762988274,
          "pitch": 0.2557773541957289,
          "rotation": 0,
          "target": "4-suite-bedroom"
        },
        {
          "yaw": -2.965865973536461,
          "pitch": 0.23531659803419558,
          "rotation": 0,
          "target": "3-suite"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bathroom-shower",
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
          "yaw": -2.9475754113458805,
          "pitch": 0.18089738276789014,
          "rotation": 0,
          "target": "1-corridor"
        },
        {
          "yaw": 2.8394513938650645,
          "pitch": 0.19280114250571323,
          "rotation": 0,
          "target": "2-room-double"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Wilkes Barre v2",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
