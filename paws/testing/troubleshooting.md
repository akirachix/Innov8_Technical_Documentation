# Troubleshooting

Use this format for every known failure:

## Database connection failed

**Error**

```text
<actual error message>
```

**Cause**

`<actual cause>`

**Fix**

```bash
<actual fix>
```

**Verify**

`<verification step>`

---

## MQTT messages are not arriving

**Symptom:** `<VERIFY>`

Check the path:

```text
Field SX1262
 ↓
HQ SX1262
 ↓
ESP32 gateway
 ↓
Wi-Fi
 ↓
MQTT broker
 ↓
Backend consumer
```

Find the first layer where the message stops.

---

## Dashboard is stale

Check:

- backend/realtime service
- MQTT consumer
- API response
- browser console
- database freshness
- frontend state

---

## AI model will not load

Check:

- model path
- runtime dependencies
- supported hardware
- model file integrity
- memory availability
- version compatibility

**TODO / VERIFY:** replace these templates with real observed errors from the project.