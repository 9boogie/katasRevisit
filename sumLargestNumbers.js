const sumLargestNumbers = function(data) {
  const sortedNum = data.sort((a,b) => b - a);
  if (data.length > 1) {
    return sortedNum[0] + sortedNum[1];
  } else {
    return Number(data);
  }
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));