
(function () {
document.getElementById("run").addEventListener("click", function() {
    function factorFunc(num) {

        // Start for loop with i=num
        // Decrease i after each iteration of loop
        for (var i = num - 1; i >= 1; i--) {
            // Store the value of num at each iteration
            num = num * i; // or num *= i;
        }
        return num; //120
    }
    let inputNumber = document.getElementById("number").value;
    alert(factorFunc(inputNumber));
    });
})();