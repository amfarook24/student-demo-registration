const express = require("express");
const cors = require("cors");
const db = require("./db");

const registrationRoutes = require("./routes/registration");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static("public"));


app.use("/api", registrationRoutes);


app.get("/", (req, res) => {
    res.send("Student Demo Registration Server Running!");
});


app.get("/test-db", (req, res) => {

    db.query("SELECT * FROM timeslots", (err, results) => {

        if (err) {
            console.log(err);
            res.status(500).send("Database connection failed");
            return;
        }

        res.json(results);

    });

});


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});