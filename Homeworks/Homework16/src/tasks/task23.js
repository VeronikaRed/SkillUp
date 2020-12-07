export function showDigitNumber() {
    let array = [];
    for (let num = 100; num < 999; num++) {
        if (
            num
                .toString()
                .split('')
                .map(i => parseInt(i))
                .reduce((res, i) => res + i) == 9
        ) {
            array.push(num);
        }
    }
    console.log(array);
}
