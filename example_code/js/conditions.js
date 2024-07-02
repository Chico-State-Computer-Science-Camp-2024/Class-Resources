//These is a big list of conditions and the results being printed to the console.
console.log(true == true); //true
console.log(1 == 1); //true
console.log(1 == "1"); //true
console.log(1 === "1"); //false
console.log(1 != 2); //true
console.log(1 != 1); //false
console.log(1 !== "1"); //true
console.log(1 > 2); //false
console.log(1 < 2); //true
console.log(1 >= 2); //false
console.log(1 <= 2); //true
console.log(true && true); //true
console.log(true && false); //false
console.log(true || false); //true
console.log(false || false); //false
console.log(!true); //false
console.log(!false); //true

let x = "pepperoni";

//single condition if statement
if (x == "pineapple") {
  console.log("Yay, pizza!");
}

//if else statement
if (x == "pineapple") {
    console.log("Yay, pizza!");
    } else {
    console.log("No pizza for you!");
}

//if else if statement
if (x == "pineapple") {
    console.log("Yay, pizza!");
    } else if (x == "pepperoni") {
    console.log("Yay, pizza!");
    } else {
    console.log("No pizza for you!");
}