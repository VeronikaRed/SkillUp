import { appendToElement } from './appendToElement';

export function createTemp(data) {
    let temp = `${Math.round(data)} &#8451`;
    appendToElement(temp, 'temperature', secondSection);
}
