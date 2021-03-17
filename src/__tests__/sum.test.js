const t = require('../sum');

describe('t関数のStmts100%', () => {
    it('Case1', () => {
        expect(t(1, 0, 1, 0)).toStrictEqual(['A', 'B']);

    });

    it('Case2', () => {
        expect(t(1, 0, 0, 0)).toStrictEqual(['A', '~B']);

    });
});
