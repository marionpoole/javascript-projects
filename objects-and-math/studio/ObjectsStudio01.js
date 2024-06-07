let idNumbers = [291, 414, 503, 599, 796, 890];

// Code your selectRandomEntry function here:
function selectRandomEntry(arr) {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}
let candidateAnimals = [];
while(candidateAnimals.length < 3) {

//for (let i = 0; i < 3; i++) {
  let randomSelectedID = 0;
  randomSelectedID += selectRandomEntry(idNumbers);
  if (!candidateAnimals.includes(randomSelectedID)) {
    candidateAnimals.push(randomSelectedID);
  }
}
//Call function 3 times to select ID numbers. Store selections in a new array, making sure to avoid repeated numbers.
//arrayName.includes(item) can check if the array already contains item. A while loop can keep the selection process 
//going until the desired number of entries have been added to the array.

// Code your buildCrewArray function here:
function buildCrewArray(randomSelectedIDs, candidateAnimals) {
  let crew = [];
  for (let i = 0; i < randomSelectedIDs.length; i++) {
    for (let j = 0; j < candidateAnimals.length; j++) {
      if (randomSelectedIDs[i] === candidateAnimals[j].astronautID) {
        crew.push(candidateAnimals[j]);
      }
    }
  }
  return crew;
}
console.log(buildCrewArray(candidateAnimals, animals));

  // Here are the candidates and the 'animals' array:
  let candidateA = {
    'name': 'Gordon Shumway',
    'species': 'alf',
    'mass': 90,
    'o2Used': function (hrs) { return 0.035 * hrs },
    'astronautID': 414
  };
  let candidateB = {
    'name': 'Lassie',
    'species': 'dog',
    'mass': 19.1,
    'o2Used': function (hrs) { return 0.030 * hrs },
    'astronautID': 503
  };
  let candidateC = {
    'name': 'Jonsey',
    'species': 'cat',
    'mass': 3.6,
    'o2Used': function (hrs) { return 0.022 * hrs },
    'astronautID': 796
  };
  let candidateD = {
    'name': 'Paddington',
    'species': 'bear',
    'mass': 31.8,
    'o2Used': function (hrs) { return 0.047 * hrs },
    'astronautID': 291
  };
  let candidateE = {
    'name': 'Pete',
    'species': 'tortoise',
    'mass': 417,
    'o2Used': function (hrs) { return 0.010 * hrs },
    'astronautID': 599
  };
  let candidateF = {
    'name': 'Hugs',
    'species': 'ball python',
    'mass': 2.3,
    'o2Used': function (hrs) { return 0.018 * hrs },
    'astronautID': 890
  };

  let animals = [candidateA, candidateB, candidateC, candidateD, candidateE, candidateF];

// Code your template literal and console.log statements: