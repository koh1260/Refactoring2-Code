import { Province } from "./province"
import { sampleProvinceData } from "./sample-province-data"

describe('province', () => {
    it('shortfall', () => {
        // given
        const asia = new Province(sampleProvinceData());

        // when
        const shortfall = asia.shortfall;

        // then
        expect(shortfall).toEqual(5);
    })

    it('profit', () => {
        // given
        const asia = new Province(sampleProvinceData());

        // when 
        const profit = asia.profit;

        // then
        expect(profit).toEqual(230);
    })
})