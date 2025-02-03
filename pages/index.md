---
title: GenerateSSOToken
---

# {% $markdoc.frontmatter.title %}

## Introduction

{% callout %}
Purpose of this API is to generate the user token for single sign on (SSO) for ABC and linked LOBs for the User.
[test-link](https://url-here.org)
{% /callout %}

### Request Body

{% jsonschema   %}

```json
{
  "title": "Special Event",
  "properties": {
    "CIINo": {
      "type": "text",
      "required": "true",
      "description": "The user's CIINo."
    },
    "LOBId": {
      "type": "text",
      "required": "true",
      "description": "The ID of the line of business."
    },
    "Functionality": {
      "type": "text",
      "required": "true",
      "description": "The functionality for which the SSO token is being generated"
    }
  }
}
```

{% /jsonschema %}

### Sample Request

```json
{
  "CIINo": "10001XXX",
  "LOBId": "XX",
  "Functionality": "D"
}
```

### Request Headers

{% jsonlist %}

```json
{
  "x-api-version": "1.0.0",
  "x-lob-client-id": "1RrLMyLrZGA=",
  "Content-Type": "application/json",
  "Authorization": "eyJraWQiOiJLY2NMeklBY3RhY0R5TWxHVmFVTm52XC9xR3FlQjd2cnNwSWF3a0Z0M21ZND0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIzbXUzOXZ1cTJhYmdyMmhkaDlsZGNxMzUyOSI"
}
```

{% /jsonlist %}

### Error Codes

{% customtable %}

```json
{
  "headers": ["Sl. No", "Description", "Response Status Code"],
  "rows": [
    ["1", "Everything worked as expected.", "200 Success"],
    [
      "2",
      "Getting the error if the incoming Cognito token has expired in the API.",
      "401 Unauthorized"
    ],
    [
      "3",
      "Getting the error if the ‘Authorization’ field is not included in the headers of the API.",
      "401 Unauthorized"
    ],
    [
      "4",
      "Getting the error if the entered Cognito token is incorrect / incorrect signature / mismatched issuer / blank in the API.",
      "401 Unauthorized"
    ],
    [
      "5",
      "Getting the error if the token lacks the required permissions / correct credential configuration for specific APIs.",
      "403 Forbidden"
    ],
    [
      "6",
      "Getting the error if the server is unable to provide the response (It may be IP restricted or the domain may be incorrect).",
      "406 Not Acceptable"
    ],
    [
      "7",
      "Getting the error if the ‘x-lob-client-id’, ‘Content-Type’, ‘x-api-version’ field is not included in the header of the API.",
      "400 Bad Request"
    ],
    ["8", "Internal Server Error", "502 Bad Gateway"],
    ["9", "Timed out", "504 Gateway Timed Out"]
  ]
}
```

{% /customtable %}

### Sample Response

```json
{
  "ReturnCode": "1",
  "ReturnMessage": "Token Generated successfully",
  "TokenRefNo": "173736XX8685878",
  "TokenNo": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJDSUlObyI6IjEwMDAxMDA0IiwiTE9CSWQiOiIwMSIsIkZ1bmN0aW9uYWxpdHkiOiJEIiwiRGF0ZSI6IjIwMjUtMDEtMjBUMDg6NDk6NDYuNzU2WiIsImlhdCI6MTczNzM2Mjk4NiwiZXhwIjoxNzM3MzY2NTg2fQ.19jRSvaXzRBo0CUFx-Fv20Sl_k"
}
```
