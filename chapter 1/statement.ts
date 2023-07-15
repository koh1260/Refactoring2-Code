import { Invoice, Performances, invoices } from "./invoices";
import { Info, Play, plays } from "./plays";

("use strict");
export const statement = (invoice: Invoice, plays: Play) => {
  let totalAmount = 0;
  let volumeCredit = 0;
  let result = `청구 내역 (고객명: ${invoice.customer})\n`;
  const format = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format;

  for (let perf of invoice.performances) {
    let thisAmount = amountFor(perf, playFor(perf));
    // 포인트를 적립한다.
    volumeCredit += Math.max(perf.audience - 30, 0);
    // 희극 관객 5명마다 추가 포인트를 제공한다.
    if ("comedy" === playFor(perf).type)
      volumeCredit += Math.floor(perf.audience / 5);

    result += `${playFor(perf).name}: ${format(thisAmount / 100)} (${
      perf.audience
    }석)\n`;
    totalAmount += thisAmount;
  }
  result += `총액 : ${format(totalAmount / 100)}\n`;
  result += `적립 포인트: ${volumeCredit}점\n`;
  return result;

  // aPerformance 명확한 이름
  function amountFor(aPerformance: Performances, play: Info) {
    // 반환 값은 result로
    let result = 0;

    switch (play.type) {
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
        throw new Error(`알 수 없는 장르: ${play.type}`);
    }
    return result;
  };

  function playFor(aPerfoemance: Performances) {
    return plays[aPerfoemance.playID];
  }
};

console.log(statement(invoices, plays));
