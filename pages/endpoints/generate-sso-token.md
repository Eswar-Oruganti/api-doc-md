### GenerateSSOToken

Purpose of this API is to generate the user token for single sign on (SSO) for ABC and linked LOBs for the User.

&nbsp;

{% grid %}

{% parameters %}

```json
{
  "properties": {
    "CIINo": {
      "type": "string",
      "required": true,
      "description": "ABC Customer Login Id"
    },
    "LOBId": {
      "type": "number",
      "required": true,
      "description": "LOB Id"
    },
    "Functionality": {
      "type": "string",
      "maxLength": 5,
      "required": true,
      "description": "Page Functionality. <Refer Functionality Table given below>."
    }
  }
}
```

{% /parameters %}

{% apirequest %}

```json
{
  "url": "https://api.adityabirlacapital.com/cmnsrv/user/generate-sso-token",
  "method": "POST",
  "body": {
    "GenerateTokenRequest": {
      "CIINo": "{{ciino}}",
      "LOBId": "01",
      "Functionality": "D"
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
      "required": true,
      "description": "Return Code as '1' for successful service call. <Please Refer Below ReturnCode list>"
    },
    "ReturMessage": {
      "type": "string",
      "required": true,
      "description": "Return Message as 'Record retrieved successfully' for successful service call."
    },
    "TokenRefNo": {
      "type": "number",
      "required": true,
      "description": "Unique Token Reference Number"
    },
    "TokenNo": {
      "type": "string",
      "required": false,
      "description": "User Token"
    },
    "Login Id": {
      "type": "string",
      "required": false,
      "description": "Login Id"
    },
    "UDP": {
      "type": "string",
      "required": false
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
  "ReturnMessage": "Record retrieved Successfully",
  "LoginId": "{{loginid}}",
  "UDP": ""
}
```

{% /response %}

{% space %}
{% /space %}

{% validations %}

```json
{
  "validations": [
    {
      "ReturnCode": "V1",
      "ReturnMessage": "Please provide valid CII number."
    },

    {
      "ReturnCode": "V3",
      "ReturnMessage": "Please provide LOB Id."
    },

    {
      "ReturnCode": "V5",
      "ReturnMessage": "Please provide Functionality."
    }
  ]
}
```

{% /validations %}
{% /block %}

{% /grid %}
