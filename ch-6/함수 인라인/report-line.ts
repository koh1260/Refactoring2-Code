export interface Customer {
    name: string;
    location: string;
}

const customer: Customer = {
    name: 'Doori',
    location: '창원'
}

export function reportLines(aCustomer: Customer) {
    const lines: string[][] = [];
    lines.push(['name', aCustomer.name]);
    lines.push(['location', aCustomer.location]);
    return lines;
}

console.log(reportLines(customer));