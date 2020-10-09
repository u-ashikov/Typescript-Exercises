let apples = 5;

apples = 10;

let speed = 'fast';
let hasName = true;
let nothing: null = null;

let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let numbers: number[] = [1,2,3];
let truths: boolean[] = [true, true];

// Classes
class Car {
}

let car: Car = new Car();

// Object literal
let point: { x: number; y: number; } = {
    x: 10,
    y: 20
};

// Functions - what arguments will take and what will return
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
}