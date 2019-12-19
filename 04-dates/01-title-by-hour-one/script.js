(function () {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    let d = new Date();
    //d.setHours(19); -> set the hour for testing purposes
    let currentHour = d.getHours(); //will get the hours as an integer between 0-23

    if (currentHour < 18) //If the time is before 18h
    {
        document.getElementById("target").innerHTML = "<i>Hello</i>";
        //gets the inner html of div with id target and changes content
    } else {
        document.getElementById("target").innerHTML = "<i>Good evening</i>";
        //cf. supra
    }

})();
