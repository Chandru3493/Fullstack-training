let binarySearch = (arr, num) => {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (target == arr[mid]) return mid;
    if (target > arr[mid]) low = mid + 1;
    if (target < arr[mid]) high = mid - 1;
  }
  return "Element not found";
};

let numbers = [3, 5, 6, 12, 45, 56, 78, 97, 100, 111, 120];
let target = 120;
console.log(binarySearch(numbers, target));
