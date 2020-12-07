export function getDigitsSum(n) {
    console.log(n);
    let str = '' + n;
    let res = 0;
    for (let i = 0; i < str.length; i++) {
        res += parseInt(str[i]);
    }

    console.log(res);
}