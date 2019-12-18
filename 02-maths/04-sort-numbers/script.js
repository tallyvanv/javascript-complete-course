

(function () {
    let numberList = (document.getElementById("numbers").value);
    let numberArray = numberList.split(",");

    document.getElementById("run").addEventListener("click", function() {
        alert(numberArray.sort(function(a, b){return a-b}))
    });
})();