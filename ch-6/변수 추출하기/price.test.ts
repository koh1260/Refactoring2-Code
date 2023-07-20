import { Order, price } from "./price"

describe('price', () => {
    it('test', () => {
        // given
        const order: Order = {
            quantity: 505,
            itemPrice: 1000,
        };

        // when
        const result = price(order);

        // then
        expect(result).toEqual(504850);
    })
})