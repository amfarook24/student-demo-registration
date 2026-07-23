const express = require("express");
const router = express.Router();

const db = require("../db");

router.get("/timeslots", (req, res) => {

    const sql = `
    SELECT 
        timeslots.id,
        timeslots.slot_time,
        timeslots.capacity,
        COUNT(students.student_id) AS registered
    FROM timeslots
    LEFT JOIN students
    ON timeslots.id = students.timeslot_id
    GROUP BY timeslots.id
    `;


    db.query(sql, (err, results) => {

        if(err){

            console.log(err);

            res.status(500).send("Database error");

            return;
        }


        results.forEach(slot => {

            slot.remaining =
            slot.capacity - slot.registered;

        });


        res.json(results);

    });

});


router.post("/register", (req,res)=>{


    const {

        student_id,
        first_name,
        last_name,
        project_title,
        email,
        phone,
        timeslot_id

    } = req.body;


    const checkSQL =
    "SELECT * FROM students WHERE student_id=?";



    db.query(checkSQL,[student_id],(err,result)=>{


        if(err){

            res.status(500).send(err);

            return;

        }



        if(result.length > 0){


            res.send({

                duplicate:true,

                message:"Student already registered"

            });


            return;

        }

        const slotCheckSQL = `

        SELECT 

        capacity,

        (
            SELECT COUNT(*)

            FROM students

            WHERE timeslot_id=?

        ) AS registered


        FROM timeslots

        WHERE id=?

        `;



        db.query(

            slotCheckSQL,

            [timeslot_id,timeslot_id],

            (err,slotResult)=>{


                if(err){

                    console.log(err);

                    res.status(500).send(err);

                    return;

                }




                if(slotResult.length === 0){


                    res.status(400).send({

                        message:"Invalid time slot"

                    });


                    return;

                }




                if(slotResult[0].registered >= slotResult[0].capacity){


                    res.send({

                        message:
                        "This time slot is full. Please choose another."

                    });


                    return;

                }


                const insertSQL =

                `

                INSERT INTO students

                VALUES (?,?,?,?,?,?,?)

                `;



                db.query(

                    insertSQL,

                    [

                        student_id,

                        first_name,

                        last_name,

                        project_title,

                        email,

                        phone,

                        timeslot_id

                    ],


                    (err)=>{


                        if(err){

                            res.status(500).send(err);

                            return;

                        }



                        res.send({

                            message:"Registration successful"

                        });


                    }


                );


            }


        );


    });


});


router.put("/update", (req,res)=>{


    const {

        student_id,

        first_name,

        last_name,

        project_title,

        email,

        phone,

        timeslot_id


    } = req.body;




    const sql = `

    UPDATE students

    SET

    first_name=?,

    last_name=?,

    project_title=?,

    email=?,

    phone=?,

    timeslot_id=?


    WHERE student_id=?

    `;



    db.query(

        sql,

        [

            first_name,

            last_name,

            project_title,

            email,

            phone,

            timeslot_id,

            student_id

        ],



        (err)=>{


            if(err){


                console.log(err);


                res.status(500).json({

                    message:"Update failed"

                });


                return;


            }




            res.json({

                message:"Registration updated successfully"

            });


        }


    );


});


router.get("/students", (req,res)=>{


    const sql = `

    SELECT

    students.student_id,

    students.first_name,

    students.last_name,

    students.project_title,

    students.email,

    students.phone,

    timeslots.slot_time


    FROM students


    JOIN timeslots


    ON students.timeslot_id = timeslots.id


    `;


    db.query(sql,(err,results)=>{


        if(err){


            console.log(err);


            res.status(500).json({

                message:"Database error"

            });


            return;

        }




        res.json(results);


    });


});

module.exports = router;