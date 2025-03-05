### CheckLoginIdForMobileAndEmail

{% grid %}

{% parameters %}

```json
{
  "properties": {
    "EmailId": {
      "type": "string",
      "description": "Please pass Email Id.",
      "required": true
    },
    "MobileNo": {
      "type": "string",
      "description": "Please pass 10-digit mobile number.",
      "required": true
    },
    "ClientIPAddress": {
      "type": "string",
      "description": "Please pass IP Address of client machine/device (optional field).",
      "required": false
    },
    "DeviceID": {
      "type": "string",
      "description": "Please pass Mobile device ID (optional field).",
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
    }
  }
}
```

{% /parameters %}

{% apirequest %}

```json
{
  "url": "https://api.adityabirlacapital.com/cmnsrv/user/validate/loginid-mobile-email",
  "method": "POST",
  "body": {
    "ValidateMobileandEmailRequest": {
      "EmailId": "shubhra.bardia@gmail.com",
      "MobileNo": "9324533544",
      "ClientIPAddress": null,
      "DeviceID": null,
      "OS": null,
      "IMEI": "",
      "UDP": null,
      "UDP1": "",
      "UDP2": "",
      "UDP3": "",
      "UDP4": "",
      "UDP5": ""
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
    "ReturnMsg": {
      "type": "string",
      "description": "Return Message as 'Record retrieved successfully' for successful service call.",
      "required": true
    },
    "CII": {
      "type": "number",
      "description": "CII number generated in the system will be returned by the API.",
      "required": true
    }
  }
}
```

{% /responseparameters %}

{% block %}
{% response %}

```json
{
  "ReturnCode": "2",
  "ReturMessage": "Email and Mobileno validation failed",
  "CII": ""
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
    [1, "There is no user created against this email id and mobile number"],
    [
      2,
      "There is an existing ONE ID created against this email id and mobile number"
    ],
    [
      "V1",
      "Email address and mobile number are required. Please enter the same"
    ],
    ["V5", "Email address is required"],
    ["V7", "Mobile number is required. "],
    ["8", "Invalid email address. Please try again"],
    ["9", "Invalid mobile number. Please try again"],
    ["V11", "Please provide PAN Number"],
    ["C101", "Authentication Failure"],
    [
      -1,
      "There seems to be some Technical problem. Please try after sometime/Unauthorised Access"
    ]
  ]
}
```

{% /customtable %}
{% /block %}

{% /grid %}
