(function (string) {
    let options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'};
    //these options decide how each date component will be displayed
    let today = new Date();//create date variable

    document.getElementById("target").innerHTML = today.toLocaleDateString("en-UK", options);
    //convert date variable to string with the aforementioned options, in UK format

})();
