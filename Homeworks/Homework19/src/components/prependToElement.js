import { createDiv } from './createDiv';

export function prependToElement(content, htmlClass, node) {
    node.after(createDiv(content, htmlClass));
}
