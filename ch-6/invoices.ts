export interface Invoices {
    customer: string;
    orders: Order[]
    duDate?: Date;
}

interface Order {
    amount: number;
}

export const invoices: Invoices = {
    customer: 'Doori',
    orders: [
        {amount: 3000},
        {amount: 4000},
        {amount: 6000},
    ]
}
