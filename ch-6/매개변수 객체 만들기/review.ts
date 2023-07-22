interface Station {
  name: string;
  readings: Reading[];
}

interface Reading {
  temp: number;
  time: Date;
}

const station: Station = {
  name: "ZB1",
  readings: [
    { temp: 47, time: new Date("2016-11-10 09:10") },
    { temp: 53, time: new Date("2016-11-10 09:20") },
    { temp: 58, time: new Date("2016-11-10 09:30") },
    { temp: 53, time: new Date("2016-11-10 09:40") },
    { temp: 51, time: new Date("2016-11-10 09:50") },
  ],
};

class NumberRange {
  constructor(private _min: number, private _max: number) {}

  get min() {
    return this._min;
  }
  get max() {
    return this._max;
  }

  contains(arg: number) {
    return (arg < this._min || arg > this._max);
  }
}
const range = new NumberRange(48, 57);
function readingOutsideRange(station: Station, range: NumberRange) {
  return station.readings.filter((r) => !range.contains(r.temp));
}
