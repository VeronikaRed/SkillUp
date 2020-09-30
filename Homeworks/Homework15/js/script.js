// Написать метод который вернет срока вида "html - 5"
let skill = {
    name: 'html',
    level: 5,
    getFullName: function () {
        return this.name + " - " + this.level;
    }
}
console.log(skill.getFullName());


// // Создайте объект calculator с методами:
// // - sum () возвращает сумму двух значений
// // - mul () возвращает произведение этих двух значений
// // - инициализировать объект через функцию-конструктор

function CreateCalc(a, b) {
    this.a = a;
    this.b = b;
    this.sum = function () {
        return this.a + this.b;
    };
    this.mul = function () {
        return this.a * this.b;
    };
}
let calculator = new CreateCalc(5, 6);
console.log(calculator.sum());
console.log(calculator.mul());


