

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    let d = new Date();
/*    d.setHours(19); //-> set the hour for testing purposes
    d.setMinutes(30); //=> set the minutes for testing purposes*/
    let currentHour = d.getHours(); //will get the hours as an integer between 0-23
    let currentMinutes = d.getMinutes(); //will het the minutes between 0-59

    if (currentHour >= 17 && currentMinutes >= 30)
        //If the time is after 17 and minutes bigger than 30 (i.e. it's after 17.30)
    {
        document.getElementById("target").innerHTML = "<i>Good evening</i>";
        //gets the inner html of div with id target and changes content
    } else {
        document.getElementById("target").innerHTML = "<i>Hello</i>";
        //cf. supra
    }

})();
