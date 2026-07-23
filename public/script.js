const API = "http://localhost:3000/api";


document.addEventListener("DOMContentLoaded", function () {


    const form = document.getElementById("registrationForm");


    fetch(API + "/timeslots")

        .then(response => response.json())

        .then(data => {


            const dropdown = document.getElementById("timeslot_id");


            dropdown.innerHTML = "";


            data.forEach(slot => {


                const option = document.createElement("option");


                if (slot.remaining > 0) {


                    option.value = slot.id;


                    option.textContent =
                    `${slot.slot_time} - ${slot.remaining} seats remaining`;


                    dropdown.appendChild(option);


                }


                else {


                    option.textContent =
                    `${slot.slot_time} - FULL`;


                    option.disabled = true;


                    dropdown.appendChild(option);


                }


            });


        })

        .catch(error => {

            console.log("Error loading time slots:", error);

        });




    if (!form) return;



    form.addEventListener("submit", function (event) {


        event.preventDefault();


        clearErrors();



        const studentID =
        document.getElementById("student_id");


        const firstName =
        document.getElementById("first_name");


        const lastName =
        document.getElementById("last_name");


        const projectTitle =
        document.getElementById("project_title");


        const email =
        document.getElementById("email");


        const phone =
        document.getElementById("phone");


        const timeslot =
        document.getElementById("timeslot_id");



        let valid = true;




        const idRegex = /^[0-9]{8}$/;

        const nameRegex = /^[A-Za-z]+$/;

        const emailRegex =
        /^[A-Za-z0-9]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]{1,20})+$/;

        const phoneRegex =
        /^\d{3}-\d{3}-\d{4}$/;



        if (!idRegex.test(studentID.value.trim())) {

            showError(studentID);

            valid = false;

        }



        if (!nameRegex.test(firstName.value.trim())) {

            showError(firstName);

            valid = false;

        }



        if (!nameRegex.test(lastName.value.trim())) {

            showError(lastName);

            valid = false;

        }



        if (projectTitle.value.trim() === "") {

            showError(projectTitle);

            valid = false;

        }



        if (!emailRegex.test(email.value.trim())) {

            showError(email);

            valid = false;

        }



        if (!phoneRegex.test(phone.value.trim())) {

            showError(phone);

            valid = false;

        }



        if (!valid) {

            document.getElementById("message").innerHTML =
            "Please correct the highlighted fields.";

            return;

        }




        const student = {


            student_id: studentID.value.trim(),


            first_name: firstName.value.trim(),


            last_name: lastName.value.trim(),


            project_title: projectTitle.value.trim(),


            email: email.value.trim(),


            phone: phone.value.trim(),


            timeslot_id: timeslot.value


        };




        fetch(API + "/register", {


            method: "POST",


            headers: {

                "Content-Type": "application/json"

            },


            body: JSON.stringify(student)


        })


        .then(response => response.json())


        .then(data=>{


    if(data.duplicate){


        let change = confirm(
        "You are already registered. Would you like to change your time slot?"
        );


        if(change){


            fetch(API + "/update",{


                method:"PUT",

                headers:{

                    "Content-Type":"application/json"

                },


                body:JSON.stringify(student)


            })


            .then(response=>response.json())


            .then(updateData=>{


                document.getElementById("message").innerHTML =
                updateData.message;


                form.reset();


            });



        }


        else{


            document.getElementById("message").innerHTML =
            "Your existing registration was kept.";


        }



    }


    else{


        document.getElementById("message").innerHTML =
        "✓" + data.message;


        if(data.message === "Registration successful"){

            form.reset();

        }


    }



})


        .catch(error => {


            console.log(error);


            document.getElementById("message").innerHTML =
            "Server error. Please try again.";

        });



    });



});




function showError(element) {

    element.classList.add("error");

}




function clearErrors() {


    document.querySelectorAll(".error")

    .forEach(function(field){


        field.classList.remove("error");


    });


}