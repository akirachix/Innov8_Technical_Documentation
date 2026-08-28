# Backend

The backend connects field telemetry and application clients to persistent PAWS data and operational logic.
The dashboard is the mission control screen at HQ. As new data streams in over MQTT, it updates in real time to show:

Live status of every water pan
Animal detections
Individual lion profiles
Historical trends
Risk zones on a map
Active alerts
Suggested actions (e.g. “send water truck,” “dispatch ranger”)

Suggested layout:



Building the frontend: three kinds of data cleanly separated were kept in mind:

Server data (comes from the API/database: the source of truth)
UI state (what’s selected, which panel is open:  lives only in the browser)
Calculated data (like “current risk score” : worked out from the other two, never stored as if it were original data)

## How Risk Is Calculated
The risk score isn’t based on any single signal but it’s a combination of:
Water scarcity
wildlife presence
livestock presence
which lion it is
 pride information
body condition
injuries 
past conflict history 
The goal is to move from a simple observation like “a lion is at the water pan” to a much more useful one: “a vulnerable lion or pride is at a water source where livestock are likely to converge.” That distinction is what lets a dispatcher prioritise the truly urgent cases.


## Responsibilities

- telemetry ingestion
- validation
- transformation
- persistence
- API access
- risk/alert processing
- operational records
- authentication/authorization integration
- logging



