# HQ Infrastructure

The HQ side receives field telemetry and makes it available to PAWS services.

```text
SX1262 receiver
      ↓
ESP32 gateway
      ↓
Local network
      ↓
MQTT broker
      ↓
Backend consumer
      ↓
PostgreSQL / PostGIS
      ↓
API / realtime layer
      ↓
Dashboard
```

**TODO / VERIFY:** add the actual broker, server, hosting, networking, and monitoring configuration.