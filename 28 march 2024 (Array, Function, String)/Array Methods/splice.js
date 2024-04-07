// The splice() method changes the contents of an array by removing, replacing, or adding elements. It takes three parameters: the start index, the number of elements to remove, and optional elements to add. It's like modifying a specific portion of an array.

// let fruits = ['apple', 'banana', 'orange', 'grape'];
// fruits.splice(4, 6, 'kiwi', 'mango');
// console.log(fruits);

// Use case: Modifying specific elements within an array.

// The splice() method is a powerful tool for manipulating arrays and allows for flexible modifications to the array's content.


let fruits = ["apple", "banana", "orange", "grape"];

fruits.splice(1, 2);
console.log(fruits); // Output: ['apple', 'grape']

fruits.splice(1, 2, 'kiwi', 'mango');
console.log(fruits); // Output: ['apple', 'kiwi', 'mango', 'grape']

fruits.splice(fruits.length, 0, 'watermelon', 'cherry');
console.log(fruits); // Output: ['apple', 'kiwi', 'mango', 'grape', 'watermelon', 'cherry']


// Modifying Specific Elements:
let daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
daysOfWeek.splice(2, 1, 'Hump Day');
console.log(daysOfWeek); // Output: ['Monday', 'Tuesday', 'Hump Day', 'Thursday', 'Friday', 'Saturday', 'Sunday']


// Dynamic Array Manipulation:
let toDoList = ['Task 1', 'Task 2', 'Task 3', 'Task 4'];
let completedTaskIndex = 1;
toDoList.splice(completedTaskIndex, 1);
console.log(toDoList); // Output: ['Task 1', 'Task 3', 'Task 4']



// Inserting Elements at Specific Positions:
let numbers = [2, 3, 4, 5];
numbers.splice(0, 0, 1);
console.log(numbers); // Output: [1, 2, 3, 4, 5]



// Splitting an Array into Multiple Arrays:
let mixedArray = [1, 'apple', 2, 'banana', 3, 'orange'];
let numbersArray = mixedArray.splice(0, mixedArray.findIndex(item => typeof item !== 'number'));
console.log(numbersArray); // Output: [1]
console.log(mixedArray); // Output: ['apple', 2, 'banana', 3, 'orange']



