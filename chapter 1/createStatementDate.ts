import { Invoice, Performances } from "./invoices";
import { PerformanceCalculator } from "./performance-calculator";
import { Play } from "./plays";

export default function createStatementData(invoice: Invoice, plays: Play) {
  const result: any = {};
  result.customer = invoice.customer;
  result.performances = invoice.performances.map(enrichPerformace);
  result.totalAmount = totalAmount(result);
  result.totalVolumeCredits = totalVolumeCredits(result);
  return result;

  function enrichPerformace(aPerformance: Performances) {
    const calculator = new PerformanceCalculator(
      aPerformance,
      playFor(aPerformance),
    );
    const result: any = Object.assign({}, aPerformance);
    result.play = playFor(result);
    result.amount = calculator.getAmount();
    result.volumeCredits = volumeCreditsFor(result);
    return result;
  }

  function playFor(aPerformance: Performances) {
    return plays[aPerformance.playID];
  }

  function volumeCreditsFor(perf: any) {
    let result = 0;
    result += Math.max(perf.audience - 30, 0);
    // 희극 관객 5명마다 추가 포인트를 제공한다.
    if ("comedy" === perf.play.type) result += Math.floor(perf.audience / 5);
    return result;
  }

  function totalAmount(data: any) {
    return data.performances.reduce(
      (total: number, p: any) => total + p.amount,
      0
    );
  }

  function totalVolumeCredits(data: any) {
    return data.performances.reduce(
      (total: number, p: any) => total + p.volumeCredits,
      0
    );
  }
}
