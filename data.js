var APP_DATA = {
  "scenes": [
    {
      "id": "0-bathroom-wbathtub",
      "name": "Bathroom w/bathtub",
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
          "yaw": -2.9774144955486843,
          "pitch": 0.03593342409685718,
          "rotation": 0,
          "target": "3-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bathroom-wshower",
      "name": "Bathroom w/shower",
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
          "yaw": -2.9922341804322166,
          "pitch": 0.06306972416615864,
          "rotation": 0,
          "target": "3-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-elevator-hall",
      "name": "Elevator Hall",
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
        "yaw": 0.07043596305673638,
        "pitch": 0.014939963058955286,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.09684927944340238,
          "pitch": 0.05120966099591229,
          "rotation": 0,
          "target": "3-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-corridor",
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
        "yaw": -0.05349282256521093,
        "pitch": 0.08249046013051675,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.8860787493430253,
          "pitch": 0.15972705758072792,
          "rotation": 0,
          "target": "2-elevator-hall"
        },
        {
          "yaw": 0.5216559366409932,
          "pitch": 0.05839214632019285,
          "rotation": 0,
          "target": "0-bathroom-wbathtub"
        },
        {
          "yaw": 0.5174792136033357,
          "pitch": 0.16367742395381413,
          "rotation": 0,
          "target": "1-bathroom-wshower"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Wilkes-Barre DT",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
