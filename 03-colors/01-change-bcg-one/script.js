
(function() {
    //event triggered on click
    document.getElementById("red").addEventListener("click", function(){
        //change body style background to respective color
        document.body.style.backgroundColor = "red";
    });
    document.getElementById("green").addEventListener("click", function(){
        document.body.style.backgroundColor = "green";
    });
    document.getElementById("yellow").addEventListener("click", function(){
        document.body.style.backgroundColor = "yellow";
    });
    document.getElementById("blue").addEventListener("click", function(){
        document.body.style.backgroundColor = "blue";
    });
})();