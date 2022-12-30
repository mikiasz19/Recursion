function countDown(n) {
    if (n == 0) {
        return 0;
    } else {
        console.log(n);
        return countDown(n-1);
    }
}

var n = 10;
countDown(n);