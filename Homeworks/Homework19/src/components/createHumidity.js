import { appendToElement } from './appendToElement';

export function createHumidity(data) {
    let humidity = `Humidity: ${data} %`;
    appendToElement(humidity, 'casual', firstSection);
}
