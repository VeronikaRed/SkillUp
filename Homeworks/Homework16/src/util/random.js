export const numberRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
export const getRandomArray = n => {
    let arr = [];
    let i = 0;
    while (i < n) {
        arr[i] = numberRandom(0, 5);
        i++;
    }
    console.log(arr);
    return arr;
};
