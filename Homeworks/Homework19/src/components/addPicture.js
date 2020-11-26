export function addPicture(url) {
    let picture = document.createElement('img');
    picture.setAttribute('src', url);
    secondSection.prepend(picture);
}
