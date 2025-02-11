### UserLogout

This method is used to logged out the user, And to update the Login status flag into ABC log database.

&nbsp;

{% grid %}

{% parameters %}

```json
{
  "properties": {
    "UserName": {
      "type": "string",
      "required ": "true",
      "description": "ABC Customer Login Id "
    }
  }
}
```

{% /parameters %}

{% apirequest %}

```json
{
  "url": "https://api.adityabirlacapital.com/cmnsrv/auth/user/logout",
  "method": "POST",
  "body": {
    "Request": {
      "UserName": "{{username}}"
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
      "description": "Return Code as '2' or '1' for successful service call.",
      "required": true
    },
    "ReturnMessage": {
      "type": "string",
      "description": "Return Message as 'Record retrieved successfully.' for a successful service call.",
      "required": true
    },
    "CII": {
      "type": "string",
      "description": "CII will return only when the user is getting validated with One ID & OTP is applicable.",
      "required": "Conditional (Yes – if user authenticated successfully from ABC else No)"
    },
    "UserType": {
      "type": "string",
      "description": "User Type:\n- I: Individual type user\n- C: Commercial type user\n- M: ABHI Member",
      "required": "Conditional (Yes – if user authenticated successfully or else No)"
    }
  }
}
```

{% /responseparameters %}
{% response %}

```json
{
  "ReturnCode": "1",
  "ReturnMessage": "User logged out successfully."
}
```

{% /response %}
{% /grid %}
