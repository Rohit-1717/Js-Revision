/*
1. Declare an array of named 'teaFlavours' that contains the String "green tea" , "black tea", and "oolong tea".
 Access the first element of the array and store it in a variable named 'firstTea'.
*/

let teaFlavours = ["green tea", "black tea", "oolong tea"];

let teaFlav = new Array("green tea", "black tea", "oolong tea");

// console.log(teaFlavours);

let firstTea = teaFlavours[0];
// console.log(firstTea);

/*
2. Declare an array named 'cities' containing "London","Tokyo","Bejing","New Delhi","New York".
Access the third element of the array and store it in a variable named 'favouriteCity'.
*/

let cities = ["London", "Tokyo", "Bejing", "New Delhi", "New York"];

let favouriteCity = cities[2];
// console.log(favouriteCity);

/*
3. You have an array named 'teaTypes' containing `"herbal tea" , "white tea" , and "masala tea"`.
   Change the second element of the array to "Jasmine tea".
*/

let teaTypes = new Array("herabal tea", "white tea", "masala tea");

// console.log(teaTypes);

teaTypes[1] = "Jasmine tea";

// console.log(teaTypes);

/*
4. Declare an array named 'citiesVisited' containing "Mumbai" and "Sydney".
Add "Berlin" to the array using the `push` method.
*/

let citiesVisited = new Array("Mumbai", "Sydney");
citiesVisited.push("Berlin");

// console.log(citiesVisited);

/*
5. You have an array named `teaOrders` with `"Chai"` , `"Ice tea" , "matcha" , "earl grey"`.
Remove the last element from the array using the `pop` method and store it in a variable named 'lastOrder'.
*/

let teaOrders = new Array("Chai", "Ice tea", "matcha", "earl grey");

let lastOrder = teaOrders.pop();

// console.log(teaOrders);
// console.log(lastOrder);

/*
6. You have an array named `popularOrders` containing `"green tea" , "oolong tea" , and "chai"`.
Create a softCopy of this array named `softCopyTeas`.
*/

const popularOders = new Array("green tea", "oolong tea", "chai");

// let softCopyTeas = popularOders.slice();

let softCopyTeas = popularOders;

// softCopyTeas.pop();

// console.log(popularOders);
// console.log(softCopyTeas);

/*
7. You have an array named `topCities` containing `"Tetley" , "Twinings" , and "Typhoo"`.
Create a hardCopy of this array named `hardCopyCities`.
*/

let topCities = new Array("Tetley", "Twinings", "Typhoo");

let hardCopyCities = [...topCities];

topCities.pop();

// console.log(hardCopyCities);

/*
8. You have two arrays: `europeanCities` containing `"Paris" and "Rome"` and `asianCities` containing `"Tokyo" and "Shanghai"`.
Merge these two arrays into a new array named `worldCities`.
*/

let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Shanghai"];

// let worldCities = [...europeanCities, ...asianCities]; // It Gives Array

// let worldCities = europeanCities + asianCities; It Gives String

// let worldCities = europeanCities.concat(asianCities);

// console.log(europeanCities);
// console.log(asianCities);
// console.log(worldCities);

/*
9. You have an array named `teamenu` containing `"Masala Chai" , "oolong tea" , "green Tea" , and "black Tea"`.

Find the length of the array and store it in a variable named `menuLength`.
*/

let teaMenu = ["Masala Chai", "oolong tea", "green Tea", "black Tea"];

let menuLength = teaMenu.length;

// console.log(menuLength);

/*
10. You have an array named `cityBucketList` containing `"Paris" , "Rome" , and "Tokyo"`.
Check if `"Rome"` is in the array and store the result in a variable named `isRomeInBucketList`.
*/

let cityBucketList = ["Paris", "Rome", "Tokyo"];

if (cityBucketList.includes("Rome")) {
  //   console.log("Rome is in the Bucket List");
} else {
  //   console.log("Rome is not in the Bucket List");
}

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let reversedNumber = number.reverse();

console.log(reversedNumber);
