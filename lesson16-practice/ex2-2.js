function mapLetters(word) {
  let result = {};

  for (let i = 0; i < word.length; i++) {
    const letter = word[i]; // d, o, d, o

    if (!result[letter]) {
      result[letter] = [];
    }

    result[letter].push(i);
  }

  return result;
}

console.log(mapLetters("dodo"));
console.log(mapLetters("froggy"));
console.log(mapLetters("grapes"));
