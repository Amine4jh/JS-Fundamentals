function myFunction(arg) {
  if (arg === 0) {
    console.log("No argument");
  } else if (arg === 1) {
    console.log("Argument found");
  } else {
    console.log("Arguments found");
  }
}

myFunction(process.argv.length - 2);
