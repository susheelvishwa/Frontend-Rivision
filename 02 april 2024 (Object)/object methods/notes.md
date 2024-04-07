# Object Methods

## Introduction
In JavaScript, objects are fundamental data structures used to represent entities, such as users, orders, and more, typically found in real-world scenarios. Object methods allow these objects to perform actions or behaviors, making them dynamic and interactive.

# Detailed Explanation
## What is the concept?
Object methods in JavaScript are functions that are defined as properties of an object. They enable objects to perform actions or tasks, encapsulating behaviors within the object itself.

# Why is it useful?
Object methods provide a convenient way to organize and encapsulate related functionality within an object. They enhance code readability, maintainability, and reusability by associating behaviors directly with the object they operate on. This approach aligns with the principles of object-oriented programming.

# Real-world examples or analogies
Consider an object representing a user profile. Using object methods, you can define behaviors such as logging in, logging out, updating profile information, or sending messages. These methods encapsulate the actions that a user can perform within the application.

Objects are usually created to represent entities of the real world, like users, orders and so on:

# var user = { name: "susheel", age:21 };

And, in the real world, a user can act: select something from the shopping cart, login, logout etc.


# Interview Questions ( objects & methods)

# What are object methods in JavaScript, and why are they important in programming?
Solution: Object methods in JavaScript are functions that are defined as properties of an object. They allow objects to perform actions or tasks, encapsulating behaviors within the object itself. Object methods are crucial for making objects dynamic and interactive in applications.

# Explain the syntax for defining object methods in JavaScript. Provide an example.
var obj = {
  methodName: function() {
    // Method body
  }
};
//Example:

var user = {
  name: "John",
  greet: function() {
    console.log("Hello, " + this.name + "!");
  }
};


# How do object methods enhance code organization and maintainability in JavaScript?
Solution: Object methods enhance code organization and maintainability by associating related functionality directly with the object it operates on. This approach improves readability and makes it easier to understand and modify the code.

# Describe a real-world scenario where object methods would be beneficial.
Solution: In a customer relationship management (CRM) system, you can have an object representing a customer with methods like updateProfile(), placeOrder(), and viewOrders(). These methods encapsulate customer-related actions, making the codebase more organized and modular.

# What is the purpose of the this keyword inside object methods? How does it work?
Solution: The this keyword inside object methods refers to the current object instance on which the method is being called. It allows methods to access and operate on the properties of the object they belong to dynamically.

# Can you demonstrate how to call an object method and access its properties within the method?
Solution: Example of calling an object method and accessing its properties within the method:

var user = {
  name: "John",
  greet: function() {
    console.log("Hello, " + this.name + "!");
  }
};

user.greet(); // Output: Hello, John!
