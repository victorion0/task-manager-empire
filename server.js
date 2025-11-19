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
    <div class="gp-launch-announcement" style="
  text-align: center;
  padding: 120px 20px 100px;
  max-width: 860px;
  margin: 0 auto;
  font-family: inherit;
">
  <h1 style="
    font-size: 54px;
    font-weight: 800;
    color: #222222;
    margin: 0 0 16px;
    line-height: 1.15;
  ">
    TASK MANAGER EMPIRE IS LIVE!
  </h1>

  <h2 style="
    font-size: 36px;
    font-weight: 700;
    color: #2271b1;               /* GeneratePress default primary blue */
    margin: 0 0 28px;
  ">
    Make 10m with Victor
  </h2>

  <p style="
    font-size: 20px;
    color: #555555;
    margin-bottom: 48px;
    line-height: 1.7;
  ">
    Full CRUD API • Node.js + Express • Deployed on Leapcell
  </p>

  <div style="margin: 48px 0;">
    <a href="/api/tasks" style="
      display: inline-block;
      background: #2271b1;          /* Exact GeneratePress primary color */
      color: #ffffff;
      padding: 16px 36px;
      font-size: 18px;
      font-weight: 600;
      text-decoration: none;
      border-radius: 6px;
      box-shadow: 0 4px 14px rgba(34, 113, 177, 0.25);
      transition: all 0.3s ease;
    ">
      SEE ALL TASKS →
    </a>
  </div>

  <p style="
    color: #777777;
    font-size: 15px;
    margin-top: 60px;
  ">
    Built by <strong>Victor</strong> • 2025 • 
    <a href="https://github.com/victorion0/task-manager-empire" style="
      color: #2271b1;
      text-decoration: underline;
    ">
      View on GitHub
    </a>
  </p>
</div>

<!-- Optional hover enhancement (add to GeneratePress → Additional CSS) -->
<style>
  .gp-launch-announcement a:hover {
    background: #1a5a8c;
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(34, 113, 177, 0.35);
  }
  @media (max-width: 768px) {
    .gp-launch-announcement h1 { font-size: 44px; }
    .gp-launch-announcement h2 { font-size: 30px; }
  }
</style>
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