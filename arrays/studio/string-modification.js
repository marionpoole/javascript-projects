const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
str = (str.slice(3,10) + str.slice(0,3));
console.log(str);
//Use a template literal to print the original and modified string in a descriptive phrase.
str = "LaunchCode";
console.log(`The original phrase is: ${str}. The modified string is: ${str.slice(3,10)}${str.slice(0,3)}.`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let userInput = input.question("Enter the number of letters you want relocated to the end of the string(1-10): ");
if (userInput === "1") {
    console.log(str.slice(1,10) + str.slice(0,1));
} else if (userInput === "2") {
    console.log(str.slice(2,10) + str.slice(0,2));
} else if (userInput === "3") {
    console.log(str.slice(3,10) + str.slice(0,3));
} else if (userInput === "4") {
    console.log(str.slice(4,10) + str.slice(0,4));
}else if (userInput === "5") {
    console.log(str.slice(5,10) + str.slice(0,5));
}else if (userInput === "6") {
    console.log(str.slice(6,10) + str.slice(0,6));
}else if (userInput === "7") {
    console.log(str.slice(7,10) + str.slice(0,7));
}else if (userInput === "8") {
    console.log(str.slice(8,10) + str.slice(0,8));
}else if (userInput === "9") {
    console.log(str.slice(9,10) + str.slice(0,9));
}else if (userInput === "10") {
    console.log(str.slice(10,10) + str.slice(0,10));
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
} else {
    console.log(str.slice(3,10) + str.slice(0,3));
    console.log(`Error: Number entered is above 10. 10 is the max number allowed`);
}