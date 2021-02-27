// this is a commnet in code use "//" to denote stuff that you don't want read by code
console.log("hello world"); // this is the most basic way to see output and debug

var hello = "Hello"//these are known as "strings" just some text
var nombre = "Juan" // this is a "variable"(var) it holds information for you it can be used, changed or updated later 

console.log(hello+nombre);// you can use + to combine strings

var sayHelloProperly = hello+" "+nombre// you will need to add sapces on your own if thats what you want
console.log(sayHelloProperly);

var x = 5;// these are known as integers or INTs
var y = 2;

//you can do operatins on them for a mathmatical solution 
console.log("x+y:",x+y); // + is to add
console.log("x-y:",x-y); // - is to subtract
console.log("x*y:",x*y); // * is to multiply
console.log("x/y:",x/y); // / is to devide. the solution to this problem is knowns as a float (floating point integers) that means it has a decimal point
// you can also compare values 
// the results of a comparison is known as a boolean or bool
console.log("x>y:",x>y); // x is greater then y? ">"
console.log("x<y:",x<y); // x is less than then y? "<"
console.log("x>=y:",x>=y); // x is greater then or equal to y? ">="
console.log("x<=y:",x<=y); // x is less than then or equal to y? "<="
console.log("x==y:",x==y); // x equal to y? "=="

console.log("x+y:",x+y); // the comma in console.log() seperates the logic with a space

console.log("x+y:"+x+y); // if you add a INT to a string funny things can happen it dosen't do math just add them to the string as is

// this is an array its just a list of a buch varibles
var TestArray = ["Juan", 5, hello] 
console.log("TestArray:", TestArray)

// if you want to see one thing in the array you have to give its address from 0 to it's max length
// https://www.w3schools.com/js/js_arrays.asp
console.log("TestArray[0]:", TestArray[0]) // arrays always start at 0
console.log("TestArray[1]:", TestArray[1]) 
console.log("TestArray[2]:", TestArray[2])

console.log("TestArray.length:", TestArray.length) // arrays have a INT propery called length that tells you how many elements are in the array

var Person = {firstName:"Juan", lastName:"Herrea", banana: 9, }; // this is known as an object in javascript it's a varable where you can define its properties
console.log("Person:", Person)
console.log("Person.firstName:", Person.firstName)
console.log("Person.lastName:", Person.lastName)
console.log("Person.banana:", Person.banana)

