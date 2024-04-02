// Creating an object using object literals
let person = {
  name: "John",
  age: 30,
  email: "john@example.com"
};

// Accessing object properties using dot notation
console.log(person.name); // Output: John

// Accessing object properties using bracket notation
console.log(person["age"]); // Output: 30

// Updating object properties
person.age = 35;
console.log(person.age); // Output: 35

// Deleting object properties
delete person.email;
console.log(person.email); // Output: undefined

Accessing Properties:

let firstName = obj["firstName"];
console.log(firstName); // Output: "hello"


Updating Properties:

obj["firstName"] = "newHello";
console.log(obj); // Output: { firstName: 'newHello', lastName: 'World', add: 'anotherName' }

Deleting Properties:

delete obj["lastName"];
console.log(obj); // Output: { firstName: 'newHello', add: 'anotherName' }

