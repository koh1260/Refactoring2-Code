import { Invoices } from "./invoices";
import { invoices } from "./invoices";
import { Clock } from "./clock";

function printOwing(invoice: Invoices) {
  printBanner();
  const outstanding = calcOutstanding(invoice);
  
  recordDueDate(invoice);

  printDetail(invoice, outstanding);

  function printBanner() {
    console.log("*******************");
    console.log("***** 고객 채무 *****");
    console.log("*******************");
  }
}

function calcOutstanding(invoice: Invoices) {
  let result = 0;
  for (const o of invoice.orders) {
    result += o.amount;
  }
  return result;
}

function recordDueDate(invoice: Invoices) {
  const today = Clock.today;
  invoice.duDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );
}

function printDetail(invoice: Invoices, outstanding: number) {
  console.log(`고객명: ${invoice.customer}`);
  console.log(`채무액: ${outstanding}`);
  console.log(`마감일: ${invoice.duDate!.toLocaleDateString()}`);
}

printOwing(invoices);
