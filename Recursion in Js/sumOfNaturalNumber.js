function sumOfNaturalNumbers(n) {
    if (n == 0) {
        return 0;
    } else {
        return n + sumOfNaturalNumbers(n-1);
    }
}
var n = 10;
console.log(sumOfNaturalNumbers(n));