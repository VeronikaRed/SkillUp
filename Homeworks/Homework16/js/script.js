/* 1. If the variable is greater than zero and less than 5, then output "True", otherwise
print "Wrong".*/
function getCheck(number){
    console.log(number);
    if (number>0 && number<5){
        console.log("Right");
    }else{
        console.log("Wrong");
    }
}
let numberRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
};
getCheck(numberRandom(1,10));

/* 2. The variable num can take 4 values: 1, 2, 3 or 4. If it has the value '1',
then we will write "winter" into the variable result, if it has the value "2" - "spring" 
and so on. Solve the problem with switch-case.*/
let result = "";
let num = numberRandom(1,4);
console.log(num);
switch (num) {
    case 1: result = "Summer";
        break;
    case 2: result = "Fall";
        break;
    case 3: result = "Winter";
        break;
    case 4: result = "Spring";
        break;    
}
console.log(result);

/* 3. Given string 'aaa bbb ccc ". Cut the word" bbb "from it in three different 
ways (via substr, substring, slice).*/
let str = 'aaa bbb ccc';
console.log(str.substr(4,3), str.substring(4,7), str.slice(4,7));

/* 4. Given string "I learn javascript!". Find the position of the substring "learn" 
and line length. Replace "javascript" на "html"*/
str = 'I learn javascript!';
console.log(str.indexOf("learn"), str.length);
console.log(str.replace('javascript', 'html'));

/* 5. Check that the line starts with http: // */
str = "https://drive.google.com/drive/u/0/folders/14m4iyb82WjZspIBOcELXZZYHzJ4GuSm1";
console.log(str.startsWith('https://'));

/* 6. Make a function that takes a number from 1 to 7 as a parameter and 
returns the day of the week.*/
function getDay(n) {
    console.log(n);
    let result = "";
    switch (n) {
        case 1:
            result = "sunday";
            break;
        case 2:
            result = "monday";
            break;
        case 3:
            result = "tuesday";
            break;
        case 4:
            result = "wednesday";
            break;
        case 5:
            result = "thursday";
            break;
        case 6:
            result = "friday";
            break;
        case 7:
            result = "saturday";
            break;
    }
    return result;
}
console.log(getDay(numberRandom(1,7)));

/* 7. Use a loop 'for' to formulate the string "-1-2-3-4-5-6-7-8-9-" and write 
it to a variable str*/
str = "";
for (let i=1; i<=9; i++){
    str += "-" + i;
}
str += "-";
console.log(str);

/* 8. Print 10 random numbers using a loop*/
function getNewArr (n){
    let arr = [];
    for (let i=0; i<n; i++){
        arr[i] = numberRandom(1,20);
    }
    return arr;
}
console.log(getNewArr(10).join(', '));

/* 9. Given an array [ 'a', 'b', 'c']. Add elements to it at the end 1, 2, 3.*/
function createFullArr(str) {
    let newArr = str.split(', ');
    for (let i of newArr) {
        arr.push(i);
    }
}
let arr = ['a', 'b', 'c'];
createFullArr("1, 2, 3");
console.log(arr);

/* 10. Given an array [1, 2, 3]. Add elements to it at the beginning 4, 5, 6.*/
function addToStartArray(str) {
    let newArr = str.split(', ').reverse();
    for (let item of newArr) {
        arr.unshift(parseInt(item));
    }
}
arr = [1, 2, 3];
addToStartArray("4, 5, 6");
console.log(arr);

/* 11. Given an array [ 'js', 'css "," jq']. Print the last element.*/
arr = ['js', 'css', 'jq'];
console.log(arr.slice(-1));
console.log(arr.pop(0));

/* 13. Given an array [1, 2, 3, 4, 5]. Using the splice method, write in
new items [1, 2, 10, 11, 5].*/
arr = [1, 2, 3, 4, 5];
arr.splice(2, 2, 10, 11);
console.log(arr);

/* 14. Fill the array as follows: write '1' in the first element,
in the second '22', in the third "333" and so on.*/
arr = [];
for (let i = 0; i < 3; i++) {
    let localeArr = [];
    for (let j = 0; j <= i; j++) {
        localeArr[j] = i + 1;
    }
    arr.push(localeArr);
}
console.log(arr);

