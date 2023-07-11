
// A javascript object employee with a method

let employee = {

    name : "Sid",
    age : 25,
    basicpay : 40000,

    promotoion : function(){
        console.log(`after promotion initial salary of ${this.basicpay} becomes ${this.basicpay*1.1}`)
        return this.basicpay*1.1

    }

};

employee.promotoion()

