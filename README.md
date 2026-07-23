# Student Demo Registration System

## Overview

This project is a Node.js/Express/MySQL web application created for the Student Demo Registration assignment.

The application allows students to register for project demonstration time slots. Students must provide:

* Student ID
* First Name
* Last Name
* Project Title
* Email Address
* Phone Number
* Demonstration Time Slot

Each demonstration time slot has a maximum capacity of six students. The system automatically tracks available seats and prevents students from registering for fully booked time slots.

If a student has already registered using their student ID, the system detects the existing registration and allows the student to update their registration information and select a different time slot.

---

# Technologies Used

* HTML5
* CSS3
* JavaScript
* Node.js
* Express.js
* MySQL

---

# Project Structure

```
student-demo-registration/

server.js
db.js
database.sql
package.json
package-lock.json
README.md

(folder) routes/
   -registration.js

(folder)public/
    - index.html
    -students.html
    -script.js
    -styles.css
```

---

# Database Setup

The project uses a MySQL database.

## Steps:

1. Start MySQL Server.

2. Import the provided:

```
database.sql
```

file into MySQL.

3. The SQL file creates:

* `student_demo` database
* Student registration table
* Demonstration time slot table
* Six available demonstration sections

The database stores all student registration information and tracks the number of available seats for each time slot.

---

# Database Configuration

Open:

```
db.js
```

Update the MySQL connection settings if needed.

Example:

```javascript
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "student_demo",
    port: 3306
});
```

If using AWS RDS, replace the host value with the RDS endpoint.

Example:

```
studentdemo.xxxxx.us-east-1.rds.amazonaws.com
```

---

# Running the Project Locally

## 1. Install Node.js

Download and install Node.js if it is not already installed.

## 2. Open the project folder

Open a terminal inside the project directory.

## 3. Install dependencies

Run:

```
npm install
```

## 4. Start the server

Run:

```
node server.js
```

## 5. Open the website

Navigate to:

```
http://localhost:3000
```

The registration page will load.

---

# Features Implemented

* Student registration form
* Student information stored in MySQL database
* Six available demonstration time slots
* Live seat availability display
* Prevents registration for full sections
* Duplicate student ID detection
* Allows existing students to update registrations
* Removes previous time slot assignment when changing sections
* Displays all registered students
* Client-side input validation
* Server-side validation
* Prepared SQL statements
* Responsive webpage design

---

# Validation Rules

## Student ID

* Must contain exactly 8 digits

Example:

```
12345678
```

## First Name

* Required
* Alphabetic characters only

## Last Name

* Required
* Alphabetic characters only

## Email

* Must follow a valid email format

Example:

```
student@example.com
```

## Phone Number

Must follow the format:

```
999-999-9999
```

Example:

```
248-555-1234
```

---

# Viewing Registered Students

The registered student list can be viewed through:

```
students.html
```

This page retrieves student information from the database and displays:

* Student ID
* Student name
* Project title
* Email
* Phone number
* Registered demonstration time slot

---

# Deployment

The application can be deployed using services such as:

* AWS Elastic Beanstalk
* AWS RDS
* Azure App Service
* Other Node.js hosting platforms

For deployment, make sure:

* MySQL credentials are updated
* Database connection points to the hosted database
* Environment variables are configured if required

---

# Browser Compatibility

Tested on:

* Google Chrome
* Microsoft Edge
* Firefox
* Safari

---

# Author

Student Name: Afia Farook

Course: CSC 5750

Project 3 – Student Demo Registration
