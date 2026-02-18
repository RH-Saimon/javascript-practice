// Q1. Get user to input a number using prompt("enter a number:"). chek if the number is multi of 5 or not ?

let num = prompt("Enter a number:");

if (num % 5 === 0){
    console.log("multiple of 5.")
}
else{
    console.log("not!");
}

// Q2. Write a code which can give grades to students according to their scores:

let score = prompt("enter the scores:");

if (score >= 80 && score <= 100){
    console.log(score ,"is grade of A");
}
else if (score <80 && score >= 70){
    console.log(score ,"is grade of B");
}
else if (score < 70 && score >= 60){
    console.log(score ,"is grade of c");
}
else if (score <60 && score >= 50){
    console.log(score ,"is grade of D");

}
else{
    console.log("grase is F");
}


// Q3. Take a number and print: "Even" if it’s even, "Odd" if it’s odd

let num = prompt("enter your number:");

if(num % 2 === 0){
    console.log(num, "is even.");
}
else{
    console.log(num, "is odd");
}

// Q4.Create a variable age. print:"Child" if age < 13, "Teen" if 13–19, "Adult" if 20–59, "Senior" if 60+.

let age = prompt("enter your age:");

if(age < 13){
    console.log("Teen");
}
else if(age <= 19 && age >= 13){
    console.log("Adult");
}
else if (age <= 59 && age >= 20){
    console.log("Senior");
}


// Q5. Take 3 numbers and print the largest one.

let a = Number( prompt("enter the no:"));
let b = Number( prompt("enter the no:"));
let c = Number( prompt("enter the no:"));

if (a > b && a > c){
    console.log(a + ", a is largest no.");

}
else if(b > a && b > c){
    console.log(b + ", b is the largest no.");
}
else{
    console.log(c + ", c is the largest no.")
}



//Q6.
//  A year is leap year if: Divisible by 4, But not divisible by 100,  Except if divisible by 400.

let year = Number(prompt("enter the num:"));

if (( year % 4 === 0 && year !== 100) || (year % 400 === 0)){
    console.log(year + " is a leaf year.");
}
else {
    console.log(year + " is not a leaf year.");
}


// Q7. Take a number.  If: Divisible by 3 AND 5 → print "FizzBuzz", Only divisible by 3 → "Fizz", Only divisible by 5 → "Buzz", Otherwise → "None".

let num = Number(prompt("Enter your number:"));

if (isNaN(num)) {
    console.log("Please enter a valid number"); //for chek valid number.
}
else if (num % 3 === 0 && num % 5 === 0) {
    console.log("FizzBuzz");
}
else if (num % 3 === 0) {
    console.log("Fizz");
}
else if (num % 5 === 0) {
    console.log("Buzz");
}
else {
    console.log("None");
}








