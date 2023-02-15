/*
	Remember!!! Once you’ve completed a problem,
	COMMENT OUT YOUR WORK before moving on to the next one.
	This makes it easier to read and debug the current 
	Solution you are working on.
*/

// I. Variables & Data Types
console.log(
  '%c-------------------I. Variables & Data Types------------------',
  'color:blue'
);
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
console.log(
  '%c-------------------B. Strings------------------',
  'color:orange'
);
let firstVariable = 'Hello World';
firstVariable = 25;
let secondVariable;
secondVariable = firstVariable; // just copy the value - still two different memory locations in the stack
secondVariable = 'Shadow Coping';
console.log(firstVariable); // the output should be 25
console.log(secondVariable); // the output should be "Shadow Coping"
const yourName = 'Niveen';
console.log(`Hello, my name is ${yourName}`);

// C. Booleans
console.log(
  '%c-------------------C. Booleans------------------',
  'color:orange'
);
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
console.log(false === false);
console.log(e == 'Kevin');
console.log(a * b > c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');

// D. The Farm
console.log(
  '%c-------------------D. The Farm------------------',
  'color:orange'
);
const animal = 'cow';
if (animal === 'cow') {
  console.log('mooooo');
} else {
  console.log("Hey! You're not a cow.");
}

// E. Driver's Ed
console.log(
  '%c-------------------E. Drivers Ed------------------',
  'color:orange'
);
const personAge = 25;
if (personAge >= 16) {
  console.log('Here are the keys!');
} else {
  console.log("Sorry, you're too young.");
}
//_____________________________________________________________

// II. Loops
console.log('%c-------------------II. Loops------------------', 'color:blue');
// A. The Basics
console.log(
  '%c-------------------A. The Basics------------------',
  'color:orange'
);
console.log('loop No. A-1');
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
console.log('loop No. A-2');
for (let i = 10; i <= 400; i++) {
  console.log(i);
}
console.log('loop No. A-3');
for (let i = 12; i <= 4000; i = i + 3) {
  console.log(i);
}
// B. Get even
console.log(
  '%c-------------------B. Get even------------------',
  'color:orange'
);
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i + '<-- is an even number');
  } else {
    console.log(i);
  }
}
// C. Give me Five
console.log(
  '%c-------------------C. Give me Five------------------',
  'color:orange'
);
let i = 0;
while (i >= 0) {
  i++;
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('I found a ' + i + ' Three is a crowd ' + ' High five');
  } else if (i % 3 === 0) {
    console.log('I found a ' + i + ' Three is a crowd');
  } else if (i % 5 === 0) {
    console.log('I found a ' + i + ' High five');
  }
  if (i === 100) {
    break;
  }
}
// D. Savings account
console.log(
  '%c-------------------D. Savings account------------------',
  'color:orange'
);
let bank_account = 0;
for (let i = 1; i <= 10; i++) {
  bank_account += i;
}
console.log('the sum of all nums from 1-10 is ' + bank_account);
//_____________________________________________________________

let payBalance = 0;
for (let i = 1; i <= 100; i++) {
  payBalance += i;
}
console.log('the sum of all nums from 1-100 doubled by 2 is ' + payBalance * 2);
//_____________________________________________________________
// III. Arrays & Control Flow
console.log(
  '%c-------------------III. Arrays & Control Flow------------------',
  'color:blue'
);

// A. Talk about it:
/* What are the things in an array called? are elements.
   Do Arrays guarantee those things will be in order? NO. it doesn't
   What real-life thing could you model with an array? eggs carton
*/
// B. Easy Does It
console.log(
  '%c-------------------B. Easy Does It------------------',
  'color:orange'
);
const quotes = [
  'It didn’t matter how big our house was; it mattered that there was love in it.',
  'Family means nobody gets left behind or forgotten.',
  'We may have our differences, but nothing’s more important than family.',
];
console.log(quotes);
// C. Accessing elements
console.log(
  '%c-------------------C. Accessing elements------------------',
  'color:orange'
);
const randomThings = [1, 10, 'Hello', true];
console.log('the first element ' + randomThings[0]);
randomThings[2] = 'World';
console.log('index 2 updated to ' + randomThings[2]);

// D. Change values
console.log(
  '%c-------------------D. Change values------------------',
  'color:orange'
);
const ourClass = ['Salty', 'Zoom', 'Sardine', 'Slack', 'Github'];
console.log('the 3rd element ' + ourClass[2]);
ourClass[4] = 'Octocat';
ourClass.push('Cloud City');
console.log(ourClass);

// E. Mix It Up
console.log(
  '%c-------------------E. Mix It Up------------------',
  'color:orange'
);
const myArray = [5, 10, 500, 20];
myArray.push('Aegon');
myArray.push('Ended');
myArray.shift();
myArray.unshift('Bob Marley');
myArray.pop();
console.log(myArray);
const returnValue = myArray.reverse(); // reverse in place, doesn't copy the array
console.log(returnValue);
/* Did you mutate the array? Yes
   What does mutate mean? changing the original array
   Did the .reverse() method return anything? return the same array but reversed
 */

