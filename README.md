# Task Manager Empire 

**A Full-Stack Task Manager API built with Node.js, Express, MySQL & Deployed on Leapcell.io**

> **"From zero to $10M empire in one day!"** – *You & Victor*

---

## Features

- ✅ **CRUD Operations** (Create, Read, Update, Delete Tasks)  
- ✅ **MySQL Database** (via PlanetScale)  
- ✅ **RESTful API** with clean routes  
- ✅ **Environment Variables** (`.env`)  
- ✅ **Auto-restart** with `nodemon` (dev)  
- ✅ **Deployed on Leapcell.io** (serverless)  
- ✅ **Postman Ready** – Test every endpoint!  

---

## Live API URL

**Your Empire is LIVE at:**  
🔗 [https://task-manager-empire.leapcell.app](https://task-manager-empire.leapcell.app)

---

## API Endpoints

| Method | Endpoint             | Description           |
|--------|----------------------|-----------------------|
| `GET`   | `/api/tasks`         | Get all tasks         |
| `POST`  | `/api/tasks`         | Create new task       |
| `PUT`   | `/api/tasks/:id`     | Update task           |
| `DELETE`| `/api/tasks/:id`     | Delete task           |

---

### Example: Create Task (POST)

```json
POST /api/tasks
{
  "title": "Launch Startup",
  "description": "Make $10M with Victor"
}

{
  "id": 1,
  "title": "Launch Startup",
  "description": "Make $10M with Victor",
  "status": "pending",
  "created_at": "2025-11-16T15:50:00.000Z"
}

Tech StackLayer
Technology
Runtime
Node.js (v20)
Framework
Express.js
Database
MySQL (PlanetScale)
Hosting
Leapcell.io
Dev Tool
nodemon, Postman
Version
Git + GitHub

Project Structure

task-manager-empire/
├── server.js              Main server
├── config/db.js           MySQL connection
├── routes/tasks.js        API routes
├── controllers/taskController.js
├── leapcell.yml           Deploy config
├── .env                   Secrets (gitignored)
├── .gitignore
├── README.md              ← You are here!
└── package.json

Local Setup # 1. Clone repo
git clone https://github.com/victorion0/task-manager-empire.git
cd task-manager-empire

# 2. Install
npm install

# 3. Setup .env
DB_USER=root
DB_HOST=localhost
DB_NAME=taskmanager
DB_PASSWORD=
DB_PORT=3306

# 4. Run
npm run dev

API runs on: http://localhost:5000

Deployment (Leapcell.io)Push to GitHub  
Connect repo on Leapcell.io  
Add env vars: DB_USER, DB_HOST, etc.  
Deploy → Live in 60 seconds!

Testing with PostmanDownload Collection Here (coming soon)Future Empire PlansUser Authentication (JWT)  
React Frontend  
Mobile App (React Native)  
Email Reminders  
Monetization ($5/month Pro)

Author
Victor Osaikhuiwuomwan
Mentored by FreeCodeCamp



