import { Reading, acquirRading, baseRate, taxThreshord } from "./functions";

function taxableChargeFn(aReading: Reading) {
  return Math.max(0, aReading.baseCharge - taxThreshord(aReading.year))
}

export const client1 = () => {
  const rawReading = acquirRading();
  const aReading = new Reading(rawReading.customer, rawReading.quantity, rawReading.month, rawReading.year)
  const taxableCharge = aReading.taxableCharge;

  return taxableCharge;
};

export const client2 = () => {
  const rawReading = acquirRading();
  const aReading = new Reading(rawReading.customer, rawReading.quantity, rawReading.month, rawReading.year)
  const baseCharge = aReading.baseCharge;

  return baseCharge;
};

export const client3 = () => {
  const rawReading = acquirRading();
  const aReading = new Reading(rawReading.customer, rawReading.quantity, rawReading.month, rawReading.year)
  const baseChargeAmount = aReading.baseCharge;

  return baseChargeAmount;
};
