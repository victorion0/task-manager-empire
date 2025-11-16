const pool = require('../config/db');

// GET all tasks
const getTasks = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM tasks ORDER BY created_at DESC');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// CREATE task
const createTask = async (req, res) => {
  const { title, description } = req.body;
  if (!title) return res.status(400).json({ error: 'Title is required' });

  try {
    const [result] = await pool.query(
      'INSERT INTO tasks (title, description) VALUES (?, ?)',
      [title, description || '']
    );
    const [newTask] = await pool.query('SELECT * FROM tasks WHERE id = ?', [result.insertId]);
    res.status(201).json(newTask[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// UPDATE task
const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;

  try {
    const [result] = await pool.query(
      'UPDATE tasks SET title = ?, description = ?, status = ? WHERE id = ?',
      [title, description, status, id]
    );
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Task not found' });

    const [updated] = await pool.query('SELECT * FROM tasks WHERE id = ?', [id]);
    res.json(updated[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// DELETE task
const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await pool.query('DELETE FROM tasks WHERE id = ?', [id]);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Task not found' });
    res.json({ message: 'Task deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { getTasks, createTask, updateTask, deleteTask };