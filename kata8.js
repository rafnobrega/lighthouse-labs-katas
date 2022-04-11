const repeatNumbers = function(data) {
  let finalResult = [];
  let result = '';
  for (let x = 0; x < data.length; x++) {
    for (let i = 0; i < data[x][1]; i++) {
      result += data[x][0];
    }
    finalResult.push(result);
    result = '';
  }
  return finalResult.join(', ');
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

