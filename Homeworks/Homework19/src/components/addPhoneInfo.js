import { prependToElement } from './prependToElement';

export function addPhoneInfo() {
    let text =
        "<i class='far fa-clock'></i> SUN 8:30 AM &nbsp;&nbsp;&nbsp; <i class='fas fa-battery-quarter'></i> 27%";
    let node = document.getElementsByClassName('clock')[0];
    prependToElement(text, 'phoneInfo', node);
}
