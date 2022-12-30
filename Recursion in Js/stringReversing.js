function stringReversal(input) {
    if (input.length == 0) {
        return;
    } else {
        
        stringReversal(input.slice(1, ))+input[0];
        console.log(input[0]);
    }
}


var input = "hello javascript";
stringReversal(input)

