// ● write operator if..else which takes a value from prompt and logs to the console
// 1 if the value is greater than zero,
// 1 if the value is less than zero,
// 0 if the value is zero
let number = parseInt(prompt ("Enter your number", " "));

if (number > 0  || number < 0) {
    console.log("1");
} else if (number == 0){
    console.log("0");
} else {
    console.log("Something went wrong");
}

// ● rewrite to ternary operator:
// var a = 1;
// var n;
// if (a> 0) {n = true; }
// else {n = false; }
let a = 1;
let n = (a > 0) ? true : false;
console.log(n);

// Logical operators
a = 5;
let b = 3;
if ((a>b) && (a===b)){
    console.log("Ok");
} else {
    console.log("This makes no sense");
}

if (true && 0 && ('a' < 'Z')){
    console.log("Ok");
} else {
    console.log("This makes no sense");
}

if ((a>b) || true || ('2'==2) || (false == '')){
    console.log("Ok");
} else {
    console.log("This makes no sense");
}

if ((a<b) && (0 == false)){
    console.log("Ok");
} else {
    console.log("This makes no sense");
}

if (!(2==2) || (true && '')){
    console.log("Ok");
} else {
    console.log("This makes no sense");
}

// Using the switch statement, write the following conditions:
// - if you entered 1, then output 'a' to the console
// - if you entered 2 - "b"
// - if you entered 3 - "c"
// - otherwise - "z"
switch(number){
    case 1: 
        console.log("a");
        break;
    case 2: 
        console.log("b");
        break;
    case 3: 
        console.log("c");
        break;
    default:
        console.log("z");
}

// output to the console using a loop "for" squares of numbers from 1 to 9  "1,4,9, ... 81"
for (let i=1; i<=9; i++){
console.log(i*i);
}

// output to the console using a loop "while" squares of numbers from 1 to 9  "1,4,9, ... 81"
let j = 1;
while( j <= 9 ){
    console.log(j*j);
    j++
}

// the function takes two parameters (numbers) and returns the larger of them
function whatBigger(a, b) {
    console.log (`first number = ${a}, second number = ${b}`)
    return a > b ? a : b;
}
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
console.log(whatBigger(getRandomInt(20),getRandomInt(20)));