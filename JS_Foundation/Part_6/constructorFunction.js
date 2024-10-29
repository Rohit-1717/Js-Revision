function Person(name , age){
    this.name = name,
    this.age =  age
}

function Car (make , model){
    this.make = make,
    this.model = model
}

let myCar = new Car("Toyoto" , "Legender")

// console.log(myCar);

let myNewCar = new Car("Tata", "Harrier")
// console.log(myNewCar)

function KidsToy(toy_name,color,price){
    this.toy_name = toy_name,
    this.color = color,
    this.price = price
}

let toy1 = new KidsToy("Truck" , "Red" , "1200")

// console.log(toy1);

let toy2 = new KidsToy("Car" , "Blue" , "999")

// console.log(toy2);

function Student(name , Class , roll_no , DOB , DOA){
    this.name = name,
    this.Class = Class,
    this.roll_no = roll_no,
    this.DOB = DOB ,
    this.DOA = DOA
}

let Student_1 = new Student("Anshuman" , 4 , "0501AIDS0008 " , "10-02-2003" , "15-09-2024")
let Student_2 = new Student("Pinky" , 10 , "0501CS00001 " , "11-03-2004" , "14-10-2023")

// console.log(Student_1)
// console.log(Student_2)


function Tea(tea_type){
    this.tea_type = tea_type,
    this.decription = function(){
        return `This is a cup of ${this.tea_type}.`
    }
}

let tea1 = new Tea("oolong Tea")
// console.log(tea1.decription())

function Animal(species){
    this.species = species
}

Animal.prototype.sound = function(){
    return `${this.species} makes a sound`
}

let dog = new Animal("Dog")
// console.log(dog.sound());

function Drink(name){
    if(!new.target){
        throw new Error("Drink must be called with new keyword");
    }

    this.name = name
}

let tea = new Drink("tea")

// let water = Drink("Water")

// console.log(tea);
// console.log(water);