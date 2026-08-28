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
    - theme: brand
      text: Get Started
      link: /getting-started/
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

## About the Team

PAWS was developed by a multidisciplinary team focused on using
technology, artificial intelligence, and conservation-focused design
to help address human–wildlife conflict.

<div class="paws-team">


  <div class="paws-team-intro">

### Meet the PAWS Team

We are a team of developers, designers, and technical contributors
working together to design and build the PAWS conservation intelligence
platform.

Our work brings together software engineering, artificial intelligence,
field technology, data, and user-centred design.

  </div>

</div>

<div class="paws-team-grid">

<div class="paws-person">
  <img src="/member1.png" alt=" Sandra Kayirangwa" />
  <h3>Sandra Kayirangwa</h3>
  
  <p class="paws-role"> Mobile & Backend Engineer and QA</p>

  <p>
  Responsible for coordinating the technical implementation,
  backend services, APIs, and integration between the major
  PAWS system components.
  </p>
</div>

<div class="paws-person">
  <img src="/member2.png" alt="Angel Chabu " />
  <h3>Angel Chabu</h3>


   <p class="paws-role">Web ,Database & Data Engineer </p>

  <p>
  Responsible for database design, data modelling, relationships,
  data quality, and supporting the flow of field and application
  data through the PAWS platform.
  </p>
   

</div>


<div class="paws-person">
  <img src="/member3.png" alt=" Gabrielle Mordaunt " />
  <h3>Gabrielle Mordaunt</h3>
   <p class="paws-role">Systems & Hardware Engineer and UX</p>

  <p>
  Worked on field devices, sensor integration, communication
  infrastructure, system architecture, and the connection between
  field hardware and the PAWS platform.
  PAWS user experience, dashboard
  interfaces, frontend components, navigation, and integration
  with backend services.
  </p>
</div>

<div class="paws-person">
  <img src="/member4.png" alt="Gift Mwansa" />
  <h3>Gift Mwansa</h3>
   <p class="paws-role">  UX & Backend Engineer</p>

  <p>
  Responsible for coordinating the technical implementation,
  backend services, APIs, and integration between the major
  PAWS system components.PAWS user experience, dashboard
  interfaces, frontend components, navigation, and integration
  with backend services.
  </p>
</div>

</div>