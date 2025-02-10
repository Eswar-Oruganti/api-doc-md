#### GetCIINo

This method is used to get the new CII for registration which is not available in ABC system.

{% grid %}
{% apirequest %}

```json
{
  "url": "https://api.adityabirlacapital.com/cmnsrv/cii/get-ciino",
  "method": "POST"
}
```

{% /apirequest %}
{% /grid %}

{% grid %}
{% responseparameters %}

```json
{
  "properties": {
    "ReturnCode": {
      "type": "string",
      "maxLength": 30,
      "description": "Return Code as '1' for successful service call.",
      "required": true
    },
    "ReturnMessage": {
      "type": "string",
      "description": "Return Message as 'Record retrieved successfully.' for successful service call.",
      "required": true
    },
    "CIINo": {
      "type": "string",
      "maxLength": 50,
      "description": "New customer CII No.",
      "required": true
    }
  }
}
```

{% /responseparameters %}
{% response %}

```json
{
  "ReturnCode": "1",
  "ReturnMessage": "Record retrieved successfully",
  "CIINo": 10334504
}
```

{% /response %}
{% /grid %}
