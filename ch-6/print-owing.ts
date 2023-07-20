import { Invoices } from "./invoices";
import { invoices } from "./invoices";
import { Clock } from "./clock";

function printOwing(invoice: Invoices) {
  let outstanding = 0;

  printBanner();

  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  const today = Clock.today;

  invoice.duDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );

  printDetail(invoice, outstanding);

  function printBanner() {
    console.log("*******************");
    console.log("***** 고객 채무 *****");
    console.log("*******************");
  }
}

function printDetail(invoice: Invoices, outstanding: number) {
    console.log(`고객명: ${invoice.customer}`);
    console.log(`채무액: ${outstanding}`);
    console.log(`마감일: ${invoice.duDate!.toLocaleDateString()}`);
  }

printOwing(invoices);
