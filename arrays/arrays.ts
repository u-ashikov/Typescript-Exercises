const carMakers = ['ford', 'toyota', 'chevy'];

const dates: Date[] = [new Date(), new Date()];

const carsByMake: string[][] = [
    ['f15'],
    ['corola'],
    ['camaro']
];

const myCar = carMakers.pop();

const ford = carMakers.find((car: string): boolean => {
    return car === 'ford';
});

const arrWithDifferentTypes: (string | number)[] = ["pesho",1, 'test'];