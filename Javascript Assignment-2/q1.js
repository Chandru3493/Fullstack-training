function concatArrays(...arr) {
  return [].concat(...arr);
}
console.log(concatArrays([1, 2, 3], [4, 5], [7, 8, 9], [10]));
