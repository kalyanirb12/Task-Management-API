
# TO DO API

A simple TODO API built with **Node.js** and **Express.js** that allows users to perform basic CRUD operations (Create, Read, Update, Delete) on tasks. The data is stored in memory (no database required). The API also supports pagination, sorting, and filtering for task retrieval.

## Features

- **GET /tasks**: Retrieve a list of tasks with optional pagination, sorting, and filtering.
- **GET /tasks/:id**: Retrieve a specific task by ID.
- **POST /tasks**: Create a new task.
- **PUT /tasks/:id**: Update an existing task by ID.
- **DELETE /tasks/:id**: Delete a task by ID.

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

### Steps to Run the API

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/todo-api.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd todo-api
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Run the server**:

   ```bash
   npm start
   ```

   The server will start on `http://localhost:3000`.

---

## API Endpoints

### 1. **GET /tasks**

Retrieve a list of all tasks.

#### Query Parameters:
- `page`: Page number (default is `1`).
- `limit`: Number of tasks per page (default is `10`).
- `sortBy`: Field to sort tasks by (default is `id`).
- `filterBy`: Filter tasks by a specific field (optional).
- `filterValue`: The value to filter tasks by (optional).

#### Example Request:

```bash
GET /tasks?page=1&limit=5&sortBy=title&filterBy=title&filterValue=task1
```

#### Example Response:

```json
{
  "totalTasks": 5,
  "currentPage": 1,
  "totalPages": 1,
  "tasks": [
    {
      "id": 1,
      "title": "Task 1",
      "description": "This is the first task."
    },
    {
      "id": 2,
      "title": "Task 2",
      "description": "This is the second task."
    }
  ]
}
```

#### Response Codes:
- `200 OK`: Successfully retrieved tasks.

---

### 2. **GET /tasks/:id**

Retrieve a task by its ID.

#### Example Request:

```bash
GET /tasks/1
```

#### Example Response:

```json
{
  "id": 1,
  "title": "Task 1",
  "description": "This is the first task."
}
```

#### Response Codes:
- `200 OK`: Successfully retrieved task.
- `404 Not Found`: Task not found.

---

### 3. **POST /tasks**

Create a new task.

#### Request Body (JSON):
- `title`: Title of the task (required).
- `description`: Description of the task (required).

#### Example Request:

```bash
POST /tasks
```

```json
{
  "title": "New Task",
  "description": "This is a new task."
}
```

#### Example Response:

```json
{
  "id": 3,
  "title": "New Task",
  "description": "This is a new task."
}
```

#### Response Codes:
- `201 Created`: Successfully created task.
- `400 Bad Request`: Missing title or description.

---

### 4. **PUT /tasks/:id**

Update an existing task by ID.

#### Request Body (JSON):
- `title`: New title of the task (required).
- `description`: New description of the task (required).

#### Example Request:

```bash
PUT /tasks/1
```

```json
{
  "title": "Updated Task",
  "description": "This is an updated task."
}
```

#### Example Response:

```json
{
  "id": 1,
  "title": "Updated Task",
  "description": "This is an updated task."
}
```

#### Response Codes:
- `200 OK`: Successfully updated task.
- `404 Not Found`: Task not found.
- `400 Bad Request`: Missing title or description.

---

### 5. **DELETE /tasks/:id**

Delete a task by ID.

#### Example Request:

```bash
DELETE /tasks/1
```

#### Example Response:
- No content returned.

#### Response Codes:
- `204 No Content`: Successfully deleted task.
- `404 Not Found`: Task not found.

---

## Testing with Postman

To test this API using **Postman**:

1. **Import the Postman collection**:
   - Download the Postman collection JSON file or manually create it in Postman by following the endpoint details above.

2. **Set up your requests**:
   - Test each endpoint (GET, POST, PUT, DELETE) by sending requests to `http://localhost:3000`.

3. **Check responses**:
   - Review the responses for success or failure as defined by the response codes above.

---

## Additional Notes

- This API does **not require a database**. All tasks are stored in memory (in an array).
- If the server is restarted, the tasks will be cleared since they are stored in memory only.
- This API can be extended with additional features like authentication, logging, or database integration.

---


