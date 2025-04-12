function palindromeDescendant(number) {
  if (String(number).length < 2) {
    return false;
  }

  if (isPalindrome(number)) {
    return true;
  }

  return palindromeDescendant(modifyNumber(number));
}

function isPalindrome(number) {
  return String(number).split("").reverse().join("") === String(number);
}

function modifyNumber(number) {
  let numberArray = String(number).split("").map(Number);

  let shouldAdd = true;
  let res = [];
  for (let i = 0; i < numberArray.length; i++) {
    if (shouldAdd && numberArray[i + 1] !== undefined) {
      res.push(numberArray[i] + numberArray[i + 1]);
      shouldAdd = false;
    } else {
      shouldAdd = true;
    }
  }

  return Number(res.join(""));
}

console.log(palindromeDescendant(11211231));
console.log(palindromeDescendant(13001120));
console.log(palindromeDescendant(23336014));
console.log(palindromeDescendant(11));

// [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
