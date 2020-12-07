export const fourthTask = () => {
    let nodes = document.body.children;
    for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].nodeName == 'INPUT') {
            nodes[i].classList.toggle('text');
        }
    }
};
