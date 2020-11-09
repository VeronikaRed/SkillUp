/* ● find ul element
   ● find the second li*/
let nodes = document.body.children;
for (let i=0; i<nodes.length; i++) {
    if (nodes[i].nodeName == 'UL'){
        console.log(nodes[i].nodeName);
        let children = nodes[i].children;
        let cnt = 0;
        for (let j=0; j<children.length; j++) {
            if (children[j].nodeName == 'LI'){
                if (cnt == 1){
                    console.log (children[j].innerHTML);
                }
                cnt++;
            }
        }
    }
}

/* ● find an element with the list class
   ● find the second li and change the text in it
   ● make the text in the div red*/
let a = document.getElementsByClassName('list')[0];
console.log(a);
let b = a.lastElementChild;
b.innerHTML = 'SCSS';
document.getElementsByTagName('div')[0].style.color = 'red';

// ● add the checked attribute to the checkboxes.
document.getElementsByTagName('input')[0].setAttribute('checked', true);

// ● if the item has class "text" then delete it and vice versa.
for (let i=0; i<nodes.length; i++){
    if (nodes[i].nodeName == 'INPUT'){
        nodes[i].classList.toggle('text');
    }
}

// ● add 5 li elements with text from 1 to 5 to the list.
for (let i=1; i<=5; i++){
    let newLi = document.createElement('LI');
    newLi.innerHTML = i;
    ordered_list.appendChild(newLi);
}