import { Province } from "./province"
import { sampleProvinceData } from "./sample-province-data"

describe('province', () => {
    let asia: Province;

    beforeEach(() => {
        // 테스트 전에 항상 실행.
        // 테스트마다 새로운 객체 할당 -> 테스트 간의 의존성 X
        asia = new Province(sampleProvinceData())
    });

    it('shortfall', () => {
        // when
        const shortfall = asia.shortfall;

        // then
        expect(shortfall).toEqual(5);
    });

    it('profit', () => {
        // when 
        const profit = asia.profit;

        // then
        expect(profit).toEqual(230);
    });
    
    it('change production', () => {
        // when
        asia.producers[0].production = 20;

        // then
        expect(asia.shortfall).toEqual(-6);
        expect(asia.profit).toEqual(330);
    });

    // 0, 음수 등 경계 값들 테스트 -> 특이 상황 발견 가능성 ^
    it('zero demand', () => {
        // when
        asia.demand = 0;

        // given
        expect(asia.shortfall).toEqual(-25);
        expect(asia.profit).toEqual(0);
    });

    it('negative demand', () => {
        // when
        asia.demand = -1;

        // then
        expect(asia.shortfall).toEqual(-26);
        expect(asia.profit).toEqual(-10);
    });
})