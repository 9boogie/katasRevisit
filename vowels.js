const numberOfVowels = function(data) {
  let letters = data.split('').filter(x => x === 'a' || x === 'i' || x === 'e' || x === 'o' || x === 'u');
  return letters.length;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));