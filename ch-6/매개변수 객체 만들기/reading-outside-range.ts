import { Station } from "./station";

class NumberRange {
  private _min: number;
  private _max: number;

  constructor(min: number, max: number, range: NumberRange) {
    this._min = min;
    this._max = max;
  }
  
  get min() {
    return this._min;
  }
  get max() {
    return this._max;
  }
}

export function readingOutsideRange(
  station: Station,
  min: number,
  max: number
) {
  return station.readings.filter((r) => r.temp < min || r.temp > max);
}
