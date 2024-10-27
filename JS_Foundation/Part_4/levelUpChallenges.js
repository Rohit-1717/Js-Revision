/*
1. Write a `for loop` that loops through the array `["green tea" , "black tea" , "chai" , "oolong tea"]` and stops the loop when it finds "chai".
Store all the teas before `"chai"` in a new array named `selectedTeas`.
*/

let teaTyes = ["green tea", "black tea", "chai", "oolong tea"];

let selectedTeas = [];

// for (let i = 0; i < teaTyes.length; i++) {
//   if (teaTyes[i] === "chai") {
//     break;
//   }
//   selectedTeas.push(teaTyes[i]);
// }

// console.log(selectedTeas);

/*
2. Write a `for loop` that loops through the array `["London" , "New York" , "Paris" , "Berlin"]` and skips `"Paris"`.
Store the other cities in a new array named `visitedCities`.
*/

let cities = ["London", "New York", "Paris", "Berlin"];

let visitedCities = [];

for (let i = 0; i < cities.length; i++) {
  if (cities[i] === "paris" || cities[i] === "Paris") {
    continue;
  }

  visitedCities.push(cities[i]);
}
// console.log(visitedCities);

/*
3. Use a `for-of` loop to iterate through the array `[2,3,4,5]` and stop when the number `4` is found.
Store the numbers before `4` in a new array named `smallNumbers`.
*/

let numbers = [2, 3, 4, 5];

let smallNumbers = [];

for (const num of numbers) {
  if (num === 4) {
    break;
  }
  smallNumbers.push(num);
}

// console.log(smallNumbers);

/*
4. Use a `for-of loop` to iterate through the array `["chai" , "green tea" , "herbal tea" , "black tea"]` and skip `"herbal tea"`.
Store the other teas in an array named `prefferdTeas`.
*/

let teaTypes = ["chai", "green tea", "herbal tea", "black tea"];

let prefferdTeas = [];

for (const tea of teaTyes) {
  if (tea === "herbal tea") {
    continue;
  }

  prefferdTeas.push(tea);
}

// console.log(prefferdTeas);

/*


5. Use a `for-in` loop to loop through an object containing city populations.
Stop the loop when the population of `"Berlin" ` is found and store all the previous cities population in a new object named `cityPopulation`.

let cityPopulations = {
  "Lonon": 8900000,
  "New York": 8400000,
  "Paris": 2200000,
  "Berlin": 3500000
*/

let cityPopulation = {
  London: 8900000,
  Berlin: 3500000,
  "New York": 8400000,
  Paris: 2200000,
};

let cityNewPopulation = {};

for (const city in cityPopulation) {
  // Key = value
  if (city === "Berlin" || city === "berlin") {
    break;
  }

  cityNewPopulation[city] = cityPopulation[city];
}

// console.log(cityNewPopulation);

/*
6. Use a `for-in` loop to loop through an object containing city popoulations.
    Skip any city with a population below 3 million and store the rest in a new object named `largeCities`.

    let worldCities = {
      "London": 8900000,
      "New York": 8400000,
      "Paris": 2200000,
      "Berlin": 3500000
    }

*/

let worldCities = {
  London: 8900000,
  "New York": 8400000,
  Paris: 2200000,
  Berlin: 3500000,
};

let largeCities = {};

for (const city in worldCities) {
  if (worldCities[city] < 3000000) {
    continue;
  }

  largeCities[city] = worldCities[city];
}

// console.log(largeCities);

/*
7. Write a `for each` loop that iterates through the array `["green tea" , "chai" , "black tea" , "oolong tea"]`
    Stop the loop when "chai" is found and store all previous tea types in an array named `availableTeas`.

*/

let teaCollection = ["green tea", "chai", "black tea", "oolong tea"];

let availableTeas = [];

teaCollection.forEach(function (tea) {
  if (tea === "chai") {
    return;
  }

  availableTeas.push(tea);
});

// console.log(availableTeas);

/*
8. Write a `for each` loop that iterates through the array `["Berlin" , "London" , "Paris" , "New York"]`
    Skip `"London"` and store the other cities in a new array named `visitedCities`.
*/

let myCities = ["Berlin" , "London" , "Paris" , "New York"]

let traveledCities = [];

myCities.forEach((city)=>{
  if(city === "London"){
    return;
  }

  traveledCities.push(city);
})

// console.log(traveledCities);

/*
9. Write a `for loop that iterates through the array [2, 5, 7, 9]`.
    Skip the value `7` and multiply the rest by 2. Store the 
    result in a new array named `doubledNumbers`.
*/

let numberArray = [2, 5, 7, 9];

let doubledNumbers = [];

for(let i = 0;i < numberArray.length; i++ ){
  if(numberArray[i] === 7){
    continue;
  }

  doubledNumbers.push(numberArray [i] * 2) ;
}

// console.log(doubledNumbers);

/*
10. Use `for-of` loop to iterate through the array `["chai" , "green tea" , "black tea" , "jasmine tea" , "herbal tea"]`
    and stop when the length of the current tea name is greater than 10.
    Store the teas iterated over in an array named `shortTeas`.
*/

let teas = ["chai" , "green tea" , "black tea" , "jasmine tea" , "herbal tea"];

let shortTeas = [];

for (const tea of teas){
  if(tea.length > 10){
    break;
  }
  shortTeas.push(tea);
}

// console.log(shortTeas);
