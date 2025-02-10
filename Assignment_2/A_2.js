// 1. Declare a variable age and check if the person is an adult
let age = 25;
let isAdult = age >= 18; // Returns true if age is 18 or more, otherwise false

// 2. Perform arithmetic operations with x = 10 and y = 5
let x = 10;
let y = 5;

let addition = x + y; // Addition
let multiplication = x * y; // Multiplication
let modulus = x % y; // Modulus (remainder of x/y)

// 3. Check if a number n is even or odd
let n = 7; // Example number
let isEven = n % 2 === 0 ? "Even" : "Odd"; // Ternary operator to check even or odd

// 4. Store numbers from 1 to 5 in an array using a for loop
let numbersArray = [];
for (let i = 1; i <= 5; i++) {
  numbersArray.push(i);
}

// 5. Function to return the square of a number
function square(num) {
  return num * num;
}

// Testing the function
let squaredValue = square(4); // Should return 16

// Console logs for verification
console.log("Age:", age, "| Is Adult:", isAdult);
console.log(
  "Addition:",
  addition,
  "| Multiplication:",
  multiplication,
  "| Modulus:",
  modulus
);
console.log("Number:", n, "| Even or Odd:", isEven);
console.log("Numbers Array:", numbersArray);
console.log("Square of 4:", squaredValue);
