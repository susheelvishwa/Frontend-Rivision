function replacestr(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      result += "-";
    } else {
      result += str[i];
    }
  }
  return result;
}

let str = " susheel vishwakarma ";
let replacedStr = replacestr(str); 
console.log(replacedStr);