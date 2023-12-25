// var myName='Abhishek Mahesh Manisha Khandare';
// console.log(myName);

//----------------------------------------------------------------------------------//
// var myName='Abhishek';
// var myNumber=1222344456;

// console.log(myName);
// console.log(isNaN(myName));                                //NaN----- Not A Number

// console.log(myNumber);
// console.log(isNaN(myNumber));

// if(!isNaN(myNumber)){
//      console.log("Please enter a valid phone number");
// }
//---------------------------------------------------------------------------------//

//...................................LEAP YEAR using If-Else......................//
// var year = 2024;
// debugger;
// if (year % 4 == 0) {
//   if (year % 100 == 0) {
//     console.log("The year " + year + " is not a leap year");
//   } else {
//     console.log("The year " + year + " is a leap year");
//   }
// } else {
//   console.log("The year " + year + " is not a leap year");
// }
//................................................................................//

//..................................Falsy Values...............................//
// if ((score = undefined)) {
//   console.log("Yay, we won !!");
// } else {
//   console.log("No, we loss !!");
// }

// 0, "", null, undefined, NaN.................................................//

//...............................Conditional Ternary Operator.................//
// var age = 18;
// console.log(
//   /*condition*/ age >= 18 ? /*true*/ "you can vote" : /*false*/ "you can't vote"
// );

// var num = 8;
// for (var i = 1; i <= 10; i++) {
//   console.log("8 x " + i + " = " + num * i);
// }

// using tableOf
//for (var i = 1; i <= 10; i++) {
//   var tableOf = 8;
//   console.log(tableOf + " * " + i + " = " + tableOf * i);
// }

// function sum() {
//   var a = 10,
//     b = 12;
//   var total = a + b;                       parameter
//   console.log(total);
// }
// sum();

// function sum(a, b) {
//   var total = a + b;
//   console.log(total);                       arguments
// }
// var tot = sum(15, 32);
// console.log("Total sum is " + tot);

// function sum(a, b) {
//   return (total = a + b);                 return
// }
// var tot = sum(15, 32);
// console.log("Total sum is " + tot);

/////////anonymous function exp//////
// var sum = function (a, b) {
//   return (total = a + b);
// };
// console.log(sum(5, 13));

//or var addFunc=sum(5,13);
//console.log("The sum of two numbers is "+addFunc);

//LET VS VAR VS CONST
//scope of VAR is called function scope
// VAR variables can be used anywhere throughout the function
//scope of LET and CONST is called block scope
//LET & CONST variables can be used only in there blocks i.e. if, for,etc

//Using LET & VAR you can easily change/manipulate the values
//CONST doesn't change values, it remains constant

//Template literals//
// for (let i = 1; i <= 10; i++) {
//   let tableOf = 11;
//   console.log(`${tableOf}*${i}=${tableOf * i}`);
// }

/////////FAT ARROW FUNCTION/////////
// const sum = () => {
//   let a = 5,
//     b = 6;
//   let sum = a + b;
//   return `The sum of two numbers is ${sum}`;
// };

////////one line code//////////
// const sum = () => `The sum of two numbers is ${(a = 5) + (b = 3)}`;

// console.log(sum());

// var myFood = ["chicken", "pizza", "burger", "cheesecake", "shawarma"];
// // console.log(myFood[1]);
// console.log(myFood.length);
// // for (var i = 0; i < myFood.length; i++) {
// //   console.log(myFood[i]);
// // }

// //FOR IN LOOP///////////// provides index number of the elemnts from array
// // for (let elements in myFood) {
// //   console.log(elements);
// // }

// //FOR IN LOOP///////////// provides elemnts from array
// for (let elements of myFood) {
//   console.log(elements);
// }

//var num = [1, 12, 10, 25, 63];
//////////////////NORMAL FUNCTION/////////////////
// myFood.forEach(function (element, index, array) {
//   console.log(element + " index : " + index);
// });

/////////////////////FAT ARROW FUNCTION/////////////////
// myFood.forEach((element, index, array) => {
//   console.log(element + " index : " + index);
// });

// myFood.indexOf("shawarma");

