function Person(name,age){
    this.name = name;
    this.age = age;

    this.greet = function(){
        console.log("Hi this is ",this.name)
    };
};

let jhon  = new Person("Jhon",30); // new obj created

console.log(jhon.name)
console.log(jhon["age"])

jhon.greet()

let umesh = new Person("Umesh",40);

umesh.greet()