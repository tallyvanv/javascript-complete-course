
(function() {
    document.getElementById("run").addEventListener("click", function() {
        var fruits = [
            "apple",
            "pear",
            "raspberry",
            "tomatos",
            "kiwi",
            "banana",
            "orange",
            "mandarin",
            "durian",
            "peache",
            "grap",
            "cherry",
        ];
        let i;
        for (i=0; i < fruits.length; i++) {//iterate over array using for loop
            console.log(fruits[i]);//log results in console
        }
    });

})();
