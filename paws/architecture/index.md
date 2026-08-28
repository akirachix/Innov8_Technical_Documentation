## High-Level Architecture

PAWS combines field sensing, edge processing, AI-powered wildlife
identification, long-range communication, backend services, risk
assessment, and the user-facing application.

### Software Architecture Document

<img
  src="/paws-system-architecture.png
"
  alt="PAWS High-Level Software Architecture"
  style="width: 100%; max-width: 1600px; display: block; margin: 24px auto; border-radius: 12px;"
/>

The architecture shows how data moves from field devices through
edge processing and communication infrastructure into the PAWS
backend, database, risk assessment engine, and user applications.

### Main Components

- **Field Sensors** — collect wildlife, location, and environmental data.
- **Raspberry Pi 5** — performs edge processing.
- **Camera** — captures wildlife imagery.
- **YOLOv8** — identifies and classifies wildlife.
- **LoRa** — provides long-range field communication.
- **ESP32 / Gateway** — receives and forwards field data.
- **MQTT** — transports live system data.
- **Risk Assessment & Alert Engine** — evaluates potential conflict risk.
- **Database** — stores system and operational data.
- **PAWS Application** — presents information and alerts to users.