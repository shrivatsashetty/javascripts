// Reference data tyapes in java script
// Objects, Arrays, Functions, area some reference data types in java script

// there is no concept of class in JavaScript
// lets see objects first
// lets define an object called person using curly braces {}
// the curly braces is called an object literal used to def an obj
// the attributes are defined as "key" : <value>  pairs seperated by a comma(,) inside {}
let person ={ 
    
    name:"Shrivatsa",
    age:22,
    isEmployed:false,
    native:'Mandarthi'

}; // semicolon not mandatory
console.log(person);
// acessing attributes using dot(.) notation or sq bracket'[]' notation
// sq bracket works coz JS object is like a Dictionary in Python
console.log("Name attribute of person obj:",person.name);
console.log("Similary age:",person["age"]);
console.log("isEmployed:",person.isEmployed);
// changing value of an attribute 
person.name='Sharan'
console.log(person);//name gets modified
person["age"]=23;
console.log(person);//age also gets modified
// Advantage of bracket notation 
let jobStatus='isEmployed';
person[jobStatus]=true; // initially it was false
console.log(person); //isEmployed attribute also gets modified
let habitat="native";
person[habitat]="Brahmavara";
console.log(person);
// using [] we can change existing attribute storing that attribute name in variable 
//And using the variable instead as key
// if we do the same with dot (.) notation a new attribute gets added
let degree="native"
person.degree="BTech"// A new attribute is created and added to person object
console.log("A new attribute 'degree' is added:",person.degree)
console.log(person);//degree attribute gets added



