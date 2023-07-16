import { Performances } from "./invoices";
import { Info } from "./plays";

export class PerformanceCalculator {
  performance: Performances;
  play: Info;

  constructor(aPerformance: Performances, aPlay: Info) {
    this.performance = aPerformance;
    this.play = aPlay;
  }

  get amount(): number {
    throw new Error('서브 클래스에서 처리하도록 설계함.');
  }

  get volumeCredits() {
    return Math.max(this.performance.audience - 30, 0);
  }
}
