/* Java Script functions */
//we use the function keyword to declare a function in js
 function greet(name){
    console.log('Hello'+" "+name+ " " + "hwau")
    // a number can also be concatenated
    
 }

 greet('Shrivatsa');
 greet(8);
 // defining a square function
function cube(number){ // the variable number is local
    return number*number*number;
    
}

let number=3;
let cubenumber=cube(3)
console.log("cube of ",number,'is',cubenumber)

