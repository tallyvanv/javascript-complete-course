// to get the value of an input: document.getElementById("element-id").value (defined outside of function)

let a = +document.getElementById("op-one").value;
let b = +document.getElementById("op-two").value;

(function() {

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        alert(a+b);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        alert(a-b);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        alert(a*b);
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        alert(a/b);
    });
})();

