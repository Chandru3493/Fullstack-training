/* 4.Create a for loop that iterates up to 100 while outputting "fizz" at
multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples
of 3 and 5. */

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) console.log("fizz buzz");
  else if (i % 3 == 0) console.log("buzz");
  else if (i % 5 == 0) console.log("fizz");
}
