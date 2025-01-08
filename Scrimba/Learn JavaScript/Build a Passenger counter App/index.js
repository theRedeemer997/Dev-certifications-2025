let count = 0;
document.getElementById("count-el").innerText = count;

function incrementCount() {
  count++;
  document.getElementById("count-el").innerText = count;
}

console.log(count);

//task 1
//console.log(myAge); this gives us a erro using let before declaring it
// 1. Create a variable, myAge, and set its value to your age
//let myAge = 25;
// 2. Log the myAge variable to the console
//console.log(myAge);

//task 3
// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// let bonusPoints = 50;
// console.log(bonusPoints);
// bonusPoints = bonusPoints + 50;
// console.log(bonusPoints);
// Decrease it down to 25, and then finally increase it to 70
// bonusPoints = bonusPoints - 75;
// console.log(bonusPoints);
// bonusPoints = bonusPoints + 45;
// console.log(bonusPoints);
// Console.log the value after each step

//Scope

//Global scope -- the variables that are initialized globally can be used inside the function but it is not the case other way round
// Look at the example below:
//the global variables can be accessed inside the function but the
// the local variable called the totaltime cannot be accessed outside the function
//this is what scope means

//let lap1 = 34;
//let lap2 = 33;
//let lap3 = 36;

// Create a function that logs out the sum of all the lap times

// function logLapTime() {
//   let totalTime = lap1 + lap2 + lap3;
//   console.log(totalTime);
// }

// console.log(totalTime);

let lapsCompleted = 0;
// // Create a function that increments the lapsCompleted variable with one
function incrementLaps() {
  lapsCompleted++;
}

// // Run it three times
incrementLaps();
incrementLaps();
incrementLaps();

// if the lapsCompleted is not initialized global and is a local variable and if you use the
// variable outside the function it will give you an error called "index.js:63 Uncaught ReferenceError: lapsCompleted is not defined"

// to avoid  the condition what one can do is initializee the variable globally and then
// use it inside the function and then use it outside the function
console.log(lapsCompleted);

function save() {
  console.log("saved..");
}

/*---------------------------------*/
//String and String concatenatio
let name = 42;
let greeting = "10" + name;

// in this case the string always wins and hence the string concaternation
// takes place and hence the output will be 1042 and not 52

console.log(greeting);

console.log(4 + 5); //9
console.log("2" + "4"); //24
console.log("5" + 1); //51
console.log(100 + "100"); //100100
