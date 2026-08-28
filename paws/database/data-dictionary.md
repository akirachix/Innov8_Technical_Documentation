# Data Dictionary

The authoritative table definitions should be linked here.

**Existing database definitions:** `<INSERT EXISTING LINK>`

## Table format

| Column | Type | Nullable | Default | Constraints | Description |
|---|---|---:|---|---|---|
| `id` | UUID | No | — | Primary key | Unique record identifier |
| `<column>` | `<type>` | `<yes/no>` | `<default>` | `<constraints>` | `<description>` |

For every table, document:

- primary key
- foreign keys
- unique constraints
- check constraints
- allowed values
- indexes
- spatial indexes
- relationship/cascade behaviour
- created/updated timestamps
- retention rules