let sid: number = 4;

console.log('ID: ', sid);

enum Direction1 {
  Up,
  Down,
  Left,
  Right,
  hat,
}

console.log(Direction1.Up);

type User = {
  id: number;
  name: string;
};

const user1: User = {
  name: 'John',
  id: 3,
};

enum Direction2 {
  Ups = 'Up',
  Downs = 'down',
  Lefts = 'lefte',
  Right = '2',
}

console.log(Direction2.Right);

let pid: any;

pid = 'd';

//Tuple Array
let employee: [number, string][];

employee = [
  [1, 'down'],
  [3, '34kd'],
];

let company: string = 'Bill Xu';

let isBoy: boolean = false;

let x: any = true;

let person: [number, string, boolean] = [1, 'Bill', false];

let ids: number[] = [1, 2, 3, 5, 0];

let arr: any[] = [1, true, 'HaHa'];

let cid: any = 1;
let customerId = cid as number;

function addNum(z: number, y: number): number {
  return z + y;
}

console.log(addNum(6, 3));

function hog(message: any) {
  console.log(message);
}

hog(true);

//interfaces

interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
}

const user2: UserInterface = {
  id: 1,
  name: 'Bill',
};

// user2.id = 8

//interface function

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;

const sub: MathFunc = (x: number, y: number): number => x - y;

//Classes

class Person {
  id: number; //public, private, protected
  name: string;

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }
}

const yuxian = new Person(5, 'Cool');
const yu = new Person(6, 'wan');

yuxian.id = 555

console.log(yuxian, yu);

