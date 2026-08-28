# Testing & QA

PAWS is a distributed system, so testing must cover both software and the field-to-HQ data path.

## Test layers

```text
End-to-end
    ↑
Integration
    ↑
Unit
    +
AI / Hardware validation
```

## Coverage

### Unit
Validation, calculations, risk transitions, permissions, and business rules.

### Integration
LoRa → gateway → MQTT → backend → database → API.

### Frontend
Routes, components, state transitions, error/loading states.

### AI
Detection, identification, health assessment, confidence thresholds, and difficult field conditions.

### Hardware
Power, sensors, camera, radio, gateway restart/recovery, network loss.

## End-to-end scenario

1. Water level decreases.
2. Wildlife is detected.
3. Livestock is detected.
4. Risk increases.
5. Alert appears.
6. Dispatcher creates a response.
7. Response outcome is recorded.
8. Water intervention is recorded where required.
9. Risk is recalculated.

