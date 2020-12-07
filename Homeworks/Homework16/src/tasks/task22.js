export function twentySecondTask(arr) {
    let positiveArr = arr.filter(isPositive);
    function isPositive(item) {
        return item % 2 == 0;
    }
    console.log(positiveArr);
}
