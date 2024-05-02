let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().
console.log(str.split(' '));

//The parameter inside the () indicates where we split the string or array, at commas/spaces/or between each character.

//2) Use the join method on the array to identify the purpose of the parameter inside the ().
console.log(arr.join("+"));
console.log(arr.join(""));
console.log(arr.join("_"));

//Join adds what you place in () between each item in an array or takes out any spaces depending on the parameter inside the ().

//3) Do split or join change the original string/array?
console.log(str);
console.log(arr);
//Split and join do not change the original string/array.

//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
console.log(cargoHold.split(',').sort().join(" "));