const calculateChange = function(total, cash) {
  let totalIndex = total;
  let cashIndex = cash;
  let change = cash - total;

  let cashCount = {
    twentyDollar: 0,
    tenDollar: 0,
    fiveDollar: 0,
    twoDollar: 0,
    oneDollar: 0,
    quarter: 0,
    dime: 0,
    nickel: 0,
    penny: 0
  };

  var i = change;
  while (i > 0) {
    if (i - 2000 >= 0) {
      cashCount.twentyDollar += 1;
      i -= 2000;
  } else if (i - 1000 >= 0) {
    cashCount.tenDollar += 1;
    i -= 1000;
  } else if (i - 500 >= 0) {
    cashCount.fiveDollar += 1;
    i -= 500;
  } else if (i - 200 >= 0) {
    cashCount.twoDollar += 1;
    i -= 200;
  } else if (i - 100 >= 0) {
    cashCount.oneDollar += 1;
    i -= 100;
  } else if (i - 25 >= 0) {
    cashCount.quarter += 1;
    i -= 25;
  } else if (i - 10 >= 0) {
    cashCount.dime += 1;
    i -= 10;
  } else if (i - 5 >= 0) {
    cashCount.nickel += 1;
    i -= 5;
  } else if (i - 1 >= 0) {
    cashCount.penny += 1;
    i -= 1;
  }
}
return cashCount;
};

console.log(calculateChange(1787, 2000)); // { twoDollar: 1, dime: 1, penny: 3 }
console.log(calculateChange(2623, 4000)); // { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
console.log(calculateChange(501, 1000)); // { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }
console.log(calculateChange(0001, 500000)); // just another test


// https://pythontutor.com/javascript.html#code=const%20calculateChange%20%3D%20function%28total,%20cash%29%20%7B%0A%20%20let%20totalIndex%20%3D%20total%3B%0A%20%20let%20cashIndex%20%3D%20cash%3B%0A%20%20let%20change%20%3D%20cash%20-%20total%3B%0A%0A%20%20let%20cashCount%20%3D%20%7B%0A%20%20%20%20twentyDollar%3A%200,%0A%20%20%20%20tenDollar%3A%200,%0A%20%20%20%20fiveDollar%3A%200,%0A%20%20%20%20twoDollar%3A%200,%0A%20%20%20%20oneDollar%3A%200,%0A%20%20%20%20quarter%3A%200,%0A%20%20%20%20dime%3A%200,%0A%20%20%20%20nickel%3A%200,%0A%20%20%20%20penny%3A%200%0A%20%20%7D%3B%0A%0A%20%20var%20i%20%3D%20change%3B%0A%20%20while%20%28i%20%3E%200%29%20%7B%0A%20%20%20%20if%20%28i%20-%202000%20%3E%3D%200%29%20%7B%0A%20%20%20%20%20%20cashCount.twentyDollar%20%2B%3D%201%3B%0A%20%20%20%20%20%20i%20-%3D%202000%3B%0A%20%20%7D%20else%20if%20%28i%20-%201000%20%3E%3D%200%29%20%7B%0A%20%20%20%20cashCount.tenDollar%20%2B%3D%201%3B%0A%20%20%20%20i%20-%3D%201000%3B%0A%20%20%7D%20else%20if%20%28i%20-%20500%20%3E%3D%200%29%20%7B%0A%20%20%20%20cashCount.fiveDollar%20%2B%3D%201%3B%0A%20%20%20%20i%20-%3D%20500%3B%0A%20%20%7D%20else%20if%20%28i%20-%20200%20%3E%3D%200%29%20%7B%0A%20%20%20%20cashCount.twoDollar%20%2B%3D%201%3B%0A%20%20%20%20i%20-%3D%20200%3B%0A%20%20%7D%20else%20if%20%28i%20-%20100%20%3E%3D%200%29%20%7B%0A%20%20%20%20cashCount.oneDollar%20%2B%3D%201%3B%0A%20%20%20%20i%20-%3D%20100%3B%0A%20%20%7D%20else%20if%20%28i%20-%2025%20%3E%3D%200%29%20%7B%0A%20%20%20%20cashCount.quarter%20%2B%3D%201%3B%0A%20%20%20%20i%20-%3D%2025%3B%0A%20%20%7D%20else%20if%20%28i%20-%2010%20%3E%3D%200%29%20%7B%0A%20%20%20%20cashCount.dime%20%2B%3D%201%3B%0A%20%20%20%20i%20-%3D%2010%3B%0A%20%20%7D%20else%20if%20%28i%20-%205%20%3E%3D%200%29%20%7B%0A%20%20%20%20cashCount.nickel%20%2B%3D%201%3B%0A%20%20%20%20i%20-%3D%205%3B%0A%20%20%7D%20else%20if%20%28i%20-%201%20%3E%3D%200%29%20%7B%0A%20%20%20%20cashCount.penny%20%2B%3D%201%3B%0A%20%20%20%20i%20-%3D%201%3B%0A%20%20%7D%0A%7D%0Areturn%20cashCount%3B%0A%7D%3B%0A%0Aconsole.log%28calculateChange%281787,%202000%29%29%3B%20//%20%7B%20twoDollar%3A%201,%20dime%3A%201,%20penny%3A%203%20%7D&curInstr=0&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D
