(function() {
    //generate random array with random numbers (random = between 0-1 so * 100)
    let myNumbers = [...Array(10)].map(() => Math.floor(Math.random() * 100));
    //trigger on click
    document.getElementById("run").addEventListener("click", function() {
        //iterate over entire array
        let i;
        for (i=1; i <= myNumbers.length; i++) {
            let cellId = 'n-' +i;
            document.getElementById(cellId).innerHTML = myNumbers[i-1];
        }
        const arrMax = myNumbers => Math.max(...arr);
    })
})();
