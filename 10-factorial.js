const arg = process.argv[2]
let total = 0;

function factorial(n) {
    n = parseInt(n)
    if (isNaN(n)) {
        n = 1
    } else {
        for (let i = n-1; i >= 1; i--) {
            n = n * i
        }
    }
    console.log(n);
}

factorial(arg)