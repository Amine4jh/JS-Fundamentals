const arg = process.argv[2]
let toNum = parseInt(arg)

console.log(isNaN(toNum) ? "Not a number" : `My number: ${toNum}`);
