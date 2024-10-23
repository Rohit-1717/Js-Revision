/*
write a `while` loop that calculates the sum of all the numbers from 1 to 5 and stores the result in a variable names `sum`.
*/

// let sum = 0;
// let i = 1;

// while (i <= 5) {
//   sum = sum + i;
//   i++;
// }

// console.log(sum);

/*
2. Write a while loop that counts down from 5 to 1 and stores the result in a variable named `countDown`.
*/

// let countdown = [];
// let j = 5;
// while (j > 0) {
//   countdown.push(j);
//   j--;
// }

// console.log(countdown);

/*
3. Write a `do while` loop that prompts a user to enter their favourite tea type until they enter `"Stop"`.
Store each tea type in an array named `teaCollection`.
*/

// let teaCollection = [];
// let tea;

// do {
//   // tea = prompt(`Enter your favourite tea (type "stop" to finish)`);

//   if (tea !== "stop") {
//     // teaCollection.push(tea);
//   }
// } while (tea !== "stop");

/*
4. Write a `do while` loop that adds numbers from 1 to 3 and stores the result in a variable named `total`.
*/

// let total = 0;

// let k = 1;

// do {
//   total += k;
//   k++;
// } while (k <= 3);

// console.log(total);

/*
5. Write a `for` loop that multiplies each element in the array `[2,4,6]` by 2 and stores the result in a new array named `multipliedNumbers`.
*/

// let multipliedNumbers = [];

// let numbers = [2, 4, 6];

// for (let l = 0; l <= numbers.length; l++) {
//   takenNumber = numbers[l] * 2;
//   multipliedNumbers.push(takenNumber);
// }

// console.log(multipliedNumbers);

// console.log("Hello");

/*
6. Write a `for loop that lists all the cities in the array `["London","Tokyo","Bejing","New Delhi","New York"]` and stores each city in a new array `cityList`.
 */

let cities = ["London", "Tokyo", "Bejing", "New Delhi", "New York"];

let cityList = [];

for (let m = 0; m < cities.length; m++) {
  const mycity = cities[m];
  cityList.unshift(mycity);
}
console.log(cityList);
