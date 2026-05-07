# System Architecture

## High-Level Architecture

```mermaid
flowchart TD

A[User Input Form]
--> B[Validation Layer]

B --> C[Normalization Layer]

C --> D[Pricing Intelligence Layer]

D --> E[Usage Analysis Engine]

E --> F[Optimization Engine]

F --> G[Recommendation Scoring Engine]

G --> H[Savings Calculator]

H --> I[AI Summary Generator]

I --> J[Result Formatter]

J --> K[Persistence Layer]

K --> L[Public Share Layer]