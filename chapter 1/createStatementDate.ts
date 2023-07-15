import { Invoice, Performances } from "./invoices";
import { Play } from "./plays";

export default function createStatementData(invoice: Invoice, plays: Play) {
    const statementData: any = {};
    statementData.customer = invoice.customer;
    statementData.performances = invoice.performances.map(enrichPerformace);
    statementData.totalAmount = totalAmount(statementData);
    statementData.totalVolumeCredits = totalVolumeCredits(statementData);
    return statementData;
  
    function enrichPerformace(aPerformance: Performances) {
      const result: any = Object.assign({}, aPerformance);
      result.play = playFor(result);
      result.amount = amountFor(result);
      result.volumeCredits = volumeCreditsFor(result);
      return result;
    }
  
    function playFor(aPerformance: Performances) {
      return plays[aPerformance.playID];
    }
  
    // aPerformance 명확한 이름
    function amountFor(aPerformance: any) {
      // 반환 값은 result로
      let result = 0;
  
      switch (aPerformance.play.type) {
        case "tragedy":
          result = 40000;
          if (aPerformance.audience > 30) {
            result += 1000 * (aPerformance.audience - 30);
          }
          break;
        case "comedy":
          result = 30000;
          if (aPerformance.audience > 20) {
            result += 1000 + 500 * (aPerformance.audience - 20);
          }
          break;
        default:
          throw new Error(`알 수 없는 장르: ${aPerformance.play.type}`);
      }
      return result;
    }
  
    function volumeCreditsFor(perf: any) {
      let result = 0;
      result += Math.max(perf.audience - 30, 0);
      // 희극 관객 5명마다 추가 포인트를 제공한다.
      if ("comedy" === perf.play.type) result += Math.floor(perf.audience / 5);
      return result;
    }
  
    function totalAmount(data: any) {
      return data.performances
        .reduce((total: number, p: any) => total + p.amount, 0);
    }
  
    function totalVolumeCredits(data: any) {
      return data.performances
        .reduce((total: number, p: any) => total + p.volumeCredits, 0);
    }
  }