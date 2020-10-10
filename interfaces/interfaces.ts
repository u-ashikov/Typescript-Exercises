interface Reportable {
    summary(): string;
}

const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary() {
        return `
        Name: ${this.name}
        Year: ${this.year}
        Broken: ${this.broken}`
    }
};

const drink = {
    color: 'brown',
    carbonated: true,
    sugarContent: 40,
    summary() {
        return `My drink is ${this.color} with ${this.sugarContent} grams of sugar.`
    }
}

const printReport = (reportItem: Reportable): void => {
    console.log(reportItem.summary());
};

printReport(oldCivic);
printReport(drink);