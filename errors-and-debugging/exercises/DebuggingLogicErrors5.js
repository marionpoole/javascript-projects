// The value of launchReady assigned in the first if/else block gets changed in the second if/else block. Dangerous waters...
// Since the issue is with launchReady, ONE way to fix the logic error is to use a different variable to store the fuel check result. 
// Refactor the code to do this. Verify that your change works by updating the console.log statements.

let launchReady = false;
let fuelLevel = 17000;
let crewStatus = true;
let computerStatus = 'green';

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}
let fuelSafety = launchReady;

console.log("fuelSafety = ", fuelSafety);

if (fuelSafety && crewStatus && computerStatus === 'green'){
   console.log('Cleared for liftoff!');
   launchReady = true;
} else {
   console.log('WARNING: Not safe for liftoff!')
   launchReady = false;
   }
console.log("launchReady = ", launchReady);