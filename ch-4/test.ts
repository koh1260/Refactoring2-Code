import { Province } from "./province"
import { sampleProvinceData } from "./sample-province-data"

describe('province', () => {
    let asia: Province;

    beforeEach(() => {
        // 테스트 전에 항상 실행.
        // 테스트마다 새로운 객체 할당 -> 테스트 간의 의존성 X
        asia = new Province(sampleProvinceData())
    })

    it('shortfall', () => {
        // when
        const shortfall = asia.shortfall;

        // then
        expect(shortfall).toEqual(5);
    })

    it('profit', () => {
        // when 
        const profit = asia.profit;

        // then
        expect(profit).toEqual(230);
    })
})