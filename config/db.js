// FAKE IN-MEMORY DATABASE (FOR CLIENT DEMO)
let tasks = [
  {
    id: 1,
    title: "Impress Client",
    description: "Show live API in 5 minutes",
    status: "completed",
    created_at: new Date().toISOString()
  }
];

let nextId = 2;

// Fake query functions
const query = (text, params) => {
  return Promise.resolve({ rows: tasks });
};

const execute = (text, params) => {
  return Promise.resolve();
};

// Export fake pool
module.exports = {
  query: async (sql, values) => {
    if (sql.includes('SELECT')) {
      return [tasks];
    }
    if (sql.includes('INSERT')) {
      const newTask = {
        id: nextId++,
        title: values[0],
        description: values[1] || '',
        status: 'pending',
        created_at: new Date().toISOString()
      };
      tasks.push(newTask);
      return [{ insertId: newTask.id }];
    }
    if (sql.includes('UPDATE')) {
      const id = values[3];
      const task = tasks.find(t => t.id === id);
      if (task) {
        task.title = values[0];
        task.description = values[1];
        task.status = values[2];
      }
      return [task ? { affectedRows: 1 } : { affectedRows: 0 }];
    }
    if (sql.includes('DELETE')) {
      const id = values[0];
      tasks = tasks.filter(t => t.id !== id);
      return [{ affectedRows: tasks.length }];
    }
    return [[]];
  },
  execute
};