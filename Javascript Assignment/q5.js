// 5.Given two strings, return true if they are anagrams of one another

let str1 = "Mary";
let str2 = "Army";
if (
  str1.toUpperCase().split("").sort().join("") ==
  str2.toUpperCase().split("").sort().join("")
) {
  console.log("The given strings are anagrams");
} else {
  console.log("The given strings are not anagrams");
}
