(function() {

    var fruits = [
        "apple",
        "perry",
        "strawberry",
        "tomato",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grapes",
        "cherry",
    ];
    document.getElementById("run").addEventListener("click", function() {
        if (fruits.includes("apple")) {//check if array includes "apple" with .includes method
            console.log("yes");//say yes if so
        }
        else {
            console.log("no");//say no if not so
        }
    })
})();
