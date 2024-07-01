// Loop through an array
const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
    // Access each element in the array
    const element = array[i];
    
    // Perform some operation on the element
    const result = element * 2;
    
    // Print the result
    console.log(result);
}

// Loop through an object
const object = { a: 1, b: 2, c: 3 };
for (const key in object) {
    // Access each key-value pair in the object
    const value = object[key];
    
    // Perform some operation on the value
    const result = value * 2;
    
    // Print the result
    console.log(result);
}

// Loop using forEach method
array.forEach((element) => {
    // Perform some operation on each element
    const result = element * 2;
    
    // Print the result
    console.log(result);
});

// A loop that is inside another loop. This is called a nested loop.
for ( let i = 0; i < array.length; i++) {
    for( let j = 0; j < array.length; j++) {
        console.log(array[i], array[j])
    }
}

// while loop
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// do-while loop
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);