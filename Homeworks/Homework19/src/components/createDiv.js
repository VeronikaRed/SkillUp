export function createDiv(content, htmlClass) {
    let div = document.createElement('div');
    div.innerHTML = `${content}`;
    div.classList.add(`${htmlClass}`);
    return div;
}
