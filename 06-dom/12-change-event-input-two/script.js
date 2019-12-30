/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("pass-one").addEventListener("keydown", function() {
        let numbers = /\d/g;//define a digit regExp
        if (document.getElementById("pass-one").value.length >= 8//string longer than 8 characters
            && document.getElementById("pass-one").value.match(numbers)) {
            //use match to check if string contains numbers
            document.getElementById("validity").innerHTML = "ok";
            //change span to ok
        }
        else {
            document.getElementById("validity").innerHTML = "not ok";
            //if the condition is not met: "not ok"
        }
    })
})();
