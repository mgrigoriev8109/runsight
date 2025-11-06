### **RunSight**

## Summary

RunSight is going to be a running data visualization dashboard, built with React + Python (FastAPI + Pandas). It'll ingest Strava data via their API, analyzes trends, and will visualize:

- Heart rate, cadence, and elevation over time (using D3.js or ECharts).
- Personalized stats like VO₂ estimation, fatigue index, and training load.
- Weekly summaries and anomaly detection.

## High level architecture

- Frontend: React + Vite + TypeScript + MUI + ECharts running in one Docker container
- Backend: FastAPI in a second container handling API requests, analytics computation, and OAuth
- Database: PostgreSQL in a third container with a persistent Docker volume
    - data flow: user → React → FastAPI → Postgres → React ↩︎
    - external integrations such as Strava API (via OAuth 2.0) and future cloud services (AWS EC2, S3, Secrets Manager)
    - Nginx as a reverse proxy sitting in front of frontend + backend