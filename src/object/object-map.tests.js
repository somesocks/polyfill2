/* eslint-env mocha */

const Config = require('../config');
Config.alwaysOverride = true;

require('./object-map');

const chai = require('chai');

describe('Object.map tests', () => {
	it('map 1', (done) => {
		const input = { a: 1, b: 2, c: 3 };
		const map = (val, key) => val + 1;

		const output = input.map(map);
		const expected = { a: 2, b: 3, c: 4 };

		chai.assert.deepEqual(output, expected);
		done();
	});

	it('map 2', (done) => {
		const input = { a: 1, b: 2, c: 3 };
		const map = (val, key) => key;

		const output = input.map(map);
		const expected = { a: 'a', b: 'b', c: 'c' };

		chai.assert.deepEqual(output, expected);
		done();
	});

	it('Object.map(obj, ...) === obj.map(...)', (done) => {
		const input = { a: 1, b: 2, c: 3 };
		const map = (val, key) => val++;

		const output1 = Object.map(input, map);
		const output2 = input.map(map);

		chai.assert.deepEqual(output1, output2);
		done();
	});
});
