(function () {
    for (var i = 1; i < 101; i++) { //for loop that runs until 100
        if (i % 15 === 0) console.log("FizzBuzz"); //i % 15 === O means the number is dividable by both 5 and 3
        else if (i % 3 === 0) console.log("Fizz"); //number is dividable by just 3
        else if (i % 5 === 0) console.log("Buzz"); //number is dividable by just 5
        else console.log(i); //if none of these options are the case -> just display number
    }
})();