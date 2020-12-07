export const firstTask = () => {
    let nodes = document.body.children;
    for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].nodeName == 'UL') {
            console.log(nodes[i].nodeName);
            let children = nodes[i].children;
            let cnt = 0;
            for (let j = 0; j < children.length; j++) {
                if (children[j].nodeName == 'LI') {
                    if (cnt == 1) {
                        console.log(children[j].innerHTML);
                    }
                    cnt++;
                }
            }
        }
    }
};
