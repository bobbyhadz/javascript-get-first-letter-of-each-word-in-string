// EXAMPLE 1 - Get first letter of each Word in a String in JavaScript

function getFirstLetters(str) {
  const firstLetters = str
    .split(' ')
    .map(word => word.charAt(0))
    .join('');

  return firstLetters;
}

// 👇️ ABC
console.log(getFirstLetters('Alice, Bob, Charlie'));

// 👇️ BHC
console.log(getFirstLetters('Bobby   Hadz   Com.'));

// ------------------------------------------------------------------

// // EXAMPLE 2 - Get first letter of each Word in a String using `String.match`

// function getFirstLetters(str) {
//   const firstLetters = str.match(/\b\w/g).join('');

//   return firstLetters;
// }

// // 👇️ ABC
// console.log(getFirstLetters('Alice, Bob, Charlie'));

// // 👇️ BHC
// console.log(getFirstLetters('Bobby   Hadz   Com.'));
