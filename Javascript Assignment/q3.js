// 3.Implement enqueue and dequeue using only two stacks

let arr = [];

let push = (n) => {
  arr.push(n);
};

let pop = () => {
  return arr.pop();
};

push(12);
push(14);
push(22);
push(23);
push(24);
console.log(pop());
console.log(pop());
console.log(arr);
