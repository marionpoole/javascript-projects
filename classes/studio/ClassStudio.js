//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
    constructor(name, mass, scores = []) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(newScore) {
this.scores.push(newScore);
    }
    average() {
        let total = 0;
        for(let i=0; i < this.scores.length; i++){
            total += this.scores[i];
        }
       let avg = total/this.scores.length;
       let calculatedAverage = Math.round(avg * 10) / 10;
       return calculatedAverage;
    }
    status() {
        let averageScore = this.average();
        let result = '';
      if(averageScore >= 90) {
        result = "Accepted";
      } else if(averageScore >= 80) {
        result = "Reserve";
      } else if(averageScore >= 70) {
        result = "Probationary";
      } else {
        result = "Rejected";
        }
        return `${this.name} earned an average test score of ${averageScore}% and has a status of ${result}`;
      }
    }

let bear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
let dog = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
let alligator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);
alligator.addScore(89);
alligator.addScore(92);
alligator.addScore(87);
// console.log(bear);
// console.log(dog);
// console.log(alligator);

// bear.addScore(83);
// console.log(bear.scores);

// dog.average();
// console.log(dog.average());

console.log(bear.status());
console.log(dog.status());
console.log(alligator.status());
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

// 71.1 probationary
// 78.8 probationary
// 83 Reserve

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.