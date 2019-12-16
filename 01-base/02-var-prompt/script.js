let name = prompt("Please enter your name");

if (name == null || name =="") {
    txt = "user has cancelled the prompt";
}
else {
    txt = "Hello, " + name + "!";
}

alert(txt);