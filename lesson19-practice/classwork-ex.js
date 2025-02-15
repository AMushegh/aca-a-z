function addSeparatorsToNumber(number) {
  const strNumberChars = String(number).split("");
  let count = 0;
  let result = "";

  for (let i = strNumberChars.length - 1; i >= 0; i--) {
    result = strNumberChars[i] + result;
    count++;

    if (i !== 0 && count % 3 === 0) {
      result = "," + result;
      count = 0;
    }
  }

  console.log(result);
}

const number = 123789999;

addSeparatorsToNumber(number);
