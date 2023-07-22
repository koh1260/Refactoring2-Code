import { Reading, acquirRading, baseRate, calculatorBaseCharge, enrichReading, taxThreshord } from "./functions";

export const client1 = () => {
  const rawReading = acquirRading();
  const aReading = enrichReading(rawReading);
  const taxableCharge = aReading.taxableCharge;

  return taxableCharge;
};

export const client2 = () => {
  const rawReading = acquirRading();
  const aReading = enrichReading(rawReading);
  const baseCharge =aReading.baseCharge;

    return baseCharge;
};

export const client3 = () => {
  const rawReading = acquirRading();
  const aReading = enrichReading(rawReading);
  const baseChargeAmount = aReading.baseCharge;

  return baseChargeAmount;
};


