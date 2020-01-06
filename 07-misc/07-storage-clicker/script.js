/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

        let boton = document.getElementById("increment");

        let output = document.getElementById("target");

        boton.addEventListener("click", function (){
            output.innerHTML++;
            //increase counter
            localStorage.setItem("numUpdate", output.innerHTML);
            //save counter in local storage
        });

        output.innerHTML = localStorage.getItem("numUpdate");
        //retrieve number in counter from local storage
})();
