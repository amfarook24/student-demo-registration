# Student Demo Registration System

My project is a student demo registration website built using Node.js, Express, and MySQL. It allows students to sign up for a project demonstration time slot and stores their information in a MySQL database.

Each student will enter their:

* Student ID
* First Name
* Last Name
* Project Title
* Email Address
* Phone Number
* Time Slot

Each time slot has a maximum of six students. The website keeps track of how many seats are left and marks a time slot as full when there are no more available seats. If a student tries to register again using the same student ID, the website asks if they want to update their registration instead of creating a duplicate record.

------

## Technologies Used

* HTML
* CSS
* JavaScript
* Node.js
* Express.js
* MySQL

---

## Project Structure

```text
student-demo-registration/

server.js
db.js
database.sql
package.json
package-lock.json
README.md

routes/
    registration.js

public/
    index.html
    students.html
    script.js
    styles.css
```

---

## Database Setup

1. First, start your MySQL server.
2. Import the database.sql file into MySQL.
3. The SQL file then creates:
   -student_demo database
   -students table
   -timeslotstable
   - Six demonstration time slots

---

## Database Configuration

Open the db.js file and make sure the database connection matches your MySQL settings.
For Example:

javascript
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "student_demo",
    port: 3306
});

---

## Running the Project

1. Open the project folder in a terminal.
2. Install the required packages:
npm install


3. Start the server:
node server.js


4. Open your browser and go to:

```text
http://localhost:3000
```

---

## The Registration Features

- Register for a demonstration time slot
-View available seats for each time slot
- Prevent registration for full time slots
-Detect duplicate student IDs
- Update an existing registration
- Store student information in MySQL
- View all registered students on a separate page
-  Client-side form validation

---

## Validation

The registration form checks that:
-Student ID is exactly 8 digits
-First name contains letters only
-Last name contains letters only
-Email is in a valid format
- Phone number is in the format 999-999-9999
- Required fields are not left blank

If there is an error, the incorrect field is highlighted, and the valid information stays on the page.

---

## Viewing Registered Students

You can open students.html to see a list of all registered students.
The page displays:
- Student ID
- Student Name
- Project Title
- Email Address
- Phone Number
- Registered Time Slot

---

## Deployment

The project can be deployed to a Node.js hosting service such as Render. Where the project was deployed by connecting the Git Hub repository. After deployment, update the database connection information in db.js so it connects to the hosted MySQL database instead of your local database.

---

## Browser

The project was tested using Google Chrome and is successful. 

---

Afia Farook

CSC 5750

Project 3:Student Demo Registration