/////////////////////////////SPLICE METHOD/////////////////////////////////////////
// const myFood = ["chicken", "pizza", "burger", "cheesecake", "shawarma"];
// // console.log(myFood);
// // const newFood = myFood.splice(5 /* or use myFood.length*/, 0, "Tandoori");
// // console.log(myFood);
// const updatedList = myFood.splice(1, 1, "Pizza");
// console.log(updatedList);
// console.log(myFood);

// myFood.push("Ramen");  add new elements at the end of the array
// myFood.pop();   removes the most recent element from array
//myFood.unshift("Tandoori")  add new element at the beginning of the array
//myFood.shift()  removes the element from start in an array
// myFood.forEach((element, index, array) => {
//   console.log(element + " index : " + index);
// });

/////////////////////ARRAY////////////////////////////////////////////////////////////////////////
/////////////////////ARRAY////////////////////////////////////////////////////////////////////////
/////////////////////ARRAY////////////////////////////////////////////////////////////////////////
/////////////////////ARRAY////////////////////////////////////////////////////////////////////////

////////MAP and FILTER METHOD////////////////////////

////////SQRT problem////////////////
// let num = [25, 36, 49, 64, 81];
// let sqrt = num.map((currEl) => {
//   return Math.sqrt(currEl);
// });
// console.log(sqrt);

//////////Multiplication problem/////////
// let num = [2, 3, 4, 5, 6, 8];
// let mul = num
//   .map((currEl) => {
//     return currEl * 2;
//   })
//   .filter((currEl) => {
//     return currEl >= 10;
//   });
// console.log(mul);

////////////////////REDUCE METHOD///////////
// let arr = [5, 10, 6, 3];
// let sum = arr.reduce((accumulator, currEl, index, arr) => {
//   return (accumulator += currEl);
// });
// console.log(sum);

// const arr = [
//   ["a", "b"],
//   ["c", "d"],
//   ["e", "f"],
//   ["g", "h"],
// ];

// let flatArr = arr.reduce((accum, currEl) => {
//   return accum.concat(currEl);
// });
// console.log(flatArr);

/////////////////////STRING////////////////////////////////////////////////////////////////////////
/////////////////////STRING////////////////////////////////////////////////////////////////////////
/////////////////////STRING////////////////////////////////////////////////////////////////////////
/////////////////////STRING////////////////////////////////////////////////////////////////////////

// let data = "My age is 20"; ///indexOf used to find string/patter inside a string
// console.log(data.lastIndexOf("age")); ////lastIndexOf used to find pattern from last

//slice(start,end) extracts part of a string and make it a new string
//slice can take negative index value
//slice does not take upto the end position

// const fruit = "Apple,pineapple,banana,orange,grapes";
// let res = fruit.slice(6, 15); includes one less than end number mentioned
// console.log(res);

//Q. make a commment restricted upto 280 characters only
// let tweet =
//   " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum ";
// let limit = tweet.slice(0, 280); ///limit of 280 characters
// // console.log(tweet);
// console.log(limit);

//substring(start,end) extracts a part of a string and make it a new string
//it does not take negative values
// let clothes = "Puffer Jacket,Leather Jacket,Jeans,Sweatshirt";
// let res1 = clothes.slice(14, -2);
// console.log(res1);

// let res2 = clothes.substring(14, -2);
// console.log(res2);

//substr() is similar to slice()
//substr(start,length) here it takes starting position and length for the new string
//substr takes negative values

// const fruit = "Apple,pineapple,banana,orange,grapes";
// let res = fruit.substr(0, 5); //apple is having 5 chars, so start 0 and length 5
// console.log(res);

//replace() used to replace a string/match
//replace(match,replaceWith)
//it only replaces the first match, even if more than 1 matches are found

// let myName = "Abhi Mahesh Khandare";
// let update = myName.replace("Abhi", "Abhishek");
// console.log(update);

//extract character of the string
//charAt()--------------------> Returns the char at the position
//charCodeAt()-------------------->Returns unique number for the char at the mentioned position
//Property access[]-------------------->allows access on string

//Q. Return Unicode for the last char of the string
// let str = "Nothing but something";
// console.log(str.charCodeAt(20));
// let str = "Nothing but something";
// let lastChar = str.length - 1;
// console.log(str.charCodeAt(lastChar));

//other useful methods
// let str = "Abhishek Khandare";
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

