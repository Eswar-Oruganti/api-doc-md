### InsertABCUserID

This method will be using to insert new login id(OneID/Lob login id) into common repository table. It will be use by all the lob applications and ABC application into registration process to ensure the login id uniqueness.

&nbsp;

{% grid %}

{% parameters %}

```json
{
  "properties": {
    "ABCUserID": {
      "type": "string",
      "required": true,
      "description": "Please pass UserID"
    },
    "LOB": {
      "type": "string",
      "required": true,
      "description": "MF- Mutual Fund, LI- Life Insurance, HL- Home Loan, FL- Personal Loan, HI- Health Insurance, IBM- Motor Insurance"
    },
    "UserType": {
      "type": "string",
      "required": true,
      "description": "Filed value will be into below format: I – Individual type user, C- Commercial type user, M- ABHI Member"
    },
    "LOBRegisteredDate": {
      "type": "string",
      "format": "date",
      "required": false,
      "description": "Field value will be in the format (yyyy-mm-dd), e.g., '2018-10-10'"
    },
    "Source": {
      "type": "string",
      "required": false,
      "description": "This is an optional field"
    }
  }
}
```

{% /parameters %}

{% apirequest %}

```json
{
  "url": "https://api.adityabirlacapital.com/cmnsrv/abc/insert-abc-userid",
  "method": "POST",
  "body": {
    "ABCUserID": "{{abcuserid}}",
    "LOB": "FL",
    "UserType": "I",
    "LobRegisteredDate": null,
    "Source": "MF"
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
      "description": "Return Code as '1' for successful service call. <Please Refer Below Return Code list>"
    },
    "ReturnMessage": {
      "type": "string",
      "required": true,
      "description": "Return Message as 'User Registered successfully' for successful service call."
    }
  }
}
```

{% /responseparameters %}

{% response %}

```json
{
  "ReturnCode": "1",
  "ReturnMessage": "UserName inserted successfully."
}
```

{% /response %}
{% /grid %}
