### ForgotUserName

This method is used to send the ABC login Id to customer’s registered email id.

&nbsp;

{% grid %}

{% parameters %}

```json
{
  "properties": {
    "CII": {
      "type": "number",
      "required": true,
      "description": "Please pass CII (Customer Internal Identifier) number in this input field."
    },
    "EmailId": {
      "type": "string",
      "required": true,
      "description": "Customer email ID, mandatory if the customer wishes to update their email ID."
    },
    "MobileNo": {
      "type": "string",
      "required": true,
      "description": "Customer mobile number, mandatory if the customer wishes to update their mobile number."
    }
  }
}
```

{% /parameters %}

{% apirequest %}

```json
{
  "url": "https://api.adityabirlacapital.com/cmnsrv/user/master/map-lob-product",
  "method": "POST",
  "body": {
    "_ForgetPasswordRequest": {
      "CIINo": "11078301",
      "EmailId": "{{email}}",
      "MobileNo": "{{mobile}}"
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
      "description": "Return Code as '1' for a successful service call. <Refer to ReturnCode list>"
    },
    "ReturnMsg": {
      "type": "string",
      "required": true,
      "description": "Return Message as 'Record retrieved successfully' for a successful service call."
    },
    "LoginId": {
      "type": "string",
      "required": true,
      "description": "Return LoginId from ABC auth database."
    },
    "UDP": {
      "type": "string",
      "required": false,
      "description": "User-defined parameter. (Optional parameter)"
    }
  }
}
```

{% /responseparameters %}

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
{% /grid %}
