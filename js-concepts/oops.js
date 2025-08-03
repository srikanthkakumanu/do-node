class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  doSome() {
    console.log(`${this.name} is doing something and has an age of ${this.age}.`);
  }
};

class Walker extends Person {
  constructor(name, age, distance) {
    super(name, age);
    this.distance = distance;
  }

  doSome() {
    super.doSome();
    console.log(`${this.name} is walking a distance of ${this.distance} km.`);
  }
};

let person = new Person('John', 30);
person.doSome();
person = new Walker('Jane', 25, 5);

person.doSome();

