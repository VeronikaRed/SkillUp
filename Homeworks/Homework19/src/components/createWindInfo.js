import { computeDirection } from '../utilite/computeDirection';
import { appendToElement } from './appendToElement';

export function createWindInfo(data) {
    let wind = `Wind: ${data} km/h SSE`;
    computeDirection(data);
    appendToElement(wind, 'wind', firstSection);
}
