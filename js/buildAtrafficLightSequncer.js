const config1 = {
  fault: false,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 4 }
  ]
};

const config2 = {
  fault: false,
  phases: [
    { color: "red", duration: 3 },
    { color: "yellow", duration: -2 },
    { color: "green", duration: 6 }
  ]
};

const config3 = {
  fault: true,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 6 }
  ]
};

const config4 = {
  fault: false,
  phases: []
};


function runSequence(config, cycles) {

for (let i=0; i<cycles; i++) {
  if(config.phases[0]===undefined) {
  console.log("No phases found");
  return;
}
else if (config.fault===true) {
  console.log("Faulted phase!");
  break;
}
else {
  for (let i=0; i < config.phases.length; i++) {
    if (config.phases[i].duration <= 0){
      console.log("Invalid phase detected")
    }
    else {
      console.log(`Switching to ${config.phases[i].color} for ${config.phases[i].duration} s`)
    }
  }
}
}
}


function generateTimeline(config, cycles) {
  let time =[];
  for (let j=0; j<cycles; j++){
    for (let i=0; i<config.phases.length; i++){
      if (time[0]===undefined) {
        time[i]=config.phases[i].duration
      }
      else {
        const newLength=time.push();
        if (i===0){
          time.push(config.phases[i].duration + time[newLength-1])
        }
        else{
        time.push(config.phases[i].duration + time[newLength-1])
        }
      }
    }
  }
  return time
}