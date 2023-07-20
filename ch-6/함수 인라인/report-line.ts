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
    gatherCustomerData(lines, aCustomer);
    return lines;
}

function gatherCustomerData(out: string[][], aCustomer: Customer) {
    out.push(['name', aCustomer.name]);
    out.push(['location', aCustomer.location]);
}

console.log(reportLines(customer));