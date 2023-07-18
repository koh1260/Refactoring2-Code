import { Province } from "./province";

describe('no-producers', () => {
    let noProducers: Province;

    beforeEach(() => {
        const data = {
            name: 'No producers',
            producers: [],
            demand: 30,
            price: 20,
        };
        noProducers = new Province(data);
    })

    it('shortfall', () => {
        expect(noProducers.shortfall).toEqual(30);
    });

    it('profit', () => {
        expect(noProducers.profit).toEqual(0);
    })
})