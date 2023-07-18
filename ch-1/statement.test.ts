import { Invoice } from "./invoices";
import { Play } from "./plays";
import { statement } from "./statement";

describe("statements 테스트", () => {
  it("statements", () => {
    // given
    const invoices: Invoice = {
      customer: "CUSTOMER",
      performances: [
        { playID: "play1", audience: 40 },
        { playID: "play2", audience: 30 },
      ],
    };
    const plays: Play = {
      play1: { name: "PLAY1", type: "tragedy" },
      play2: { name: "PLAY2", type: "comedy" },
    };

    // when
    const result = statement(invoices, plays);
    const expectResult = `청구 내역 (고객명: CUSTOMER)
PLAY1: $500.00 (40석)
PLAY2: $360.00 (30석)
총액 : $860.00
적립 포인트: 16점\n`;

    // then
    expect(result).toEqual(expectResult);
  });

	it('statement 존재하지 않는 장르', () => {
		// given
		const invoices: Invoice = {
			customer: 'CUSTOMER',
			performances: [
				{ playID: 'play1', audience: 30 },
			],
		};
		const play: Play = {
			play1: { name: 'PLAY1', type: 'UNKNOWN', },
		};

		// when
		// then
		expect(() => {
			statement(invoices, play);
		}).toThrowError(new Error('알 수 없는 장르: UNKNOWN'));
	})
});
