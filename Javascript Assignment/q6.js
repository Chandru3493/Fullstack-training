// Validate Name

let validName = (name) => {
  const terms = name.replace(".", "").split(" ");
  if (!name.includes(".")) return false;
  if (terms.length < 2 || terms.length > 3) return false;
  if (terms.length === 2 && terms[0].length == 1 && terms[0].charAt(0) < "a") {
    return true;
  }
  return false;
};

console.log(validName("H. Wells"));
console.log(validName("h. Wells"));
console.log(validName("H Wells"));
console.log(validName("H. George Wells"));
console.log(validName("H. George W."));
console.log(validName("H. George W."));
