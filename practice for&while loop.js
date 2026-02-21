// Q1. print all even number from o to 100;
/*
for (let i = 1; i <= 100; i++){
    if(i % 2 === 0){
        console.log("num =",i);
    }
}


// Q2: create a game where you start with any random game number. 
// Ask the user to keep guessing the gamenumber until the user enters correct value.

let gameNum = 33;
let userNum = prompt("guess the correct number:");

while(gameNum != userNum){
    userNum = prompt("you enter wrong num, guess agan!:");
}
console.log("congrates, you enter the correct number.");


// Q3: Find the sum of numbers from 1 to 100.

let sum = 0;
for(let i = 1; i <= 100; i++){
    sum += i;
}
console.log("sum =", sum);


// Q4: Print numbers from 10 to 1 (reverse order).

for (let i = 10; i >= 1; i--){
    console.log("i =",i);
}

// Q5. Take a number n and print its multiplication table.
// Example (n = 5):
// 5 × 1 = 5
// 5 × 2 = 10

let num = Number(prompt("enter the number:"));
for (let i = 1; i <= 10; i++){
    console.log(num ,"*", i,"=", num*i);
}

// Q6. Find the factorial of a number.
// Example: 5 → 120

let num = 5;
let sum = 1;
for (let i = 1; i <= num; i++){
    sum *= i;

}
console.log(sum);

// while loop:..........

// Q7.Reverse a number. using while loop.
// Example: 1234 → 4321


let num = Number(prompt("enter ur number:"));
let i = 0;
while(num>0){
    let digit = num % 10;       //get last digit
    i = i * 10 + digit;         //add last digit
    num = Math.floor(num / 10); //remove last digit
}
console.log(i);

  
// Q8. Find the sum of digits of a number.
// Example: 123 → 1+2+3 = 6

let num = Number(prompt('enter the number :'));
let sum = 0;
while(num > 0){
    let digit = num % 10;  //get last digit
    sum += digit;          //add last digit
    num = Math.floor(num / 10);
}
console.log(sum);

// Q9. Keep taking numbers and add them until the user enters 0.
// (Loop until condition becomes false)

let num = Number(prompt("enter the number :"));
let sum = 0;
while( num !== 0){
    sum += num;
    num = Number(prompt("Enter a number (0 to stop):"));
}
console.log(sum);

// Do-While loop... 
// Q10. Write a program where it runs at least once, even if the condition is false.
let i = 10;
do{
    console.log("this is for practice ");
    i++;
}
while(i < 5);


// Q11. Ask for a password repeatedly until the correct one is entered.

let currect_password = 1345;
let userpassword;
do{
    userpassword = Number(prompt("enter your pass:"));
    if (userpassword !== currect_password){
        // console.log("wrong password , please try again!");
        userpassword = Number(prompt("wrong password , please try again!"));
    }
}
while(userpassword !== currect_password);
console.log("permission granted.");


// For of......
// Q12. Take an array [5, 10, 15, 20]
// Find the sum using for...of.

let arry = [5, 10, 15, 20];
let sum = 0;
for(let i of arry){
    sum += i;

}
console.log(sum);
*

// Q13. Take a string "Saimon"
// Count how many vowels are in it.

let name = prompt("enter your name:");
let count = 0;
for (let i of name){
    if( i === "a" || i === "e" || i === 'i' || i === 'o' || i=== 'u'){
        count ++;
    }
}
console.log(count);


// Q14. Take this object:

// let student = {
//   name: "Saimon",
//   age: 22,
//   dept: "CSE"
// };

// Print all keys.
// Print all values.

let student = {
  name: "Saimon",
  age: 22,
  dept: "CSE"
};
for (let i in student){
    console.log(i);
    console.log(student[i]);
}


// Q15. Take an array [10, 20, 30]
// Use for...in to calculate the sum using indexes.

let input = prompt("enter your numbers separated by comma:");
let arry = input.split(",").map(Number); // use for array input from user.
let sum = 0;
for (let i in arry){
    sum += arry[i];  //use index to get value.
}
console.log(sum);


// Q16. chek if a number is prime.

let num = Number(prompt("enter your number:"));
let isPrime = true;  //if isprime is true then the num is prime.

if(num <= 1){              //num must be greater than 1 otherwisr false.
    isPrime = false;
}
else{
    for(let i = 2; i < num; i++){
        if(num % i  === 0){
            isPrime = false;
            break;
        }
    }
}
if(isPrime){
    console.log("the number is prime.")
}
else{
    console.log("not prime!");
}


// Q16. Print First 10 Terms of Fibonacci Series.
// rules: Each number = sum of previous two numbers.

let num = Number(prompt("enter your number:"));
let a = 0;
let b = 1;
for(let i = 1; i <= num; i++){          //run every loop and print a, then a upgrade to b and b upgrade to next. 
    console.log(a);        
    let next = a + b;
    a = b;
    b = next;
}
*/

