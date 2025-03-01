### AuthenticateInABC

This method is used to validate the login Id & Password in ABC auth database.

&nbsp;

{% grid %}
{% parameters %}

```json
{
  "properties": {
    "ABCUserName": {
      "type": "string",
      "required": true,
      "description": "ABC Customer Login Id "
    },
    "ABCPassword": {
      "type": "string",
      "required": true,
      "description": "ABC Customer Login password Value must be into encrypted format. Please refer encryption dll shared by us."
    }
  }
}
```

{% /parameters %}

{% apirequest %}

```json
{
  "url": "https://api.adityabirlacapital.com/cmnsrv/auth/validate/abc",
  "method": "POST",
  "body": {
    "en_AuthenticateRequest": {
      "ABCUserName": "{{ABCUsername}}",
      "ABCPassword": "{{Password}}"
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
      "description": "Return Code as '1' for successful service call. <Please Refer Below ReturnCode list>",
      "required": true
    },
    "ReturMessage": {
      "type": "string",
      "description": "Return Message as 'User is authenticated successfully.' for successful service call.",
      "required": true
    },
    "CIINumber": {
      "type": "number",
      "description": "CII number.",
      "required": true
    },
    "CustomerName": {
      "type": "string",
      "description": "Name of the customer.",
      "required": true
    },
    "EmailID": {
      "type": "string",
      "description": "Registered email id.",
      "required": true
    },
    "MobileNo": {
      "type": "string",
      "description": "Registered mobile number.",
      "required": true
    },
    "LOBName": {
      "type": "string",
      "description": "Registered LOB name.",
      "required": true
    },
    "linkedLobs": {
      "type": "array",
      "description": "List of linked LOB codes.",
      "required": true
    },
    "LoginId": {
      "type": "string",
      "description": "User Login ID.",
      "required": false
    },
    "UDP": {
      "type": "string",
      "description": "",
      "required": false
    }
  }
}
```

{% /responseparameters %}

{% response %}

```json
{
  "LoginId": "",
  "ReturMessage": "User is authenticated successfully.",
  "ReturnCode": "1",
  "UDP": "",
  "CIINumber": "11076117",
  "CustomerName": "AB",
  "CustomerShortName": "A",
  "EmailId": "{{EMAILID}}",
  "LOBName": "MF",
  "LastLoginDateTime": "Feb  6 2025 12:18PM",
  "MobileNo": "7777777777",
  "linkedLobs": [
    {
      "LOBCode": "01",
      "LOBDescription": "Mutual Fund",
      "LOBName": "MF"
    }
  ]
}
```

{% /response %}

{% /grid %}

{% space level=10 %}
{% /space %}

{% grid %}

{% space %}
{% /space %}

{% validations %}

```json
{
  "validations": [
    {
      "LoginId": "",
      "ReturMessage": "ABCPassword is required.",
      "ReturnCode": "",
      "UDP": "",
      "CIINumber": "",
      "CustomerName": "",
      "CustomerShortName": "",
      "EmailId": "",
      "LOBName": "",
      "LastLoginDateTime": "",
      "MobileNo": "",
      "linkedLobs": [],
      "ResCode": "V2"
    },

    {
      "LoginId": "",
      "ReturMessage": "ABCUserName is required.",
      "ReturnCode": "",
      "UDP": "",
      "CIINumber": "",
      "CustomerName": "",
      "CustomerShortName": "",
      "EmailId": "",
      "LOBName": "",
      "LastLoginDateTime": "",
      "MobileNo": "",
      "linkedLobs": [],
      "ResCode": "V1"
    }
  ]
}
```

{% /validations %}

{% /grid %}
