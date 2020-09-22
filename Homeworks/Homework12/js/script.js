// ● написать оператор if..else который принимает значение с prompt и
// выводит в консоль
// 1, если значение больше нуля,
// 1, если значение меньше нуля,
// 0, если значение равно нулю.
let number = parseInt(prompt ("Enter your number", " "));

if (number > 0  || number < 0) {
    console.log("1");
} else if (number == 0){
    console.log("0");
} else {
    console.log("Something went wrong");
}

// ● переписать в тернарный оператор
// var a = 1;
// var n;
// if (a> 0) {n = true; }
// else {n = false; }
let a = 1;
let n = (a > 0) ? true : false;
console.log(n);

// Логические операторы
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

// С помощью конструкции switch записать следующие условия:
// - если ввели 1, то вывести в консоль 'a'
// - если ввели 2 - "b"
// - если ввели 3 - "c"
// - иначе - "z"
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

// вывести в консоль с помощью цикла for квадраты чисел от 1 до 9   "1,4,9, ... 81"
for (let i=1; i<=9; i++){
console.log(i*i);
}

// вывести в консоль с помощью цикла while квадраты чисел от 1 до 9   "1,4,9, ... 81"
let j = 1;
while( j <= 9 ){
    console.log(j*j);
    j++
}

// функция принимает два параметра (числа) и возвращает больший из них
function whatBigger(a, b) {
    console.log (`first number = ${a}, second number = ${b}`)
    return a > b ? a : b;
}
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
console.log(whatBigger(getRandomInt(20),getRandomInt(20)));