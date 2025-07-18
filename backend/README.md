# Multi-Tenant Backend

## Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start MongoDB and backend:
   ```bash
   docker-compose up --build
   ```
3. Seed tenants and admins:
   ```bash
   node seed.js
   ```

## Architecture

- Node.js + Express backend
- MongoDB for data
- JWT for auth
- RBAC and tenant isolation
- n8n workflow integration

## Known Limitations
- No frontend yet
- n8n workflow is dummy
- No audit log

## Endpoints
- `/api/auth/register` & `/api/auth/login`
- `/api/tickets` (tenant isolated)
- `/admin` (admin only)
- `/api/me/screens` (dynamic sidebar)
