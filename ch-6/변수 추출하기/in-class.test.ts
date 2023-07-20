import { Order } from "./in -class"

describe('Order', () => {
    it('test', () => {
        // given
        const order = new Order(505, 1000);

        // when
        const result = order.price;

        // then
        expect(result).toEqual(504850);
    })
})