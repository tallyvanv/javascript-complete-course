let age = prompt("What's your age?");
let gender = prompt("What is your gender?");
let town = prompt("In which town do you live?");

let confirmInfo = confirm("Confirm the following information? \n" + age + "\n" + gender + "\n" + town);

if (confirmInfo != true) {
    location.reload();
}
else {
    alert("Thank you for confirming!");
}