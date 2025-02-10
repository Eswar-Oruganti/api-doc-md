### GetDetailsByCIINo

This method is used to verify the ABC login Id created for LOB in ABC auth database.

&nbsp;

{% grid %}

{% parameters %}

```json
{
  "properties": {
    "CIINO": {
      "type": "AM(80)",
      "required": true,
      "description": "Please pass CII number"
    }
  }
}
```

{% /parameters %}

{% apirequest %}

```json
{
  "url": "https://api.adityabirlacapital.com/cmnsrv/abc/get-cii-details",
  "method": "POST",
  "body": {
    "CIINo": "10203696"
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
      "description": "Return Message as 'data retrieved successfully' for successful service call.",
      "required": true
    },
    "CustomerName": {
      "type": "string",
      "description": "Registered customer name.",
      "required": true
    },
    "EmailID": {
      "type": "string",
      "description": "Registered Email ID.",
      "required": "conditional"
    },
    "MobileNo": {
      "type": "string",
      "description": "Registered Mobile Number.",
      "required": "conditional"
    },
    "linkedLobs": {
      "type": "array",
      "description": "List of linked LOBs mapped against given CII number.",
      "required": "conditional"
    },
    "UserName": {
      "type": "string",
      "description": "Registered user name.",
      "required": true
    },
    "CustomerShortName": {
      "type": "string",
      "description": "Short name generated from customer name.",
      "required": true
    },
    "LastLoginDateTime": {
      "type": "string",
      "description": "Last login Date time.",
      "required": "conditional"
    }
  }
}
```

{% /responseparameters %}

{% response %}
{
"ReturnCode": "1",
"ReturnMessage": "Record retrived successfully",
"MobileNo": "9930315628",
"EmailId": "PramodKumar.Yadav@adityabirlacapital.commm",
"LastLoginDateTime": null,
"UserName": "cmg@indv",
"CustomerName": "Shashikant vishwakarma",
"CustomerShortName": "AB",
"LobName": "MF",
"linkedLobs": [
{
"LOBName": "MF",
"LOBCode": "01",
"LOBDescription": "Mutual Fund"
},
{
"LOBName": "LI",
"LOBCode": "02",
"LOBDescription": "Life Insurance"
},
{
"LOBName": "FL",
"LOBCode": "03",
"LOBDescription": "Personal Finance"
},
{
"LOBName": "HL",
"LOBCode": "04",
"LOBDescription": "Home Finance"
},
{
"LOBName": "IBM",
"LOBCode": "05",
"LOBDescription": "Insurance Brokers Motor"
},
{
"LOBName": "WM",
"LOBCode": "07",
"LOBDescription": "Wealth Management"
},
{
"LOBName": "ABML",
"LOBCode": "24",
"LOBDescription": "Aditya Birla Money Limited"
},
{
"LOBName": "ABCD",
"LOBCode": "25",
"LOBDescription": "ABCD Super App"
}
]
}

{% /response %}

{% /grid %}