//string concatenation
// let str1 = "Choco";
// let str2 = "Mint Icecream";
// console.log(str1.concat(str2));
// console.log(`${str1} ${str2}`); ----------> best to use for string concatenation

//trim() removes whitespaces from both sides of the string

//split() method is used to convert a string into an array
// let txt = "a,b,c,d,e,f,g,h";
// console.log(txt.split(","));----------> split on commmas
// console.log(txt.split(" "));----------> split on spaces
// console.log(txt.split("|"));----------> split on pipes

/////////////////////DATE AND TIME////////////////////////////////////////////////////////////////////////
/////////////////////DATE AND TIME////////////////////////////////////////////////////////////////////////
/////////////////////DATE AND TIME////////////////////////////////////////////////////////////////////////
/////////////////////DATE AND TIME////////////////////////////////////////////////////////////////////////

//There are 4 ways to get date
// new Date()
// new Date(year,month,day,hours,minutes,seconds,milliseconds)
// new Date(milliseconds)
// new Date(date string)

// let currDate = new Date();
// // console.log(currDate);
// // console.log(currDate.toLocaleString());
// console.log(currDate.toString());

// console.log(Date.now()); ----------> Gives the curr Date&Time in milliseconds

// let dt = new Date(2023, 4, 29, 00, 00, 00);
// console.log(dt.toLocaleString());

// let dt = new Date(1685263809203);
// console.log(dt);

// var currDate = new Date();

// date methods
// console.log(currDate.toLocaleString());
// console.log(currDate.getFullYear());
// console.log(currDate.getDate());
// console.log(currDate.getMonth());
// console.log(currDate.getDay());

// let currTime = new Date();
// // console.log(currTime.setTime());
// console.log(currTime.setHours(5));
// console.log(currTime.setMinutes(12));

// console.log(Math.trunc(4.75));
// console.log(Math.trunc(-91.56));

/////////////////////DOM AND  BOM / WINDOW////////////////////////////////////////////////////////////////////////
/////////////////////DOM AND  BOM / WINDOW////////////////////////////////////////////////////////////////////////
/////////////////////DOM AND  BOM / WINDOW////////////////////////////////////////////////////////////////////////
/////////////////////DOM AND  BOM / WINDOW////////////////////////////////////////////////////////////////////////

//document; ----------> covers the whole document
//document.documentElement ----------> covers till the root element </HTML>
//document.head ----------> covers till </head>
//document.body ----------> covers till </body>
//document.body.childNodes ----------> gives list of Nodes
//text ----------> includes tab,enter and whitespace
//document.body.hasChildNodes() ----------> gives true/false based on whether the body has any child or not
//document.body.firstElementChild ----------> gives the actual element child of the body and note "text"

/////////////////////OBJECTS////////////////////////////////////////////////////////////////////////
/////////////////////OBJECTS////////////////////////////////////////////////////////////////////////
/////////////////////OBJECTS////////////////////////////////////////////////////////////////////////
/////////////////////OBJECTS////////////////////////////////////////////////////////////////////////

//ways to create object

//this refers current context and i.e. window global object

//this used with normal function in object changes the current contexxt from window to current object

//1.ES6

// let bioData = {
//   myName: "Abhishek Khandare",
//   myAge: 20,
//   jobRole: "SWE",
//   currentComp: "Meta",
//   getData() {
//     console.log(
//       `I am ${this.myName}, age ${this.myAge} and I'm working as ${this.jobRole} at ${this.currentComp}`
//     );
//   },
// };

// bioData.getData();

//2. object as a value inside object
// let bioData = {
//   myName: {
//     realName: "Abhishek Khandare",
//     nickName: "Bhoku",
//   },
//   myAge: 20,
//   jobRole: "SWE",
//   currentComp: "Meta",
//   getData() {
//     console.log(
//       `I am ${this.myName.realName}, age ${this.myAge} and I'm working as ${this.jobRole} at ${this.currentComp}`
//     );
//     console.log(`My nickname is ${this.myName.nickName} though :|)`);
//   },
// };

// bioData.getData();

/////////////////////Array Destructuring////////////////////////////////////////////////////////////////////////
/////////////////////Array Destructuring////////////////////////////////////////////////////////////////////////
/////////////////////Array Destructuring////////////////////////////////////////////////////////////////////////
/////////////////////Array Destructuring////////////////////////////////////////////////////////////////////////

