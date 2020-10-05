// 1. Если переменная больше нуля и меньше 5-ти, то выведите "Верно", в противном случае 
// выведите "Неверно".
let numberRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}
function getCheck(number){
    console.log(number);
    if (number>0 && number<5){
        console.log("Right");
    }else{
        console.log("Wrong");
    }
}
getCheck(numberRandom(1,10));

// 2. Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', 
// то в переменную result запишем "зима", если имеет значение "2" - "весна" и так далее. 
// Решите задачу через switch-case.
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

// 3. Данная строка 'aaa bbb ccc ". Вырез с нее слово "bbb" тремя различными способами 
// (через substr, substring, slice).
let str = 'aaa bbb ccc';
console.log(str.substr(4,3), str.substring(4,7), str.slice(4,7));

// 4. Данная строка 'I learn javascript! ". Найдите позицию подстроки "learn" и длину 
// строки. Заменить javascript на html
str = 'I learn javascript!';
console.log(str.indexOf("learn"), str.length);
console.log(str.replace('javascript', 'html'));

// 5. Проверьте, что строка начинается на http: //
str = "https://drive.google.com/drive/u/0/folders/14m4iyb82WjZspIBOcELXZZYHzJ4GuSm1";
console.log(str.startsWith('https://'));

// 6. Сделайте функцию, принимает параметром число от 1 до 7, а возвращает день недели.
function getDay(n) {
    console.log(n);
    let result = "";
    switch (n) {
        case 1:
            result = "sunday"
            break;
        case 2:
            result = "monday"
            break;
        case 3:
            result = "tuesday"
            break;
        case 4:
            result = "wednesday"
            break;
        case 5:
            result = "thursday"
            break;
        case 6:
            result = "friday"
            break;
        case 7:
            result = "saturday"
            break;
    }
    return result;
}
console.log(getDay(numberRandom(1,7)));

// 7. С помощью цикла for сформулируйте строку '-1-2-3-4-5-6-7-8-9- "и запишите ее в переменную str
str = "";
for (let i=1; i<=9; i++){
    str += "-" + i;
}
str += "-";
console.log(str);

// 8. Выведите 10 случайных чисел с помощью цикла
function getNewArr (n){
    let arr = [];
    for (let i=0; i<n; i++){
        arr[i] = numberRandom(1,20);
    }
    return arr;
}
console.log(getNewArr(10).join(', '));

// 9. Дан массив [ 'a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
arr = ['a', 'b', 'c'];

function createFullArr(str) {
    let newArr = str.split(', ');
    for (let i of newArr) {
        arr.push(i);
    }
}
createFullArr("1, 2, 3")
console.log(arr);

// 10. Дан массив [1, 2, 3]. Добавьте ему на начало элементы 4, 5, 6.
arr = [1, 2, 3];

function createFullArr(str) {
    let newArr = str.split(', ').reverse();
    for (let item of newArr) {
        arr.unshift(parseInt(item));
    }
}
createFullArr("4, 5, 6")
console.log(arr);

// 11. Дан массив [ 'js', 'css "," jq']. Выведите на экран последний элемент.
arr = ['js', 'css', 'jq'];
console.log(arr.slice(-1));
console.log(arr.pop(0));

// 13. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый элементы [1, 2, 10, 11, 5].
arr = [1, 2, 3, 4, 5];
arr.splice(2, 2, 10, 11);
console.log(arr);

// 14. Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', 
// в третьей "333" и так далее.
arr = [];
for (let i = 0; i < 3; i++) {
    let localeArr = [];
    for (let j = 0; j <= i; j++) {
        localeArr[j] = i + 1
    }
    arr.push(localeArr);
}
console.log(arr);

// 15. Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым 
// параметром функция принимает значения, каким заполнять массив, а вторым - сколько элементов 
// должно быть в массиве. Пример: arrayFill ( 'x', 5) сделает массив [ 'x', 'x', 'x', 'x', 'x'].
arr = [];

function arrayFill(element, size) {
    console.log(element, size)
    for (let i = 0; i < size; i++) {
        arr[i] = element
    }
};

arrayFill(numberRandom(0, 10), numberRandom(0, 10))
console.log(arr);

// 16. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, 
// чтобы в сумме получилось больше 10-ти.
arr = [];

function fillRandomArray() {
    let i = 0;
    while (i < 7) {
        arr[i] = numberRandom(0, 5);
        i++
    }
    console.log(arr)
}
fillRandomArray();
result = 0;
let j = 0;
while (result <= 10) {
    result += arr[j];
    j++;
}
console.log(j)

// 17. Заполните массив 10-й случайными числами от 1 до 10 с помощью цикла
arr = [];
function createArr(){
    for (let i = 0; i < 10; i++) {
        arr[i] = numberRandom(0, 10)
    }
}
createArr();
console.log(arr);

// 18. Таблица умножения в цикле
for (let i=1; i<=9; i++) {
    for (let j=1; j<=9; j++) {
        console.log(i + ' x ' + j + ' = ' + i*j);
    }
}

// 19. Дан массив с числами. Или не используя метода reverse переверните его элементы в обратном порядке.
arr = [1, 2, 3, 4, 5];
newArr = [];
for (let i=0; i<arr.length; i++) {
    newArr[i] = arr[arr.length-1-i];
}
console.log(newArr);

// 20. Дано двумерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов 
// этого массива.
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

// 21. Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает 
// целое число и возвращает сумму его цифр.
function getDigitsSum(n) {
    console.log(n)
    let str = "" + n;
    let res = 0;
    for (let i = 0; i<str.length; i++){
        res += parseInt(str[i]);
    }

    console.log(res)
}
getDigitsSum(numberRandom(11, 1000))

// 22. Дан массив с числами. Создайте из него новый массив, где останутся лежать только положительные 
// числа. Создайте для этого вспомогательную функцию isPositive (), которая параметром будет принимать 
// число и возвращать true, если число положительное, и false - если отрицательное.
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let positiveArr = arr.filter(isPositive);
function isPositive(item){
  return item %2 == 0;
}
console.log(positiveArr);

// 23. С помощью цикла вывести все трицифровые числа в которых сумма всех цифр равна - 9 
// Например: 2 + 4 + 3 = 9
function showDigitNumber() {
    const arr = [];
    for (let i = 100; i < 999; i++) {
        let str = "" + i;
        checkDigitalNumber(str, arr);
    }
    console.log(arr)
}

function checkDigitalNumber(string, array) {
    let res = 0;

    for (let j = 0; j < string.length; j++) {
        res += parseInt(string[j]);
    }
    if (res == 9) {
        array.push(string)
    }
}
showDigitNumber()

// 24. С помощью цикла вывести пользователей как онлайн
function User (name, online){
    this.name = name,
    this.online = online
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
