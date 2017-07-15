/* eslint-env mocha */

const Config = require('../config');
Config.alwaysOverride = true;

require('./object-filter');

const chai = require('chai');

describe('Object.filter tests', () => {
	it('filter 1', (done) => {
		const input = { a: 1, b: 2, c: 3 };
		const test = (val, key) => key !== 'a';

		const output = input.filter(test);

		chai.assert(output.a === undefined);
		done();
	});

	it('filter 2', (done) => {
		const input = { a: 1, b: 2, c: 3 };
		const test = (val, key) => val !== 1;

		const output = input.filter(test);

		chai.assert(output.a === undefined);
		done();
	});

	it('Object.filter(obj, ...) === obj.filter(...)', (done) => {
		const input = { a: 1, b: 2, c: 3 };
		const test = (val, key) => key !== 'a';

		const output1 = Object.filter(input, test);
		const output2 = input.filter(test);

		chai.assert.deepEqual(output1, output2);
		done();
	});
});
