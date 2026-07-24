CREATE DATABASE IF NOT EXISTS student_demo;

USE student_demo;


CREATE TABLE timeslots (
    id INT AUTO_INCREMENT PRIMARY KEY,
    slot_time VARCHAR(100) NOT NULL,
    capacity INT DEFAULT 6
);


CREATE TABLE students (

    student_id VARCHAR(8) PRIMARY KEY,

    first_name VARCHAR(50) NOT NULL,

    last_name VARCHAR(50) NOT NULL,

    project_title VARCHAR(100) NOT NULL,

    email VARCHAR(100) NOT NULL,

    phone VARCHAR(12) NOT NULL,

    timeslot_id INT NOT NULL,

    FOREIGN KEY (timeslot_id)
    REFERENCES timeslots(id)

);


INSERT INTO timeslots(slot_time, capacity)
VALUES

('4/19/2070 6:00 PM - 7:00 PM',6),

('4/19/2070 7:00 PM - 8:00 PM',6),

('4/19/2070 8:00 PM - 9:00 PM',6),

('4/20/2070 6:00 PM - 7:00 PM',6),

('4/20/2070 7:00 PM - 8:00 PM',6),

('4/20/2070 8:00 PM - 9:00 PM',6);
