(function (string) {
    var options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'};
    let today = new Date();

    document.getElementById("target").innerHTML = today.toLocaleDateString("en-UK", options);

})();
