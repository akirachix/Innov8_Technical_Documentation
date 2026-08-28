# API Reference

This section should become the authoritative API reference.

## Endpoint documentation standard

Every endpoint must document:

- method and URL
- purpose
- authentication
- authorization
- parameters
- request body
- validation
- response
- status codes
- errors
- examples
- pagination/filtering where applicable

## Example endpoint template

### `GET /api/v1/water-pans/{id}`

Returns information about a monitored water pan.

**Authentication:** `<VERIFY>`

**Path parameter**

| Name | Type | Required | Description |
|---|---|---:|---|
| `id` | UUID | Yes | Water pan identifier |

**Example request**

```bash
curl -H "Authorization: Bearer <token>" \
  https://<host>/api/v1/water-pans/<id>
```

**Example response**

```json
{
  "id": "<water-pan-id>",
  "name": "<water-pan-name>",
  "waterLevel": 42,
  "riskLevel": "amber"
}
```



