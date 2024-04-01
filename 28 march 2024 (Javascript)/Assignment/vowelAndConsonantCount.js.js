function vowelAndConsonantCount(N, str) {
  let vowelsCount = 0;
  let consonantsCount = 0;
  function isVowel(char) {
    return ["a", "e", "i", "o", "u"].includes(char);
  }
  for (let i = 0; i < N; i++) {
    if (isVowel(str[i])) {
      vowelsCount++;
    } else {
      consonantsCount++;
    }
  }
  console.log(vowelsCount, consonantsCount);
}

vowelAndConsonantCount(6,"aeiouS")