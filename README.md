# Assignment Workflow Portal (Backend)

Backend API for the **Assignment Workflow Portal** built with **Node.js, Express.js, and MongoDB**.
The system allows **teachers to create and manage assignments** while **students can view and submit answers** through a workflow-based system.

---

# Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB + Mongoose**
* **JWT Authentication**
* **bcrypt (password hashing)**

---

# Features

## Authentication

* Single login API for both **teachers and students**
* JWT based authentication
* Password hashing using bcrypt
* Role-based access control

---

# Teacher Features

Teachers can manage the entire lifecycle of assignments.

* Create assignments (Draft)
* Publish assignments (Draft → Published)
* Mark assignments as completed (Published → Completed)
* View all assignments
* Filter assignments by status
* View student submissions for a specific assignment
* See total submissions per assignment

---

# Student Features

Students can interact with assignments that are published.

* View published assignments
* Submit answers for assignments
* Only **one submission allowed per student**
* Cannot submit after the due date
* View their own submissions

---

# Assignment Workflow

Draft → Published → Completed

1. Teacher creates an assignment → **Draft**
2. Teacher publishes the assignment → **Published**
3. Students can view and submit answers
4. Teacher reviews submissions
5. Teacher marks the assignment → **Completed**

---

# API Endpoints

## Authentication

POST /api/auth/login

---

## Assignments (Teacher)

POST /api/assignments
Create a new assignment (Default status: Draft)

GET /api/assignments
Get all assignments created by the teacher

GET /api/assignments?status=draft
Filter assignments by status

PUT /api/assignments/:id/publish
Publish a draft assignment

PUT /api/assignments/:id/complete
Mark assignment as completed

---

## Assignments (Student)

GET /api/assignments/published
View all published assignments

---

## Submissions

POST /api/submissions
Submit answer for an assignment

GET /api/submissions/my
View submissions made by the logged-in student

GET /api/submissions/assignment/:assignmentId
Teacher can view all submissions for an assignment

---

# Database Structure

## Users Collection

Fields:

* name
* email
* password
* role (teacher | student)

---

## Assignments Collection

Fields:

* title
* description
* dueDate
* status (draft | published | completed)
* createdBy (teacher id)

---

## Submissions Collection

Fields:

* assignmentId
* studentId
* answer
* reviewed
* submittedAt

---

# Setup Instructions

## 1 Clone Repository

git clone <repo-url>

cd assignment-portal-backend

---

## 2 Install Dependencies

npm install

---

## 3 Create Environment File

Create a `.env` file in the root directory.

PORT=5000
MONGO_URI=mongodb://localhost:27017/assignment_portal
JWT_SECRET=your_secret_key

---

## 4 Run the Server

npm run dev

Server will start at:

http://localhost:5000

---

# Testing

You can test the APIs using:

* Postman
* Thunder Client (VS Code)

Recommended testing flow:

1. Login as Teacher
2. Create Assignment
3. Publish Assignment
4. Login as Student
5. View Published Assignments
6. Submit Answer
7. Teacher views submissions
8. Teacher marks assignment as completed

---

# Validation Rules Implemented

* Only teachers can create/publish/complete assignments
* Students can only view published assignments
* Only **one submission per student per assignment**
* Submissions are blocked after due date
* Role-based route protection using middleware

---

# Future Improvements

Possible enhancements:

* Pagination for assignments
* Teacher dashboard analytics
* Mark submissions as reviewed
* Frontend integration with React.js
* File upload support for assignments

---

# Author

Anurag Tomar
