let raceNumber = Math.floor(Math.random() * 1000);

const earlyRegistered = true;

let runnerAge = 23;

if(earlyRegistered === true) {
  raceNumber += 1000;
}

if(runnerAge >= 18 && raceNumber < 1000){
  console.log(`You will race at 9:30am and your race number is ${raceNumber}`);
}
else if(runnerAge >= 18 && raceNumber < 1000){
  console.log(`You will race at 11:00am and your race number is ${raceNumber}`);
}
else if(runnerAge <= 18 || raceNumber >= 1000){
  console.log(`You will race at 12:30am and your race number is ${raceNumber}`);
} 

