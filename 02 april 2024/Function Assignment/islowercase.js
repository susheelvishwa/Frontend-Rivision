function isLowerCase(char) {
  if (char >= "a" && char <= "z") {
    return true;
  } else {
    return false;
  }
}

console.log(isLowerCase("s")); 
console.log(isLowerCase("S")); 
