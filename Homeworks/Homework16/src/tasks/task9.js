export function createFullArr(str, arr) {
    let newArr = str.split(', ');
    for (let i of newArr) {
        arr.push(i);
    }
    console.log(arr);
}
