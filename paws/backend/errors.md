# Errors & Logging

## Error handling

Errors should be predictable and actionable.

Document the actual status-code convention used by the API.

Common HTTP categories include:

| Code | Meaning |
|---|---|
| 400 | Invalid request |
| 401 | Unauthenticated |
| 403 | Forbidden |
| 404 | Resource not found |
| 409 | Conflict |
| 422 | Validation error, if used |
| 429 | Rate limited |
| 500 | Unexpected server error |
| 503 | Dependency unavailable |

## Logging

Production logs should allow an engineer to identify:

- what happened
- when it happened
- where it happened
- which request/device caused it
- the resulting error or state

Never log secrets or authentication credentials.

