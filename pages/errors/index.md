### Errors

{% grid %}

{% customtable primary="Error Code" %}

```json
{
  "headers": ["Error Code", "Return Message"],
  "rows": [
    ["400", "Bad Request"],
    ["401", "Unauthorized"],
    ["403", "Forbidden"],
    ["404", "Not Found"],
    ["429", "Too Many Requests"],
    ["500", "Internal Server Error"],
    ["502", "Bad Gateway"],
    ["503", "Service Unavailable"],
    ["504", "Gateway Timed Out"],
    ["501", "Not Implemented"]
  ]
}
```

{% /customtable %}

{% /grid %}

{% space level=10 %}

{% /space %}

### Cognito Errors

{% grid %}

{% block %}

##### Errors in API using Cognito token

{% customtable primary="Error Code" %}

```json
{
  "headers": ["Error Code", "Return Message", "Scenario"],
  "rows": [
    [
      "401 ",
      "Unauthorized",
      "Getting the error if the incoming Cognito token has expired in the API."
    ],
    [
      "401",
      "Unauthorized",
      "Getting the error if the auth token field is not included in the headers of the API."
    ],
    [
      "401",
      "Unauthorized",
      "Getting the error if the entered Cognito token is incorrect / incorrect signature / mismatched issuer / blank in the API."
    ],
    [
      "403",
      "Forbidden",
      "Getting the error if the token lacks the required permissions / correct credential configuration for specific APIs."
    ],
    [
      "406 ",
      "Not Acceptable",
      "Getting the error if the server is unable to provide the response (It may be IP restricted or the domain may be incorrect)."
    ]
  ]
}
```

{% /customtable %}

{% /block %}

{% block %}

##### Errors responses getting in Cognito token

{% customtable primary="Error Code" %}

```json
{
  "headers": ["Error Code", "Return Message", "Scenario"],
  "rows": [
    [
      "400",
      "Bad Request",
      "Getting the error if the grant_type field is not included in the headers."
    ],
    [
      "400",
      "Bad Request",
      "Getting the error if the scope field is not included in the headers."
    ],
    [
      "400",
      "Bad Request",
      "Getting the error if the scope field is not included in the headers."
    ]
  ]
}
```

{% /customtable %}

{% /block %}

{% /grid %}
