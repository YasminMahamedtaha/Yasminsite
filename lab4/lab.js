//1.Define a function max() that takes two numbers as arguments and returns the largest of them.
const max= function(a ,b){
   if(a>b)
      return a;

      else
        return b;
}

// const maxnum= document.getElementById("btn1").onclick=max(10,20);
// document.getElementById("p1").innerHTML=maxnum;
 console.log(max(10,20));

//2.Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
const b= function(a ,b,c){
    if(a>b && a>c)
       return a;
 
    else if(b>c)
            return b;
     else
         return c;
    }
 console.log(b(10,20,30));

 //3.Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
 
 const  isVowel= function (char) {
   const a = ['a', 'e', 'i', 'o', 'u'];

   for(let i=0; i<a.length ;i++){
        if(a[i]==char)
        return true;
        i++;

   }

        return false;
    
}
console.log("Expected output of isVowel('a') is true -> " + isVowel('a'));


//4a.function sum() that sums and  all the numbers in an array of numbers. 


function sum(a) {
	var sum= 0;
	for (var i = 0; i < a.length; i++) {
		sum+= a[i];
	}
	return sum;
}
console.log(sum([1,2,3,4]));

//4b.multiply takes an array and returns the product of all elements
function multiply(b) {
    let total =1;
    for(let i=0 ; i<b.length;i++){

    total *= b[i];
}
        return total;
}
console.log(multiply([1,2,3,4]));

//5.reverse() that computes the reversal of a string

function reverse(str) {
    let newWord= "";

    for(let i=str.length-1;i>=0;i--){

        newWord +=str.charAt(i);
    }
    return newWord;
}
console.log(reverse("jag testar"));

//6.Write a function findLongestWord() that takes an array of words and returns the length of the longest one.

 const findlongestWord=function(arr){
        let max=arr[0];
        for(let i=1; i<arr.length; i++){
            if(arr[i].length>max.length)
               max=arr[i];
        }
    return max;

 }
 console.log(findlongestWord(['One','Three','Configure']));


//7.Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
function greaterthan(a,i){

    return greaterthan = a.filter(a=>a.length > i);
}

console.log(greaterthan(['One','Threes','Configure',3]));

//8.a) multiply each element by 10; 

const a = [1,3,5,3,3]; 
const z = a.map(function(elem, i, array) {
  return elem *10;
});

//8.b) return array with all elements equal to 3; 
const c = a.filter(function(elem, i, array){
    return elem === 3;
});

//8.c) return the product of all elements;

const d = a.reduce(function(prevValue, elem, i, array){
    return prevValue * elem;
  });



//9
function myFunctionTest(expected, found) {
    if (expected === found) {
      return "TEST SUCCEEDED";
    } else {
      return "TEST FAILED.  Expected " + expected + " found " + found;
    }
  }


  //console.log("Expected output of max(20,10) is 20 -> " + myFunctionTest(20, max(20, 10)));

  //console.log("Expected output of maxOfThree(10,20,30) is 30 -> " + myFunctionTest(30, maxOfThree(10, 20, 30)));

  //console.log("Expected output of isVowel('a') is true -> " + myFunctionTest(true, isVowel("a")));

  //console.log("Expected output of sum([1,2,3,4]) is 10 -> " + myFunctionTest(10, sum([1, 2, 3, 4])));

  //console.log("Expected output of multiply([1,2,3,4]) is 24 -> " + myFunctionTest(24, multiply([1, 2, 3, 4])));


  //console.log("Expected output of reverse('jag testar') ratset gaj -> " + myFunctionTest("ratset gaj", reverse("jag testar")));

  

  //console.log("Expected output of findLongestWord(['One','Three','Configure']) is 9 => " +
                 //myFunctionTest(9,findlongestWord(['One', 'Three', 'Configure'])));

    
//console.log("Expected output of filterLongWords(['One','Threes','Configure'3) is ['Threes','Configure'] => " +
           //myFunctionTest(["Threes", "Configure"], filterLongWords(["One", "Threes", "Configure"],3)));


