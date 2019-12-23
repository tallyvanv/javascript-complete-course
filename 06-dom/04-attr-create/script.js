(function() {

    let sauce = document.getElementById("source");
    let dataImage = sauce.attributes.getNamedItem("data-image").value;
    let image = document.createElement("img");
    let pictoir = document.getElementById("target").appendChild(image);
    let att = document.createAttribute("src");
    att.value = dataImage;
    pictoir.setAttributeNode(att);
    sauce.parentNode.removeChild(sauce);

})();
