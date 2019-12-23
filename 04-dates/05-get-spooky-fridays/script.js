(function () {
    document.getElementById("run").addEventListener("click", function () {
        let ourYears = Number(document.getElementById("year").value);

        function friday13(year) {
            for (let month = 0; month < 12; month++) {//goes over every month in given year
                let d = new Date(year, month, 13);//check the 13th of every month
                if (d.getDay() == 5) {//check if this 13 of the month is friday
                    let ourMonths = ["January", "February", "March", "April", "May", "June", "July", "August",
                        "September", "October", "November", "December"];
                    //convert numerical months to words
                    alert(ourMonths[Number(month)]);//trigger a pop-up with results
                }
            }
        }
        console.log(friday13(ourYears));//calculate results based on input
    })
})();