/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */

for(let i = 0; i <21; i++){
  console.log(i);
}

for(let oddValues = 3; oddValues <30; oddValues +=2){
  console.log(oddValues);
}

for(let evenValues = 12; evenValues > -15; evenValues -=2){
  console.log(evenValues);
}

for(let multipleOfThree = 50; multipleOfThree > 19; multipleOfThree -=1){
  if(multipleOfThree % 3 === 0){
  console.log(multipleOfThree);
  }
}

/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].

Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */ 

let arr = [1,5,'LC101','blue',42];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let codingClass = 'LaunchCode';
let reversed = "";

for(let i = 0; i < codingClass.length; i++) {
  reversed = codingClass[i] + reversed;
} 
console.log(reversed);

/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */

  let assignedArray = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
  let oddArray = "";
  let evenArray = "";

  for(let i = 0; i < assignedArray.length; i++){
    if(assignedArray[i] % 2 !== 0){ 
      oddArray = assignedArray[i];
      console.log(oddArray);
    }
  }

  for(let j = 0; j < assignedArray.length; j++){
    if(assignedArray[j] % 2 == 0){
      evenArray = assignedArray[j];
      console.log(evenArray);
    }
  }