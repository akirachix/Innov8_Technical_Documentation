---
layout: home

hero:
  name: PAWS Technical Documentation
  text: Predictive Alert & Wildlife Sentinel
  tagline: A complete engineering guide to the PAWS conservation intelligence platform — from field hardware and AI to the dashboard, API, testing, and deployment.
  image:
    src: /paws-logo.png
    alt: PAWS logo
  actions:
    
  
    
    - theme: alt
      text: How It Works
      link: /architecture/
---

<div class="paws-brand-card">

**New to PAWS?** Start with the [Overview](/overview/), then follow [Getting Started](/getting-started/) from top to bottom. The goal is simple: a new teammate should be able to understand, run, test, and ship PAWS without relying on undocumented tribal knowledge.

</div>

## Welcome to PAWS

PAWS — **Predictive Alert & Wildlife Sentinel** — is designed to help conservation teams anticipate and prevent human–lion/livestock conflict around water sources.

![Drought to conflict pathway](lion.png){.paws-image}

## Why PAWS?

<div class="paws-card-grid">

<a class="paws-card" href="architecture">
  <h3>How It Works</h3>
  <p>Follow data from the field station through LoRa, the HQ gateway, MQTT, backend services, spatial storage, AI and the operational dashboard.</p>
</a>

<a class="paws-card" href="ai">
  <h3>AI Intelligence</h3>
  <p>Understand wildlife detection, lion identification, health assessment, risk analysis, evaluation and known limitations.</p>
</a>

<a class="paws-card" href="api">
  <h3>API Reference</h3>
  <p>Find endpoint behaviour, authentication, request and response formats, validation and error handling.</p>
</a>

<a class="paws-card" href="frontend">
  <h3>Frontend Web</h3>
  <p>Learn how the dashboard is organised, how routing and state work, and how the UI communicates with PAWS services.</p>
</a>

<a class="paws-card" href="testing">
  <h3>Testing & QA</h3>
  <p>Run tests, validate the field-to-HQ data path, investigate common failures and understand known open issues.</p>
</a>

<a class="paws-card" href="deployment">
  <h3>Deployment</h3>
  <p>Move PAWS from development to production with environment configuration, migrations, verification, monitoring and rollback.</p>
</a>

</div>

## The problem PAWS addresses

<div class="paws-flow">

**Drought**  
↓  
**Water sources disappear**  
↓  
**Animals concentrate around remaining water**  
↓  
**Livestock and lions converge**  
↓  
**Predation becomes more likely**  
↓  
**Livestock losses occur**  
↓  
**Retaliatory killing becomes more likely**

</div>

## Documentation map

| Area | What you will find |
|---|---|
| **Overview** | Product purpose, users, features and operating context |
| **Architecture** | System components and end-to-end data flow |
| **Getting Started** | Prerequisites, installation, environment, database and verification |
| **Backend** | API, authentication, errors and logging |
| **Database** | ERD, tables, constraints, relationships and data dictionary |
| **AI** | Models, prompts/training, pipeline, evaluation and limitations |
| **Frontend Web** | Routing, state, components and API integration |
| **Mobile** | Mobile architecture and offline behaviour, where implemented |
| **Integrations** | Third-party and hardware integrations |
| **Security** | Authentication, authorization, secrets, device and data security |
| **Testing & QA** | Test strategy, commands, evidence and troubleshooting |
| **Deployment** | Environments, release process, monitoring and rollback |
| **Code Standards** | Naming, formatting, linting, commits and pull requests |
| **Glossary** | PAWS terminology and acronyms |

