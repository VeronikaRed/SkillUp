import { appendToElement } from './appendToElement';

export function createDate(data) {
    let dateFormat = require('dateformat');
    let today = new Date(data);
    let fullTime = dateFormat(today, 'mmm d, yyyy - ddd');
    appendToElement(fullTime, 'clock', firstSection);
    let time = dateFormat(today, 'h:MM TT');
    appendToElement(time, 'time', firstSection);
}
