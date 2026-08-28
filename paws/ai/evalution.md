# Evaluation

Do not publish invented accuracy figures.

The production page should contain measured results for the actual model versions:

| Model | Dataset | Version | Precision | Recall | F1 | mAP | Latency |
|---|---|---|---:|---:|---:|---:|---:|
| `<model>` | `<dataset>` | `<version>` | `<value>` | `<value>` | `<value>` | `<value>` | `<value>` |

Also document:

- train/validation/test split
- field validation
- class imbalance
- threshold selection
- false positives
- false negatives
- edge-device latency
- model drift monitoring