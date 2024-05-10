let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let cabinetArray0 = food.split(',').sort();
let cabinetArray1 = equipment.split(',').sort();
let cabinetArray2 = pets.split(',').sort();
let cabinetArray3 = sleepAids.split(',').sort();


//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [cabinetArray0,cabinetArray1,cabinetArray2,cabinetArray3];
console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
let input = require('readline-sync');
let selection = input.question("Select a cabinet (0-3) from the cargoHold: ");
//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if(selection == 0) {
    console.log(`You selected: ${cargoHold[0]}`);
} else if(selection == 1) {
    console.log(`You selected: ${cargoHold[1]}`);
} else if(selection == 2) {
    console.log(`You selected: ${cargoHold[2]}`);
} else if(selection == 3) {
    console.log(`You selected: ${cargoHold[3]}`);
} else {
    console.log(`Error: That number is an invalid selection.`)
}
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
let selection1 = input.question("Select a cabinet (0-3) from the cargoHold: ");
let selection2 = input.question("Select an item from the cabinet: ");

if(selection1 == 0) {
    if(cargoHold[0].includes(selection2)) {
    console.log(`Cabinet ${selection1} DOES contain ${selection2}`);
    } else {
        console.log(`Cabinet ${selection1} DOES NOT contain ${selection2}`);
    }
} else if(selection1 == 1) {
    if(cargoHold[1].includes(selection2)) {
        console.log(`Cabinet ${selection1} DOES contain ${selection2}`);
        } else {
            console.log(`Cabinet ${selection1} DOES NOT contain ${selection2}`);
        }
} else if(selection1 == 2) {
    if(cargoHold[2].includes(selection2)) {
        console.log(`Cabinet ${selection1} DOES contain ${selection2}`);
        } else {
            console.log(`Cabinet ${selection1} DOES NOT contain ${selection2}`);
        }
} else if(selection1 == 3) {
    if(cargoHold[3].includes(selection2)) {
        console.log(`Cabinet ${selection1} DOES contain ${selection2}`);
        } else {
            console.log(`Cabinet ${selection1} DOES NOT contain ${selection2}`);
        }
} else {
    console.log(`Error: That number is an invalid selection.`)
}