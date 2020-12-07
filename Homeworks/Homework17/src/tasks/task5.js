export const fifthTask = () => {
    for (let i = 1; i <= 5; i++) {
        let newLi = document.createElement('LI');
        newLi.innerHTML = i;
        ordered_list.appendChild(newLi);
    }
};
