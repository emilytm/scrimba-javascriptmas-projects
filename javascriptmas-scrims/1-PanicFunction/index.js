/* Panic function 
Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 

Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"

.split() .join()
*/

// Test your function
console.log(panic("I'm almost out of coffee")); 
console.log(panic("winter is coming"))

//Handles leading and trailing spaces, empty sentence strings, and multiple spaces between words 

function panic(sentence) {
    if (sentence) {
        return sentence.trim().toUpperCase().split(' ').filter(word => word.length > 0).join(' 😱 ')+"!"
    }
}


/* 
TEST CASES 
    - Expected input (normal sentence without extra characters)
    - Empty sentence string
    - Leading space
    - Trailing space
    - Multiple spaces

Note: Sentences that already end in an exclamation point should/will have another exclamation point added on
*/

/*
    console.log(panic('Hi my name is Emily'))
    console.log(panic('')) //This logs 'undefined' - not sure if this is the right way to handle it
    console.log(panic('I like to learn to code using Scrimba '))
    console.log(panic('  OMG me too'))
    console.log(panic('This is a  cool    challenge'))
    console.log(panic('I like Javascriptmas!!'))
*/