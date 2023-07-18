import { ComedyCalculator } from "./codemy-calculator";
import { Invoice, Performances } from "./invoices";
import { PerformanceCalculator } from "./performance-calculator";
import { Info, Play } from "./plays";
import { TragedyCalculator } from "./tragedy-calculator";

function createPerformanceCalculator(
  aPerformance: Performances,
  aPlay: Info
) {
  switch (aPlay.type) {
    case 'tragedy':
      return new TragedyCalculator(aPerformance, aPlay);
    case 'comedy':
      return new ComedyCalculator(aPerformance, aPlay);
    default:
      throw new Error(`알 수 없는 장르: ${aPlay.type}`);
  }
}

export default function createStatementData(invoice: Invoice, plays: Play) {
  const result: any = {};
  result.customer = invoice.customer;
  result.performances = invoice.performances.map(enrichPerformace);
  result.totalAmount = totalAmount(result);
  result.totalVolumeCredits = totalVolumeCredits(result);
  return result;

  function enrichPerformace(aPerformance: Performances) {
    const calculator = createPerformanceCalculator(
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
