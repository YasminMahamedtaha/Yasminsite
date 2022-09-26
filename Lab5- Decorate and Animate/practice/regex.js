

const reg = /a/;
let name = "banana";

console.log(reg.test(name))

// ALTERNATION |

let animal= "i love chicken ";
let animal2="i love horse";
let animal3 = "i love panda"
//let animalCompare=/love/;
let animalCompare=/chiken|horse/;
console.log(animalCompare.test(animal))
console.log(animalCompare.test(animal2))
console.log(animalCompare.test(animal3))

//Ex 2
let m="cat";
let d="dog";

let regA = /cat|dog/
console.log(regA.test(m))

//CARACTERS SET Denoted [A-Za-z0-9][0-9]

// WILDCARDS Denoted by '.'
//ex

let jina = "Kevin";
let jinaReg = /...../; // the dots has to match the characters in string for the out put to br true 

console.log(jinaReg.test(jina))

//ex 2 

let a = "I ate 8 bananas";
let aReg = /I ate . bananas/;
console.log(aReg.test(a));

// eye, egg , mom , wewe 

//RANGES ->> allows us to specify a range of characters in which we can make a match without having to type out each individual character.

//ex:
let yasmin = /I adopted [2-9] [b-h]ats/;
let test1 = "I adopted 4 bats";
console.log(yasmin.test(test1))

/** MATCH THESE STRINGS 
 * 
 * 1.cub
 * 2.dog
 * 3.elk
 * 
 * DONT MATCH THESE STRINGS
 * 
 * 1.ape
 * 2.cow
 * 3.ewe
 * 
 */
 
let s1 = /[c-e][l-u][b-k]/;


console.log(s1.test("cub"));
console.log(s1.test("dog"));
console.log(s1.test("elk"));

console.log(s1.test("ape"));
console.log(s1.test("cow"));
console.log(s1.test("ewe"));
 

// question
//1. write some javascript code used setinterval to alert 
//the user every 10min that "10minutes have passed"?
function setinterval(){
setinterval(alert("10minutes have passed"),60000);
}
//or
setInterval(function(){
    alert ("10minutes have passed");

},10*60*1000);

// TEMPLEATE --> BACKTICKS`` 

let sum = `The sum is ${20+2}`;

console.log(sum); 

// Write your code for the function earliest space() here
// remember it has to take 3 strings , not an array?

// answer:
 function yas(x,y,z){
    let index1 =x.indexof(" ")
    let index2 =y.indexof(" ")
    let index3 =z.indexof(" ")
    if(index1<index2 && index1<index3){
        return x
    }else if (index2<index3){

    }


 }
 console.log(yas = ("hi","hellow","how r u? "));

 // SHORTHAND CHARACTER CLASSES 
 // \w -> word character ->\W 
 // \d -> digit character -> \D
 // \s -> whitespace character 

 let animalName = "3 monkeys";
 let regAnimalName = /\d\s\w\w\w\w/;

 console.log (regAnimalName.test(animalName))


 //GROUPING --> ()

 let animal5 = /I love (car|bike)/

 let testOne = "I love car";
 let testTwo = "I love bike";

 console.log(animal5.test(testOne))
 console.log(animal5.test(testTwo))



 var x= 10;
function main(){
 console.log("x1 is:"+ x);
 x= 20;
 console.log("x2 is:"+ x);
 if(x>0){
 var x= 30;
 console.log("x3 is:"+ x);

}
 console.log("x4 is:"+ x);
 var x= 40;
 var f= function(x){
 console.log("x5 is:"+ x);
 };
 f(50);
 console.log("x6 is:"+ x);
}
main();
console.log("x7 is:"+ x);