// Define a function sum()  that sums all the numbers in an array of numbers

let Array1=[1,2,3,4];
let sum= Array1.reduce((a,b) => a+b);
console.log(sum); //10


//Define a function multiply()that multiplies all the numbers in an array of numbers.
let Array2=[1,2,3,4];
let multiply= Array2.reduce((a,b) => a*b);
console.log(multiply); //10

//Define a function reverse() that computes the reversal of a string.
let mystr="yasmin";
let reversed= [...mystr].reverse().join("");
console.log(reversed); //"nimsay"


// Write a function filterLongWords() that takes an array of words and an integer i 
//and returns the array of words that are longer than i.

function filterLongWords(arr, n){
    let newArr = [];
    arr.forEach(value => {

    if(value.length > n){
    newArr.push(value);
    }
    });
    return newArr;
}
console.log(filterLongWords(["hello", "hi","hola"],3)); 

// let myArr=["hi", "hello","hola"];
// let n=2;
// let newArr=[];
// let filterLongWords2= (myArr,n) =>