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
const favMovies = [
  'Jaws',
  'The Fellowship of the Ring',
  "Howl's Moving Castle",
  'Django Unchained',
  'Cloud Atlas',
  'The Usual Suspects',
  'Toy Story',
  'Conan the Barbarian',
  'Titanic',
  'Harry Potter',
  'Fried Green Tomatoes',
  'Volver',
  'Oculus',
  'Seven',
  'Black Panther',
  'Harry Potter',
  'Imitation of Life',
  'Snatch',
  'Fast and Furious',
];
let titanicIndex;
for (let i = 0; i < favMovies.length; i++) {
  if (favMovies[i] === 'Titanic') {
    titanicIndex = i;
  }
}
console.log(titanicIndex);
favMovies.sort();
/* convert elements into strings and then 
   compare their corresponding UTF-16 code vlaues then 
   order them ascendingly in place and return a reference to the same array.
   so, sort() is permanently alter the array
*/
console.log(favMovies.pop());
favMovies.push('Guardians of the Galaxy');
favMovies.reverse();
console.log(favMovies.shift());
console.log(favMovies.unshift('Home alone'));
/* 
 what does unshift method return?
 adds one or more elements to the beginning of an array 
 and returns the new length of the array. 
*/
const idx = favMovies.indexOf('Django Unchained');
favMovies.splice(idx, 1, 'Avatar');
/*
  slice() returns a new array of the sliced elements
  and doesn't alter the original array
*/
let midIndex = Math.floor((0 + favMovies.length) / 2);
let slicedArr = favMovies.slice(midIndex, favMovies.length);
console.log(slicedArr);

/*
  If the value is not contained in the array, the method returns -1
*/
const movieIdx = favMovies.indexOf('Django Unchained');
console.log(movieIdx);

/*
  when we declare an array with const, you're still allowed to change the array. 
  This is because when we change an element, we modify the referenced array, not the reference itself.
  meaning we don't reassign to the const variable.
*/
console.log(
  '%c-------------------Array Methods Sec is Done------------------',
  'color:orange'
);
////////////////////////////////
// Where is Waldo
////////////////////////////////

////////////////////////////////
//  Excited Kitten
////////////////////////////////

////////////////////////////////
//  Find the Median
////////////////////////////////
