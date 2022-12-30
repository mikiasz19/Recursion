function find(decimal_number) {
    // base case
    if (decimal_number === 0) {
        return 0;
    } else {
        return decimal_number % 2 + 10 * find(Math.floor(decimal_number/2));
    }
}


var decimal_number = 223;
console.log(find(decimal_number));