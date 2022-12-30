function palindrome(input, i, j) {
    if (i == j - 1) {
        return true;
    } else if (input[i] == input[j - 1]) {
        i++;
        j--;
        return palindrome(input, i, j);
    }
    else {
        return false;
    }
}

var input = "racecar";
var i = 0;
var j = input.length;
console.log(palindrome(input, i, j));