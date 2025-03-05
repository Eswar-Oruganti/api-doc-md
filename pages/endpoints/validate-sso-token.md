### ValidateSSOToken

The purpose of this API is to validate the user token with an active token for the LOB user.

&nbsp;

{% grid %}
{% parameters %}

```json
{
  "properties": {
    "TokenRefNo": {
      "type": "number",
      "required": true,
      "description": "Token Reference Number"
    },
    "TokenNo": {
      "type": "string",
      "required": true,
      "description": "ABC User Token. It should be provided in encrypted format"
    }
  }
}
```

{% /parameters %}

{% apirequest %}

```json
{
  "url": "https://api.adityabirlacapital.com/cmnsrv/auth/user/validate-sso-token",
  "method": "POST",
  "body": {
    "ValidateTokenRequest": {
      "TokenRefNo": "1738998802812891",
      "TokenNo": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJDSUlObyI6IjExMDc4OTgxIiwiTE9CSWQiOiIwMSIsIkZ1bmN0aW9uYWxpdHkiOiJEIiwiRGF0ZSI6IjIwMjUtMDItMDhUMDc6MTM6MjIuODEwWiIsImlhdCI6MTczODk5ODgwMiwiZXhwIjoxNzM4OTk5NzAyfQ.o_jkn6zsjez0Q1V7fNWJPtK_CYOR_OBzODtoY8w78No"
    }
  }
}
```

{% /apirequest %}
{%/grid %}

{% space level=10 %}
{% /space %}

{%grid %}
{% responseparameters %}

```json
{
  "properties": {
    "ReturnCode": {
      "type": "string",
      "description": "Return Code as '1' for successful service call. <Please Refer Below ReturnCode list>",
      "required": true
    },
    "ReturnMessage": {
      "type": "string",
      "description": "Return Message as 'Record retrieved successfully' for successful service call.",
      "required": true
    },
    "CIINo": {
      "type": "number",
      "description": "CII number.",
      "required": true
    },
    "IsValidToken": {
      "type": "string",
      "description": "Yes/No.",
      "required": true
    },
    "LoginId": {
      "type": "string",
      "description": "Login ID.",
      "required": false
    },
    "Functionality": {
      "type": "string",
      "description": "ABC Dashboard Page Functionality. ABC Dashboard = 'D'.",
      "required": true
    },
    "UDP": {
      "type": "string",
      "description": "OTP / PWD.",
      "required": false
    },
    "TokenSource": {
      "type": "string",
      "description": "This will be used to identify Token generation consumer. Example: 1) For Mobile App - ABCMobileApp.",
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
  "ReturnMessage": "Token Verified successfully",
  "UDP": "PWD",
  "CIINo": "11078981",
  "Functionality": "",
  "IsValidToken": true,
  "LOBId": "01",
  "UDP1": "",
  "UDP2": "",
  "UDP3": "",
  "UDP4": "",
  "UDP5": "",
  "TokenSource": "ESBUATABCACT"
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
      "ReturnMessage": "Please provide Token Reference Number."
    },
    {
      "ReturnCode": "V3",
      "ReturnMessage": "Please provide Token No."
    }
  ]
}
```

{% /validations %}

{% /block %}

{%/grid %}
