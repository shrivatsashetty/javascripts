/* JavaScript objects */
// [] is the array initialiser
// we can store values of diff data types in a js array
let luckyItems=[7,3,10,'red','green',true];
console.log(luckyItems);
// acessing elements in an array
console.log(luckyItems[0],luckyItems[1]);
console.log('first element of array is:',luckyItems[0])
// adding a new member to array with 8 items
luckyItems[6]='newly added'
// the new item is dynamically added to the array
console.log(luckyItems)
// a js array is an object
console.log(typeof luckyItems)
console.log(luckyItems.indexOf('newly added'))
console.log("No of items in array:",luckyItems.length)
