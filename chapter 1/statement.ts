import { Invoice, Performances, invoices } from "./invoices";
import { Info, Play, plays } from "./plays";

export function statement(invoice: Invoice, plays: Play) {
  const statementData: any = {};
  statementData.customer = invoice.customer;
  statementData.performances = invoice.performances.map(enrichPerformace);
  return renderPlainText(statementData, plays);

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
}

function renderPlainText(data: any, plays: Play) {
  let result = `청구 내역 (고객명: ${data.customer})\n`;

  for (let perf of data.performances) {
    // 청구 내역을 출력한다.
    result += `${perf.play.name}: ${usd(perf.amount)} (${
      perf.audience
    }석)\n`;
  }
  result += `총액 : ${usd(totalAmount())}\n`;
  result += `적립 포인트: ${totalVolumeCredits()}점\n`;
  return result;

  function totalAmount() {
    let result = 0;
    for (let perf of data.performances) {
      result += perf.amount;
    }
    return result;
  }

  function totalVolumeCredits() {
    let volumeCredits = 0;
    for (let perf of data.performances) {
      volumeCredits += perf.volumeCredits;
    }
    return volumeCredits;
  }

  function usd(aNumber: number) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(aNumber / 100);
  }

  // function volumeCreditsFor(perf: any) {
  //   let result = 0;
  //   result += Math.max(perf.audience - 30, 0);
  //   // 희극 관객 5명마다 추가 포인트를 제공한다.
  //   if ("comedy" === perf.play.type) result += Math.floor(perf.audience / 5);
  //   return result;
  // }
}

console.log(statement(invoices, plays));
