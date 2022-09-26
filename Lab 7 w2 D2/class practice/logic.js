
/// Write a function that takes in multiple numbers and filters multipes of 3 and 5;
// returns FizzBuzz when its a multipe of 3 and 5
// returns Buzz when its a multipe of 5
//returns Fizz when its a multipe of 3
// stores them in a string and doesnt use loops.

function solution(...nums) {

    let mulitple3And5 = nums.filter((x) =>  x % 3 == 0 || x % 5 == 0);

    let mapped = mulitple3And5.map(x => {

        if( x % 3 == 0 && x % 5 == 0 ) {
            return "FizzBuzz"
        } else if(x % 5 == 0) {
            return "Buzz";
        } else {
            return "Fizz";
        }

    });

    return mapped.reduce(( x, y) => x + " "  + y ,  " ");
}

console.log(solution(15, 10, 9))

// write a function called average()that takes a variable amount of numbers and returns 
//the average of all the numbers given.

function average(...ave){
    var count=0;
    var sum = 0;
    for (let x of ave){
        sum+=x;
        count++;

    }
    return sum/count
    
}

console.log