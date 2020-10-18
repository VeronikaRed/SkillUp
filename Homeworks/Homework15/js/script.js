/*Write a method that will return a string like "html - 5"*/
let skill = {
    name: 'html',
    level: 5,
    getFullName: function () {
        return this.name + " - " + this.level;
    }
};
console.log(skill.getFullName());

/*Create a calculator object with methods:
- sum () returns the sum of two values
- mul () returns the product of these two values
- initialize the object through the function-constructor*/
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


