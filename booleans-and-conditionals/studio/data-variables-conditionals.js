// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 	850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "clear";
let preparedForLiftOff = "true";

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if(astronautCount <= 7){
    console.log("Astronaut Count is acceptable!");
} else {
    console.log("Astronaut Count is too high. Not safe to launch!");
}

// add logic below to verify all astronauts are ready
if(astronautStatus === 'ready'){
    console.log('Astronauts are ready to go!');
} else {
    console.log('Astronauts are not ready. Not safe to launch!');
}

// add logic below to verify the total mass does not exceed the maximum limit of 850000
if(totalMassKg <= maximumMassLimit){
    console.log('Total mass is safe to go!');
} else {
    console.log('Total mass is too high. Not safe to launch!');
}

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if(fuelTempCelsius > minimumFuelTemp && fuelTempCelsius < maximumFuelTemp){
    console.log('Fuel temperature is safe to go!');
} else if(fuelTempCelsius < minimumFuelTemp) {
    console.log('Fuel temperature is too low. Not safe to launch!');
} else {
    console.log('Fuel temperature is too high. Not safe to launch!');
}

// add logic below to verify the fuel level is at 100%
if(fuelLevel === '100%'){
    console.log('Fuel level is safe to go!');
} else {
    console.log('Fuel level is too low. Not safe to launch!');
}

// add logic below to verify the weather status is clear
if(weatherStatus === 'clear'){
    console.log('Weather is safe to go!\n');
} else {
    console.log('Weather is not clear. Not safe to launch!\n');
}

// Verify shuttle launch can proceed based on above conditions
if(astronautCount <= 7 && astronautStatus === 'ready' && totalMassKg <= maximumMassLimit && fuelTempCelsius > minimumFuelTemp && fuelTempCelsius < maximumFuelTemp && fuelLevel === '100%' && weatherStatus === 'clear'){
    console.log('All systems are safe for launch! Initiating space shuttle launch sequence.');
    console.log('--------------------------------------------------------------------------');
    console.log('Date: ' + date);
    console.log('Time: ' + time);
    console.log('Astronaut Count: ' + astronautCount);
    console.log('Crew Mass: ' + crewMassKg + ' kg');
    console.log('Fuel Mass: ' + fuelMassKg + ' kg');
    console.log('Shuttle Mass: ' + shuttleMassKg + ' kg');
    console.log('Total Mass: ' + totalMassKg + ' kg');
    console.log('Fuel Temperature: ' + fuelTempCelsius + ' C');
    console.log('Weather Status: ' + weatherStatus);
    console.log('--------------------------------------------------------------------------');
    console.log('Have a safe trip astronauts!');
} else {
    console.log('Not safe to launch. Abort mission!');
}