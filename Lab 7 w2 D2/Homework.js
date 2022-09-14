// 1.

console.log()
let count=(function (){

    let count =0;
    const add =function (n){
        count+=n;
    }
    const reset=function(n){
        count=0;
    }

    return {
        theAdd: add,
        thereset: reset
    };
    })();

    // 2. 
    //console.log(count);
    var add =(function(){
    var counter=0;
    return function(){
       return counter+=1;
    }
})();
    // Free Variables are variables that are neither locally 
    //declared nor passed as parameters. in the above 
    // add() function the variable "count" is free variable
    // since it isnt declared inside the inner function but its being used there.
    
    
    // 3.
    let make_adder={
        incr: function(inc){console.log(add());}
    }
    make_adder.incr(5);
    let incr5=make_adder.incr.bind(null);
    incr5(5);console.log(add(5));
    make_adder.incr(5);
    let incr7=make_adder.incr.bind(null);
    incr5(7);console.log(add(7));

    
    
    //4.
    // declaring and immediately calling an anonymous 
    //function at the same time
    // can avoid name space /name collisions and collisions.