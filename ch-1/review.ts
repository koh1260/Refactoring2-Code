import { Invoice, Performances, invoices } from "./invoices";
import { Info, Play, plays } from "./plays";

("use strict");
export const statement = (invoice: Invoice, plays: Play) => {
  return render();

  function render() {
    let result = `청구 내역 (고객명: ${invoice.customer})\n`;

    for (let perf of invoice.performances) {
      result += `${playFor(perf).name}: ${format(
        amountFor(perf, playFor(perf)) / 100
      )} (${perf.audience}석)\n`;
    }
    result += `총액 : ${format(totalAmountFor() / 100)}\n`;
    result += `적립 포인트: ${volumeCreditFor()}점\n`;
    return result;
  }

  function format(num: number) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(num);
  }

  function totalAmountFor() {
    let result = 0;
    for (let perf of invoice.performances) {
      result += amountFor(perf, playFor(perf));
    }
    return result;
  }

  // 문장 슬라이드 후 함수로 분리
  function volumeCreditFor() {
    let result = 0;
    for (let perf of invoice.performances) {
      // 포인트를 적립한다.
      result += Math.max(perf.audience - 30, 0);
      // 희극 관객 5명마다 추가 포인트를 제공한다.
      if ("comedy" === playFor(perf).type)
        result += Math.floor(perf.audience / 5);
    }
    return result;
  }

  // 임시 변수 질의 함수로 분리
  function playFor(perf: Performances) {
    return plays[perf.playID];
  }

  // switch문 함수로 분리
  function amountFor(perf: Performances, play: Info) {
    let retult = 0;
    switch (play.type) {
      case "tragedy":
        retult = 40000;
        if (perf.audience > 30) {
          retult += 1000 * (perf.audience - 30);
        }
        break;
      case "comedy":
        retult = 30000;
        if (perf.audience > 20) {
          retult += 1000 + 500 * (perf.audience - 20);
        }
        break;
      default:
        throw new Error(`알 수 없는 장르: ${play.type}`);
    }
    return retult;
  }
};