// const myBioData = ["Abhishek", "Khandare", 20, 9.12];

// let myfName = myBioData[0];
// let mylName = myBioData[1];
// let myAge = myBioData[2];
// let mycgpa = myBioData[3];

// console.log(myAge);

//Now instead of writing this we can write as follows:

// let [myfName, mylName, myAge, mycgpa] = myBioData;

// console.log(mycgpa);

//this way of decclaring variables inside an array is called
//destructuring of an array

/////////////////////Object Destructuring////////////////////////////////////////////////////////////////////////
/////////////////////Object Destructuring////////////////////////////////////////////////////////////////////////

// const myData = {
//   myName: "Abhishek Khandare",
//   myAge: 20,
//   degree: "BE in Computer",
//   mycgpa: 9.12,
// };

// // let age = myData.myAge; ---> instead of this we can destructure the object

// // console.log(age);

// let { myName, myAge, degree, mycgpa } = myData;

// console.log(myName);

/////////////////////Object Properties////////////////////////////////////////////////////////////////////////
/////////////////////Object Properties////////////////////////////////////////////////////////////////////////

///1

// how to use dynamic values

// const p1 = "abhishek",
//   p2 = "sameep";

// const ourConvo = {
//   p1: "Hello, how was the vacation?",
//   p2: " Bakwass!",
// };

// console.log(ourConvo);

/*

  p1: "Hello, how was the vacation?",
  p2: " Bakwass!",

  here will give output as:
  p1: ____
  p2: ____

  to use values dynamically , we've to use 
  square brackets
*/

// const ourConvo = {
//   [p1]: "Hello, how was the vacation?",
//   [p2]: " Bakwass!",
// };

// console.log(ourConvo);

//2

// no need to write key,value pair if the they are same

// let myFull = "Abhishek Khandare";
// let age = 20;

// const myData = {
//   myFull: myFull,
//   age: age,
// };

//here instead of writing it in key:value pair
//we can simply write in the key
// const myData = { myFull, age };
// console.log(myData);

/////////////////////Spread Operator////////////////////////////////////////////////////////////////////////
/////////////////////Spread Operator////////////////////////////////////////////////////////////////////////

// ... three dots are nothing but spread operator
//  it used to include the array of elements into an array
// instead of writing it's whole content we can just include that array using three dots

// const myColors = ["black", "white", "beige", "blue"];

// const myFav = [...myColors, "sage green", "red"];

// console.log(myFav);

//ES 7

//1 ---> array includes, returns boolean value
// const myColors = ["black", "white", "beige", "blue"];
// // let isTrue = myColors.includes("fuchia");
// let isTrue = myColors.includes("blue");
// console.log(isTrue);

//2 ---> exponential operator --> **

// console.log(14 ** 2);

// ES 8

//1. String Padding

//padStart() ---> add spaces in beginning

// let firstName = "Abhishek".padStart(7);
// console.log(firstName)

//padEnd() ---> add spaces at end

// let myAge="20".padEnd(10);
// console.log(myAge);

//2. Object.values()
// returnns an array containing all the object own property values

// const users = {
//   name: "Jorge",
//   age: 37,
// };

// console.log(users); instead of this use object.values

// console.log(Object.values(users));

//3. Object.entries()
// returns an array of array including key:value pairs

// const users = {
//   name: "Jorge",
//   age: 37,
// };

// console.log(Object.entries(users));

// ES8 ---> Spread and Rest operator

// const users = {
//   name: "Jorge",
//   age: 37,
// };

// const newUser = {
//   ...users,
//   newName: "ramesh",
//   newAge: 29,
// };

// console.log(users);
// console.log(newUser);

//ES2019

// 1 ---> Flatten an array

// const arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
//   [7, [8, 9]],
// ];

// console.log(arr.flat());
// console.log(arr.flat(2));
// console.log(arr.flat(Infinity));

// 2 ---> Object.fromEntries()

// const users = {
//   name: "Jorge",
//   age: 37,
// };

// console.log(Object.entries(users));
// const arrObj = Object.entries(users);
// // ---> entries return array including arrays of key:value pair

