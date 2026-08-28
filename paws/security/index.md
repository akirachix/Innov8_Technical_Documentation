# Cybersecurity Software Architecture Document

## 1. Purpose

This document describes the cybersecurity architecture of PAWS and the controls used to protect the system, its users, devices, communications, and data.

## 2. Security Objectives

The security architecture addresses:

- Confidentiality
- Integrity
- Availability
- Authentication
- Authorisation
- Accountability

## 3. System Security Architecture


[PAWS Security System Architecture](/security.png)

## 4. Assets

Document the assets that require protection.

## 5. Trust Boundaries

Document the trust boundaries between:

- Field devices
- Communication infrastructure
- Backend services
- Database
- Web application
- Mobile application
- External services

## 6. Threat Model

Document identified threats, attack surfaces, likelihood, impact, and mitigations.

## 7. Authentication

Document the authentication mechanism actually implemented by PAWS.

## 8. Authorisation

Document roles, permissions, and access-control rules actually implemented.

## 9. Data Protection

Document how PAWS protects data:

- In transit
- At rest
- During processing

## 10. Device Security

Document security controls applied to:

- Raspberry Pi
- ESP32
- Field sensors
- LoRa communication

## 11. API Security

Document:

- Authentication
- Authorisation
- Input validation
- Rate limiting
- Error handling

