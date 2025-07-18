//* Write a program to check if a number is even or odd.✅
let num =13
// if (num%2==0) {
//     console.log("even")
// } else {
//     console.log("odd")
// }

//* Write a program to find the sum of all numbers in an array.✅
let arr = [2,8,5,10,5]
let sum = 0
// for (let i= 0; i< arr.length; i++) {
//     sum = sum + arr[i]
// }
// console.log(sum);

//* Write a program to capitalize the first letter of each word in a string.✅
let string = ["apple", "mango", "banana"]
// var results = string.map((curElem)=>{
//     return curElem.charAt(0).toUpperCase()+ curElem.slice(1)
// })
// console.log(results)

//* Write a program to convert a given number to a string.✅
let str = 3
// console.log(typeof(str + ""))

//* Write a program to calculate the sum of digits of a given number.✅
let number= 12
let sum1 =0
// while (number!=0) {
//     sum1 = sum1 + number % 2
//     number = Math.floor(number/2)
// }
// console.log(sum1)

//? Write a program to reverse a string.✅
//? Write a program to check if a string is a palindrome.✅
let string1 = "piya"
let reverse = ""
// for (let i = string1.length-1; i >= 0; i--) {
//     reverse = reverse + string1[i]
// }
// console.log(reverse)
// if (string1== reverse) {
//     console.log("it is plaindrome")
// } else {
//     console.log("it is not plaindrome")
// }

//? Write a program to calculate the factorial of a number.✅
let fact =1
let abc = 5
// for (let i = 1; i <=abc; i++) {
//     fact = fact * i
// }
// console.log(fact)

//? Write a program to check if a number is prime.✅
let primenumber = 14
let isPrime = true
// for (let i = 2; i < primenumber; i++) {
//     if (primenumber%i==0) {
//         isPrime =false
//         break
//     }
// }
// if (isPrime) {
//   console.log("Num is prime");
// } else {
//   console.log("Num is not prime");
// }


//? Write a program to sort an array of numbers.✅
let sortArray = [23,31,2,6,9]
// sortArray.sort((a,b) =>  {
//     if (a>b) {
//         return 1
//     } else {
//         return -1
//     }
// })
// console.log(sortArray)

//? Write a program to count the number of vowels in a string.✅
let vowels = "aeiouAEIOU"
let count =0
let str1 = "Priyanshi"
// for (let i = 0; i < str1.length; i++) {
//    if ( vowels.includes(str1[i])) {
//      count++
//    }
// }
// console.log(count)

//? Write a program to find the Fibonacci series up to a given number.✅
let limit= 5
let fib1 = 0
let fib2=1
let fib
// console.log(fib1)
// console.log(fib2)
// fib = fib1+fib2
// while(fib<=5){
//     console.log(fib)
//   fib1 = fib2
//   fib2 = fib
//   fib = fib1 + fib2
// }

// Write a function that takes two numbers as arguments and returns their sum.✅
function add (a,b){
   return a+b
}
// console.log(add(2,3))

 // Write a function that takes a string as an argument and returns its length.✅
function word(name) {
    return name.length
}
// console.log(word("Sanya"))

// Write a program that takes two numbers and displays their sum, difference, product, and quotient.✅
let operation = "add"
let a = 3
let b =15
let result;
// switch (operation) {
//     case "add":
//         result = a+b
//         console.log(result)
//         break;
//     case "sub":
//         result = a-b  
//         console.log(result) 
//          break; 
//     case "mul":
//         result= a*b
//         console.log(result)
//         break;
//     case "div":
//         result = a/b
//         console.log(result)
//         break;
//     case "mod":
//         result = a%b
//          console.log(result)  
//         break;      
//     default:
//         console.log("invalid")
//         break;
// }

// Write a function that takes two numbers as arguments and returns the larger number.✅
// function largerNumber(num1,num2) {
//     if (num1>num2) {
//         return `num1 : ${num1} is greater`
//     } else {
//         return `num2 : ${num2} is greater`
//     }
// }
// console.log(largerNumber(21,22))

// Write a program that takes a number and checks whether it is positive, negative, or zero✅
var no = -23
// if (no==0) {
//     console.log("zero")
// }
// if(no>0){
//      console.log("positive")
// }
// else{
//     console.log("negative")
// }

// Write a program that takes a number and prints the multiplication table for that number.✅
var num2 = 4
var tab;
// for (let i = 1; i <= 10 ; i++) {
//     tab = num2 *i
//     console.log(tab);
// }

 // Write a program that takes a number and calculates the sum of all numbers from 1 to that number.✅
var sum2 = 0;
for (let i = 0; i <= 5; i++) {
    sum2 = sum2 + i
}
// console.log(sum2)

