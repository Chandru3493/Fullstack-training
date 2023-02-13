let binarySearch = (arr, x, low, high) => {
  if (low > high) return false;
  let mid = Math.floor((low + high) / 2);
  if (arr[mid] === x) return true;
  if (arr[mid] > x) return binarySearch(arr, x, low, mid - 1);
  else return binarySearch(arr, x, mid + 1, high);
};

let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let x = 10;
if (binarySearch(arr, x, 0, arr.length - 1)) console.log(x + " found");
else console.log(x + " not found");
