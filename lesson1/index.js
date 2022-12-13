function check(n) {
    let count = 0;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            count++
        }
    }
    if (count === 0) return true;
    return false;
}
function result() {
    let a = Number(document.getElementById("num1").value)
    let b = Number(document.getElementById("num2").value)
    let result = document.getElementById("result");
    let sum = 0;
    for (let i = a; i <= b; i++) {
        if (check(i)) {
            sum += i
        }
    }
    result.innerHTML = sum
}

