let car = {
    make: "Mahindra",
    model: "Scorpio",
    year : 2024,

    start : function(){
        return `${this.make} car got started in ${this.year}`;
    }
}

// console.log(car.start());

function Person(name , age){
    this.name = name,
    this.age = age
}

let john = new Person("John Doe" , 23)
// console.log(john.name)


function Animal(type){
    this.type = type
}

Animal.prototype.speak = function(){
    return `${this.type} makes a sound`
}

Array.prototype.rohit = function(){
    return `Custom method ${this}`
}

let myArray = [1,2,3]

// console.log(myArray.rohit())



let myNewArray = [1,2,3,4,5,6]

// console.log(myNewArray.rohit())


//* Class

class Vehicle{
    constructor(make , model){
        this.make = make, 
        this.model = model
    }

    start(){
        return `${this.model} is a car from ${this.make}`;
    }
}

//* Inheritance

class Car extends Vehicle {
    drive(){
        return `${this.make}: This is an inheritance example`;
    }
}

let myCar = new Car("Toyota" , "Corolla");

// console.log(myCar.start())
// console.log(myCar.drive())

let vehicleOne = new Vehicle("Tata" , "Safari")

// console.log(vehicleOne.make)

//* Encapsulation

class BankAccount{
    #balance = 0;

    deposit(amount){
        this.#balance += amount;
        return this.#balance;
    }

    getBalance(){
        return `$ ${this.#balance}`
    }
}

let account = new BankAccount()

// console.log((account.getBalance()));

//* Abstraction

class CoffeMachine{
    start(){
        return `Starting the machine...`
    }

    brewCoffee(){
        return `Brewing Coffee`
    }

    pressStartButton(){
        let msg1 = this.start();
        let msg2 = this.brewCoffee();
        return `${msg1} + ${msg2}`;
    }
}

let myMachine = new CoffeMachine()
// console.log(myMachine.start())
// console.log(myMachine.brewCoffee())
// console.log(myMachine.pressStartButton())



//* Polymorphism 
class Bird{
    fly(){
        return `Flying....`
    }
}

class Penguin extends Bird {
    fly(){
        return `Penguins can't fly.`
    }
}

let bird = new Bird();

let penguin = new Penguin();

// console.log(bird.fly());
// console.log(penguin.fly());

//* static method

class Calculator{
    static add(a , b){
        return a + b; 
    }
}

// let miniCalc = new Calculator()
// console.log(miniCalc.add(2,3));

// console.log(Calculator.add(3,4));


//* Getters and Setters

class Employee{
    #salary;

    constructor(name , salary ){
        if(salary > 0){
            throw new Error("Salary cannot be in negative.")
        }
        this.name = name
        this.#salary = salary
    }

    get salary(){
        return `You are not allowed to see salary!!`;
    }

    set salary(value){
        if(value < 0){
            console.error("Invalid Salary")
        }else{
            this._salary = value;
        }
    }
}

let emp = new Employee("Alice",-500000)

console.log(emp._salary);
emp.salary =- 60000