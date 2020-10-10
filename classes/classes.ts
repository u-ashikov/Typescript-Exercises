class Vehicle {
    public color: string;

    constructor(color: string) {
        this.color = color;
    }

    public drive():void {
        console.log('chugga chugga')
    }

    public honk(): void {
        console.log('Beeeeeep!');
    }
}

class Car extends Vehicle {
    constructor(wheels: number, color: string) {
        super(color);
    }

    public drive(): void {
        console.log('Brrrrrrm.');
    }
}

console.log('Vehicle:');

const vehicle = new Vehicle('red');
vehicle.drive();
vehicle.honk();

console.log('Car:');

const car = new Car(4, 'yellow');
car.drive();
car.honk();
console.log(car.color);