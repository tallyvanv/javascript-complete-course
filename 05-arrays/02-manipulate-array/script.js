/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    //trigger function on click
    document.getElementById("run").addEventListener("click", function() {
        var fruits = [//create array
            "pomme",
            "poire",
            "fraise",
            "tomate",
            "orange",
            "mandarine",
            "durian",
            "pêche",
            "raisin",
            "cerise",
        ];
        fruits.pop();//removes last element
        fruits.shift();//removes first element
        fruits.push("kiwi");//adds kiwi element to end
        fruits.unshift("banana");//adds banana element to beginning
        alert(fruits);

    });

})();
