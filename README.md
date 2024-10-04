# Task Management API

A simple Node.js API for managing to-do tasks. This API allows users to create, retrieve, and delete tasks.

## Table of Contents

- [Installation](#installation)
- [API Endpoints](#api-endpoints)
  - [Get Tasks](#get-tasks)
  - [Add Task](#add-task)
  - [Delete Tasks](#delete-tasks)
- [Usage](#usage)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/nika-jobava481/nodeapi.git
   cd nodeapi
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

   The server will run at `http://localhost:3000`.

## API Endpoints

### Get Tasks

- **Endpoint:** `GET /getTasks`
- **Query Parameters:**
  - `size` (integer): The number of tasks to retrieve.
- **Response:**
  - Returns an array of tasks.

**Example Request:**
```http
GET http://localhost:3000/getTasks?size=2
```

**Example Response:**
```json
[
  {
    "id": 1,
    "title": "Task 1",
    "description": "Description for task 1",
    "priority": 1,
    "dueDate": "2024-10-15"
  },
  {
    "id": 2,
    "title": "Task 2",
    "description": "Description for task 2",
    "priority": 2,
    "dueDate": "2024-10-20"
  }
]
```

---

### Add Task

- **Endpoint:** `POST /add`
- **Request Body:**
  - `title` (string): The title of the task.
  - `description` (string): The description of the task.
  - `dueDate` (string): The due date of the task in YYYY-MM-DD format.
  - `priority` (integer): The priority of the task (1 to 3).

- **Response:**
  - Returns the created task object.

**Example Request:**
```http
POST http://localhost:3000/add
Content-Type: application/json

{
  "title": "New Task",
  "description": "Description for the new task",
  "dueDate": "2024-10-30",
  "priority": 2
}
```

**Example Response:**
```json
{
  "id": 4,
  "title": "New Task",
  "description": "Description for the new task",
  "priority": 2,
  "dueDate": "2024-10-30"
}
```

---

### Delete Tasks

- **Endpoint:** `DELETE /delete`
- **Request Body:**
  - `ids` (array of integers): An array of task IDs to delete.

- **Response:**
  - Returns a success message indicating how many tasks were deleted.

**Example Request:**
```http
DELETE http://localhost:3000/delete
Content-Type: application/json

{
  "ids": [1, 3]
}
```

**Example Response:**
```json
{
  "message": "2 task(s) deleted successfully."
}
```

## Usage

You can use any HTTP client like Postman, Curl, or Fetch API in JavaScript to interact with this API. Make sure to start the server before making requests.
