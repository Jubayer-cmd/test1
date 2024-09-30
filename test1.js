function firstRepeatingCharacter(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return str[i];
      }
    }
  }
  return -1;
}

console.log(firstRepeatingCharacter('xyzzoy'));

function nonRepeatingCharacter(str) {
  const charCount = {};
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let i = 0; i < str.length; i++) {
    if (charCount[str[i]] === 1) {
      return i;
    }
  }

  return -1;
}

console.log(nonRepeatingCharacter('cccabb'));
