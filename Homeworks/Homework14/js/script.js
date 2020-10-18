/* add items to the array via the prompt () method while the user is
will not click cancel */
function setupArray() {
    let array = [];
    while (true) {
        let variable = prompt("Enter number to new array", "");
        if (variable == null || variable == "") break;
        array.push(parseInt(variable));
    }
    return array;
}
console.log(setupArray());

/* find the sum of the elements of a two-dimensional array*/
function getSumOfTwoDimArr() {
    let res = 0;
    for (let i = 0; i < Arr.length; i++) {
        for (let j = 0; j < Arr[i].length; j++) {
            res += Arr[i][j];
        }
    }
    return res;
}
let Arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(getSumOfTwoDimArr());

/*split the lorem string by separator " ", and print words 
longer than 5 to the console*/
function showLongWords(str) {
    let array = str.split(" ");
    for (let i = 0; i < array.length; i++) {
        if (array[i].length >= 5) {
            console.log(array[i]);
        }
    }
}
let str = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, id.";
showLongWords(str);

/* given an array [1, 9, 22, 7, 6] add number 8 after 22 */
let arr = [1, 9, 22, 7, 6];
arr.splice(3, 0, 8);
console.log(arr);

/* write a function randomNumber (number) that fills the array
random numbers from 0 to 100, where number is the length of the array*/
function getRandomNumber(length, start = 0, end = 100) {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr[i] = getRandom(start, end);
    }
    return arr;
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomNumber(7));

/* check if the array contains a number that is entered via prompt ()*/
function checkCandidate(arrOfNumbers, candidate){

    console.log(`entered number is ${candidate}`);
    for(let item of arrOfNumbers){
        return (item == candidate) ? 'here I am' : 'no';
    }
}
let arrOfNumbers = getRandomNumber(7, 0, 10);
console.log(`generated array is ${arrOfNumbers}`);
let candidate = parseInt(prompt("Enter your number", ""));

console.log(checkCandidate(arrOfNumbers, candidate));

/* use the forEach method to find the longest word in the lorem string*/
let string = "Lorem ipsum dolor sit amet consectetur adipisicing elit Labore quasi"
let temp = "";
string.split(" ").forEach( item => {
    if (item.length > temp.length) {
        temp = item;
    }
});
console.log(temp);

/*using the map method create an array of squares of the 
array arr = [8, 6, 12, 10];*/
arr = [8, 6, 12, 10];
array = arr.map(item => item**2);
console.log(array);