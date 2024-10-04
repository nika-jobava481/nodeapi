
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

let tasks = [
    {
        id: 1, 
        title: "Task 1",
        description: "Description for task 1",
        priority: 1,
        dueDate: "2024-10-15"
    },
    {
        id: 2, 
        title: "Task 2",
        description: "Description for task 2",
        priority: 2,
        dueDate: "2024-10-20"
    },
    {
        id: 3, 
        title: "Task 3",
        description: "Description for task 3",
        priority: 3,
        dueDate: "2024-10-25"
    }
];

// ID counter for new tasks
let currentId = tasks.length + 1;

// API Endpoint: /getTasks?size=number
app.get('/getTasks', (req, res) => {
    const size = parseInt(req.query.size, 10);

    // Validate the 'size' parameter
    if (isNaN(size) || size <= 0) {
        return res.status(400).json({ error: "Invalid 'size' parameter" });
    }

    // Return the requested number of tasks
    const result = tasks.slice(0, size);
    res.json(result);
});

// API Endpoint: /add
app.post('/add', (req, res) => {
    const { title, description, dueDate, priority } = req.body;

    // Validate the request body
    if (!title || !description || !dueDate || ![1, 2, 3].includes(priority)) {
        return res.status(400).json({ error: "Invalid task data" });
    }

    // Create a new task with an incremented ID
    const newTask = {
        id: currentId++,
        title,
        description,
        priority,
        dueDate
    };

    // Add the new task to the tasks array
    tasks.push(newTask);

    // Respond with the created task
    res.status(201).json(newTask);
});

// API Endpoint: /delete
app.delete('/delete', (req, res) => {
    const { ids } = req.body; // Get the array of IDs from the request body

    // Validate the request body
    if (!Array.isArray(ids) || ids.length === 0) {
        return res.status(400).json({ error: "Invalid IDs array" });
    }

    // Filter out tasks that do not match the IDs to be deleted
    const initialLength = tasks.length; // Store the initial length of tasks
    tasks = tasks.filter(task => !ids.includes(task.id)); // Remove tasks with the specified IDs

    // Check if any tasks were deleted
    const deletedCount = initialLength - tasks.length;
    if (deletedCount === 0) {
        return res.status(404).json({ error: "No tasks found with the provided IDs" });
    }

    // Respond with a success message
    res.json({ message: `${deletedCount} task(s) deleted successfully.` });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
