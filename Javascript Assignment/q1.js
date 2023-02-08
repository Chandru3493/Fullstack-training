// 1.Given a string, reverse each word in the sentence

var str = "Welcome to this Javascript Guide!".split(" ");
let temp = "";
for (let i = 0; i < str.length; i++) {
  for (let j = str[i].length - 1; j >= 0; j--) {
    temp += str[i].charAt(j);
  }
  temp += " ";
}
console.log(temp);
