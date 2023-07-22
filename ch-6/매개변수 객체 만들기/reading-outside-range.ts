import { Reading, Station, station } from "./station";

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

  contains(arg: number) {
    return (arg > this._min && arg < this._max);
  }
}

export function readingOutsideRange(
  station: Station,
  range: NumberRange,
) {
  return station.readings.filter((r) => !range.contains(r.temp));
}