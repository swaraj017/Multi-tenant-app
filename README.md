# Multi-Tenant Ticketing Platform

A backend-focused, Dockerized multi-tenant support system with JWT-based authentication, RBAC, MongoDB tenant isolation, and webhook integration using n8n.

## Features

- JWT-based authentication with tenant-level access control  
- Role-Based Access Control (Admin/User)  
- MongoDB tenant isolation for secure data separation  
- Ticket creation with webhook triggers (via n8n)  
- n8n integration for ticket workflow automation  
- Docker Compose setup for full local orchestration  

## Tech Stack

| Layer     | Technologies                               |
|-----------|--------------------------------------------|
| Backend   | Node.js, Express.js, MongoDB, JWT, Webhooks|
| Frontend  | React (minimal UI)                         |
| Automation| n8n                                        |
| Auth      | JWT with Middleware-based RBAC             |
| DevOps    | Docker, Docker Compose                     |
 


