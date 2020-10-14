// ● добавить обработчик на кнопку, при нажатии на которую будет в консоль
// выводиться текст с поля
document.getElementById("btn").addEventListener("click", function(){
console.log(inputArea.value);
});

// ● написать обработчик на событие клик чтобы элемент перемещался на
// координаты клика
document.body.style.position="relative";
let child = null;
document.addEventListener("click", function(click){
    if (child == null){
        child = document.createElement('div');
        child.innerHTML = "Hello";
        child.style.position="absolute";
        }
    child.style.top = click.offsetY + "px";
    child.style.left = click.offsetX + "px";
    this.body.append(child)
});

// ● сделать dropdown (выпадающий список)
let item = null;
dropdown.addEventListener('click', function (event) {
    if (item == null){
        item = document.createElement('div');
        item.style.position = "absolute";
        item.style.left = event.target.offsetLeft + "px";
        dropdown.after(item);
        createContextMenu(item)
    }
});

function createContextMenu(parent) {
    for (let i = 1; i < 4; i++) {
        let item = document.createElement('div');
        item.innerHTML = i;
        item.addEventListener('click', function (event) {
            event.target.classList.toggle("color");
        })
        parent.append(item);
    }
}

// ● подсвечивать ячейки таблицы при наведении
table.addEventListener("mouseover", function(event){
 if (event.target.tagName == "TD"){
     event.target.classList.add("color");
 }
});

// ● при прокрутке страницы на 200px тоглить класс в header
let head = document.getElementsByTagName("header")[0];
window.addEventListener("scroll", function(){
    if(document.documentElement.scrollTop > 200){
        head.classList.add("header");
    }
});

// ● сделать проверку на ширину экрана, если меньше 768px то к элементу
// добавить класс
window.addEventListener('resize', function(){
    if(this.innerWidth < 768){
txt.classList.toggle("color_width")
    }
});

// ● сделать интуп (type = "text") в который можно вводить только цифры
// (keyCode для чисел от 48 до 57 и от 96 до 105)
var number = document.querySelector('.number');
number.addEventListener('keyup', function(e) {
    if (!(e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode >= 96 && e.keyCode <= 105)){
        this.value = "";
    }
});