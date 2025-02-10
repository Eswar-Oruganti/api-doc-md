#### UpdateContactDetails

This method is used to updatecustomer’s contact details (Mobile number / Email Id) in ABC auth database.

{% grid %}

{% parameters %}

```json
{
  "properties": {
    "CIINo": {
      "type": "string",
      "maxLength": 20,
      "description": "Pass CII number.",
      "required": true
    },
    "EmailId": {
      "type": "string",
      "maxLength": 50,
      "description": "Customer email ID, mandatory if the customer wishes to update their email ID.",
      "required": "conditional"
    },
    "MobileNo": {
      "type": "string",
      "maxLength": 10,
      "description": "Customer mobile number, mandatory if the customer wishes to update their mobile number.",
      "required": "conditional"
    },
    "LOBNames": {
      "type": "string",
      "maxLength": 10,
      "description": "LOB name with pipe-separated values. Example formats: \n- BSLAMC&MF&1015226610 (For MF)\n- ABHIL&R&11-19-0000681-00 (For HI)\n- ABIBL&R&11078415 (For ABIBL)\n- BSLI&R&0010279020 (For LI)\n- ABFL&Mort&ABFLND_PL0000012766 (For FL)\n- ABHFL&R&LNAHM0HL-10170000088 (For HFL)",
      "required": true
    }
  }
}
```

{% /parameters %}

{% apirequest %}

```json
{
  "url": "https://api.adityabirlacapital.com/cmnsrv/abc/update-contact",
  "method": "POST",
  "body": {
    "CIINo": "10001022",
    "EmailId": "a@2.com",
    "MobileNo": "9090123456",
    "LobNames": "BSLI&R&000192508"
  }
}
```

{% /apirequest %}
{% /grid %}

{% space %}
{% /space %}

{% grid %}
{% responseparameters %}

```json
{
  "properties": {
    "ReturnCode": {
      "type": "string",
      "maxLength": 30,
      "description": "Return Code as '1' for a successful service call.",
      "required": true
    },
    "ReturnMsg": {
      "type": "string",
      "maxLength": "unlimited",
      "description": "Return Message as 'Email Id or Mobile number updated successfully' for a successful service call.",
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
  "ReturnMessage": "Record updated successfully."
}
```

{% /response %}
{% /grid %}
