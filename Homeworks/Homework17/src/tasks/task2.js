export const secondTask = () => {
    let a = document.getElementsByClassName('list')[0];
    console.log(a);
    let b = a.lastElementChild;
    b.innerHTML = 'SCSS';
    document.getElementsByTagName('div')[0].style.color = 'red';
};
