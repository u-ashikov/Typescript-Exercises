const add = (num1: number, num2: number) => {
    return num1 + num2;
};

const subtract = (num1: number, num2: number): number => {
    return num1 - num2;
};

function divide(num1: number, num2: number): number {
    return num1 / num2;
};

const multiply = function (num1: number, num2: number): number {
    return num1 * num2;
}

const logger = (message: string): void => {
    console.log(message);
}

// never - means that the function will never reach its end.
const throwError = (message: string): never => {
    throw new Error(message);
}

const forecast = {
    date: new Date(),
    weather: 'sunny'
}

// Destructuring with annotations
const logWeather = ({ date, weather }: { date: Date; weather: string}): void => {
    console.log(forecast.date);
    console.log(forecast.weather);
}