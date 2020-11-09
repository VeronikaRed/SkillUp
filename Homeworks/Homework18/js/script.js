/*● add a handler to the button, which, when clicked, will go to the console 
display text from the field.*/
document.getElementById('btn').addEventListener('click', function(){
    visualize(inputArea.value);
});
function visualize(value){
    console.log(value);
}

/* ● write a handler for the click event so that the element moves to
click coordinates.*/
document.body.style.position='relative';
let child = null;
document.addEventListener('click', function(click){
    if (child == null){
        child = document.createElement('div');
        child.innerHTML = 'Hello';
        child.style.position = 'absolute';
        }
    child.style.top = click.offsetY + 'px';
    child.style.left = click.offsetX + 'px';
    this.body.append(child);
});

// ● make a dropdown.
let item = null;
dropdown.addEventListener('click', function (event) {
    if (item == null){
        item = document.createElement('div');
        item.style.position = 'absolute';
        item.style.left = event.target.offsetLeft + 'px';
        dropdown.after(item);
        createContextMenu(item);
    }
});

function createContextMenu(parent) {
    for (let i = 1; i < 4; i++) {
        let item = document.createElement('div');
        item.innerHTML = i;
        item.addEventListener('click', function (event) {
            event.target.classList.toggle('color');
        });
        parent.append(item);
    }
}

// ● highlight table cells on hover.
table.addEventListener('mouseover', function(event){
 if (event.target.tagName == 'TD'){
     event.target.classList.add('color');
 }
});

// ● when scrolling the page by 200px, toggle the class in the header.
let head = document.getElementsByTagName('header')[0];
window.addEventListener('scroll', function(){
    if(document.documentElement.scrollTop > 200){
        head.classList.add('header');
    }
});

/* ● check for screen width, if less than 768px then to the element
add class*/
window.addEventListener('resize', function(){
    if(this.innerWidth < 768){
        txt.classList.toggle('colorWidth');
    }
});

/*● make an input (type = "text") in which only numbers can be entered
(keyCode for numbers 48 to 57 and 96 to 105)*/
var number = document.querySelector('.number');
number.addEventListener('keyup', function(e) {
    if (!(e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode >= 96 && e.keyCode <= 105)){
        this.value = '';
    }
});