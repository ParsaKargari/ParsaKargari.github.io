---
title: "React and Flask"
slug: "react-and-flask"
date: "2023-12-18"
tags: ["React", "Flask", "Full Stack", "API"]
author: "Parsa Kargari"
description: "A beginner-friendly guide to building a full-stack application using React for the frontend and Flask for the backend. This guide covers everything from setting up the environments to making API requests."
---

# Building a Full Stack Application with React and Flask

## Introduction

This tutorial offers a step-by-step guide to building a full-stack application using React for the frontend and Flask for the backend. Aimed at beginners, it covers everything from environment setup to making API requests and handling cross-origin resource sharing (CORS).

## Prerequisites

- Basic knowledge of Python, Flask, JavaScript, and React
- Node.js and NPM installed
- Python installed

## Quick Navigation

- [Project Structure](#project-structure)
- [Backend Setup (Flask)](#backend-setup-flask)
- [Frontend Setup (React)](#frontend-setup-react)
- [Final Sample Application](#final-sample-application)

## Project Structure

Create two main folders in your project directory: `frontend` and `backend`.

```bash
my-app/
├─ frontend/
└─ backend/
```

### Backend Setup (Flask)

#### Initialize Flask App

In the `backend` folder, create `app.py` and initialize your Flask app.

```python
# backend/app.py
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes, allowing your React app to make requests to the Flask API or else you will encounter CORS errors

# Basic route to test the server
@app.route('/')
def home():
    return 'Flask Backend is Running!'

# API route for data retrieval
@app.route('/api/data', methods=['GET', 'POST'])
def data():
    if request.method == 'POST':
        data = request.json # Get data from POST request, that is, the frontend. Do something with the data
        return jsonify(data), 201 # Return data as JSON with status code 201 - Created to frontend
    else:
        return jsonify({"message": "Welcome to the Flask API!"})

# Additional routes can be added here
```

Install Flask and Flask-CORS:

```bash
pip install Flask flask-cors
```

Run the Flask app:

```bash
# Windows
set FLASK_APP=app.py
set FLASK_ENV=development
flask run

# macOS/Linux
export FLASK_APP=app.py
export FLASK_ENV=development
flask run
```

or, you can run the backend server by just running `python app.py` (run `python3 app.py` if you have both Python 2 and 3 installed)

### Frontend Setup (React)

#### Create React App

In the `frontend` folder, initialize a new React app.

```bash
npx create-react-app frontend
```

Navigate to your React app directory and start the server.

```bash
cd frontend
npm start
```

#### Fetching Data in React Using Axios

Interact with the Flask API using Axios, a popular JavaScript library for making HTTP requests.

First, install Axios in your React project:

```bash
npm install axios
```

Then, use Axios to make requests to the Flask API:

```javascript
// frontend/src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/data") // Flask runs on localhost:5000 by default
      .then((response) => setData(response.data)) // Set data in state
      .catch((err) => console.error(err)); // Log any errors
  }, []);

  return <div>{data ? <p>{data.message}</p> : <p>Loading data...</p>}</div>;
}

export default App;
```

**Remember to be running the Flask server in the background.**

## Connecting from Another Computer

To connect to your Flask app from another computer in your network, you need to run Flask on your machine's IP address.

1. **Find your IP Address**:

   - Windows: `ipconfig` in Command Prompt
   - macOS/Linux: `ifconfig` in Terminal

2. **Run Flask on Your IP Address**:
   Replace `YOUR_IP` with your actual IP address.

   ```bash
   flask run --host=YOUR_IP
   ```

3. **Accessing from Another Computer**:
   On another computer, access the app via `http://YOUR_IP:5000`.

## Handling CORS (Cross-Origin Resource Sharing)

When your React app tries to fetch data from the Flask API, you might encounter CORS errors. This happens because your React app and Flask server are running on different origins (localhost:3000 for React and localhost:5000 for Flask).

To handle CORS:

1. **Install Flask-CORS**:

   ```bash
   pip install flask-cors
   ```

2. **Enable CORS in Flask**:
   In your `app.py`, add the following:

   ```python
   from flask_cors import CORS
   CORS(app)  # Apply CORS to all routes
   ```

This setup allows your React frontend to make requests to your Flask backend without any CORS issues.

## Final Sample Application

In this section, we will create a simple application where users can add student names to a list and fetch the updated list from the backend.

### Flask Backend Code:

We will have two endpoints, one for retrieving the list of students and another for adding a new student.

```python
# backend/app.py
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__) # Initialize Flask app
CORS(app)

students = [] # List of students

@app.route('/api/students', methods=['GET']) # GET request to retrieve students
def get_students():
    return jsonify(students)

@app.route('/api/students', methods=['POST']) # POST request to add a student
def add_student():
   # Get student name from POST request, from the frontend
    student = request.json.get('name', '')
    if student: # If student name is not empty
        students.append(student)
        # Return updated list of students if successful
        return jsonify({"success": True, "students": students}), 201
    return jsonify({"success": False}), 400 # Return error if student name is empty

if __name__ == '__main__':
    app.run(debug=True)
```

### React Frontend Code:

Create a simple form in React to add a student name and display the list of students.

```javascript
// frontend/src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [students, setStudents] = useState([]);
  const [newStudentName, setNewStudentName] = useState("");

  useEffect(() => {
    // Fetch students when the component is mounted
    axios
      .get("http://localhost:5000/api/students")
      .then((response) => setStudents(response.data))
      .catch((err) => console.error(err));
  }, []);

  const handleAddStudent = () => {
    axios
      .post("http://localhost:5000/api/students", { name: newStudentName })
      .then((response) => {
        if (response.data.success) {
          setStudents(response.data.students);
          setNewStudentName("");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h1>Student List</h1>
      <input
        type="text"
        value={newStudentName}
        onChange={(e) => setNewStudentName(e.target.value)}
      />
      <button onClick={handleAddStudent}>Add Student</button>
      <ul>
        {students.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

Run the Flask server and React app in separate terminals and test the application.

```bash
# Terminal 1
cd backend
python app.py
```

```bash
# Terminal 2
cd frontend
npm start
```

## Conclusion

This guide provides a foundational setup for integrating React and Flask. Experiment with additional API endpoints and expand your React frontend for a more dynamic user experience. Remember, this setup is primarily for development; deploying a production app involves additional steps not covered here.
