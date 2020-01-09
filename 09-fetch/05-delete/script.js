/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const path = "http://localhost:12345/_shared/api.json";
    async function inputHero() {
        const response = await fetch(path);
        const data = await response.json();
        console.log(data);

        let input;
        input = parseInt(document.getElementById("hero-id").value);
        // use splice to remove element
        //use findIndex to show first element where hero.id is equal to the input
        data.heroes.splice(data.heroes.findIndex(function split (hero) {
            return hero.id == input;
        }),1);
        console.log(data);
    }
    document.getElementById("run").onclick = function() {inputHero()};//trigger async function on click
})();
