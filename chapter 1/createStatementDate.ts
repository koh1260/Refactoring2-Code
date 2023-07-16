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
    result.play = calculator.play
    result.amount = calculator.amount;
    result.volumeCredits = calculator.volumeCredits;
    return result;
  }

  function playFor(aPerformance: Performances) {
    return plays[aPerformance.playID];
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
