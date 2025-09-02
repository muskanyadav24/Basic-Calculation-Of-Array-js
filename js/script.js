// 1 Write a simple JavaScript program to print expected Output using following array.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Red,Green,White,Black
// Red+Green+White+Black
// Red,Green,White
// Red
// Green,White
// Red,Green,White,Black,orange

let myColor = ["Red", "Green", "White", "Black"];
let myColorElement = document.getElementById("color");

// Red,Green,White,Black
myColorElement.innerHTML = myColor.toString("") + "<br>";
// Red+Green+White+Black
myColorElement.innerHTML += myColor.join("+") + "<br>";
// Red,Green,White
myColorElement.innerHTML += myColor.slice(0,3) + "<br>";
// Red
myColorElement.innerHTML += myColor[0] + "<br>";
// Green,White
myColorElement.innerHTML += myColor.slice(1,3) + "<br>";
// Red,Green,White,Black,orange
myColorElement.innerHTML += myColor.slice(0,4) + ",orange";


// 2.Write a JavaScript program to get sum of all array element using for loop and foreach loop.

let num = [1,2,3,4,5];
let numberElement = document.getElementById("number");
let sum = 0;

// for loop
for(let i=0;i<num.length;i++){
    sum += num[i];
}
numberElement.innerHTML = "Sum using for loop: " + sum + "<br>";

// foreach loop
let sum1 = 0;
num.forEach(function(value){
    sum1 += value;
});
numberElement.innerHTML += "Sum using forEach loop: " + sum1;

// 3.Write a JavaScript program to print a maximum and minimum value of given array.(using function and logic)

let array = [3,5,7,34,2,89,2,5,7,9];
let max = array[0];
let min = array[0];
for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i];
    }
    if (array[i] < min) {
        min = array[i];
    }
}
document.getElementById("maximum").innerHTML = "Maximum: " + max + "<br>Minimum: " + min;

// 4.Write a JavaScript program for convert all array element in ASCII value.

let character = ["A","B","C","D","E"];
let asciiValues = character.map(function(value) {
    return value.charCodeAt(0);
});
document.getElementById("ascii").innerHTML = "ASCII Values :- " + asciiValues.join(", ");

// 5.Write a JavaScript program for remove negative values using the filter array function.
// numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];

let numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];
let filteredNumbers = numbers.filter(function(value) {
    return value >= 0;
});
document.getElementById("filtered").innerHTML = "Filtered Array (Positive Values): " + filteredNumbers.join(", ");


// 6. Write a JavaScript program using array map() method and return the square of array element.
//  arr = [2, 5, 6, 3, 8, 9];

let arr = [2, 5, 6, 3, 8, 9];
let squaredValues = arr.map(function(value) {
    return value * value;
});
document.getElementById("squared").innerHTML = "Squared Values: " + squaredValues.join(", ");

// 7.Write a JavaScript program for sort array in ascending descending.
// numbers = [23,20,17, 12,5, 0, 1, 5, 12, 19, 20];

let n = [23,20,17, 12,5, 0, 1, 5, 12, 19, 20];

// Ascending order
n.sort(function(a,b){
    return a - b;
});
document.getElementById("sorted").innerHTML = "Sorted array (Ascending) :- " + n.join(", ");

// Descending order
n.sort(function(a,b){
    return b - a;
});
document.getElementById("sorted").innerHTML += "<br>Sorted array (Descending) :- " + n.join(", ");

// 8. Write a JavaScript program which filters out any string which is less than 8 characters. 
// words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];

const words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];
const longWords = words.filter(word => word.length >= 8);
document.getElementById("longWords").innerHTML = "Words with 8 or more characters: " + longWords.join(", ");

// 9. write a JavaScript program to  to print expected output for following string.
// x = "airplane";    output:- r
// x = "oxoxoxox";   output:- "oXoXoXoX"
// x = "A New Java Book";   
//  output:-  "a new java book" , "A NEW JAVA BOOK"

const x = "A New Java Book";
const lower = x.toLowerCase();
const upper = x.toUpperCase();
document.getElementById("output").innerHTML = "Output for 'A New Java Book': " + lower + " , " + upper; 


// 10. write a JavaScript program for array reverse.

let arrayReverse = [1,2,3,4,5,6,7,8,9,10];
let reverseElement = arrayReverse.reverse();
document.querySelector(".reverse").innerHTML = "Reversed array :- " + reverseElement.join(", ");


// 11. write a JavaScript program for check value is found or not?

let search = [21,24,6,9,10];
let searchValue = 21;
let found = search.includes(searchValue);
document.querySelector(".searching").innerHTML += "Value " + (found ? "found" : "not found") + " in values array.";

// 12. write a JavaScript program for print your name and write the no of total character.

let name = "Vinayak";
document.getElementById("nameCh").innerHTML += "Name :- " + name + ", Total Characters :- " + name.length;

// 13.  write a JavaScript program given this output using replace concept.
// Input : - "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";
// Output:-  "I often take a walk with my cat in the evening. His cat follows him everywhere. I don't feed my cat in the morning"

let input = "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";
let output = input.replace(/dog/g, "cat");
document.getElementById("nameReplace").innerHTML += "Input: " + input + "<br>Output: " + output;


// 14.  write a JavaScript program convert string to array.
// Input :- "Hire the top 1% freelance developers";
// Output :- ["Hire", "the", "top", "1%"] 

let str = "Hire the top 1% freelance developers";
let arr1 = str.split(" ");
document.getElementById("nameArray").innerHTML += "Input: " + str + "<br>Output: " + arr1.slice(0,4).join(", ") + "<br>";

// 15. write a JavaScript program convert for array to string.
// Input:- ['5', 32, 'Daniel'];
// Output: 5,32,Daniel

let arr2 = ['5', 32, 'Daniel'];
document.getElementById("change").innerHTML += "Input: " + arr2.toString() + "<br>Output: " + arr2.join(",");
