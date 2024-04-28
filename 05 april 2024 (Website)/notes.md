### Creating and Manipulating DOM Elements

Overview of Covered Topics: The discussion began by revisiting the concepts of higher-order functions and the Document Object Model (DOM), emphasizing their usage in creating dynamic web pages.

CRUD Operations in DOM: An explanation of CRUD (Create, Read, Update, Delete) operations was provided, detailing how these operations are essential for website functionality.

1. Accessing DOM Elements: Techniques such as document.getElementById, document.querySelector, and document.querySelectorAll were discussed for accessing elements within the DOM.

2. Creating DOM Elements: The method document.createElement was shown as a means to dynamically create new elements in the DOM.

3. Updating DOM Elements: The class covered how to modify existing DOM elements, focusing on attributes like src for images using dot notation.

4. Deleting DOM Elements: Though not detailed in the lecture, the mention of a more dynamic approach to deletion was planned.

### Building Interactive Elements

# Event Handling: 
The addition of event listeners was demonstrated, allowing for interactive features like button clicks to execute specific JavaScript functions.

# Implementing Search Functionality:
The lecture walked through creating a search function, utilizing input elements for user interaction, and filtering data based on user queries.

# Manipulating Arrays with JavaScript:
Examples included usage of .map, .forEach, and .filter, highlighting their applications in manipulating data for presentation on a webpage.

### Modularizing and Reusing Code

# Function Reusability:
Emphasized the importance of creating reusable functions for actions such as displaying data to improve code efficiency and maintainability.

### Advanced Manipulations

# Sorting Data:
Strategies for sorting data displayed on a webpage were discussed, including the use of the .sort() method for arranging data in ascending or descending order.

# Adding New Data:
The lecture concluded with techniques for adding new elements to the data array and subsequently updating the DOM to reflect these additions.

# if we want to add some functinalty like searching some products and delete, sort lets see *DEMO2* example how to do that

for **searching**

| Search => input box => get input for searching
- input => event => click =>
    [{},{},{}]
    filter => value === title
    [{}]


for delete we have 2 methords 
- 1st is *pop*
- 2ns is *splice*
    (index, how many elements after that index do you wana remove)


<These examples showcased how CRUD operations are applied in real-world scenarios, such as dynamically adding, updating, and displaying data based on user interactions.