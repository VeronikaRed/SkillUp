export function drawPyramid(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        let localeArr = [];
        for (let j = 0; j <= i; j++) {
            localeArr[j] = i + 1;
        }
        arr.push(localeArr);
    }
    console.log(arr);
}
