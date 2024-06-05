let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function() {return Math.round(Math.random()*10)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 8,
   move: function() {return Math.round(Math.random()*10)}
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 2,
   move: function() {return Math.round(Math.random()*10)}
};

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 3,
   move: function() {return Math.round(Math.random()*10)}
};

let invertabrae = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 9,
   move: function() {return Math.round(Math.random()*10)}
};

// After you have created the other object literals, add the astronautID property to each one.

// Add a move method to each animal object

// Create an array to hold the animal objects.

let crew = [superChimpOne, salamander, superChimpTwo, dog, invertabrae];

// Print out the relevant information about each animal.

function crewReports(crew) {
   for(i = 0; i < crew.length; i++) {
      console.log(`${crew[i].name} is a ${crew[i].species}. They are ${crew[i].age} years old and ${crew[i].mass} kilograms. Their ID is ${crew[i].astronautID}.`);
   }

}
crewReports(crew);
// Start an animal race!

function fitnessTest(crew) {
   let results = [];
   let stepsTotal = '';
   let turns = '';
   for(let i = 0; i < crew.length; i++) {
      if(stepsTotal < 20) {
         stepsTotal += crew[i].move();
         turns++;
      } else {
         results.push(`${crew[i].name} took ${crew[i].turns} turns to take 20 steps.`)
      }
      return results;
   }
}
fitnessTest(crew)
