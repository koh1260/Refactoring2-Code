import { Reading, acquirRading, baseRate, taxThreshord } from "./functions";

export const client1 = () => {
  const aReading = acquirRading();
  const base = baseRate(aReading.month, aReading.year) * aReading.quantity;
  const taxableCharge = Math.max(0, base - taxThreshord(aReading.year));

  return taxableCharge;
};

export const client2 = () => {
  const aReading = acquirRading();
  const baseCharge =
    baseRate(aReading.month, aReading.year) * aReading.quantity;

    return baseCharge;
};

export const client3 = () => {
  const aReading = acquirRading();
  const baseChargeAmount = calculatorBaseCharge(aReading);

  return baseChargeAmount;
};

const calculatorBaseCharge = (aReading: Reading) => {
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}
