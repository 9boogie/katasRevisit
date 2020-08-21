const conditionalSum = function(values, condition) {
  let result = 0;
  if (condition === 'even') {
    (values.filter(num => num % 2 === 0)).map(x => result += x);
  } else if (condition === 'odd') {
    (values.filter(num => num % 2 !== 0)).map(x => result += x);
  }
  return result;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));