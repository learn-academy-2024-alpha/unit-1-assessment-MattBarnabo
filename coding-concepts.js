// UNIT 1 ASSESSMENT: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain WHY your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2023"
// console.log(cohort.length)

// a) Your answer: It will log the number 10 to the console. 
// b) Verify and explain: It logs the number of characters including the space within the string declared by the variable cohort. Starting at the zero index and counting up to the final character at index 9. Totaling 5 characters in the word LEARN 1 character as the space and 4 characters in the year 2023.

// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: This will log o to the console
// b) Verify and explain: This console log is calling the character at the 4th index of the string declared by the variable greeting. H being the at the zero index you can count up from there until you reach the character at the fourth index which is the fifth character in the word hello.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer:"Ruby"
// b) Verify and explain: Due to the index being declared and set to a value of 1 it tells the console to log the value at the index of 1 inside the array declared as languages. Which prints the string "Ruby" as "Ruby" occupies the index of 1 in the array.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: This will log SATURDAY, SUNDAY to the console
// b) Verify and explain: This resulted in a TypeError which means .toUpperCase cannot be used on an array, even if the values inside the array are strings. Without first calling on the index of the value you want to change to all upper case letters. Or without using .join(" ") to convert the array into a string first.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: This will log "string" 4 times to the console or result in an error 
// b) Verify and explain: This resulted in the result "number". Instead of looking at the type of data in the array which would result in the answer being string. This asked for the data type of the length of the array which returned a number. Since the length of the array called dataTypes is 4. It returned the type of data that the length would be counted in.
