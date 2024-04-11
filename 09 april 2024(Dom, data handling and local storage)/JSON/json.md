# What is JSON  (Javascript Object Notation) ?

What JSON will do is it will convert anything into string using its methods and since we can store strings as values in local storage, we can now store stringified arrays and stringified objects on local storage.

# Actual Definition :

***JavaScript Object Notation (JSON) is a representation of structured data based on JavaScript object syntax.***

<JSON is most widely used 
- Data is sent and received on Internet in JSON (mostly).
- It is based on Javascript objects.
- used with network requests (AJAX etc.)

### Difference between JSON and objects ?

Let’s first write data in JSON format and object and compare the difference.

var studentObj = {
	name:"Cherry",
	gender: "Male",
}

var studentJSON = {
	"name": "Cherry",
	"gender": "Male",
}

<In JSON, both keys and values should be in the form of a string but in objects, the values must be in the form of a string, not keys.

var stringArr = JSON.stringify(nums)
console.log(stringArr)
localStorage.setItem("arrOfNums", stringArr)