// F. Biggie Smalls
console.log(
  '%c-------------------F. Biggie Smalls------------------',
  'color:orange'
);
const num = 100;
if (num < 100) {
  console.log('little number');
} else {
  console.log('big number');
}
// G. Monkey in the Middle
console.log(
  '%c-------------------G. Monkey in the Middle------------------',
  'color:orange'
);
const checkTheNumber = 0;
if (checkTheNumber > 10) {
  console.log('big number');
} else if (checkTheNumber < 5) {
  console.log('little number');
} else {
  console.log('monkey');
}

// H. What's in Your Closet?
console.log(
  '%c-------------------H. Whats in Your Closet?------------------',
  'color:orange'
);
const kristynsCloset = [
  'left shoe',
  'cowboy boots',
  'right sock',
  'Per Scholas hoodie',
  'green pants',
  'yellow knit hat',
  'marshmallow peeps',
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    'grey button-up',
    'dark grey button-up',
    'light blue button-up',
    'blue button-up',
  ],
  [
    // These are Thom's pants
    'grey jeans',
    'jeans',
    'PJs',
  ],
  [
    // Thom's accessories
    'wool mittens',
    'wool scarf',
    'raybans',
  ],
];
console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`);
kristynsCloset.splice(5, 1, 'yellow knit hat', 'raybans');
kristynsCloset[5] = 'stained knit hat';
console.log(thomsCloset[0][0]);
console.log(thomsCloset[1][0]);
console.log(thomsCloset[2][0]);
console.log(
  `Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][0]} and ${thomsCloset[2][0]}!`
);
thomsCloset[1][2] = 'Footie Pajamas';

//_____________________________________________________________

// IV. Functions
console.log(
  '%c-------------------IV. Functions------------------',
  'color:blue'
);

// A.
function printGreeting(name) {
  console.log(`Hello there, ${name}`);
}
console.log(printGreeting('Slimer'));

// B.
function printCool(name) {
  console.log(`${name} is cool`);
}
console.log(printCool('Captain Reynolds'));

// C.
function calculateCube(side) {
  const cubeVolume = Math.pow(side, 3);
  return cubeVolume;
}
console.log(calculateCube(5));

// D.
function isVowel(char) {
  char = char.toLowerCase();
  let vowels = ['o', 'u', 'i', 'a', 'e'];
  for (const vowel of vowels) {
    if (char === vowel) {
      return true;
    }
  }
  return false;
}
console.log(isVowel('a'));
console.log(isVowel('A'));
console.log(isVowel('F'));

// E.
function getTwoLengths(firstParam = '', secondParam = '') {
  let lengthArr = [firstParam.length, secondParam.length];
  return lengthArr;
}
console.log(getTwoLengths('Hank', 'Hippopopalous'));

// F.
function getMultipleLengths(arr) {
  let lengthsArr = [];
  for (let i = 0; i < arr.length; i++) {
    lengthsArr.push(arr[i].length);
  }
  return lengthsArr;
}
console.log(getMultipleLengths(['hello', 'what', 'is', 'up', 'dude']));

// G.
function maxOfThree(...numbers) {
  let maxNum = numbers[0];
  numbers.forEach((number) => {
    if (number > maxNum) {
      maxNum = number;
    }
  });
  return maxNum;
}
console.log(maxOfThree(6, 9, 1));
console.log(maxOfThree(9, 9, 9, 9));

// H.
function printLongestWord(array) {
  let longestWord = '';
  array.forEach((str) => {
    if (str.length > longestWord.length) {
      longestWord = str;
    }
  });
  return longestWord;
}
console.log(
  printLongestWord([
    'BoJack',
    'Princess',
    'Diane',
    'a',
    'Max',
    'Peanutbutter',
    'big',
    'Todd',
  ])
);
//_____________________________________________________________

// V. Objects
// A.
let user = {
  name: 'Niveen',
  email: 'niveen@yahoo.com',
  age: '45',
  purchased: []
}

// B.
user.email = 'niveen@google.com';
console.log(user);
user.age++;
console.log(user);

// C.
user.location = 'pittsburgh';

// D.
user.purchased.push("carbohydrates");
user.purchased.push("peace of mind");
user.purchased.push("Merino jodhpurs");

console.log(user.purchased[2]);

// E.
user.friend = {
  name: "Grace Hopper",
  age: 85,
}
user.friend.location = 'columbus';
user.friend.purchased = [];
console.log(user.friend.name);
console.log(user.friend.location);
user.friend.age = 55;
user.friend.purchased.push("The One Ring");
user.friend.purchased.push("A latte");
console.log(user.friend.purchased[1]);

// F.
for(let element of user.purchased){
  console.log(element);
}
for(let element of user.friend.purchased){
  console.log(element);
}

// G.
function updateUser(){
  user.age++;
  user.name.toUpperCase();
}
function oldAndLoud(person){
  person.age++;
  person.name = person.name.toUpperCase();
}
oldAndLoud(user);
console.log(user);
//_____________________________________________________________

// Extra
