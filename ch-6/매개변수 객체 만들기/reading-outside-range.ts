import { Station } from "./station";

export class NumberRange {
  private _min: number;
  private _max: number;

  constructor(min: number, max: number) {
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
  max: number,
  range: NumberRange | null,
) {
  return station.readings.filter((r) => r.temp < min || r.temp > max);
}
