import { Performances } from "./invoices";
import { Info } from "./plays";

export class PerformanceCalculator{
    performance: Performances;

    constructor(aPerformance: Performances) {
        this.performance = aPerformance;
    }
}