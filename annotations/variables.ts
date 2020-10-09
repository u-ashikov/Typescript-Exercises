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

// When to use annotations:
// 1) Function that returns any type
const json = '{"x": 10, "y": 20}';
const coordinates: { x:number; y:number;} = JSON.parse(json);

// 2) Delayed initialization
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}

// 3) Varianble whose type cannot be inferred correctly
let nums = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
        numberAboveZero = nums[i];
    }
}