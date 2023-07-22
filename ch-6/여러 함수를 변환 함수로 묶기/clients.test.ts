import { client1, client2, client3 } from "./clients";
import { Reading, enrichReading } from "./functions";

describe("clients test", () => {
  it("client1", () => {
    // given
    // when
    const result = client1();

    // then
    expect(result).toEqual(1.7);
  });

  it("client2", () => {
    // given
    // when
    const result = client2();

    // then
    expect(result).toEqual(2.5);
  });

  it("client3", () => {
    // given
    // when
    const result = client3();

    // then
    expect(result).toEqual(2.5);
  });

  it('check reading unchanged', () => {
    // given
    const baseReading: Reading = {
      customer: "ivan",
      quantity: 10,
      month: 5,
      year: 2017,
    };
    const oracle = Object.assign({}, baseReading);

    // when
    enrichReading(baseReading);

    // then
    expect(baseReading).toEqual(oracle);
  });
});
