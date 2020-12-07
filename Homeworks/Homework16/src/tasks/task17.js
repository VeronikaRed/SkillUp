import { numberRandom } from '../util/random';

export function createArr() {
    const arr = [];
    for (let i = 0; i < 10; i++) {
        arr[i] = numberRandom(0, 10);
    }
    console.log(arr);
}
