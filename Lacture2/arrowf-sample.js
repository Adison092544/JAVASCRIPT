// Arrow function with two argument
const sum = (firstParam, secondParam) => {
    return firstParam + secondParam;
};
console.log(sum(2,5)); // Print: 7

//Arrow function with no argument
const printHello = () => {
    console.log("hello");
};
printHello(); // Print: hello

//Arrow function with a single argument
const checkWeight = (weight) => {
    console.log(`Baggage weight : ${weight} kilograms.`);
};
checkWeight(25); // Prints : Baggage weight : 25 kilograms.

// Concise arrow functions
const multiply = (a,b) => a*b;
console.log(multiply(2,30)); // Prints: 60