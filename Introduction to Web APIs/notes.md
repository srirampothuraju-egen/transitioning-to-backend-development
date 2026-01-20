## Introduction to Web APIs

**API(Application Programming Interface):** Think of it like a restaurant menu. You order food without needing the know how it's made, similar to how you request data from an API without needing to know how it's created.

**Request and Response:** Just like ordering food from a server,  you request data from an API, and it brings back the data for you to use.

**Documentation:** APIs come with documentation that explains what data is available and how to request it, similar to a restaurant menu listing dishes and ingredients.  

---
#### The request and response cycle:  
This involves communication between the client (your web browser) and a server. You make a request to get data from the sever, and the server send back a response with the requested data.
The 'get' request https verb is used to retrieve data from the server. Other common HTTP verbs include 'post' (to add data), 'put' (to update data), and 'delete' (to delete data).
The server will return the response with the data we are expecting when  'get' requests were made properly.

---
#### What is JSON?  
Javascript Object Notation is the dominant data format on the web, used for structuring data as key-value pairs, where keys are like properties and values are the corresponding data. Key and string values must be in double quotes.
JSON data is contained within curly brackets, with keys separated from values by colons and key-value pairs separated by commas.

---
#### Work with objects

Objects have properties (like make, model, year for a car) and actions (like accelerate, stop). To access the properties and methods, you use dot notation, such as car.make to get 'Honda'. Additionally, objects can contain other objects, which you access using additional dots, like car.drive.name to get 'Andrew'. This understanding of objects and dot notation is crucial for working with APIs and JSON data.

---
#### Parse data
When data is send in the response, it is typically sent as a string or readable stream. To work with this data in JavaScript, we need to convert it to JSON. This conversation is done using methods like JSON.parse for strings and .json method for readable streams. Understanding these concepts is crucial for effectively handling response data when working with APIs.

---
#### Postman
It is a tool that allows you to request data from an API without writing code. By default, Postman makes a GET request to retrieve data.
The response from the API is displayed in JSON format, which can be expanded and viewed in different ways.

---
#### API Documentation
Essential for understanding how to work with an API, including what it does and the type of data it provides.
Endpoints are the URLs that connect you to specific data options within the API, similar to different sections of a menu.
Parameters are used to filter and define the response you get from an API, added to the URL after a question mark.
---

#### Working with API

* Parameters in an API URL can be used to filter and organize the data we receive.
* We can add parameters to the URL using either forward slashed or a question mark followed by the parameter name, an equal sign, and its value.
* Multiple parameter can be chained together using the ampersant symbol (&)

**Access data in the response**
* JSON data is displayed in key-value paris, and we can access specific properties using dot notation.
* To access a specific item in an array, use the index number in square brackets.




