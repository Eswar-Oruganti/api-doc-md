### GetLOBWiseProductDetails

This method will be using to display emailid, mobile number of mapped lobs based on CII number.

&nbsp;

{% grid %}

{% parameters %}

```json
{
  "properties": {
    "CIINumber": {
      "type": "string",
      "description": "Check CII no as mandatory",
      "required": true
    },
    "ClientIPAddress": {
      "type": "string",
      "description": "Please pass IP Address of client machine/device (optional field)",
      "required": false
    },
    "DeviceID": {
      "type": "string",
      "description": "Please pass Mobile device ID (optional field)",
      "required": false
    },
    "OS": {
      "type": "string",
      "description": "Please pass OS of the Device (optional field)",
      "required": false
    },
    "IMEI": {
      "type": "string",
      "description": "Please pass IMEI number of the Device (optional field)",
      "required": false
    },
    "UDP": {
      "type": "string",
      "description": "Please pass user-defined parameter (if any). This is an optional field",
      "required": false
    },
    "UDP1": {
      "type": "string",
      "description": "Please pass user-defined parameter (if any). This is an optional field",
      "required": false
    },
    "UDP2": {
      "type": "string",
      "description": "Please pass user-defined parameter (if any). This is an optional field",
      "required": false
    },
    "UDP3": {
      "type": "string",
      "description": "Please pass user-defined parameter (if any). This is an optional field",
      "required": false
    },
    "UDP4": {
      "type": "string",
      "description": "Please pass user-defined parameter (if any). This is an optional field",
      "required": false
    },
    "UDP5": {
      "type": "string",
      "description": "Please pass user-defined parameter (if any). This is an optional field",
      "required": false
    }
  }
}
```

{% /parameters %}

{% apirequest %}

```json
{
  "url": "https://api.adityabirlacapital.com/cmnsrv/abc/get-lob-product-details",
  "method": "POST",
  "body": {
    "objRequest": {
      "CIINumber": "11077006"
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

{% response %}

```json
{
  "ReturMessage": "Record retrieved successfully",
  "LoginId": "",
  "ReturnCode": "1",
  "UDP": "",
  "lstLOBProductDetails": [
    {
      "CustomerName": "BHABESH  MAJUMDER",
      "EmailID": "",
      "LOBName": "ABFL",
      "LobRefNo": "",
      "MobileNumber": "",
      "SubLOBName": "MORT",
      "CCC": "KOL110009200"
    },
    {
      "CustomerName": "BHABESH  MAJUMDER",
      "EmailID": "",
      "LOBName": "ABFL",
      "LobRefNo": "",
      "MobileNumber": "",
      "SubLOBName": "MORT",
      "CCC": "KOL110009200"
    },
    {
      "CustomerName": "BHABESH  MAJUMDER",
      "EmailID": "",
      "LOBName": "ABFL",
      "LobRefNo": "",
      "MobileNumber": "",
      "SubLOBName": "MORT",
      "CCC": "KOL110009200"
    }
  ]
}
```

{% /response %}

{% /grid %}

{% space  %}
{% /space %}

{% grid %}

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
    [0, "Authentication Failure"],
    [3, "Incorrect Data "],
    ["V3", "Authentication Failure"],
    [13, "Please provide valid CII number."],
    [1, "Record retrieved successfully"],
    ["C101", "Authentication Failure"],
    ["V8", "No LOB Mapped with the given CII Number "]
  ]
}
```

{% /customtable %}

{% /grid %}
