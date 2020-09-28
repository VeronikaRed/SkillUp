// добавлять элементы в массив через метод prompt() пока пользователь
// не нажмет cancel
function setupArray() {
    let array = [];
    while (true) {
        let variable = prompt("Enter number", "");
        if (variable == null || variable == "") break;
        array.push(parseInt(variable));
    }
    return array;
}
console.log(setupArray());

// найти сумму элементов двумерного массива
let Arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
function getSumOfTwoDimArr() {
    let res = 0;
    for (let i = 0; i < Arr.length; i++) {
        for (let j = 0; j < Arr[i].length; j++) {
            res += Arr[i][j];
        }
    }
    return res;
}
console.log(getSumOfTwoDimArr());

// разбить строка lorem по разделитель “ “ и вывести в консоль слова
// длиной более 5
let str = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, id.";

function showLongWords(str) {
    let array = str.split(" ");
    for (let i = 0; i < array.length; i++) {
        if (array[i].length >= 5) {
            console.log(array[i]);
        }
    }
}
showLongWords(str);

// дано массив [1, 9, 22, 7, 6] добавить число 8 после 22
let arr = [1, 9, 22, 7, 6];
arr.splice(3, 0, 8);
console.log(arr);

// написать функцию randomNumber (number), которая наполняет массив
// случайными числами от 0 до 100, где number - длина массива
function randomNumber(length, start = 0, end = 100) {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr[i] = getRandom(start, end);
    }
    return arr;
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomNumber(7));

// проверить в массиве есть число, которое вводится через prompt ()
let arrOfNumbers = randomNumber(7, 0, 10);
console.log(`generated array is ${arrOfNumbers}`)
let candidate = parseInt(prompt("Enter your number", ""));

function checkCandidate(arrOfNumbers, candidate){

    console.log(`entered number is ${candidate}`);
    for(let item of arrOfNumbers){
        return (item == candidate) ? 'here I am' : 'no';
    }
}

console.log(checkCandidate(arrOfNumbers, candidate));

// с помощью метода forEach найти самое длинное слово в строке lorem
let string = "Lorem ipsum dolor sit amet consectetur adipisicing elit Labore quasi"
let temp = "";
string.split(" ").forEach( item => {
    if (item.length > temp.length) {
        temp = item;
    }
});
console.log(temp);

// с помощью метода map создать массив квадратов массива
// arr = [8, 6, 12, 10];
arr = [8, 6, 12, 10];
array = arr.map(item => item**2);
console.log(array);