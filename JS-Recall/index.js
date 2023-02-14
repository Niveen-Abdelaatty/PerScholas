/*
	Remember!!! Once you’ve completed a problem,
	COMMENT OUT YOUR WORK before moving on to the next one.
	This makes it easier to read and debug the current 
	Solution you are working on.
*/

// I. Variables & Data Types
console.log('%c-------------------I. Variables & Data Types------------------', 'color:red')
// A. Q + A
/* 1. How do we assign a value to a variable? using assignment operator ( equals = ).
   2. How do we change the value of a variable? by reassigning a new value to the variable name.
   3. How do we assign an existing variable to a new variable? using equals sign - assignment operator
   4. Remind me, what are declare, assign, and define? 
		- declare used to allocate memory for storing coming data.
		- assign used to assign a value to this allocated memory. 
		- define step in JS does the same as assign step.
   5. What is pseudocoding and why should you do it?
		- pseudocoding is a way of coding relies on describing in details what the code should be using a text-based-language.
		- it's a beneficial step in some cases to provide a detailed template for each step of writing the code. helps in designing 
		  complex algorithms.
   6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
		I would say that I can spend 65% of time to uderstand the problem, identify the requirements and bounderies
		25% of time in implementation and 10%  in testing and debuging
*/

// B. Strings
console.log('%c-------------------B. Strings------------------', 'color:orange')
let firstVariable = "Hello World";
firstVariable = 25;
let secondVariable;
secondVariable = firstVariable; // just copy the value - still two different memory locations in the stack
secondVariable = "Shadow Coping";
console.log(firstVariable); // the output should be 25
console.log(secondVariable); // the output should be "Shadow Coping"
const yourName = 'Niveen';
console.log(`Hello, my name is ${yourName}`);

// C. Booleans
console.log('%c-------------------C. Booleans------------------', 'color:orange')
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false || false || false || false || false || true);
  console.log(false === false)
  console.log(e == 'Kevin');
  console.log(a * b > c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 == '48');

// D. The Farm
console.log('%c-------------------D. The Farm------------------', 'color:orange')
const animal = "cow";
if (animal === "cow"){
	console.log("mooooo" );
}else{
	console.log("Hey! You're not a cow.");
}
// E. Driver's Ed
//_____________________________________________________________

// II. Loops
// A. The Basics
// B. Get even
// C. Give me Five
// D. Savings account
//_____________________________________________________________

// III. Arrays & Control Flow
// A. Talk about it:
// B. Easy Does It
// C. Accessing elements
// D. Change values
// E. Mix It Up
// F. Biggie Smalls
// G. Monkey in the Middle
// H. What's in Your Closet?
//_____________________________________________________________

// IV. Functions
// A.
// B.
// C.
// D.
// E.
// F.
// G.
// H.
//_____________________________________________________________

// V. Objects
// A.
// B.
// C.
// D.
// E.
// F.
// G.
//_____________________________________________________________

// Extra