/* 15. Make an arrayFill function that will fill the array with the given values. The first
as a parameter, the function takes values with which to fill the array, and the second - how 
many elements must be in an array. Example: arrayFill ('x', 5) will make an 
array ['x', 'x', 'x', 'x', 'x'].*/
function arrayFill(element, size) {
    console.log(element, size);
    for (let i = 0; i < size; i++) {
        arr[i] = element;
    }
}
arr = [];
arrayFill(numberRandom(0, 10), numberRandom(0, 10));
console.log(arr);

/* 16. An array with numbers is given. Find out how many elements you need to add from 
the beginning of the array, so that the total is more than 10.*/
function getRandomArray() {
    let arr = [];
    let i = 0;
    while (i < 7) {
        arr[i] = numberRandom(0, 5);
        i++;
    }
    console.log(arr);
    return arr;
}
function getTotalCount(array){
    let result = 0;
    let j = 0;
    while (result <= 10) {
        result += array[j];
        j++;
    }
    console.log(j);
}
getTotalCount(getRandomArray());

/* 17. Fill the array with the 10th random numbers from 1 to 10 using a loop.*/
function createArr(){
    for (let i = 0; i < 10; i++) {
        arr[i] = numberRandom(0, 10);
    }
}
arr = [];
createArr();
console.log(arr);

/* 18. Multiplication table in a loop.*/
for (let i=1; i<=9; i++) {
    for (let j=1; j<=9; j++) {
        console.log(i + ' x ' + j + ' = ' + i*j);
    }
}

/* 19. An array with numbers is given. without using the reverse method, reverse it.*/
arr = [1, 2, 3, 4, 5];
let newArr = [];
for (let i=0; i<arr.length; i++) {
    newArr[i] = arr[arr.length-1-i];
}
console.log(newArr);

/* 20. You are given a two-dimensional array with numbers, for example 
[[1, 2, 3], [4, 5], [6]]. Find the sum of the elements of this array.*/
arr = [
    [1, 2, 3],
    [4, 5],
    [6]
];
result = 0;
for (let i=0; i<arr.length; i++) {
    for (let j=0; j<arr[i].length; j++) {
        result += arr[i][j];
    }
}
console.log(result);

/* 21. Make a function getDigitsSum that takes as a parameter an integer 
and returns the sum of its digits.*/
function getDigitsSum(n) {
    console.log(n);
    let str = "" + n;
    let res = 0;
    for (let i = 0; i<str.length; i++){
        res += parseInt(str[i]);
    }

    console.log(res);
}
getDigitsSum(numberRandom(11, 1000));

/* 22. Given an array with numbers. Create a new array from it, where only positive ones 
will remain numbers. Create a helper function isPositive () for this, which will take as 
a parameter number and return true if the number is positive and false if it is negative.*/
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let positiveArr = arr.filter(isPositive);
function isPositive(item){
  return item %2 == 0;
}
console.log(positiveArr);

/* 23.Using a loop, output all three-digit numbers in which the sum of all digits is - 9
For example: 2 + 4 + 3 = 9*/
function showDigitNumber() {
    const arr = [];
    for (let i = 100; i < 999; i++) {
        let str = "" + i;
        checkDigitalNumber(str, arr);
    }
    console.log(arr);
}


// let array = [];
// for (let num = 100; num < 999; num++) {
//     if(num.toString().split("").map((i)=>parseInt(i)).reduce((res, i)=>res + i) == 9){
//         array.push(num);
//     }
// }
// console.log(array);


function checkDigitalNumber(string, array) {
    let res = 0;
    for (let j = 0; j < string.length; j++) {
        res += parseInt(string[j]);
    }
    if (res == 9) {
        array.push(string);
    }
}
showDigitNumber();

/* 24. With the help of a loop, bring users online.*/
function User (name, online){
    this.name = name,
    this.online = online;
} 
const user1 = new User("Alan",false);
const user2 = new User("Jeff",true);
const user3 = new User("Sarah",false);
arr = [user1, user2, user3];
function checkOnline (array){
    return array.filter(user => user.online);
}
const onlineUsers = checkOnline(arr);
onlineUsers.forEach(element => console.log(element.name));