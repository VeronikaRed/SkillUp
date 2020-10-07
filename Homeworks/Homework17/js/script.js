// ● найти ul элемент
// ● найти другой li
let nodes = document.body.children;
for (let i=0; i<nodes.length; i++) {
    if (nodes[i].nodeName == "UL"){
        console.log(nodes[i].nodeName);
        let children = nodes[i].children;
        let cnt = 0;
        for (let j=0; j<children.length; j++) {
            if (children[j].nodeName == "LI"){
                if (cnt == 1){
                    console.log (children[j].innerHTML);
                }
                cnt++
            }
        }
    }
}

// ● найти элемент с классом list
// ● найти другой li и изменить в нем текст
// ● сделать текст в div красным
let a = document.getElementsByClassName("list")[0];
console.log(a);
let b = a.lastElementChild;
b.innerHTML = "SCSS";
document.getElementsByTagName("div")[0].style.color = "red";

// ● к чекбоксах добавить атрибут checked
document.getElementsByTagName("input")[0].setAttribute("checked", true);

// ● если пункт имеет класс "text" то удалить его и наоборот
for (let i=0; i<nodes.length; i++){
    if (nodes[i].nodeName == "INPUT"){
        nodes[i].classList.toggle("text");
    }
}

// ● добавить в список 5 элементов li с текстом от 1 до 5
for (let i=1; i<=5; i++){
    let newLi = document.createElement("LI");
    newLi.innerHTML = i;
    ordered_list.appendChild(newLi);
}
