import { Producer } from "./producer";

export interface Doc {
    name: string;
    producers: Partial<Producer>[];
    demand: number;
    price: number;
}

export function sampleProvinceData(): Doc {
    return {
        name: 'Asia',
        producers: [
            {name: 'Byzantium', cost: 10, production: 9},
            {name: 'Attalia', cost: 12, production: 10},
            {name: 'Sinope', cost: 10, production: 6},
        ],
        demand: 30,
        price: 20
    };
}