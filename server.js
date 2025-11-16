const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const taskRoutes = require('./routes/tasks');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// === NICE WELCOME PAGE (ROOT URL) ===
app.get('/', (req, res) => {
  res.send(`
    <div style="text-align:center; margin-top:80px; font-family:Arial, sans-serif;">
      <h1 style="font-size:48px; color:#1a73e8;">
        TASK MANAGER EMPIRE IS LIVE!
      </h1>
      <h2 style="color:#34a853; font-size:32px;">
        Make 10m with Victor
      </h2>
      <p style="font-size:18px; color:#666;">
        Full CRUD API • Node.js + Express • Deployed on Leapcell
      </p>
      <div style="margin:30px 0;">
        <a href="/api/tasks" style="background:#1a73e8; color:white; padding:12px 24px; text-decoration:none; border-radius:8px; font-weight:bold;">
          SEE ALL TASKS →
        </a>
      </div>
      <p style="color:#999; font-size:14px;">
        Built by <strong>Victor</strong> • 2025 • <a href="https://github.com/victorion014" style="color:#1a73e8;">GitHub</a>
      </p>
    </div>
  `);
});

// Routes
app.use('/api/tasks', taskRoutes);

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server dey run for port ${PORT} – Make 10m with Victor! (DEMO MODE)`);
  console.log(`Go test: http://localhost:${PORT}/api/tasks`);
  console.log(`Welcome page: http://localhost:${PORT}`);
});