// Write a function that takes two arrays of integers as arguments and returns an array of the common elements in both arrays, without any duplicates. The returned array should be sorted in ascending order.✅
// For example, given the arrays [1, 2, 3, 4, 5] and [3, 4, 5, 6, 7], the function should return [3, 4, 5].
// Hint: You may need to use nested loops and conditional statements to solve this problem.✅
// function findCommonElements(arr1, arr2) {
//   let result = [];
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j] && !result.includes(arr1[i])) {
//         result.push(arr1[i]);
//       }
//     }
//   }
//   return result.sort((a, b) => a - b);
// }
// let array1 = [1, 2, 3, 4, 5];
// let array2 = [3, 4, 5, 6, 7];
// console.log(findCommonElements(array1, array2));

// Write a function called 'greet' that takes a name parameter and logs a greeting message to the console.✅
// function greet(name) {
//     console.log(`Hello my name is ${name}`)
// }
// greet("Priyanshi")

// Write a function called 'getSquare' that takes a number parameter and returns its square.✅
// function getSquare(num) {
//     return num * num
// }
// console.log(getSquare(3))

// Write a function called 'countLetters' that takes a string parameter and returns an object that contains a count of each letter in the string.✅
// function countLetters(string) {
//   let letterCount = {};
//   for (let char of string) {
//     if (char === " ") continue; // skip spaces if needed
//     if (letterCount[char]) {
//       letterCount[char]++;
//     } else {
//       letterCount[char] = 1;
//     }
//   }
//   return letterCount;
// }
// console.log(countLetters("Sanya"));

// Write a function called 'createCounter' that returns a function. The returned function should increment a counter variable each time it is called and return the current count.✅
// function createCounter(){
//     let counts =0
//     return function(){
//         counts++
//         return counts
//     }
// }
// let counter = createCounter()
// console.log(counter())

// Write a function called 'sumEvenNumbers' that takes an array of numbers as a parameter and returns the sum of all even numbers in the array.✅
let array = [2,4,5,7,8]
let sum5 =0
// function sumEvenNumbers(arr){
//    for (let i = 0; i < array.length; i++) {
//     if (arr[i]%2==0) {
//         sum5 = sum5 + arr[i]
//     }
//    }
//    return sum5
// }
// console.log(sumEvenNumbers(array))

// Write a function that takes an array of numbers as an argument and returns the sum of all the numbers in the array.✅
let array1 = [1,2,3,4,5,6,7,8]
let sum3 = 0
// function add(arr) {
//     for (let i = 0; i < array1.length; i++) {
//        sum3 = sum3 + arr[i]
//     }
//     return sum3
// }
// console.log(add(array1))

// Write a function that takes an array of strings as an argument and returns a new array with only the strings that have a length greater than 5.✅
let names = ["ram", "ravi" , "suman", "priyanshi"]
let results = []
// function str2(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length>5) {
//              results.push(arr[i]);
//         }
//     }
//     return results
// }
// console.log(str2(names))

// Write a function that takes an object and returns an array of all the keys in the object.✅
// function getKeys(obj) {
//     return Object.keys(obj)
// }
// let student = {
//   name: "Priyanshi",
//   age: 20,
//   city: "Udaipur"
// };
// console.log(getKeys(student))

// Write a function that takes an array of objects and returns an array of all the values of a specified property name.✅
// let students = [
//   { name: "Sanya", age: 20 },
//   { name: "Priyanshi", age: 19 },
//   { name: "Riya", age: 21 }
// ];

// function getProperty(arrObj, propName) {
//   return arrObj.map(obj => obj[propName]);
// }
// console.log(getProperty(students, "name")); 
// console.log(getProperty(students, "age")); 

// Write a function that takes an array of objects and returns the object with the highest value for a specified property name.✅
// function getMaxByProperty(arr, prop) {
//   return arr.reduce((maxObj, current) => 
//     current[prop] > maxObj[prop] ? current : maxObj
//   );
// }
// const students = [
//   { name: "Sanya", marks: 75 },
//   { name: "Priyanshi", marks: 92 },
//   { name: "Riya", marks: 81 }
// ];
// console.log(getMaxByProperty(students, "marks"));

//* Write a program to check if an array contains a specific value.✅
let fruits = ["mango" , "banana", "apple"]
let value = "banana"
// console.log(fruits.includes(value)); 

//* Write a program to flatten a nested array.✅
let nested = [1, [2, [3, 4]], 5];
let flat = nested.flat(Infinity);
// console.log(flat); 

//? Write a program to find the largest number in an array.✅
let numbers = [2, 5, 10, 7];
let max = Math.max(...numbers);
// console.log(max);

//? Write a program to remove duplicates from an array.✅
let items = [1, 2, 2, 3, 4, 4, 5];
let unique = [...new Set(items)];
// console.log(unique);

//? Write a program to merge two arrays and remove duplicates.✅
let arr1 = [1, 2, 3];
let arr2 = [3, 4, 5];
let mergedUnique = [...new Set([...arr1, ...arr2])];
// console.log(mergedUnique); 

//* Write a program to generate a random number between two given values.✅
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// console.log(getRandom(10, 20));

//* Write a program to find the second largest number in an array.✅
let arr3 = [5, 1, 9, 3, 7];
let secondLargest = [...new Set(arr)].sort((a, b) => b - a)[1];
console.log(secondLargest); 

//* Write a program to find the greatest common divisor (GCD) of two numbers.✅
function findGCD(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
console.log(findGCD(20, 8)); 