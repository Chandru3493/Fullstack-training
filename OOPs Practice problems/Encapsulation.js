class Enacapsulation {
  static convert(s) {
    let string = s.split(" ").join("");
    string = string.charAt(0).toUpperCase() + string.slice(1);
    return string;
  }
}

console.log(Enacapsulation.convert("HELLO WORLD"));
