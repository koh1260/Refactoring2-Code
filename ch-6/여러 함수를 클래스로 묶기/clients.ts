import { Reading, acquirRading, baseRate, taxThreshord } from "./functions";

export const client1 = () => {
  const aReading = acquirRading();
  const base = baseRate(aReading.month, aReading.year) * aReading.quantity;
  const taxableCharge = Math.max(0, base - taxThreshord(aReading.year));

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
