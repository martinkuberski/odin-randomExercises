function add7(input) {
    return input + 7;
}

function multiply(input1, input2) {
    return input1 * input2;
}

function capitalize(input) {
    var first = input[0];
    input = input.slice(1,input.length);
    return first.toUpperCase() + input.toLowerCase();
}

function lastLetter(input) {
    return input[input.length - 1];
}

console.log(add7(5));
console.log(multiply(5, 4));
console.log(capitalize("UPPERCASE"));
console.log(capitalize("lowercase"));
console.log(capitalize("bOtHcAsEs"));
console.log(lastLetter("A string"));