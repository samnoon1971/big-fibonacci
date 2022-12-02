
const M = 1000000007;

function fibonacci(n) {
    if(n === 0) return 0;
    let a = 1, b = 1, c = 1;
    for(let index=2; index<n; index++) {
        c = (a + b) % M;
        a = b;
        b = c;
    }
    return c;
}

module.exports = fibonacci;