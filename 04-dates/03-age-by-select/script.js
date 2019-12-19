/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById("run").addEventListener("click", function() {
        let dobDay = document.getElementById("dob-day").value;
        let dobMonth = document.getElementById("dob-month").value;
        let dobYear = document.getElementById("dob-year").value;
        let today = new Date();
        let age = today.getFullYear() - dobYear;
        let m = today.getMonth() - dobMonth;
        if (m < 0 || (m === 0 && today.getDate() < dobDay)) {
            age--;
        }
        alert("Your age is: " + age);
    });
})();
