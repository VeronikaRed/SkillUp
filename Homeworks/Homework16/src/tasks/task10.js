export function addToStartArray(str, arr) {
    let newArr = str.split(', ').reverse();
    for (let item of newArr) {
        arr.unshift(parseInt(item));
    }
    console.log(arr);
}
