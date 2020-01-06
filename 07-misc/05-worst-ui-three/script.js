/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const boton1 = document.getElementById("fix-part-one");//define the buttons as constants
    const boton2 = document.getElementById("fix-part-two");
    const boton3 = document.getElementById("fix-part-three");
    const boton4 = document.getElementById("fix-part-four");

    let output1 = document.getElementById("part-one");//define the fields as vriables
    let output2 = document.getElementById("part-two");
    let output3 = document.getElementById("part-three");
    let output4 = document.getElementById("part-four");

    let phonenr = document.getElementById("target");//target as variable

    boton1.onclick = function() {
        let minVal = document.getElementById("part-one").getAttribute("data-min");
        //define min and max value
        let maxVal = document.getElementById("part-one").getAttribute("data-max");
        output1.value = Math.floor(Math.random()*(499-460) + 460);
        phonenr.innerHTML = "0" + output1.value + output2.value + output3.value + output4.value;
    };

    boton2.onclick = function() {
        let minVal = document.getElementById("part-two").getAttribute("data-min");
        let maxVal = document.getElementById("part-two").getAttribute("data-max");
        output2.value = Math.floor(Math.random()*(maxVal-minVal) + minVal);
        if (output2.value < 10) {
            output2.value = "0" + output2.value;
        }
        phonenr.innerHTML = "0" + output1.value + output2.value + output3.value + output4.value;
    };

    boton3.onclick = function() {
        let minVal = document.getElementById("part-three").getAttribute("data-min");
        let maxVal = document.getElementById("part-three").getAttribute("data-max");
        output3.value = Math.floor(Math.random()*(maxVal-minVal) + minVal);
        if (output3.value < 10) {
            output3.value = "0" + output3.value;
        }
        phonenr.innerHTML = "0" + output1.value + output2.value + output3.value + output4.value;
    };

    boton4.onclick = function() {
        let minVal = document.getElementById("part-four").getAttribute("data-min");
        let maxVal = document.getElementById("part-four").getAttribute("data-max");
        output4.value = Math.floor(Math.random()*(maxVal-minVal) + minVal);
        if (output4.value < 10) {
            output4.value = "0" + output4.value;
        }
        phonenr.innerHTML = "0" + output1.value + output2.value + output3.value + output4.value;
    };
})();