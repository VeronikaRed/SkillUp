import { createDiv } from './createDiv';

export function appendToElement(content, htmlClass, parent) {
    parent.append(createDiv(content, htmlClass));
}
