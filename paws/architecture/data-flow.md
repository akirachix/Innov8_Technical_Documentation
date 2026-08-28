# Data Flow

A typical observation flows through PAWS as follows:

1. A field sensor or camera produces an observation.
2. Edge software validates and/or processes the observation.
3. A compact telemetry message is produced.
4. The field station transmits the message over LoRa.
5. The HQ gateway receives and decodes it.
6. The gateway publishes the message to MQTT.
7. A backend consumer validates and transforms the message.
8. The observation is persisted.
9. Spatial/risk processing uses the new information.
10. The dashboard receives updated operational information.
11. A dispatcher can initiate or record an intervention.

The exact message schema and topic names belong in the Backend/API and Integrations sections once verified against the code.