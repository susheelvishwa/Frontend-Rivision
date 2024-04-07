let count = 0;
let vowels = "aeiou";
let input1 = "pillu";
for (let i = 0; i < input1.length; i++) {
  if (
    input1[i] === "a" ||
    input1[i] === "e" ||
    input1[i] === "i" ||
    input1[i] === "o" ||
    input1[i] === "u"
  ) {
    count++;
  }
}
console.log(count);
