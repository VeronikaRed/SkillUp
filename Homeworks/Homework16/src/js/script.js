import { numberRandom } from '../util/random';
import { checkNumber } from '../tasks/task1';
import { taskSecond } from '../tasks/task2';
import { taskTree } from '../tasks/task3';
import { taskFour } from '../tasks/task4';
import { taskFive } from '../tasks/task5';
import { getDay } from '../tasks/task6';
import { sevenTask } from '../tasks/task7';
import { getNewArr } from '../tasks/task8';
import { createFullArr } from '../tasks/task9';
import { addToStartArray } from '../tasks/task10';
import { elevenTask } from '../tasks/task11';
import { thirteenTask } from '../tasks/task13';
import { drawPyramid } from '../tasks/task14';
import { arrayFill } from '../tasks/task15';
import {  } from '../tasks/task16';
import { createArr } from '../tasks/task17';
import { eighteenTask } from '../tasks/task18';
import { nineteenTask } from '../tasks/task19';
import { twentyTask } from '../tasks/task20';
import { getDigitsSum } from '../tasks/task21';
import {  } from '../tasks/task22';
import {  } from '../tasks/task23';
import {  } from '../tasks/task24';

/* 1. If the variable is greater than zero and less than 5, then output "True", otherwise
print "Wrong".*/
checkNumber(numberRandom(1, 10));

/* 2. The variable num can take 4 values: 1, 2, 3 or 4. If it has the value '1',
then we will write "winter" into the variable result, if it has the value "2" - "spring" 
and so on. Solve the problem with switch-case.*/
taskSecond(numberRandom(1, 4));

/* 3. Given string 'aaa bbb ccc ". Cut the word" bbb "from it in three different 
ways (via substr, substring, slice).*/
taskTree('aaa bbb ccc');

/* 4. Given string "I learn javascript!". Find the position of the substring "learn" 
and line length. Replace "javascript" на "html"*/
taskFour();

/* 5. Check that the line starts with http: // */
taskFive();

/* 6. Make a function that takes a number from 1 to 7 as a parameter and 
returns the day of the week.*/
getDay(numberRandom(1, 7));

/* 7. Use a loop 'for' to formulate the string "-1-2-3-4-5-6-7-8-9-" and write 
it to a variable str*/
sevenTask(9);

/* 8. Print 10 random numbers using a loop*/
getNewArr(10);

/* 9. Given an array [ 'a', 'b', 'c']. Add elements to it at the end 1, 2, 3.*/
createFullArr('1, 2, 3', ['a', 'b', 'c']);

/* 10. Given an array [1, 2, 3]. Add elements to it at the beginning 4, 5, 6.*/
addToStartArray('4, 5, 6', [1, 2, 3]);

/* 11. Given an array [ 'js', 'css "," jq']. Print the last element.*/
elevenTask(['js', 'css', 'jq']);

/* 13. Given an array [1, 2, 3, 4, 5]. Using the splice method, write in
new items [1, 2, 10, 11, 5].*/
thirteenTask([1, 2, 3, 4, 5]);

/* 14. Fill the array as follows: write '1' in the first element,
in the second '22', in the third "333" and so on.*/
drawPyramid(3);

/* 15. Make an arrayFill function that will fill the array with the given values. The first
as a parameter, the function takes values with which to fill the array, and the second - how
many elements must be in an array. Example: arrayFill ('x', 5) will make an
array ['x', 'x', 'x', 'x', 'x'].*/
arrayFill(numberRandom(0, 10), numberRandom(0, 10));

/* 16. An array with numbers is given. Find out how many elements you need to add from
the beginning of the array, so that the total is more than 10.*/

// getTotalCount(getRandomArray());

/* 17. Fill the array with the 10th random numbers from 1 to 10 using a loop.*/
createArr();

/* 18. Multiplication table in a loop.*/
eighteenTask();

/* 19. An array with numbers is given. without using the reverse method, reverse it.*/
nineteenTask([1, 2, 3, 4, 5]);

/* 20. You are given a two-dimensional array with numbers, for example
[[1, 2, 3], [4, 5], [6]]. Find the sum of the elements of this array.*/
twentyTask([[1, 2, 3], [4, 5], [6]]);

/* 21. Make a function getDigitsSum that takes as a parameter an integer
and returns the sum of its digits.*/
getDigitsSum(numberRandom(11, 1000));

/* 22. Given an array with numbers. Create a new array from it, where only positive ones
will remain numbers. Create a helper function isPositive () for this, which will take as
a parameter number and return true if the number is positive and false if it is negative.*/
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let positiveArr = arr.filter(isPositive);
function isPositive(item) {
    return item % 2 == 0;
}
console.log(positiveArr);

/* 23.Using a loop, output all three-digit numbers in which the sum of all digits is - 9
For example: 2 + 4 + 3 = 9*/
function showDigitNumber() {
    const arr = [];
    for (let i = 100; i < 999; i++) {
        let str = '' + i;
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
function User(name, online) {
    (this.name = name), (this.online = online);
}
const user1 = new User('Alan', false);
const user2 = new User('Jeff', true);
const user3 = new User('Sarah', false);
arr = [user1, user2, user3];
function checkOnline(array) {
    return array.filter(user => user.online);
}
const onlineUsers = checkOnline(arr);
onlineUsers.forEach(element => console.log(element.name));
