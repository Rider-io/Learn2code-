<h1> I'll be learning how to code the JS basics here </h1>

JS

 
   
```javascript
console.log("Hello, World!");


// Define a function that takes two parameters
function addNumbers(num1, num2) {
  // Add the two numbers together and store the result in a variable
  var sum = num1 + num2;
  // Return the result
  return sum;
}

// Call the function and pass in two numbers as arguments
var result = addNumbers(2, 3);

// Print the result to the console
console.log(result); // Output: 5


# Basic Functions

console.log(): This function is used to output text or values to the console.

console.log("Hello, World!");


alert(): This function is used to display an alert message to the user.

alert("This is an alert message!");


prompt(): This function is used to ask the user for input.

let name = prompt("What is your name?");
console.log("Hello, " + name + "!");




let randomNumber = Math.floor(Math.random() * 100);

function playGame() {
  let randomNumber = Math.floor(Math.random() * 100);

  // Get the user's guess.
  let userGuess = prompt("Guess a number between 0 and 100: ");

  // Check if the user guessed correctly.
  if (userGuess === randomNumber) {
    alert("You guessed correctly!");
  } else {
    alert("You guessed incorrectly. The correct number was " + randomNumber);
  }
}


</h2> Bouncy Ball  </h2>
 
 // This code creates a simple animated bouncing ball

var ball = {
  x: 50,
  y: 50,
  vx: 10,
  vy: 10
};

function update() 
  ball.x += ball.vx;
  ball.y += ball.vy;

  if (ball.x < 0 || ball.x > window.innerWidth) {
    ball.vx = -ball.vx;
  }

  if (ball.y < 0 || ball.y > window.innerHeight) {
    ball.vy = -ball.vy;
  }
}

window.addEventListener('mousemove', function(e) {
  ball.x = e.x;
});

setInterval(update, 20);
