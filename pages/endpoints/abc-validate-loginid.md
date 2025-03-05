### ABCValidateLoginID

{% grid %}

{% parameters %}

```json
{
  "properties": {
    "ABCUserId": {
      "type": "string",
      "description": "Please pass UserName.",
      "required": true
    },
    "LOB": {
      "type": "string",
      "description": "ABC - One ID user.",
      "required": true
    },
    "UserId": {
      "type": "string",
      "description": "This is an optional field.",
      "required": false
    },
    "Password": {
      "type": "string",
      "description": "This is an optional field.",
      "required": false
    },
    "Source": {
      "type": "string",
      "description": "This is an optional field.",
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
    },
    "MethodName": {
      "type": "string",
      "description": "This is an optional field.",
      "required": false
    },
    "ModuleName": {
      "type": "string",
      "description": "This is an optional field.",
      "required": false
    },
    "AuthCode": {
      "type": "string",
      "description": "This is an optional field.",
      "required": false
    },
    "ClientIPAddress": {
      "type": "string",
      "description": "This is an optional field.",
      "required": false
    }
  }
}
```

{% /parameters %}

{% apirequest %}

```json
{
  "url": "https://api.adityabirlacapital.com/cmnsrv/user/validate/loginid",
  "method": "POST",
  "body": {
    "objRequest": {
      "ABCUserID": "xxx",
      "LOB": "xxx",
      "UserId": "",
      "Password": "xxxx",
      "Source": "",
      "DeviceID": "",
      "OS": "",
      "IMEI": "",
      "UDP": "",
      "UDP1": "",
      "UDP2": "",
      "UDP3": "",
      "UDP4": "",
      "UDP5": "",
      "MethodName": "",
      "ModuleName": "",
      "AuthCode": "",
      "ClientIPAddress": "10.1.225.227"
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
      "description": "Return Code as '1' for successful service call. <Please Refer Below Return Code list>.",
      "required": true
    },
    "ReturnMessage": {
      "type": "string",
      "description": "Return Message as 'User Verified Successfully' for successful service call.",
      "required": true
    },
    "EmailId": {
      "type": "string",
      "description": "Customer LOB registered EmailID using which customer has created One ID. Required if user authenticated successfully at ABC, else optional.",
      "required": "Conditional"
    },
    "MobileNumber": {
      "type": "string",
      "description": "Customer LOB registered Mobile No using which customer has created One ID. Required if user authenticated successfully at ABC, else optional.",
      "required": "Conditional"
    },
    "UserType": {
      "type": "string",
      "description": "UserType:\n- 'I' for Individual type user\n- 'C' for Commercial type user\n- 'M' for ABHI Member.\nRequired if user authenticated successfully, else optional.",
      "required": "Conditional"
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
  "ReturnMessage": "Record Retrieved Successfully",
  "LOB": "",
  "UserType": "I",
  "EmailId": "xxxx",
  "MobileNumber": "xx"
}
```

{% /response %}
{% space %}
{% /space %}

{% customtable primary="Return Code" %}

```json
{
  "headers": ["Return Code", "LOB"],
  "rows": [
    [-1, "Blank"],
    [1, "ABC"],
    ["2", "LOB"],
    ["2", "Both(ABC/LOB)"],
    ["C101", "Blank"],
    [0, "Blank"]
  ]
}
```

{% /customtable %}
{% /block %}

{% /grid %}
