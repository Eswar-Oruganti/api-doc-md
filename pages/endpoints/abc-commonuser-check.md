### ABCCommonUserCheck

Login journey-
During the login process, consumer will pass the UserId along with other mandatory fields to this APIs. It will verify the userid into a common repository system.
Registration journey -
This method will be using to check whether the requested ABCUserID is already present in the login repository and have a access for OTP login .

&nbsp;

{% grid %}

{% parameters %}

```json
{
  "properties": {
    "ABCUserID": {
      "type": "string",
      "description": "",
      "required": true
    },
    "LOB": {
      "type": "string",
      "description": "Value will be in the below format:\n- MF: If API access from Mutual Fund login page\n- LI: If API access from Life Insurance login page\n- HL: If API access from Home Loan login page\n- FL: If API access from Personal Loan login page\n- HI: If API access from Health Insurance login page\n- IBM: If API access from Motor Insurance login page",
      "required": "Conditional (Yes - when Functionality is ‘OTP_LGN’ or else not mandatory)"
    },
    "Functionality": {
      "type": "string",
      "description": "Pass functionality as:\n- OTP_LGN: For OTP login\n- REGS: For registration process\nNote: If value is blank, it will check the user availability for the registration process",
      "required": false
    }
  }
}
```

{% /parameters %}

{% apirequest %}

```json
{
  "url": "https://api.adityabirlacapital.com/cmnsrv/user/validate/abc-common-user",
  "method": "POST",
  "body": {
    "objRequest": {
      "ABCUserID": "{{UserID}}",
      "LOB": "FL",
      "Functionality": "OTP_LGN"
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
[
  {
    "ReturnCode": "2",
    "ReturnMessage": "Record Retrieved Successfully for LOB customer.",
    "UserType": "I",
    "CII": "10334212"
  },

  {
    "ReturnCode": "1",
    "ReturnMessage": "Record Retrieved Successfully.",
    "UserType": "I",
    "CII": "10334212"
  },

  {
    "ReturnCode": "0",
    "ReturnMessage": "The username already exists. Please create a different username.",
    "UserType": null,
    "CII": null
  }
]
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
      "ReturnCode": "0",
      "ReturnMessage": "It seems you have not passed ABCUserID. Requesting to please pass ABCUserID",
      "UserType": null,
      "CII": null
    },

    {
      "ReturnCode": "0",
      "ReturnMessage": "It seems you have not passed LOB. Requesting to please pass LOB",
      "UserType": null,
      "CII": null
    }
  ]
}
```

{% /validations %}

{% /grid %}
