let x = window.prompt("Choose one of the following operands: +,-,*,/ ");
let y = window.prompt("Enter first number: ");
let z = window.prompt("Enter second number: ");

if (x == "+") {
    alert(Number(y) + Number(z));
} else if (x == "-") {
    alert(Number(y) - Number(z));
} else if (x == "*") {
    alert(Number(y) * Number(z));
} else if (x == "/") {
    alert(Number(y) / Number(z));
}