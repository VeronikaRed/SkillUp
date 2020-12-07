import { numberRandom } from '../util/random';

export function getNewArr(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = numberRandom(1, 20);
    }
    console.log(arr.join(', '));
}
