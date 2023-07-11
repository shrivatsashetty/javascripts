let digits = [1,2,3,4,5,6,7,8,9]

let n = digits.length
console.log("The array :",digits)
for(let i=0; i < n;i++){
    digits.pop()
    console.log("The array",digits)
}