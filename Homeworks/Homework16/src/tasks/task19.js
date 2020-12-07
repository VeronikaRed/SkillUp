export function nineteenTask(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = arr[arr.length - 1 - i];
    }
    console.log(newArr);
}
