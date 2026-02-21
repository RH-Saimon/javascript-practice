// Array: Collection of items.
//Array is kind of object. it's non premetive data type.
//string is immutable that means in case its not changable
//arrys are mutable, in case its changable
/*
let heros = ["jahir", "paros", "jakaria", "mahir", "saimon"];
console.log(heros);

let marks = [77, 88, 99];
console.log(marks);
marks[2] = 98;            //change value of index 2.
console.log(marks[2]);


// Looping over an array:
//for loop:
let heros = ["jahir", "paros", "jakaria", "mahir", "saimon"];

for(let i = 0; i < heros.length; i++){
    console.log(heros[i]);
}
    
//for of:
let heros = ["jahir", "paros", "jakaria", "mahir", "saimon"];

for(let hero of heros){
    console.log(hero);
}


// Practice Q1: For a given array with marks of students.Find the average marks of the entire class.

let marks = [85, 97, 44, 37, 76, 60];
let avg = 0;
let sum = 0;
for(let i = 0; i < marks.length; i++){
    sum += marks[i];
    avg = sum / marks.length
}
console.log(avg);


// Q2: given 5 items prices. and all items have 10% off. print the final price after applying offer.
let item = [250, 645, 300, 900, 50];

for (let i = 0; i < item.length; i++){
    console.log(`Before price of item : ${item[i]}`);
    let offer = item[i] / 10;    //for 10% discount.
    item[i] -= offer;            //minus main price to discount price 
    console.log(`After discount price of item : ${item[i]}`);
}
// console.log(`After discount price of item : ${item}`) //for 1 line output.




