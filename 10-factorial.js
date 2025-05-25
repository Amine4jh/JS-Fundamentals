const arg = process.argv[2];
let result = 1;

function factorial(n) {
  n = parseInt(n);
  if (isNaN(n)) {
    return 1
  } else {
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}

console.log(factorial(arg));
