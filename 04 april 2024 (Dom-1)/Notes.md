# basic dom
onclick
innerhtml
innertext



# document.getElementById(id_Name)
# element.innerText
# <input type="text" value=""/>
# <input type="text" value="Masai School"/>
# document.querySelector(CSS selector)
# document.querySelectorAll(CSS selectors)
# document.getElementsByClassName(classname)
# document.getElementsByTagName(tagname)
# document.createElement(type)

# Creating Elements
Discussed how to create HTML elements dynamically using document.createElement() and append them to the DOM using .appendChild() or .append()

let newDiv = document.createElement('div');
document.body.append(newDiv);

# Accessing Elements
Explained various methods to access elements within the DOM, such as document.querySelector(), document.querySelectorAll(), document.getElementById(), and document.getElementsByClassName().

let container = document.querySelector('#container');

# Updating Elements
Showed how to update the content and attributes of DOM elements using properties like .innerText, .innerHTML, and .setAttribute()

Discussed the difference between .innerText (which changes the text content) and .innerHTML (which can change both text and HTML structure)

let divElement = document.getElementById('myDiv');
divElement.innerHTML = '<h2>New Title</h2>';


# Dynamically Displaying Products

products.forEach(product => {
  let productDiv = document.createElement('div');
  productDiv.innerHTML = `<h3>${product.title}</h3><img src="${product.image}" alt="${product.title}" />`;
  container.append(productDiv);
});


# Styling Elements
Covered styling dynamically created elements through JavaScript and highlighted how to apply CSS styles directly via the .style property or by adding CSS classes through .classList.add().

productDiv.style.textAlign = 'center';
productDiv.classList.add('product-style');


-----------------------------------Summary------------------------------------


This lecture provided a comprehensive overview of manipulating web pages using the DOM, focusing on creating a dynamic user interface for an e-commerce website. We learned how to create, read, and update elements on a webpage dynamically, enabling the construction of interactive and responsive web pages with JavaScript.