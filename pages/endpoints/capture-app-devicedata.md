### CaptureAppDeviceType

{% grid %}

{% parameters %}

```json
{
  "properties": {
    "CII": {
      "type": "string",
      "description": "Customer identity number. This field is mandatory.",
      "required": true
    },
    "LOB": {
      "type": "string",
      "description": "LOB code of portal from which request is coming.",
      "required": true
    },
    "LoginMode": {
      "type": "string",
      "description": "Please pass LoginMode in below format:\n- MPIN: For mobile pin authentication\n- FP: For Finger print authentication\n- FA: For authentication",
      "required": true
    },
    "ClientIPAddress": {
      "type": "string",
      "description": "Please pass IP Address of client machine/device (optional field).",
      "required": false
    },
    "DeviceType": {
      "type": "string",
      "description": "Please pass DeviceType in below format:\n- MobileApp\n- Desktop",
      "required": false
    },
    "OS": {
      "type": "string",
      "description": "Please pass OS of the Device (optional field).",
      "required": false
    },
    "IMEI": {
      "type": "string",
      "description": "Please pass IMEI number of the Device (optional field).",
      "required": false
    },
    "UDP": {
      "type": "string",
      "description": "Please pass user-defined parameter (if any). This is an optional field.",
      "required": false
    },
    "UDP1": {
      "type": "string",
      "description": "Please pass user-defined parameter (if any). This is an optional field.",
      "required": false
    },
    "UDP2": {
      "type": "string",
      "description": "Please pass user-defined parameter (if any). This is an optional field.",
      "required": false
    },
    "UDP3": {
      "type": "string",
      "description": "Please pass user-defined parameter (if any). This is an optional field.",
      "required": false
    },
    "UDP4": {
      "type": "string",
      "description": "Please pass user-defined parameter (if any). This is an optional field.",
      "required": false
    },
    "UDP5": {
      "type": "string",
      "description": "Please pass user-defined parameter (if any). This is an optional field.",
      "required": false
    },
    "DeviceID": {
      "type": "string",
      "description": "Please pass Mobile device ID (optional field).",
      "required": false
    }
  }
}
```

{% /parameters %}

{% apirequest %}

```json
{
  "url": "https://api.adityabirlacapital.com/cmnsrv/abc/capture-device-type",
  "method": "POST",
  "body": {
    "ObjRequest": {
      "CII": "11078981",
      "LOB": "11",
      "LoginMode": "MPIN",
      "DeviceType": "MobileApp",
      "ClientIPAddress": "10.1.225.224",
      "DeviceID": null,
      "OS": null,
      "IMEI": null,
      "UDP": null,
      "UDP1": null,
      "UDP2": null,
      "UDP3": null,
      "UDP4": null,
      "UDP5": null
    }
  }
}
```

{% /apirequest %}

{% /grid %}

{% space level=10 %}
{% /space %}

{% grid %}

{% responseparameters %}

```json
{
  "properties": {
    "ReturnCode": {
      "type": "string",
      "description": "Return Code as '1' for successful service call.",
      "required": true
    },
    "ReturnMessage": {
      "type": "string",
      "description": "Return Message as 'Record retrieved successfully' for successful service call.",
      "required": true
    },
    "lstLOBProductDetails": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "EmailID": {
            "type": "string",
            "description": "Registered email id",
            "required": false
          },
          "LOBName": {
            "type": "string",
            "description": "Name of lob business",
            "required": false
          },
          "LobRefNo": {
            "type": "string",
            "description": "LOB identifier number",
            "required": false
          },
          "MobileNumber": {
            "type": "string",
            "description": "Registered mobile number",
            "required": false
          },
          "CustomerName": {
            "type": "string",
            "description": "Customer Name",
            "required": false
          },
          "CCC": {
            "type": "string",
            "description": "CCC number, this will come only in case of HFL",
            "required": false
          }
        }
      }
    }
  }
}
```

{% /responseparameters %}

{% block %}
{% response %}

```json
{
  "ReturnCode": "1",
  "ReturnMessage": "Record retrieved successfully."
}
```

{% /response %}

{% space %}
{% /space %}

{% customtable primary="Return Code" %}

```json
{
  "headers": ["Return Code", "Return Message"],
  "rows": [
    [
      -1,
      "There seems to be some Technical problem. Please try after sometime "
    ],
    [0, "CII does not exists "],
    [1, "Record retrieved successfully"],
    ["C101", "Authentication Failure"],
    [
      "V1",
      "It seems you have not passed CII, Requesting to please pass CII of customer. "
    ],
    ["V2", "It seems you have not passed LOB, Requesting to please pass LOB. "],
    [
      "V3",
      "It seems you have passed LoginMode, Requesting to please pass LoginMode. "
    ]
  ]
}
```

{% /customtable %}

{% /block %}

{% /grid %}
