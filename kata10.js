const multiplicationTable = function(maxValue) {
  let result = "";

  for (let row = 1; row <= maxValue; row++) {
    for (let column = 1; column <= maxValue; column++) {
      result = (result + (row * column)) + " ";
      }
    result = result + "\n";
  }
  return result;
};


console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(20));