const arg = process.argv[2];
const char = "X";

if (isNaN(arg)) {
  console.log("Missing size");
} else {
  for (let i = 0; i < arg; i++) {
    console.log(char.repeat(arg));
  }
}
