import { numberRandom } from '../util/random';
export function taskSecond(num) {
    let result = '';
    console.log(num);
    switch (num) {
        case 1:
            result = 'Summer';
            break;
        case 2:
            result = 'Fall';
            break;
        case 3:
            result = 'Winter';
            break;
        case 4:
            result = 'Spring';
            break;
    }
    console.log(result);
}
