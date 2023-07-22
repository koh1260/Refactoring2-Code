import { NumberRange, readingOutsideRange } from "./reading-outside-range";
import { Station } from "./station";

describe("reading-outside-range", () => {
  it("test", () => {
    // given
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

    const numberRange = new NumberRange(48, 57);

    // when
    const result = readingOutsideRange(station, 48, numberRange);

    // then
    expect(result[0].temp).toEqual(47);
    expect(result[1].temp).toEqual(58);
  });
});
