let age = prompt("How old are you?");
age = Number(age);

if (age < 18) {
    console.log("Welcome, young apprentice!");
} else if (age >= 18) {
    console.log("Welcome, ancient One!");
}  else {
    console.log("Invalid input");
}