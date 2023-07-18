import { Province } from "./province";

export class Producer {
    private _province: Province;
    private _cost: number;
    private _name: string;
    private _production: number;

    constructor(aProvince: Province, data: any) {
        this._province = aProvince;
        this._cost = data.cost;
        this._name = data.name;
        this._production = data.production || 0;
    }

    get name() { return this._name; }
    get cost() { return this._cost; }
    set cost(arg) {this._cost = arg;}
    get production() {return this._production;}
    set production(amountStr: any) {
        const amount = parseInt(amountStr);
        const newProduction = Number.isNaN(amount) ? 0: amount;
        this._province.totalProduction += newProduction - this._production;
    } 
}