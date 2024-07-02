//these are two examples of data structures in JS: arrays and JSON objects
//There are more data structures in JS, but these are the most common ones

// Array example
const fruits = ['apple', 'banana', 'orange'];
console.log(fruits); 
//Element access
console.log(fruits[0]); // apple

// JSON example (javascript object notation)
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};
console.log(person); 
// Accessing properties
console.log(person.age); // 30

//looping through an array
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//another way to loop through an array
fruits.forEach(function(fruit) {
    console.log(fruit);
});

//looping through a JSON object
for (let key in person) {
    console.log(person[key]);
}

//another way to loop through a JSON object
Object.keys(person).forEach(function(key) {
    console.log(person[key]);
});