/* eslint-env mocha */

require('./object-map')(true);

const chai = require('chai');

describe('Object.map tests', () => {
	it('map 1', (done) => {
		const input = { a: 1, b: 2, c: 3 };
		const map = (val, key) => val + 1;

		const output = Object.map(input, map);
		const expected = { a: 2, b: 3, c: 4 };

		chai.assert.deepEqual(output, expected);
		done();
	});

	it('map 2', (done) => {
		const input = { a: 1, b: 2, c: 3 };
		const map = (val, key) => key;

		const output = Object.map(input, map);
		const expected = { a: 'a', b: 'b', c: 'c' };

		chai.assert.deepEqual(output, expected);
		done();
	});
});
