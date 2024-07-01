let x = 100;

for(let i = 0; i <= x; i++) {
    if (i % 5 === 0 && i % 10 === 0) {
        console.log("Fizzbuzz");
    } else if (i % 5 === 0) {
        console.log("Fizz");
    } else if (i % 10 === 0) {
        console.log("buzz");
    } else {
        console.log(i);
    }
}