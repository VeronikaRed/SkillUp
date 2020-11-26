import { appendToElement } from './appendToElement';

export function createFeelsLike(data) {
    let feels = `Feels Like: ${Math.round(data)} &#8451`;
    appendToElement(feels, 'casual', secondSection);
}
