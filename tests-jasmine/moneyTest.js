import { money } from '../shared/utils.js';

describe('test suit: Money', () => {
    it('Conerts the Cent to Dollars', () => {
        expect(money(2095)).toEqual('20.95');
    });

    it('works with 0', () => {
        expect(money(0)).toEqual('0.00');
    });

    it('works with big numbers', () => {
        expect(money(2000.5)).toEqual('20.01');
    });
})