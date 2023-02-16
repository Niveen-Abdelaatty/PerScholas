// Timmy Buys a Hamster
class Hamster {
  constructor(name) {
    this.owner = '';
    this.name = name;
    this.price = 15;
  }
  wheelRun() {
    console.log('squeak squeak');
  }
  eatFood() {
    console.log('nibble nibble');
  }
  getPrice() {
    return this.price;
  }
}

class Person {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.height = 0;
    this.weight = 0;
    this.mood = 0;
    this.hamsters = [];
    this.bankAccount = 0;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  getWeight() {
    return this.weight;
  }
  greet() {
    console.log(`I am ${this.name} hello`);
  }
  eat() {
    this.weight++;
    this.mood++;
  }
  exercise() {
    this.weight--;
  }
  ageUp() {
    this.age++;
    this.height++;
    this.weight++;
    this.mood--;
    this.bankAccount += 10;
  }
  buyHamster(hamster) {
    this.hamsters.push(hamster);
    this.mood += 10;
    this.bankAccount -= hamster.getPrice();
  }
}

const timmy = new Person('Timmy');

const repeatAge = (count) => {
  for (let i = 0; i < count; i++) {
    timmy.ageUp();
  }
};
const repeatEat = (count) => {
  for (let i = 0; i < count; i++) {
    timmy.eat();
  }
};
const repeatExercise = (count) => {
  for (let i = 0; i < count; i++) {
    timmy.exercise();
  }
};

// repeatAge(5);
// repeatEat(5);
// repeatExercise(5);
// repeatAge(4);

// const gus = new Hamster('Gus');
// gus.owner = 'Timmy';

// timmy.buyHamster(gus);
// repeatAge(6);
// repeatEat(2);
// repeatExercise(2);
// console.log(timmy);

const count = (funcName, count) => {
  switch (funcName) {
    case 'age':
      for (let i = 0; i < count; i++) {
        timmy.ageUp();
      }
      break;
    case 'eat':
      for (let i = 0; i < count; i++) {
        timmy.eat();
      }
      break;
    case 'exercise':
      for (let i = 0; i < count; i++) {
        timmy.exercise();
      }
      break;
    default:
      break;
  }
};
count('age', 10);
console.log(timmy);

// Chef Makes Dinners
class Dinner {
  constructor(appetizer, entree, dessert) {
    this.appetizer = appetizer;
    this.entree = entree;
    this.dessert = dessert;
  }
}
class Chef {
  dinners = [];

  prepareDinner(appetizer, entree, dessert) {
    const dinner = new Dinner(appetizer, entree, dessert);
    this.dinners.push(dinner);
  }
}

const chef = new Chef();

chef.prepareDinner('shrimp', 'eggs', 'cookies'),
chef.prepareDinner('fish', 'bread', 'apple pie'),
chef.prepareDinner('chicken', 'rice', 'rice pudding');

console.log(chef.dinners);
