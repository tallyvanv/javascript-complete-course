/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const targetPlace = document.getElementById("target");
    const path = "http://localhost:12345/_shared/api.json";

    async function inputHero() {
        const response = await fetch(path);
        const data = await response.json();
        console.log(data);
        const target = document.getElementById("tpl-hero");
      //use async function so data gets got when ready
        for (let i=0; i <data.heroes.length; i++) {//iterate over elements in hero array
            let newClone = target.content.cloneNode(true);
            //create function to clone nodes in tamplate
            newClone.querySelector(".name").innerHTML = data.heroes[i].name;
            newClone.querySelector(".alter-ego").innerHTML = data.heroes[i].alterEgo;
            newClone.querySelector(".powers").innerHTML = data.heroes[i].abilities;

            targetPlace.appendChild(newClone);//append created clone to target ID
        }
    }

    document.getElementById("run").onclick = function() {inputHero()};

})();
