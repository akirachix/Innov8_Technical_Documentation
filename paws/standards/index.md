# Code Standards

This page defines the coding conventions used across the PAWS project. The purpose is to keep the codebase consistent, readable, maintainable, and easy for a new developer to understand.

> **Important:** These standards should match the conventions currently used in the PAWS source code. Where a project-specific convention differs, the existing implementation takes priority and this document should be updated.

---

## 1. General Principles

PAWS code should be:

- Readable
- Consistent
- Modular
- Reusable where appropriate
- Easy to test
- Easy to debug
- Explicit rather than unnecessarily clever
- Documented where the purpose or behaviour is not obvious

Avoid introducing unnecessary complexity.

Before adding new code, check whether an existing component, function, service, or utility already provides the required functionality.

---

# 2. Naming Conventions

## Variables

Use descriptive names that communicate what the value represents.

### Preferred

```ts
const waterLevel = 35;
const detectionConfidence = 0.92;
const fieldStationId = "FS-001";n