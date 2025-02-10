---
title: GenerateSSOToken
---

# {% $markdoc.frontmatter.title %}

{% callout %}
Purpose of this API is to generate the user token for single sign on (SSO) for ABC and linked LOBs for the User.
[test-link](https://url-here.org)
{% /callout %}

{% grid %}

{% parameters title="attributes" %}

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

{% /parameters %}

{% block %}

{% apirequest %}

```js
fetch("https://api.example.com/v2/get_sso_token", {
  method: "POST",
  headers: {
    x-api-version: "1.0.0",
    x-lob-client-id: "1RrLMyLrZGA=",
    Content-Type: "application/json",
    Authorization: "dlfldfjadlka",
  },
  body: JSON.stringify({
    CIINo: "10001XXX",
    LOBId: "XX",
    Functionality: "D",
  }),
});
```

```curl

 curl -X POST "https://api.example.com/v2/get_sso_token" \\
    -H "x-api-version: 1.0.0" \\
    -H "x-lob-client-id: 1RrLMyLrZGA=" \\
    -H "Content-Type: application/json" \\
    -H "Authorization: Bearer YOUR_TOKEN" \\
    -d '{
      "CIINo": "10001XXX",
      "LOBId": "XX",
      "Functionality": "D"
    }'

```

{% /apirequest %}

{% response %}

{
"ReturnCode": 1,
"ReturnMessage": "Token Generated successfully",
"TokenRefNo": "173736XX8685878",
"TokenNo": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJDSUlObyI6IjEwMDAxMDA0IiwiTE9CSWQiOiIwMSIsIkZ1bmN0aW9uYWxpdHkiOiJEIiwiRGF0ZSI6IjIwMjUtMDEtMjBUMDg6NDk6NDYuNzU2WiIsImlhdCI6MTczNzM2Mjk4NiwiZXhwIjoxNzM3MzY2NTg2fQ.19jRSvaXzRBo0CUFx-Fv20Sl_k",
"test" : {
"ReturnCode": 1,
"ReturnMessage": "Token Generated successfully",
"TokenRefNo": "173736XX8685878",
"TokenNo": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
}
}

{% /response %}

{% /block %}

{% /grid %}

### Errors

{% customtable %}

```json
{
  "headers": ["Description", "Response Status Code"],
  "rows": [
    ["Everything worked as expected.", "200 Success"],
    [
      "Getting the error if the incoming Cognito token has expired in the API.",
      "401 Unauthorized"
    ],
    [
      "Getting the error if the ‘Authorization’ field is not included in the headers of the API.",
      "401 Unauthorized"
    ],
    [
      "Getting the error if the entered Cognito token is incorrect / incorrect signature / mismatched issuer / blank in the API.",
      "401 Unauthorized"
    ],
    [
      "Getting the error if the token lacks the required permissions / correct credential configuration for specific APIs.",
      "403 Forbidden"
    ],
    [
      "Getting the error if the server is unable to provide the response (It may be IP restricted or the domain may be incorrect).",
      "406 Not Acceptable"
    ],
    [
      "Getting the error if the ‘x-lob-client-id’, ‘Content-Type’, ‘x-api-version’ field is not included in the header of the API.",
      "400 Bad Request"
    ],
    ["Internal Server Error", "502 Bad Gateway"],
    ["Timed out", "504 Gateway Timed Out"]
  ]
}
```

{% /customtable %}