// console.log(Object.fromEntries(arrObj));
//fromEntries convert back them to normal

//ES2020

//1.
//BigInt ---> use n to perform algebraic operations
// on numbers greater than MAX_SAFE_INTEGER
// that is called using BigInt

// let oldnum = Number.MAX_SAFE_INTEGER;
// console.log(oldnum);
// console.log(typeof oldnum);

// const newnum = 9007199254740991n + 100n;
// console.log(newnum);
// console.log(typeof newnum);
// consol
//2. Nullish Coalescing Operator ??

// const nimu = null ?? undefined;
// const nimu = null ?? any value or string;
// console.log(nimu);

// Lexical scoping means inner function caan get access to
// their parent functions variables but vice-versa is not true

// let a = "Hello everyone ";

// const first = () => {
//   let b = " How are you? ";

//   const second = () => {
//     let c = " Hi, Im fine thanks ";
//     let d = " Nope, nope nope ";
//     console.log(a + b + c + d);
//   };
//   second();
//   // console.log(c + d); not possible
// };
// first();

// Synchronous Javascript
// if you are using two functions simultaneously
// youu can't execute the 2nd function until the 1st is executed
// one at a time

// Asynchronous Javascript
// you can use multiple functions at a time
// their execution is not haulted/terminated
// by any other function

//EVENT SUM
// const fun2 = () => {
//   setTimeout(() => {
//     console.log(`Function 2 is called`);
//   }, 2000);
// };

// const fun1 = () => {
//   console.log(`Function 1 is called`);
//   fun2();
//   console.log(`Function 1 is called again`);
// };

// fun1();'

// Function currying
// it used to solve the function passed with multiple arguments

// function sum(num1) {
//   return function (num2) {
//     // console.log(num1,num2);
//     return function (num3) {
//       console.log(num1 + num2 + num3);
//     };
//   };
// }

// sum(5)(3)(8);

// HOW to FETCH API? ---> using XML

// const container = document.querySelector("#id_name");
// const request = new XMLHttpRequest();
// request.open("GET", "api url");
// request.send();

// // get response form API
// request.addEventListener("load", function () {
//   // convert JSON format to JS format
//   const [data] = JSON.parse(this.responseText);
//   console.log(data);

//   // get html data here
//   const htmlData = `
//                 html data
//                   `;
//   container.insertAdjacentHTML(
//     "afterbegin/beforeend/beforebegin/afterend",
//     htmlData
//   );
// });

//JSON.stringify is used to convert JS object to JSON text

// var ap = {
//   name: "Ram",
//   age: 35,
//   local: "Chembur",

//   name1: "Chirag",
//   age1: 31,
//   local1: "Sion",
// };

// var ap_string = JSON.stringify(ap);
// console.log(ap_string);

// //convert the JSON text to JS format again
// var ap_again = JSON.parse(ap_string);
// console.log(ap_again);

// Promises and fetch the API

// Promises ---> either fulfilled or fails

// fulfilled : everything is okay

// failed : internet errors, other errors, etc

// fetch('api url')

// for eg: a website that generates jokes everytime we click btn
// const jokes = document.querySelector("#joke");
// const jokeBtn = document.querySelector("#jokeBtn");

// const generate = () => {
//   fetch("api_url")
//     .then((res) => {
//       // then --> means promise is fulfilled and api is fetched
//       console.log(res.json());
//       //catch --> means promise is failed and shows the error
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

//sometimmes it may happen that you'll get
// whole htmml in the response and promise will be not fulfilled
//in that case we need to seat header
// Header -> accept -> application/json

// const setHeader = {
//   headers: {
//     Accept: "applicatiion/json",
//   },
// };

// fetch("api_url", setHeader);

//How to use async await

//for tradition function
// async function generate(){

// }

//if using fat arrow function
// const generate = async () => {
//   try {
//     // try is used for error handlinh
//     // it is used with async await
//     const setHeader = {
//       headers: {
//         Accept: "applicatiion/json",
//       },
//     };

//     const res = await fetch("api_url");
//     const data = await res.json();
//     jokes.innerHTML = data.joke;
//   } catch (err) {
//     console.log(`the error is ${err}`);
//   }
// };

//Math.random() gives a random number everytime we refresh a page
