class Ticket {
    constructor(destination: string, price: number, status: string) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }

    public destination: string;

    public price: number;

    public status: string;
}

var tickets: Ticket[] = [];

const input = [
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
];

const sortCriteria = 'destination';

input.forEach((data: string): void => {
    const splittedData = data.split('|');

    const destination = splittedData[0];
    const price = parseFloat(splittedData[1]);
    const status = splittedData[2];

    const ticket = new Ticket(destination, price, status);

    tickets.push(ticket);
});

tickets.sort((ticketA: Ticket, ticketB: Ticket): number => {
    return ticketA[sortCriteria].localeCompare(ticketB[sortCriteria]);
});

console.log(tickets);
