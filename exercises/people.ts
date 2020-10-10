abstract class Employee {
    public name: string;

    public age: number;

    public salary: number;

    public tasks: string[];

    public work(): void {
        if (this.tasks && this.tasks.length > 0) {
            this.tasks.forEach((task: string): void => {
                console.log(`${this.name} is working on a ${task}.`);
            })
        }
    }

    public collectSalary(): void {
        console.log(this.salary);
    }
}

class Junior extends Employee {
    constructor() {
        super();

        this.tasks = ['simple task'];
    }
}

class Senior extends Employee {
    constructor() {
        super();

        this.tasks = ['complicated work', 'supervising juniors', 'taking time off'];
    }
}

class Manager extends Employee {
    public divident: number;

    constructor() {
        super();

        this.tasks = ['scheduling a meeting', 'is preparing a quarterly report'];
    }
}

var junior = new Junior();
junior.work();