// функция принимает пределы случайного числа (min, max) и вывести в
// консоль четное или нечетное оно
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkNumber(num) {
    if (num % 2 == 1) {
        return num + " - is odd number"
    } else {
        return num + " - is even number"
    }
}

console.log(checkNumber(getRandomInt(1, 100)))


// есть строка "lorem ipsum is simply dummy", сделать новую строку, чтобы
// первое слово было с большой буквы
let str = "lorem ipsum is simply dummy";
let str1 = str[0].toUpperCase() + str.slice(1, str.length)
console.log(str1)


let str3 = str[0].toUpperCase() + "";
for (i=1; i<str.length; i++){
    str3 += str[i]
}
console.log(str3)


// функция принимает две строки и возвращает большую из них
let string1 = "lorem";
let string2 = "is";
let length = 0;
function checkLength(str1, str2){
    if(str1.length > str2.length){
        return str1
    }else if(str1.length < str2.length){
        return str2
    }else{
        return "I can't choose"
    }
}
console.log(checkLength(string1, string2));