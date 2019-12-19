(function() {
    //run function on click
    document.getElementById("run").addEventListener("click", function() {
        let dobDay = document.getElementById("dob-day").value;//get day from selected value
        let dobMonth = document.getElementById("dob-month").value;//get month from selected value
        let dobYear = document.getElementById("dob-year").value;//get year from selected value
        let today = new Date();//today's date to compare to
        let age = today.getFullYear() - dobYear;//age by checking difference of year of birth to current year
        let m = today.getMonth() - dobMonth;
        //declare variable for month difference to take into account when calculating years
        if (m < 0 || (m === 0 && today.getDate() < dobDay)) {//check if someone's birthday is earlier than today's date
            //if month gets in negative or we're in birthday month but day of birth hasn't happened yet
            age--;//age decreases if birthday hasn't happened yet
        }
        alert("Your age is: " + age);//show age
    });
})();
