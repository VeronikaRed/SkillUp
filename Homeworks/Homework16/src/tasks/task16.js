export function getTotalCount(array) {
    let result = 0;
    let j = 0;
    while (result <= 10) {
        result += array[j];
        j++;
    }
    console.log(j);
}
