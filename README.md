# Assignment Workflow Portal — Backend

This repository contains the **backend API** for the Assignment Workflow Portal built using **Node.js, Express.js, and MongoDB**.

The system allows **teachers to create and manage assignments** while **students can view assignments and submit answers**.

---

# Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcrypt

---

# Project Setup

Follow the steps below to run the backend locally.

---

# Step 1 — Clone the Repository

```bash
git clone <repository_url>
```

---

# Step 2 — Navigate to the Project Folder

```bash
cd assignment-portal-backend
```

---

# Step 3 — Install Dependencies

Install required packages:

```bash
npm install express mongoose cors dotenv jsonwebtoken bcrypt
```

Install development dependency:

```bash
npm install nodemon --save-dev
```

---

# Step 4 — Configure package.json Scripts

Open **package.json** and add:

```json
"scripts": {
  "dev": "nodemon server.js"
}
```

Run server using:

```bash
npm run dev
```

---

# Step 5 — Create .gitignore

Create a `.gitignore` file:

```
node_modules
.env
```

---

# Step 6 — Create Environment Variables

Create `.env` file in root directory:

```
PORT=5001
MONGO_URI=mongodb://localhost:27017/assignment_portal
JWT_SECRET=your_secret_key
```

---

# Step 7 — Project Folder Structure

```
backend
│
├── controllers
│     authController.js
│     assignmentController.js
│     submissionController.js
│
├── middleware
│     authMiddleware.js
│     roleMiddleware.js
│
├── models
│     User.js
│     Assignment.js
│     Submission.js
│
├── routes
│     authRoutes.js
│     assignmentRoutes.js
│     submissionRoutes.js
│
├── server.js
├── package.json
├── .gitignore
└── .env
```

---

# Features

## Authentication

* Single login system for teachers and students
* JWT based authentication
* Password hashing using bcrypt
* Role based access control

---

# Teacher Features

Teachers can manage the full assignment lifecycle.

* Create assignments (Draft)
* Publish assignments (Draft → Published)
* Mark assignments as completed (Published → Completed)
* View assignments
* Filter assignments by status
* View student submissions
* View total submissions for an assignment

---

# Student Features

Students can interact with assignments.

* View published assignments
* Submit answers
* Only **one submission allowed per assignment**
* Cannot submit after due date
* View their own submissions

---

# Assignment Workflow

```
Draft → Published → Completed
```

1. Teacher creates assignment → Draft
2. Teacher publishes assignment → Published
3. Students submit answers
4. Teacher reviews submissions
5. Teacher marks assignment → Completed

---

# API Endpoints

## Authentication

```
POST /api/auth/login
```

---

## Assignments (Teacher)

```
POST /api/assignments
GET /api/assignments
GET /api/assignments?status=draft
PUT /api/assignments/:id/publish
PUT /api/assignments/:id/complete
```

---

## Assignments (Student)

```
GET /api/assignments/published
```

---

## Submissions

```
POST /api/submissions
GET /api/submissions/my
GET /api/submissions/assignment/:assignmentId
```

---

# Database Schema

## Users

```
name: String
email: String
password: String
role: String (teacher | student)
```

---

## Assignments

```
title: String
description: String
dueDate: Date
status: String (draft | published | completed)
createdBy: ObjectId
```

---

## Submissions

```
assignmentId: ObjectId
studentId: ObjectId
answer: String
reviewed: Boolean
submittedAt: Date
```

---

# API Testing

You can test APIs using:

* Postman
* Thunder Client (VS Code)

Recommended flow:

1. Login as Teacher
2. Create Assignment
3. Publish Assignment
4. Login as Student
5. View Published Assignments
6. Submit Answer
7. Teacher views submissions
8. Teacher completes assignment

---

# Author

**Anurag Tomar**
