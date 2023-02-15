class Hamster {
  constructo(name) {
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

const createdPerson = new Person('Timmy');

createdPerson.ageUp();
createdPerson.ageUp();
createdPerson.ageUp();
createdPerson.ageUp();
createdPerson.ageUp();

createdPerson.eat();
createdPerson.eat();
createdPerson.eat();
createdPerson.eat();
createdPerson.eat();

createdPerson.exercise();
createdPerson.exercise();
createdPerson.exercise();
createdPerson.exercise();
createdPerson.exercise();

createdPerson.ageUp();
createdPerson.ageUp();
createdPerson.ageUp();
createdPerson.ageUp();

console.log(createdPerson);

const createdHamster = new Hamster("Gus");
createdHamster.owner = "Timmy";

createdPerson.buyHamster(createdHamster);


