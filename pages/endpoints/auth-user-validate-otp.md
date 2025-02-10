### AuthUserValidateOTP

This method will be using to Authenticate user OTP who is trying to login with the OTP.

&nbsp;

{% grid %}

{% parameters %}

```json
{
  "properties": {
    "ABCUserID": {
      "type": "string",
      "maxLength": 80,
      "description": "Please pass UserId.",
      "required": true
    },
    "EmailID": {
      "type": "string",
      "maxLength": 50,
      "description": "Pass user's registered EmailId.",
      "required": false
    },
    "MobileNumber": {
      "type": "string",
      "maxLength": 20,
      "description": "Pass user's registered Mobile Number.",
      "required": true
    },
    "OTP": {
      "type": "string",
      "maxLength": 10,
      "description": "Please pass OTP.",
      "required": true
    },
    "Functionality": {
      "type": "string",
      "maxLength": 10,
      "description": "Pass functionality as 'OTP_LGN' for OTP login.",
      "required": true
    },
    "Source": {
      "type": "string",
      "maxLength": 30,
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
  "url": "https://api.adityabirlacapital.com/cmnsrv/auth/user/validate-otp",
  "method": "POST",
  "body": {
    "ABCUserID": "userniki7",
    "EmailID": "PramodKumar.Yadav@adityabirlacapital.com",
    "MobileNumber": "9930315629",
    "Functionality": "OTP_LGN",
    "OTP": "123456",
    "Source": "ESBUATABCTest"
  }
}
```

{% /apirequest %}
{% /grid %}

{% space level=10 %}
{% /space %}

{% grid %}

{% response %}

```json
{
  "ReturnMessage": "User authenticated successfully.",
  "ReturnCode": "1",
  "CIINumber": "10332332",
  "CustomerName": "TestDev",
  "CustomerShortName": "T",
  "EmailId": "TestDev@gmail.com",
  "LOBName": "FL",
  "LastLoginDateTime": "2025-02-07T08:23:17.223Z",
  "MobileNo": "9994767653",
  "BundlePurchaseFlag": "N",
  "linkedLobs": [
    {
      "LOBID": "03",
      "LOBName": "FL",
      "LOBDescription": "Personal Finance"
    }
  ]
}
```

{% /response %}
{% /grid %}
