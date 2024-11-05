const person = {
  name: "Rohit",
  greet() {
    console.log(`Hii I am ${this.name}`);
  },
};

person.greet();

const greetFunction = person.greet;

greetFunction();

const boundGreet = person.greet.bind({ name: "John Doe" });
boundGreet();

//Todo bind , call and apply
