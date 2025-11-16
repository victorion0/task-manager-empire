// FAKE DATABASE CONTROLLER (CLIENT DEMO MODE)
let tasks = require('../config/db'); // We no need real pool

const getTasks = async (req, res) => {
  try {
    const [rows] = await tasks.query('SELECT');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

const createTask = async (req, res) => {
  const { title, description } = req.body;
  if (!title) return res.status(400).json({ error: 'Title is required' });

  try {
    const [result] = await tasks.query('INSERT', [title, description || '']);
    const [newTask] = await tasks.query('SELECT');
    const task = newTask.find(t => t.id === result.insertId);
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;

  try {
    await tasks.query('UPDATE', [title, description, status, parseInt(id)]);
    const [updated] = await tasks.query('SELECT');
    const task = updated.find(t => t.id === parseInt(id));
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    await tasks.query('DELETE', [parseInt(id)]);
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { getTasks, createTask, updateTask, deleteTask };