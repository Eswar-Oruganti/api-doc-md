### MapLOBProduct

This method is used to map one LOB with Another LOB. This mapping will be store into ABC database.

&nbsp;

{% grid %}

{% parameters %}

```json
{
  "properties": {
    "CIINo": {
      "type": "string",
      "required": true,
      "description": "CII number to be mapped with LOB."
    },
    "LOBId": {
      "type": "string",
      "required": true,
      "description": "LOB code to be mapped."
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
    "CIINo": "11077003",
    "LOBId": "02"
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
    "ReturnMsg": {
      "type": "string",
      "required": true,
      "description": "Return Message as 'Record retrieved successfully' for successful service call."
    }
  }
}
```

{% /responseparameters %}

{% response %}

```json
{
  "ReturnCode": "1",
  "ReturnMessage": "Record updated successfully",
  "LoginId": "",
  "UDP": ""
}
```

{% /response %}
{% /grid %}
