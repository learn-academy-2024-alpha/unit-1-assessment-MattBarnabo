// UNIT 1 ASSESSMENT: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Reminder: Ensure you are in the correct directory
// Run the file with the following command: $ node code-challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and evaluates which of the strings has more characters. Use the test variables provided.

const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// Explain your code:

// --------------------1) Create a function that takes in an array of numbers and returns the sum of all the numbers. Use the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
// Expected output: 15
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 17




// CREATE a function that takes in an array of numbers
// OUTPUTS a total sum of all the numbers in an array added together
const totalWorldSeriesRuns = (arrayOfNumbers) => {

// DECLARE a variable called totalNumberOfHits and set equal to zero
  let totalNumberOfHits = 0;

  // ITERATE through the array adding all the values together
  for(i=0; i<arrayOfNumbers.length; i++){

  // REDECLARE totalNumberOfHits to plus equals the value of the index
      totalNumberOfHits += arrayOfNumbers[i];
  }
  // RETURN totalNumberOfHits
  return totalNumberOfHits;
}
console.log(totalWorldSeriesRuns(padres1984WorldSeriesRuns));// outputs: 15
console.log(totalWorldSeriesRuns(padres1998WorldSeriesRuns));//outputs 17



// CREATE a function inputting an array of numbers
// OUTPUT the total of the array added together
const totalWorldSeriesRuns1 = (arrayOfNumbers) => {
  // RETURN the array reduced to a single value
  // ADDING the value of each index to eachother by the total length of the array
  return arrayOfNumbers.reduce((total, value) => total + value);
}
console.log(totalWorldSeriesRuns1(padres1984WorldSeriesRuns));//outputs 15
console.log(totalWorldSeriesRuns1(padres1998WorldSeriesRuns));// outputs 17



// Explain your code: I Created a function called totalWorldSeriesRuns that utilizes a for loop to iterate through the array adding each value of the array toghether to total the sum of the values of the array. Redeclaring a variable I originally set to zero. Using the plus equals sign to add each value of the index to the next value in the next index. Returning the total number of values across the total number of indexes in the array combining them into the variable totalNumberOfHits. This can also be done using the .reduce method. By creating your function then returning your main functions parameter.reduce. Declaring the parameters within .reduce to equal the total number of indexes within the array and the value of each index in the array. Internally creating another function that takes the total number of indexes and adds the values of each index together reducing the array to a single value.




// --------------------2) Create a function that takes in a string and  returns the string with all the characters in reversed order. Use the test variable provided below.

const lesMiserables = "Jean Valjean"
// Expected output: "naejlaV naeJ"

const lionKing = "Simba"
// Expected output: "abmiS"











// Explain your code:

// --------------------3) Create a function that takes in an array and returns an array with only the items from the third, fourth, and fifth indexes. Use the test variable provided below.

const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
// Expected output: [42, 5, -5]

const cohortList = ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot"]
// Expected output: ["Delta", "Echo", "Foxtrot"]

// Explain your code:
