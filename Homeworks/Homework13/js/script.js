/*the function takes the limits of a random number (min, max) and output to the 
console is odd or even*/
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkNumber(num) {
    if (num % 2 == 1) {
        return num + " - is odd number";
    } else {
        return num + " - is even number";
    }
}
// call function checkNumber for checking odd number.
console.log(checkNumber(getRandomInt(1, 100)));


/* there is a string "lorem ipsum is simply dummy", make a new string with first
capitalized letter */
let str = "lorem ipsum is simply dummy";
let str1 = str[0].toUpperCase() + str.slice(1, str.length);
console.log(str1);

let str3 = str[0].toUpperCase() + "";
for (i=1; i<str.length; i++){
    str3 += str[i];
}
console.log(str3);

/* the function takes two strings and returns the largest one */
function checkLength(str1, str2){
    if(str1.length > str2.length){
        return str1;
    }else if(str1.length < str2.length){
        return str2;
    }else{
        return "I can't choose";
    }
}
let string1 = "lorem";
let string2 = "is";
let length = 0;
// call function checkLength for checking greater string length.
console.log(checkLength(string1, string2));