# What is meant by local storage ?

> What do the words local storage mean ?
***Storing locally, right? Storing what ? ⇒ data or information. Storing where? ⇒ Locally ⇒ means where? On google drive? No. it’ll be stored on our browser where we will run the app. Local storage can be used to store data as a mini database or a local database.***

> What is meant by database?
***The collection of data or the place where the data is stored is called database. Similarly local storage is something where data can be stored locally but it is limited by size, that means large amount of data cannot be stored.***

> Now, let’s see how the data will be stored in the local storage? 
***It is stored in the form of key-value pairs but it is not an object because we cannot apply all object methods here.***


## Actual Definition: 
***localStorage is a property that allows JavaScript sites and apps to save key-value pairs in a web browser with no expiration date.***

> When to use local storage ?
 <You should only use local storage when storing insensitive information, i.e., we cannot store passwords and some sensitive information.
 <Local storage can help in storing data temporarily before it is pushed to the server, i.e., we can’t store data permanantly.

> Where to see the local storage ?
- <Open browser and click on inspect.
- <Click `Application` and inside that you can see `Local Storage`
- <That is where our data gets stored, we’ll see how to store and data and come back again here.

> What are the limitations ?
<Insecure data (data is not secured, it can be hacked, i.e., someone who can access your system can have the data)
<Synchronous operations (We’ll learn about it later)
<Limited storage capacity, i.e., images and videos cannot be stored, but we can store image and video urls.

> How does local storage work ?
<To use localStorage in your web applications, there are four methods to choose from:

-<setItem(): Add key and value to local storage*
-<getItem(): This is how you get items from localStorage*
-<removeItem(): Remove an item by key from localStorage*
-<clear(): Clear all local storage*

## Note : Local storage stores only strings, booleans and numbers.
> What are the other data types we have ? 
Arrays, Objects cannot be stored.

setItem("keyName",value)
value can be a string, boolean or a number

> Get Item
> In objects, if we want to get the value of any field, how will we do it?
> So, if we want to access the values in an object, we write the key only.Similarly, for local storage also, we’ll write getItem(”keyName”).
> Whenever we try to access a key which is not present in local storage, it’ll return null.


# Remember the difference between null and undefined?
<If I say how many mangoes does an apple tree give? Null, not undefined, right.

<Similarly, if we try to access something which is not present in local storage, it’ll give us null.


# It just stores with a comma, it does not store an array. So let’s see in which datatype is it stored. How can we check what datatype it is?

var getArr = localStorage.getItem("arrOfNums")
console.log(typeof getArr) // <will return string

So, how do we store arrays and objects
If we store something like this “[1,2,3,4,5]”, even though it is a string, we can convert it into an array and use it, right?
We need to use JSON in order to store arrays and objects in local storage.

try to understand with help of example <index.html> file

Now, we can see if I click on like, the likes count increases and if I click on dislike button, the dislikes count increases, right. Now if I refresh the page, what will happen ?

>What lines of code will be executed inside the script tag ?
>But is this the desired behaviour ?
>How do like and dislike button in facebook work?

<Let’s say you liked an image and you click on like. Now, you’ve logged out of it or closed the fb, did some work and after sometime or few days, opened fb again. Now tell me the image you’ve liked, will the like be present or should you like it again?

>So, how can we retain the no of likes and dislikes?
>By using local storage.

>Now we are setting the no of likes and dislikes, now let’s see the behaviour of the like and dislike buttons.

--------------->>>>>>>>

Now is it working fine ? in //scrpt 3rd//
But there is a bug in this code also ? Can anyone tell the bug?

***Delete all the keys and start the application again. Now show the bug, initially when there are no keys stored in local storage.***
How to solve this ?

