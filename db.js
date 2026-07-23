const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "student_demo",
    port: 3306
});

connection.connect((err) => {

    if (err) {
        console.log("Database connection failed:");
        console.log(err);
        return;
    }

    console.log("Connected to MySQL!");

});

module.exports = connection;