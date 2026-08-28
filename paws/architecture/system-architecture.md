# System Architecture

The PAWS system combines field sensors, edge processing, long-range communication, AI wildlife detection, backend services, risk assessment, and the PAWS dashboard.

## Architecture Diagram

![PAWS System Architecture](/architecture/paws-system-architecture.png)

## Architecture Overview

PAWS collects information from field environments and processes it through a combination of edge devices, communication services, AI models, backend services, and the operational dashboard.

### Main Components

- **Raspberry Pi 5** — coordinates field sensors and edge processing.
- **GPS Module** — provides location coordinates.
- **Camera** — captures wildlife images.
- **Radar Sensor** — provides water-level readings.
- **YOLOv8** — performs wildlife identification and classification.
- **LoRa** — provides long-range communication from field devices.
- **LoRa Gateway** — receives field data packets.
- **ESP32** — receives LoRa data and forwards processed data.
- **MQTT Broker** — publishes and distributes live data.
- **Risk Assessment & Alert Engine** — evaluates incoming information and produces conflict-risk alerts.
- **Database** — stores processed data and conflict information.
- **PAWS Dashboard** — presents alerts and operational information to users.

## Data Flow

1. Field sensors collect environmental and wildlife information.
2. The Raspberry Pi 5 processes the incoming field data.
3. Images are sent to the wildlife identification and classification service.
4. Classified wildlife information is returned to the field system.
5. Processed data is transmitted using LoRa.
6. The LoRa Gateway receives the field packet.
7. The ESP32 receives the packet and forwards the processed data.
8. Wi-Fi is used to transmit the processed data.
9. MQTT publishes the live data.
10. The risk assessment and alert engine evaluates the available information.
11. Processed data is stored in the database.
12. The PAWS dashboard receives and displays alerts to field operators.

## Related Documentation

- [Data Flow](./data-flow)
- [Field Station](./field-station)
- [HQ Infrastructure](./hq)
- [Software Architecture Document](./sad)
- [Cybersecurity SAD](./cybersecurity-sad)