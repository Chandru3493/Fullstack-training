function oddishorevenish(a) {
  let sum = 0;
  while (a > 0) {
    sum += a % 10;
    a = Math.floor(a / 10);
  }
  return sum % 2 == 0 ? "evenish" : "oddish";
}

console.log(oddishorevenish(373));
console.log(oddishorevenish(43));
console.log(oddishorevenish(41));
console.log(oddishorevenish(121));
console.log(oddishorevenish(4433));
