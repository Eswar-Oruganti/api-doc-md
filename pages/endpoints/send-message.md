#### SendMessage

This method is used to Send Message to WhatsApp through the GupShup API.

{% grid %}

{% parameters %}

```json
{
  "properties": {
    "ClientIPAddress": {
      "type": "string",
      "maxLength": 50,
      "description": "Please pass IP Address of client machine/device (optional field).",
      "required": false
    },
    "Method": {
      "type": "string",
      "maxLength": 30,
      "description": "Value can be SendMessage / SendMediaMessage. Method for performing a specific action i.e. send a text message or send a media message.",
      "required": true
    },
    "Message": {
      "type": "string",
      "maxLength": "unlimited",
      "description": "Text that needs to be sent on mobile handset. Text should be URL encoded.",
      "required": true
    },
    "MsgType": {
      "type": "string",
      "maxLength": 30,
      "description": "Indicates the type of the message to be sent on WhatsApp. For DATA_TEXT and HSM (Highly Structured Message), use method=SENDMESSAGE. For AUDIO, DOCUMENT, and IMAGE, use method=SENDMEDIAMESSAGE.",
      "required": true
    },
    "MsgToBeSentVia": {
      "type": "string",
      "maxLength": 3,
      "description": "1 - WhatsAppOnly, 2 - SMSOnly, 3 - Both, 4 - SMS When WhatsApp Fails.",
      "required": true
    },
    "MobileNumber": {
      "type": "string",
      "maxLength": 20,
      "description": "Mobile number of the customer to whom the message will be sent.",
      "required": true
    },
    "SMSUserId": {
      "type": "string",
      "maxLength": 100,
      "description": "ID through which SMS will be sent.",
      "required": true
    },
    "SMSPassword": {
      "type": "string",
      "maxLength": 200,
      "description": "Password for SMS.",
      "required": true
    },
    "GupShupUserId": {
      "type": "string",
      "maxLength": 50,
      "description": "User ID for calling GupShup API.",
      "required": true
    },
    "GupShupPassword": {
      "type": "string",
      "maxLength": 100,
      "description": "Password for calling GupShup API.",
      "required": true
    },
    "LobId": {
      "type": "string",
      "maxLength": 5,
      "description": "Domain for sending message will be as per the Lob ID.",
      "required": true
    }
  }
}
```

{% /parameters %}

{% apirequest %}

```json
{
  "url": "https://api.adityabirlacapital.com/cmnsrv/abc-micro/send-message",
  "method": "POST",
  "body": {
    "Method": "SendMessage",
    "Message": "Thank you for choosing Aditya Birla Sun Life Insurance. We have received your application abc1 for processing.You can now track the status of your Application abc1 on xyz1",
    "MsgType": "Text",
    "MsgToBeSentVia": "1",
    "MobileNumber": "9994767653",
    "ClientIPAddress": "1.0.0.1",
    "SMSUserId": "2000180532",
    "SMSPassword": "LVEXe1olksw=",
    "GupShupUserId": "2000181681",
    "GupShupPassword": "28c7M4",
    "LobId": "20"
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
      "type": "Varchar(30)",
      "required": "M",
      "description": "Return Code as '1' for successful service call."
    },
    "ReturnMessage": {
      "type": "Varchar(MAX)",
      "required": "M",
      "description": "success | 919994767653 | 5364973993480663255-554363070986075088\n"
    }
  }
}
```

{% /responseparameters %}
{% response %}

```json
{
  "ReturnCode": "success | 919994767653 | 5364568525174681646-68059411000873634\n",
  "ReturnMessage": "1"
}
```

{% /response %}
{% /grid %}
