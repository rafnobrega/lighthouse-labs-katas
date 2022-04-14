const checkAir = function (samples, threshold) {
  // samples: array of strings
  // threshold: a number

let dirtyAirCount = 0;
let cleanAirCount = 0;
let totalCount = 0;
let result = 0;

  for (let sample of samples){
    if(sample === "clean") {
      cleanAirCount += 1;
    } else {
      dirtyAirCount += 1;
    }  
  }

  // console.log(cleanAirCount); // prints the cleanAirCount just to visually check if it's correct when comparing to the samples.
  // console.log(dirtyAirCount); // prints the dirtyAirCount just to visually check if it's correct when comparing to the samples.

  totalCount = cleanAirCount + dirtyAirCount;
  // console.log(totalCount); // prints the totalCount just to visually check if it's matching with the total number of samples.

  result = (dirtyAirCount/totalCount);  
  // console.log(result); // result should be lesser than the threshold number for the air to be considered clean.

  if (result > threshold) {
    return "Polluted";
  } else {
    return "Clean";
  }

};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))