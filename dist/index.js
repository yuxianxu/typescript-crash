"use strict";
let sid = 4;
console.log('ID: ', sid);
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
    Direction1[Direction1["hat"] = 4] = "hat";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
const user1 = {
    name: 'John',
    id: 3,
};
var Direction2;
(function (Direction2) {
    Direction2["Ups"] = "Up";
    Direction2["Downs"] = "down";
    Direction2["Lefts"] = "lefte";
    Direction2["Right"] = "2";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Right);
let pid;
pid = 'd';
//Tuple Array
let employee;
employee = [
    [1, 'down'],
    [3, '34kd'],
];
let company = 'Bill Xu';
let isBoy = false;
let x = true;
let person = [1, 'Bill', false];
let ids = [1, 2, 3, 5, 0];
let arr = [1, true, 'HaHa'];
let cid = 1;
let customerId = cid;
function addNum(z, y) {
    return z + y;
}
console.log(addNum(6, 3));
function hog(message) {
    console.log(message);
}
hog(true);
const user2 = {
    id: 1,
    name: 'Bill',
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const yuxian = new Person(5, 'Cool');
const yu = new Person(6, 'wan');
yuxian.id = 555;
console.log(yuxian.register());
//Subclasses - extended function
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(99, 'Huahua', 'Developer');
console.log(emp.register());
//generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray(['2', 3, 4, 6]);
let stringArray = getArray(['Lee', 'Wong', 'Chen']);
numArray.push('6');
console.log(numArray);
console.log(stringArray);
