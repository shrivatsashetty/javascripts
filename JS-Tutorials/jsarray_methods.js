// demo of stack data structures using array methods


let myarray = [];
let i = 0

console.log(myarray)
for(i = 1; i <= 5; i += 1){
    myarray.push(i);
    console.log(myarray)
};

// console.log(typeof(myarray))

let len = myarray.length


console.log(`The legth of the array is ${len} `) //5
// console.log(`last member of the array is`,myarray[len - 1])

console.log(myarray)
for(i =0 ; i < len; i+=1 ){
    myarray.pop();
    console.log(myarray)
};



