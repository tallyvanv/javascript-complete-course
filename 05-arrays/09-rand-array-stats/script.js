(function() {
    //generate random array with random numbers (random = between 0-1 so * 100)
    let myNumbers = [...Array(10)].map(() => Math.floor(Math.random() * 100));
    //trigger on click
    document.getElementById("run").addEventListener("click", function() {
        //iterate over entire array
        for (i=0; i < myNumbers.length; i++) {

        }
    })

})();
