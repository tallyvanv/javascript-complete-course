(function() {
    document.getElementById("run").addEventListener("click", function () {
        let _13Year = +document.getElementById("year").value;
       function friday13 () {
           for (let month = 0; month < 12; month++) {//goes over every month in given year
               let d = new Date(_13Year, month, 13);//check the 13th of every month
               let count = 0;
               if (d.getDay() == 5) {//check if this 13 of the month is friday
                   alert(month + 1);
                   count++;
               }
               return count;
           }
       }
    });
})();
