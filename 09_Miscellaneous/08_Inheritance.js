// Inheritance

// Inheritance is a mechanism that allows us to create new classes on the basis of already existing classes.

class Person {
    constructor(name,age) {
        console.log("person class constructor");
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hi, I am ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, age, marks) {
        console.log("studnet class constructor");
        super(name,age); // parent class constructor is being called
        this.marks = marks;
    }

}
class Teacher extends Person {
    constructor (name, age, subject) {
        console.log("teacher class constructor");
        super(name,age);
        this.subject = subject;
    }
}

let stu1 = new Student("adam", 25, 95);
console.log(stu1);
console.log(stu1.talk());

let teach1 = new Teacher("Ahmed", 45, "Maths");
console.log(teach1);
console.log(teach1.talk());




// another example


class Mammal {  // base/parent class
  constructor(name) {
    this.name = name;
    this.type = "warm-blooded";
  }

  eat() {
    console.log("I am eating");
  }
}

class Dog extends Mammal {
  constructor(name) {
    super(name);
  }

    bark() {
    console.log("wooff..");
  }
    eat() {  // function overriding
    console.log("Dog is eating"); 
  }
}

class Cat extends Mammal {
  constructor(name) {
    super(name);
  }

  meow() {
    console.log("meow..");
  }
}

let dog1 = new Dog("tuffie");
console.log(dog1);
console.log(dog1.name);
console.log(dog1.bark());
console.log(dog1.eat());