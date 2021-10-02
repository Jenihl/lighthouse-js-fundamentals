// prints the numbers from 100 to 200 to the console, with three exceptions:

// If the number is a multiple of 3, print the String "Loopy".
// If the number is a multiple of 4, print the String "Lighthouse".
// If the number is a multiple of both 3 and 4, print the String "LoopyLighthouse"
// Used loops and 2 Ternary operator and Modulo for remainder, dont understand the ==0 but Ternary first condition of log is 3 +4 print this

for (let i = 100; i <= 200; i++ ) {
  let lo = i % 3 == 0;
  let li = i % 4 == 0;
  console.log(lo ? li ? "LoopyLighthouse" : "Loopy" : li ? "Lighthouse" : i);
}

