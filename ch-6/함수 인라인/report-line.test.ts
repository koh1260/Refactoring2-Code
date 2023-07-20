import { Customer, reportLines } from "./report-line"

describe('reportLine', () => {
    it('test', () => {
        // given
        const customer: Customer = {
            name: 'Doori',
            location: '창원'
        }

        // when
        const result = reportLines(customer);

        // then
        expect(result).toEqual([ [ 'name', 'Doori' ], [ 'location', '창원' ] ]);
    })
})