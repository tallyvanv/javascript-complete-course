(function() {
    //generate random array with random numbers (random = between 0-1 so * 100)
    let myNumbers = [...Array(10)].map(() => Math.floor(Math.random() * 100));
    //trigger on click
    document.getElementById("run").addEventListener("click", function() {
        //iterate over entire array (starting from 1 cause of the id's starting at n-1)
        let i;
        for (i=1; i <= myNumbers.length; i++) {
            let cellId = 'n-' +i;//iterate over different id's n-1...
            document.getElementById(cellId).innerHTML = myNumbers[i-1];//populate the cells with numbers
        }
        document.getElementById("min").innerHTML = Math.min(...myNumbers);//smallest number
        document.getElementById("max").innerHTML = Math.max(...myNumbers);//biggest number
        function getSum(total, num) {
            return total + Math.round(num);//formula for sum
        }
        document.getElementById("sum").innerHTML = myNumbers.reduce(getSum, 0);//populate html with sum
        document.getElementById("average").innerHTML = (myNumbers.reduce(getSum, 0))/myNumbers.length;
    })
})();
