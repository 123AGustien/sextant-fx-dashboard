# Dashboard Automation Model

## Automated Components

- Exchange Rate Feed → Automatic
- Zone Calculation → Automatic
- Decision Engine → Automatic
- Ladder Strategy Status → Automatic

## Manual Components

- Portfolio Allocation (SGD / IDR %) → Manual

## Dashboard Workflow

1. Open Dashboard
2. Live SGD → IDR rate is retrieved automatically
3. Zone Engine evaluates market conditions
4. Decision Engine generates allocation guidance
5. Ladder Strategy updates target status
6. User manually records allocation changes after conversion

## Operating Principle

Monitor → Evaluate → Decide → Convert Manually

## System Scope

This dashboard:

- Does not connect to banks
- Does not connect to DBS
- Does not connect to Ample Transfer
- Does not execute transactions
- Does not move funds automatically
- Does not provide financial advice

## Classification

Decision Support Dashboard

Front-end only implementation designed to support SGD → IDR monitoring within the Christine Trust FX Framework.

All allocation decisions remain under direct user control.
