let tasks = [];
let taskId = 1;

// Get all tasks
const getTasks = (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + parseInt(limit);
    res.status(200).json(tasks.slice(startIndex, endIndex));
};

// Get a task by ID
const getTaskById = (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) {
        return res.status(404).json({ error: 'Task not found' });
    }
    res.status(200).json(task);
};

// Create a new task
const createTask = (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ error: 'Title and description are required' });
    }
    const newTask = { id: taskId++, title, description };
    tasks.push(newTask);
    res.status(201).json(newTask);
};

// Update a task
const updateTask = (req, res) => {
    const { title, description } = req.body;
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) {
        return res.status(404).json({ error: 'Task not found' });
    }
    if (!title || !description) {
        return res.status(400).json({ error: 'Title and description are required' });
    }
    task.title = title;
    task.description = description;
    res.status(200).json(task);
};

// Delete a task
const deleteTask = (req, res) => {
    const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (taskIndex === -1) {
        return res.status(404).json({ error: 'Task not found' });
    }
    tasks.splice(taskIndex, 1);
    res.status(204).send();
};

module.exports = {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
};
