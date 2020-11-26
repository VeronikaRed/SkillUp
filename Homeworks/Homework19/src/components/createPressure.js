import { appendToElement } from './appendToElement';

export function createPressure(data) {
    let pressure = `Pressure: ${data} hPa`;
    appendToElement(pressure, 'casual', firstSection);
}
