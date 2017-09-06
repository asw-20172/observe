import { expect, assert } from 'chai';
import Person from './Person';

describe('singleton_es6 test', () => {
    it('sanity', () => {
        var john = new Person();
        var john2 = new Person();

        expect(john).to.equal(john2);
        expect(john === john2).to.be.true;
    });
});
