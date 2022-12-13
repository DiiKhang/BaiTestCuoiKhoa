let n;
function numberOneTriangle(n) {
    for (let i = 0; i <n; i++) {
        let s = ''
        for (let j = 0; j <= i; j++) {
            s = s + '*'
        }
        document.writeln(s + "<br/>")
    }
}
numberOneTriangle(4)
numberOneTriangle(2)

