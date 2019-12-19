(function() {

    let today = new Date();
    let todayDate = today.toLocaleDateString();
    let todayFormatted = DateFormatter.format();

    document.getElementById("target").innerHTML = today.toLocaleDateString();

})();
