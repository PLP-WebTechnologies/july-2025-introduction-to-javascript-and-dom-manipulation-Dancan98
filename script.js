
// Mastering JavaScript Fundamentals
// Author: Your Name
// Date: Today
// This script covers variables, conditionals, functions, loops, and DOM manipulation.

// ----------------------------
// Part 1: Variables and Conditionals
// ----------------------------

// Variable declaration
let userName = "Dancan";  // You can change this or prompt for input

// Conditional to check time of day (simple example)
let hour = new Date().getHours();
let greetingMessage;

if (hour < 12) {
    greetingMessage = `Good morning, ${userName}!`;
} else if (hour < 18) {
    greetingMessage = `Good afternoon, ${userName}!`;
} else {
    greetingMessage = `Good evening, ${userName}!`;
}

// Output the greeting on the webpage
document.getElementById("greeting").textContent = greetingMessage;


// ----------------------------
// Part 2: Functions
// ----------------------------

// Function 1: Calculate total price with tax
function calculateTotal(price, taxRate) {
    return price + price * taxRate;
}

// Function 2: Format a string to title case
function toTitleCase(str) {
    return str
        .toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

// Use the functions and display output
let total = calculateTotal(50, 0.07);  // $50 with 7% tax
let formattedTitle = toTitleCase("hello world from javascript");

document.getElementById("function-output").innerHTML = `
    Total price (with tax): $${total.toFixed(2)}<br/>
    Title Case Example: ${formattedTitle}
`;


// ----------------------------
// Part 3: Loops
// ----------------------------

// Loop 1: For loop - generate numbers 1 to 5
let loopList = document.getElementById("loop-list");
for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = `Number ${i}`;
    loopList.appendChild(li);
}

// Loop 2: while loop - countdown from 5
let countdown = 5;
let countdownText = document.createElement("p");
countdownText.textContent = "Countdown: ";
while (countdown > 0) {
    countdownText.textContent += countdown + " ";
    countdown--;
}
document.getElementById("part3").appendChild(countdownText);


// ----------------------------
// Part 4: DOM Manipulation
// ----------------------------

// DOM Interaction 1: Toggle text color on button click
const toggleButton = document.getElementById("toggle-button");
const toggleText = document.getElementById("toggle-text");

toggleButton.addEventListener("click", () => {
    toggleText.classList.toggle("red");
});

// DOM Interaction 2: Show user input on button click
const inputButton = document.getElementById("show-input");
const userInput = document.getElementById("user-input");
const inputOutput = document.getElementById("input-output");

inputButton.addEventListener("click", () => {
    inputOutput.textContent = `You typed: ${userInput.value}`;
});

// DOM Interaction 3: Add item to list dynamically
const addItemButton = document.getElementById("add-item");
const dynamicList = document.getElementById("dynamic-list");

addItemButton.addEventListener("click", () => {
    let newItem = document.createElement("li");
    newItem.textContent = `Item ${dynamicList.children.length + 1}`;
    dynamicList.appendChild(newItem);
});

