Multi-Tenant Ticketing Platform
A backend-focused, Dockerized multi-tenant support system with JWT-based authentication, RBAC, MongoDB tenant isolation, and webhook integration using n8n.

🌟 Features
🔐 JWT-based authentication with tenant-level access control

🧑‍💼 Role-Based Access Control (Admin/User)

🏢 MongoDB tenant isolation for secure data separation

🧵 Ticket creation with webhook triggers (via n8n)

⚙️ n8n integration for ticket workflow automation

📦 Docker Compose setup for full local orchestration

🛠 Tech Stack
Layer	Tech
Backend	Node.js, Express.js, MongoDB, JWT, Webhooks
Frontend	React (minimal UI)
Automation	n8n
Auth	JWT + Middleware-based RBAC
DevOps	Docker, Docker Compose
Testing	Jest (tenant isolation test included)

📁 Project Structure
pgsql
Copy
Edit
Multi-tenant-app/
├── backend/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── tests/
│   ├── seed.js
│   ├── registry.json
│   └── server.js
├── frontend/
│   ├── public/
│   └── src/
├── docker-compose.yml
├── .gitignore
├── README.md
⚙️ Setup Instructions
1️⃣ Clone the repository
bash
Copy
Edit
git clone https://github.com/swaraj017/Multi-tenant-app.git
cd Multi-tenant-app
2️⃣ Add environment variables
Create a .env file inside /backend directory:

env
Copy
Edit
MONGO_URI=mongodb://mongo:27017/multitenant
JWT_SECRET=your_jwt_secret
WEBHOOK_SECRET=your_webhook_secret
3️⃣ Run using Docker
bash
Copy
Edit
docker compose up --build
Services available:
Backend API: http://localhost:5000/api

n8n: http://localhost:5678

Frontend (basic UI): http://localhost:3000

👤 Author
Swaraj Gaikwad
Email: swarajgaikwad017@gmail.com
