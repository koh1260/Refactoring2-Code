import { Performances } from "./invoices";
import { Info } from "./plays";

export class PerformanceCalculator{
    performance: Performances;
    play: Info;

    constructor(aPerformance: Performances, aPlay: Info) {
        this.performance = aPerformance;
        this.play = aPlay;
    }

    getAmount() {
        // 반환 값은 result로
    let result = 0;

    switch (this.play.type) {
      case "tragedy":
        result = 40000;
        if (this.performance.audience > 30) {
          result += 1000 * (this.performance.audience - 30);
        }
        break;
      case "comedy":
        result = 30000;
        if (this.performance.audience > 20) {
          result += 1000 + 500 * (this.performance.audience - 20);
        }
        break;
      default:
        throw new Error(`알 수 없는 장르: ${this.play.type}`);
    }
    return result;
    }
}