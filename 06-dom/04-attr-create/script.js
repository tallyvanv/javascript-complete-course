(function() {

    let sauce = document.getElementById("source");//define the element that has the needed attribute
    let dataImage = sauce.attributes.getNamedItem("data-image").value;//get the value of the attribute
    let image = document.createElement("img");//create an image element
    let pictoir = document.getElementById("target").appendChild(image);//add image element to target element
    let att = document.createAttribute("src");//create attribute within img
    att.value = dataImage;//assign the necessary value extracted from element with id source
    pictoir.setAttributeNode(att);//add attribute to target element
    sauce.parentNode.removeChild(sauce);//remove source element

})();
