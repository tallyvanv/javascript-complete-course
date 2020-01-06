/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const boton1 = document.getElementById("part-one");//define the buttons as constants
    const boton2 = document.getElementById("part-two");
    const boton3 = document.getElementById("part-three");
    const boton4 = document.getElementById("part-four");

    let phonenr = document.getElementById("target");

    boton1.onclick = function() {
        let output1 = (parseInt(boton1.innerText++));
        phonenr.innerHTML = "0" + boton1.innerHTML + boton2.innerHTML + boton3.innerHTML + boton4.innerHTML;
    };

    boton2.onclick = function() {
        let output2 = (parseInt(boton2.innerText++));
        if (output2 < 9) {
            boton2.innerHTML = "0" + boton2.innerText;
        }
        phonenr.innerHTML = "0" + boton1.innerHTML + boton2.innerHTML + boton3.innerHTML + boton4.innerHTML;
    };

    boton3.onclick = function() {
        let output3 = (parseInt(boton3.innerText++));
        if (output3 < 9) {
            boton3.innerHTML = "0" + boton3.innerText;
        }
        phonenr.innerHTML = "0" + boton1.innerHTML + boton2.innerHTML + boton3.innerHTML + boton4.innerHTML;
    };

    boton4.onclick = function() {
        let output4 = (parseInt(boton4.innerText++));
        if (output4 < 9) {
            boton4.innerHTML = "0" + boton4.innerText;
        }
        phonenr.innerHTML = "0" + boton1.innerHTML + boton2.innerHTML + boton3.innerHTML + boton4.innerHTML;
    };
})();