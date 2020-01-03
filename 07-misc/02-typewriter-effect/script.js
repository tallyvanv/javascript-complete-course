/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let i = 0;
    let txt = document.getElementById("target").innerHTML; //get the text
    let speed = Math.round(Math.random() * 500); //random speed

    document.getElementById("target").innerHTML="";//empty element to put in text

    function typeWriter() {
        if (i < txt.length) {//go over each character in text
            document.getElementById("target").innerHTML += txt.charAt(i);//add each character at index
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();//initiate function
})();
