/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
       let x =  Math.floor(Math.random()*100);
       console.log(x);
       let guess;
       let attempts = 1;

    while (parseInt(guess) !== x) {
        guess = prompt("Guess the number between 1-100");
        if (parseInt(guess) < x) {
            alert("guess higher");
            attempts++;
        }
        else if (parseInt(guess) > x) {
            alert("guess lower");
            attempts++;
        }
    }
    alert("good job, you needed " + attempts + " guesses");

})();
