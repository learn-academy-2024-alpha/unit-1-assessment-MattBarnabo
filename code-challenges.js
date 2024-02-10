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

  // ADDING the value of each index to eachother by the total length of the array
  return arrayOfNumbers.reduce((total, value) => total + value);
  // RETURN the array reduced to a single value
}

console.log(totalWorldSeriesRuns1(padres1984WorldSeriesRuns));//outputs: 15
console.log(totalWorldSeriesRuns1(padres1998WorldSeriesRuns));// outputs: 17



// Explain your code: I Created a function called totalWorldSeriesRuns that utilizes a for loop to iterate through the array adding each value of the array toghether to total the sum of the values of the array. Redeclaring a variable I originally set to zero called totalNumberOfHits. Using the plus equals sign to add each value of the index to the next value in the next index. Returning the total number of values across the total number of indexes in the array, combining them into the variable totalNumberOfHits. This can also be done using the .reduce method. By creating your function then returning your main functions parameter.reduce. Declaring the parameters within .reduce to equal the total number of indexes within the array and the value of each index in the array. Internally creating another function that takes the total number of indexes and adds the values of each index together reducing the array to a single value. I plan on researching the plus equals and .reduce to better understand how and why they work.




// --------------------2) Create a function that takes in a string and  returns the string with all the characters in reversed order. Use the test variable provided below.

const lesMiserables = "Jean Valjean"
// Expected output: "naejlaV naeJ"

const lionKing = "Simba"
// Expected output: "abmiS"

// CREATE a function that inputs a string
const wordReverse = (string) => {
  
  // CONVERT the string into an array
  // REVERSE the order of the elements in the array
  // CHANGE the array back into a string
 return string.split("").reverse().join("")
   // RETURN the string with all the characters reversed

}
console.log(wordReverse(lesMiserables));// outputs: naejlaV naeJ
console.log(wordReverse(lionKing));// outputs: abmiS


// Explain your code: I first created a function with a name explaining what the function does. I set the parameter to the input of string to clarify what type of argument would be used in the calling of this function. I tried returning the string using the .reverse method. It resulted in a TypeError. I double checked the syllabus to verify my suspicion that the .reverse could not be used on a string. That was correct .reverse can be used on an array to reverse the order of elements. I decided to try returning the string by chaining .split .reverse and .join together. Seeing if it would let me chain them in order or if I had to set a new variable and do each one seperately. It did allow me to chain them in order which in this instance taught me that you can combine compatible built in methods.

// --------------------3) Create a function that takes in an array and returns an array with only the items from the third, fourth, and fifth indexes. Use the test variable provided below.

const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
// Expected output: [42, 5, -5]

const cohortList = ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot"]
// Expected output: ["Delta", "Echo", "Foxtrot"]

// CREATE a function that takes in an array
const indexFinder = (array) => {
  // SEARCH for the values at the 3rd, 4th, and 5th, indexes
  // RETURN the values at the 3rd, 4th, and 5th indexes
  return array.slice(3, 6)
}
console.log(indexFinder(stockExchange));//outputs: [42, 5, -5]
console.log(indexFinder(cohortList));//outputs: ['Delta', 'Echo', 'Foxtrot'] 



// Explain your code: I created a function called indexFinder. Setting the input parameter to array. Then I returned the parameter and utilized the .slice method to extract the values at the third, fourth, and fifth index in the array. Setting the starting value to the value of the first index I want to extract. Then setting the second value to the index after the last index I'm looking to extract telling it where to stop. Calling the function and using the provided test variables to access the arrays stored within the output matches the expected output.
