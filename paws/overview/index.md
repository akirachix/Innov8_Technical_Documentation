# PAWS — Predictive Alert & Wildlife Sentinel

**A conservation intelligence system for the Maasai Mara, Kenya**

---

## 1. What Is PAWS?

PAWS helps conservation teams stop lion attacks on livestock *before they happen* — by watching what leads up to them, not just reacting after the fact.

Here's the problem it's built to solve:

> **Drought** → water sources dry up → wildlife and livestock crowd around the few that remain → lions and livestock end up at the same water pan → predation becomes more likely → livestock are lost → herders retaliate against the lions.

PAWS is designed to interrupt that chain early. It watches water levels, animal activity, and individual lion health around key water sources, and combines that with historical conflict data to flag *where* trouble is most likely to happen — while there's still time to act.

**In one sentence:** PAWS spots the danger building up, before the conflict starts.

**Why this matters, in numbers:** African lion populations have fallen by more than 40% over the past two decades, with the roughly 20,000 individuals left now confined to just 8% of their historical range. Kenya's own lion population fell from an estimated 7,000 in the early 1990s to just over 2,000 by 2009 — a drop of more than 70% in under twenty years. Retaliatory killing after livestock attacks is one of the most direct and preventable drivers of that decline, and the underlying research behind PAWS found that drought-driven convergence at shared water points is a major, underexplored trigger for exactly that cycle.

---

## 2. Who Uses PAWS?

| User | What they do |
|---|---|
| **Ranger / field officer** | Covers a large, often remote area with patchy phone signal. PAWS gives them early warnings, a location, details on the animals involved, and a clear next step to take. |
| **HQ dispatcher** | Watches the main dashboard, tracks water pans and alerts, looks up lion profiles, and coordinates rangers and water trucks in response. |
| **Others (future)** | Conservation managers, ranger patrol teams, water-truck operators, vets, and partner organisations can also plug into the system. |

*(Exactly what each role is allowed to see or do still needs to be defined once the login system is built.)*

---

## 3. The Big Picture: How It Works

Think of PAWS as a relay race with four legs:

1. **Out in the field** — a solar-powered station sits by a water pan. It watches the water level and uses a camera to spot animals.
2. **A smart first read** — instead of sending raw video anywhere, a small onboard computer looks at the images itself: is that a lion? Which lion? How does it look, health-wise?
3. **A long-distance whisper** — the station sends a tiny, low-power radio signal (no SIM card, no cell tower needed) back to HQ, up to roughly 15 km away.
4. **HQ turns data into action** — HQ receives the signal, stores it, works out the risk level, and shows it on a live dashboard so a dispatcher can send help.

```
Water pan (field)  →  Onboard camera + AI  →  Long-range radio (LoRa)
      →  HQ receiver  →  Database  →  Risk calculation  →  Dashboard  →  Ranger / water truck
```

---

## 4. What's Physically Out in the Field

Each field station is a small, self-contained, solar-powered box near a water pan. It contains:

