////////////////////////////////
// Easy Going
////////////////////////////////
for (let i = 1; i <= 20; i++) {
  console.log(i);
}
console.log(
  '%c-------------------Easy Going is Done------------------',
  'color:orange'
);
////////////////////////////////
// Get Even
////////////////////////////////
for (let i = 0; i <= 200; i += 2) {
  console.log(i);
}
console.log(
  '%c-------------------Get Even is Done------------------',
  'color:orange'
);

////////////////////////////////
// Fizz Buzz
////////////////////////////////
let i = 0;
while (i >= 0) {
  i++;
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  }
  if (i === 100) {
    break;
  }
}
console.log(
  '%c-------------------Fizz Buzz is Done------------------',
  'color:orange'
);
////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ['Wolfy', 'wolf', 16, 'Yukon Territory'];
const sharky = ['Sharky', 'shark', 20, 'Left Coast'];
const plantee = ['Plantee', 'plant', 5000, 'Mordor'];
const porgee = ['Porgee', 'Porg', 186, 'Ahch-To'];
const dart = ["D'Art", 'Demogorgan Dog', 2, 'Upside Down'];

plantee[2] = 6000;
console.log(plantee);
wolfy[3] = 'Gotham City';
console.log(wolfy);
dart.push('Hawkins');
console.log(dart);
wolfy[0] = 'Gameboy';
console.log(wolfy);

console.log(
  '%c-------------------Wild Wild Life is Done------------------',
  'color:orange'
);
////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];
for (let turtle of ninjaTurtles) {
  turtle = turtle.toUpperCase();
  console.log(turtle);
}
console.log(
    '%c-------------------Yell at the Ninja Turtles is Done------------------',
    'color:orange'
  );
////////////////////////////////
// Methods, Revisited
////////////////////////////////

////////////////////////////////
// Where is Waldo
////////////////////////////////

////////////////////////////////
//  Excited Kitten
////////////////////////////////

////////////////////////////////
//  Find the Median
////////////////////////////////
