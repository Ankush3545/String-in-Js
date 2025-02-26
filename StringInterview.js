//1. what is string in js
//String in js is a sequence of character used to represent text
// strings in js is immuttable that is once they created cannot be changed
// they are enclosed in a singlequote(' '),doubleQuote(" "),and backticks also(` `)

//2. how do you create string in js

let str1="HelloWorld";
let str2='Welcome to our  website';
let str3=`Faridbad`;

//3.How to find the length of string in js
// length property of string returns the length of string
// in length property spaces are also included
console.log(str2.length);

//4.How to concatenate 2 strings in js
// using + operator and concat() method
let result=str1 + '  ' +str2;
console.log(result);
let result2=str1.concat(' ',str3)
console.log(result2)

//5.diff b/w == and === while comparing strings
//== compare string for equality for values  without type of a string while=== compare string for equality for value and  type 
console.log('5'==5);
console.log('5'===5);

//6.how to convert string to uppercase or lowercase
// by using toUpperCase() and toLowerCase() method
console.log(str1.toUpperCase());
console.log(str2.toLowerCase());

//.7 how to extract a part of string in js
//using slice(),subString(),subStr()
console.log(str1.slice(1,6));// ending index not inclusive
console.log(str2.substring(1,10));
console.log(str1.substr(1,5))

//8.how to check string contain  a specific substring in js
//using includes() method
console.log(str1.includes("World"));
console.log(str2.includes("not"));

//.9 how to replace a substring within a string in js
// using replace() method
console.log(str2.replace("website","Faridabad"))

//.10 how to remove  extra white spaces from string
// using trim() ,trimStart(), trimEnd() method 
let trimWhite="   Ankush Patrawat   ";
console.log(trimWhite.trim());
console.log(trimWhite.trimEnd())
console.log(trimWhite.trimStart());

//.11 how to split  a string into an array
// split() method

//12. what is purpose of charAt() method
// returns the character at a specified index in a string

console.log(str1.charAt(7));

//.13 how do you repeat a string multiple times in js
// using repeat() method repeats a string a specified number of times
let helloString="Hello";
console.log(helloString.repeat(1))

//.14 how do you pad a string  to a certain length in js 
// using padStart() and padEnd() method
const padString='5';
console.log(padString.padStart(5,'10'))
console.log(padString.padEnd(3,'9'))

//.15 how to find index of substring() in a string
// indexOf() returns the index of firstly occurence string if not find it shows -1
let indexStr="Hello world";
console.log(indexStr.indexOf("world"));
console.log(indexStr.indexOf('World'));

//.16 diff b/w slice() and subString()
// both extract part of substring from string but slice() allows negative index while subString() does not

let diffSplice='Hello World';
console.log(diffSplice.slice(-6));
console.log(diffSplice.substring(1,5));
console.log(diffSplice.slice(1))// shows all the elemnts after index1

//.17 how to convert string to Array
// using split() method
let strSplit="Hello";
console.log(strSplit.split(""));

//.18 how to check string start with a specific subString or not
// using startWith() method

let strStart="Hello world";
console.log(strStart.startsWith("Hello"));
console.log(strStart.startsWith("world"))

//.19 how to check string end with specific subString or not
//. using endWith() method
let endString="hello world";
console.log(endString.endsWith("hello"));
console.log(endString.endsWith("world"));

//.20 how to use template literal in js
// to embaded an expresion and any varible inside string
// it can be written within (` `) backticks

let name="Ankush";
console.log(`Thakur ${name} rajput`);

//.21 how do you escape special character in a string in js
// using (\) backSlash

//.22 how to compare two string in js
// by using localCompare() method

let fruit1="Apple";
let fruit2="Mango";
let fruit3="Apple";
console.log(fruit1.localeCompare(fruit2));
console.log(fruit1.localeCompare(fruit3));

//.23 what is template literal how do we use it
// it is a string embaded in backTick that allows you to write expressinon within string
// used for string interpolation
let tempString="Hello world";
console.log(` Welcome to ${tempString} `)

//.24 how to acces characters of a string using bracket notation
//.same as like array indices

let arryString="Ankush";
console.log(arryString[2]);
console.log(arryString[6]);

//.25 how to convert a string to an array of words in js
// using split() method
let spltString="Hello Ankush";
console.log(spltString.split(" "))// useful method to convert sentence into word

//.26 how to find last occurence of a substring in a string in js
// using the lastIndexOf() method
let lastIndeStr="Hello Faridabad Hello";
console.log(lastIndeStr.lastIndexOf("Hello"));

//.27 how to check string matches a regular expression or not
// using match() method
let matchStr="Hello Ankush";
console.log(matchStr.match(/Ankush/));

//.28 replaceAll() method in string in js
const replAll="Hello Ankush Hello";
console.log(replAll.replaceAll("Hello","Good Morning"));




