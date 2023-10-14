// Practice exercise 2.1
// What are the types of these variables listed below? Verify this with typeof and
// output the result to the console:
let str1 = 'Laurence';
let str2 = "Svekis";
let val1 = undefined;
let val2 = null;
let myNum = 1000;
console.log(typeof str1);  
console.log(typeof str2);  
console.log(typeof val1);  
console.log(typeof val2);  
console.log(typeof myNum);  


// Practice exercise 2.2
// Create a variable for your name, another one for your age, and another one for
// whether you can code JavaScript or not.
// Log to the console the following sentence, where name, age and true/false are
// variables:
// Hello, my name is Maaike, I am 29 years old and I can code JavaScript:
// true.
let name = "saania";
let age = 20;
let canCodeJavaScript = true;
console.log(`Hello, my name is ${name}, I am ${age} years old, and I can code JavaScript: ${canCodeJavaScript}.`);



// Practice exercise 2.3
// Write some code to calculate the hypotenuse of a triangle using the Pythagorean
// theorem when given the values of the other two sides. The theorem specifies that the
// relation between the sides of a right-angled triangle is a2
// + b2
// = c2
// You can use prompt() to get the value for a and b. Write code to get the value from
// the user for a and b. Then square the values of both a and b before adding them
// together and finding the square root. Print your answer to the console.
let a = 2
let b = 2
let result = 4
prompt(" Add this number 2+2");

let aSquared = a * a;
  let bSquared = b * b;
  let cSquared = aSquared + bSquared;
console.log(aSquared+bSquared)


// Practice exercise 2.4
// Create variables for three numbers: a, b, and c. Update these variables with the
// following actions using the assignment operators:
// • Add b to a
// • Divide a by c
// • Replace the value of c with the modulus of c and b
// • Print all three numbers to the console
let na = 10
let nb = 4
let nc = 15
console.log(na+nb)
console.log (na/nc)
console.log(nc%nb)


// Miles-to-kilometers converter
// Create a variable that contains a value in miles, convert it to kilometers, and log the
// value in kilometers in the following 
// The distance of 130 kms is equal to 209.2142 miles

let miles = 130;
let kilometers = miles * 1.60934;
console.log(`The distance of ${kilometers} kms is equal to ${miles} miles.`);