- A **camera** (to see animals)
- A **water sensor** (ultrasonic, to measure water level)
- A **motion/activity sensor** (to notice when something's moving nearby)
- A **small onboard computer** (Raspberry Pi 5) that runs the AI
- A **radio chip** (ESP32 + SX1262) that sends data back to HQ
- A **GPS module**, **battery**, and **solar panel** to keep it running independently

Nothing here needs a phone line or internet connection — that's deliberate, since these areas often don't have reliable signal.

---

## 5. From Camera to Alert: How the AI "Thinks"

Rather than shipping every photo across a slow radio link, the field station does most of the thinking on the spot, then sends home only a short summary. The process looks like this:

1. Something triggers the sensor → the camera takes a photo
2. The system checks the photo is actually usable (not blurry, dark, or badly angled) — bad images are thrown out here
3. It detects whether an animal is present, and what species
4. If it's a lion, it tries to identify *which* lion
5. It assesses that lion's visible body condition (thin? injured? limping?)
6. All of this gets boiled down into a small data packet
7. That packet — not the photo — is what gets radioed back to HQ

**How lions are identified:** not just by whisker-spot patterns (the classic method), but a combination of whisker spots, facial scars, ear notches, mane shape and colour, and general body size and shape.

**How health is assessed:** the system looks at several images from a visit (not just one), checking things like rib visibility, hip/spine prominence, posture, limping, wounds, and swelling — to judge whether a lion looks vulnerable enough that it might be more likely to target livestock.

⚠️ **Important limitation:** the AI can be thrown off by poor light, rain, dust, blur, obstructions, or lions it's never seen before. Its output is meant to *support* a human decision, not replace one — PAWS is not designed to trigger any irreversible wildlife-management action on its own.

---

## 6. How Field Data Reaches HQ

Two technologies do the heavy lifting here — both worth understanding even if you're not the one implementing them:

**LoRa (Long Range radio)**
A low-power radio link that can carry small amounts of data roughly 15 km, without needing cell service. Think of it as a very long-range, very low-bandwidth walkie-talkie for data.

```
Field radio chip → (radio waves, ~15 km) → HQ radio chip → HQ's local network
```

**MQTT (a messaging system)**
Once data lands at HQ, it's dropped into MQTT — a lightweight "message board" system. Different HQ services (the database, the dashboard) subscribe to this board and pick up new messages as they arrive, rather than constantly asking "anything new yet?"

```
HQ gateway publishes a message → MQTT message board → picked up by: (1) the database service, (2) the live dashboard
```

*(The exact broker software, security settings, and message-retry rules still need to be finalised and documented from the actual build.)*

---

## 7. The Backend: Turning Messages into Meaning

The backend (built in Node.js) is the "engine room." Its job, step by step:

1. Pick up the incoming message from MQTT
2. Check it's valid and well-formed
3. Reshape it into the format the database expects
4. Save it
5. Feed it into the risk calculation
6. Make it available to the dashboard

Data is stored in **PostgreSQL** (a standard relational database) with the **PostGIS** extension, which adds the ability to store and query *locations* — essential for a system built around specific water pans and GPS coordinates.

*(Full API documentation, authentication method, and error-handling conventions need to be written up from the actual codebase — templates for how to document them are included at the end of the full technical appendix.)*

---

## 8. The Dashboard (What the Dispatcher Sees)

The dashboard is the mission control screen at HQ. As new data streams in over MQTT, it updates in real time to show:

- Live status of every water pan
- Animal detections
- Individual lion profiles
- Historical trends
- Risk zones on a map
- Active alerts
- Suggested actions (e.g. "send water truck," "dispatch ranger")

**Suggested layout:**
```
Overview · Live Map · Alerts · Water Pans · Wildlife (Lions / Livestock / Other)
Lion Profiles · Water Trends · Dispatches · Historical Events · System Health
```

For anyone building the frontend: keep three kinds of data cleanly separated —
- **Server data** (comes from the API/database — the source of truth)
- **UI state** (what's selected, which panel is open — lives only in the browser)
- **Calculated data** (like "current risk score" — worked out *from* the other two, never stored as if it were original data)

---

## 9. How Risk Is Calculated

The risk score isn't based on any single signal — it's a combination of:

Water scarcity + wildlife presence + livestock presence + which lion it is + pride information + body condition + injuries + past conflict history + how much natural prey is around

The goal is to move from a simple observation like *"a lion is at the water pan"* to a much more useful one: *"a vulnerable lion or pride is at a water source where livestock are likely to converge."* That distinction is what lets a dispatcher prioritise the truly urgent cases.

---

## 10. Alerts and What Happens Next

| Level | Trigger | Response |
|---|---|---|
| 🟡 **Amber** | A water source is becoming dominant in the area + there's been recent lion activity nearby | Monitor closely, prepare, and try to create spatial separation between wildlife and livestock before things escalate |
| 🔴 **Red** | A lion and livestock are at the same water pan, or a high-risk injured lion is nearby | Immediate ranger dispatch |

Importantly, a ranger's job on a Red alert is **not** to remove the lion. The intended approach is to create a human presence between the pride and the livestock and use non-lethal methods to encourage the lions to move on naturally.

If water scarcity is driving the risk, PAWS can also flag a **water-truck dispatch** to redistribute water and ease pressure on the danger zone. The truck carries a flow meter (accurate to about ±2%) so the amount delivered is logged.

---

## 11. Keeping the System Secure

PAWS handles genuinely sensitive information — wildlife and ranger locations, patrol plans, dispatch details, and login credentials. Ground rules:

- **Never commit secrets** (API keys, passwords, tokens) to the code repository — use an `.env.example` file that lists *what's needed* without the actual values
- **Every field station has its own unique device identity**, with a clear process for registering, updating, and (if needed) revoking a device
- **Database accounts should have only the access they need** — admin access is kept separate from what the running application uses
- **Important actions get logged**: who did what, when, to what, and why — especially for anything touching alerts or dispatches

---

## 12. For Developers: Getting the Project Running

**You'll generally need**, depending on which part you're working on: Node.js, PostgreSQL with PostGIS, an MQTT broker, and (for hardware work) a Raspberry Pi and ESP32 development setup. Exact versions should be confirmed against the repository's own setup files.

**Basic steps:**
1. Clone the repository
2. Install dependencies using the project's package manager
3. Copy `.env.example` to `.env` and fill in real values (database URL, MQTT credentials, model path, etc.)
4. Start PostgreSQL and make sure the PostGIS extension is enabled
5. Run the project's migration command to set up database tables
6. Load seed/test data
7. Start the backend, frontend, MQTT broker, and any background workers

**How to know it's working:** send or simulate a piece of test telemetry, and confirm you can trace it through MQTT → backend logs → the database → and finally see it appear on the dashboard. As a final check, trigger a test alert and create a test dispatch.

---

## 13. Testing the System End-to-End

Because PAWS spans hardware, AI, and software, testing has to cover the whole chain, not just the app:

```
Hardware → Firmware → Edge AI → LoRa → MQTT → Backend → Database → Risk engine → Dashboard → Dispatch
```

A good minimum test run simulates the full story: water drops → a lion is detected and identified → its health is assessed → livestock shows up too → risk rises → an alert fires → it appears on the dashboard → a dispatcher creates a ranger dispatch → the ranger reports back → (if needed) a water truck is sent and logged → risk is recalculated → the whole episode is saved to history.

Also worth testing deliberately: bad-quality or unusual images (blurry, dark, partial, rainy, dusty, unfamiliar lion), and hardware resilience (battery life, solar charging, signal loss, MQTT reconnecting after a drop).

---

## 14. Troubleshooting Quick Reference

| Symptom | Where to look |
|---|---|
| No telemetry from a field station | Battery → solar controller → Raspberry Pi → ESP32 → radio chip → antenna → firmware/config, in that order |
| Radio works, but HQ gets nothing | Trace the signal step by step: field radio → HQ radio → HQ's gateway computer → HQ Wi-Fi → MQTT — find where it actually stops |
| MQTT has the message, but the database doesn't update | Check the backend's message listener → validation step → database connection → save step |
| Dashboard looks stale | Check the live connection, the MQTT listener, frontend state, and backend logs, in that order |
| AI is rejecting images | Check focus, lighting, camera angle, and confidence thresholds — remember, this rejection is intentional quality control, not a bug |

---

## 15. What's Still Missing or Needs Confirming

To be upfront: several pieces of this system exist as a *plan*, not yet as *documented, finished implementation*. These need to be filled in from the real codebase before this can be treated as complete, finished reference documentation:

- ~~API endpoint specification~~ — now confirmed from the project's Postman test collections; see **Appendix A** below. (This still needs cross-checking against the live codebase before being treated as fully authoritative — Postman tests capture intended behaviour, not guaranteed production behaviour.)
- Authentication & authorization design *(partially confirmed — see Appendix A: login is email + password, returning a bearer token; role-based permissions still undefined)*
- Finalised database schema, ERD, and table definitions
- Frontend repository structure
- A dedicated mobile app (currently, only a third-party tool called CyberTracker is used for historical observations)
- AI training data, accuracy metrics, and model version numbers
- Full security architecture review
- CI/CD pipeline
- Code formatting/linting setup and Git conventions
- Production environment details
- Approved brand/UI guidelines and Figma links (a Figma "Innov8 User Flow" file already exists and should be linked once published)

None of these gaps are guesses to be filled with invented numbers — they're flagged so the next person knows exactly what to go verify.

---

## 16. Glossary

| Term | Meaning |
|---|---|
| **Edge AI** | Running the AI analysis right at the field device, instead of sending raw data elsewhere first |
| **LoRa** | Long-Range radio — a low-power way to send small amounts of data over long distances without cell service |
| **MQTT** | A lightweight messaging system used to pass data between services |
| **PostGIS** | An add-on for PostgreSQL that lets it store and search location/mapping data |
| **BCS** | Body Condition Score — a way of rating an animal's physical health from its appearance |
| **Telemetry** | Data sent back automatically from a remote device |
| **Water pan** | A natural or man-made water source that PAWS monitors |
| **Convergence point** | A place where wildlife and livestock are increasingly likely to end up together |
| **Dispatch** | Sending a ranger or water truck to respond to a situation |
| **Pride** | A social group of lions |
| **Retaliatory killing** | Wildlife being killed in response to livestock loss — the outcome PAWS is ultimately trying to prevent |

---

## Appendix A: API Reference (Confirmed from the Postman Test Collections)

This fills in the gap flagged in Section 15. It's built directly from the project's own Postman collections (`Pride_Lion_Lion-detection`, `alerts_intervention`, `Ranger_rangerpost collection`) — real endpoints, real request/response shapes — not the placeholder template from the original spec. It should still be cross-checked against the live backend before being treated as the final source of truth, and gaps are called out explicitly rather than guessed at.

### Authentication

`POST /auth/login`

Body:
```json
{
  "email": "user@example.com",
  "password": "your-password"
}
```

Response (200):
```json
{
  "access_token": "<token>",
  "token_type": "bearer"
}
```

This is a standard email + password login returning a bearer token, presumably attached to later requests as `Authorization: Bearer <token>`. **Not yet confirmed:** which endpoints require this token, what the token contains, how long it lasts, and what roles/permissions exist behind it — none of that is visible from the test collection.

### Prides

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/pride/{pride_id}` | Get one pride |
| GET | `/pride/?skip=0&limit=1` | List prides (paginated) |
| POST | `/pride/` | Create a pride |
| PUT | `/pride/{pride_id}` | Update a pride |

Pride object: `{ "pride_id": <int>, "pride_name": <string> }`

### Lions

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/lion/{lion_id}` | Get one lion |
| GET | `/lion/?skip=0&limit=100` | List lions (paginated) |
| POST | `/lion/` | Create a lion |
| PATCH | `/lion/{lion_id}` | Partially update a lion |
| DELETE | `/lion/{lion_id}` | Delete a lion |

Lion object:
```json
{
  "lion_id": 325,
  "pride_id": 1983,
  "name": "string",
  "gender": "male | female",
  "health_status": "e.g. \"injured\", \"sick\", \"ideal\"",
  "whisker_pattern": "string",
  "body_condition": "e.g. \"ideal\""
}
```
`health_status` and `body_condition` appear to be free-text/enum-like fields in the test data — the actual allowed values need confirming from the backend model, not guessed from a handful of test examples.

### Lion Detections

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/lion-detection/{detection_id}` | Get one detection |
| GET | `/lion-detection/?skip=0&limit=100` | List detections |
| POST | `/lion-detection/` | Log a new detection |
| PUT | `/lion-detection/{detection_id}` | Update a detection |

Detection object: `{ "detection_id": <int>, "lion_id": <int>, "water_pan_id": <int>, "detection_time": "<ISO 8601 timestamp>", "behaviour": "string" }`

### Alerts

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/alert/{alert_id}` | Get one alert |
| GET | `/alert?skip=&limit=` | List alerts (paginated) |
| POST | `/alert/` | Create an alert |
| PUT | `/alert/{alert_id}` | Update an alert |
| DELETE | `/alert/{alert_id}` | Delete an alert |

Alert object: `{ "alert_id": <int>, "risk_id": <int>, "alert_type": "string", "status": "e.g. \"pending\", \"in progress\"" }`

Note: `risk_id` implies alerts link back to a separate risk-assessment record, but no risk endpoints appear in these collections — worth checking whether that lives in a different service or collection.

### Interventions

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/intervention/{intervention_id}` | Get one intervention |
| GET | `/intervention/?skip=0&limit=100` | List interventions |
| POST | `/intervention/` | Log an intervention |
| PUT | `/intervention/{intervention_id}` | Update an intervention |
| DELETE | `/intervention/{intervention_id}` | Delete an intervention |

Intervention object: `{ "intervention_id": <int>, "ranger_id": <int>, "alert_id": <int>, "type": "string", "logged_at": "<ISO 8601 timestamp, server-set>" }`

The test suite specifically checks that a client **cannot** set `logged_at` manually on creation — the server sets it. Good sign this is treated as an audit timestamp, worth preserving as a documented rule rather than an implementation accident.

### Rangers & Ranger Posts

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/ranger/` | Get ranger(s) |
| POST | `/ranger/` | Create a ranger |
| PUT | *(needs fixing — see below)* | Update a ranger |
| DELETE | `/ranger/{ranger_id}` | Delete a ranger |
| GET | `/ranger-post/?skip=0&limit=100` | List ranger posts |
| POST | `/ranger-post/` | Create a ranger post |
| PUT | `/ranger-post/{ranger_post_id}` | Update a ranger post |
| DELETE | `/ranger-post/{ranger_post_id}` | Delete a ranger post |

Ranger object: `{ "ranger_id": <int>, "first_name": "string", "last_name": "string", "ranger_email": "string", "ranger_post_id": <int|null> }`

Ranger post object: `{ "ranger_post_id": <int>, "latitude": <number>, "longitude": <number>, "status": "e.g. \"Active\", \"Inactive\"" }`

⚠️ **Worth flagging back to the team:** the "Update Ranger" request in the collection is pointed at `http://0.0.0.0:8000/docs#/Ranger/21` — that's a Swagger docs URL, not a real API endpoint, so it looks like a copy-paste error in the test rather than a documented behaviour. The real update route is presumably `PUT /ranger/{ranger_id}`, matching the pattern of every other resource, but that should be confirmed and the test collection fixed.

### General patterns across all resources

- List endpoints use `skip` and `limit` query parameters for pagination.
- Validation errors return `422` with a `detail` array (standard FastAPI validation error shape) — consistent with the backend being Python/FastAPI.
- Delete endpoints are tested for double-delete and not-found cases, returning distinct results for each — worth documenting the actual status codes once confirmed (likely `404` on a repeat delete).

---

*This is a plain-language rewrite of the original PAWS technical documentation, reorganised for a first-time reader, now with a real API reference drawn from the project's Postman tests. Sections still requiring verification against the actual repository (schema, credentials, full auth/role design, etc.) are flagged rather than invented — see Section 15.*