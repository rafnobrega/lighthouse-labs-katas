const sumLargestNumbers = function(data) {
  let firstLargestNum = 0;
  let secondLargestNum = 0;
  
  for (const num of data) {
    if (num > firstLargestNum) {
      firstLargestNum = num;
    }
  };
  for (const num of data) {
    if (num > secondLargestNum && num < firstLargestNum) {
      secondLargestNum = num;
    }
  };
  const sum = firstLargestNum + secondLargestNum;
  return sum;
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));



// Another way of completing this kata:

/*
for (i = 0; i < data.length; i++) {
  if (firstLargest < data[i]) {
    firstLargest = data[i];
  }
};

for (j = 0; j < data.length; j++) {
  if (data[j] < firstLargest && secondLargest < data[j]) {
    secondLargest = data[j];
  } 
};
sum = firstLargest + secondLargest;
return sum;
};
*/


