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
function getTotalCount(array) {
    let result = 0;
    let j = 0;
    while (result <= 10) {
        result += array[j];
        j++;
    }
    console.log(j);
}