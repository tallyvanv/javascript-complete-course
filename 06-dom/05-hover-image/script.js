/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let img = document.getElementsByTagName("img")[0];//select image in question
    let dataHover = img.attributes.getNamedItem("data-hover").value;//use variable for attribute value
    let noHover = img.attributes.getNamedItem("src").value;

    img.addEventListener("mouseover", function () {//trigger function on hover
        img.setAttribute("src", dataHover);//set attribute to variable 1
    });

    img.addEventListener('mouseout', function () {//trigger function on hover
        img.setAttribute("src", noHover);//set attribute back to variable 2
    })
})();
