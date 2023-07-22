export interface Station {
  name: string;
  readings: Reading[];
}

export interface Reading {
  temp: number;
  time: Date;
}

export const station: Station = {
  name: "ZB1",
  readings: [
    { temp: 47, time: new Date("2016-11-10 09:10") },
    { temp: 53, time: new Date("2016-11-10 09:20") },
    { temp: 58, time: new Date("2016-11-10 09:30") },
    { temp: 53, time: new Date("2016-11-10 09:40") },
    { temp: 51, time: new Date("2016-11-10 09:50") },
  ],
};
