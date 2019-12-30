/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("pass-one").maxLength = 10;//set max length of DOM element
    document.getElementById("pass-one").addEventListener("keydown", function() {
        //trigger function when key down within element
        document.getElementById("counter").innerHTML = document.getElementById("pass-one").value.length + "/10";
        //the counter will display the length of the input value
    })
})();
