/* eslint-env mocha */

require('./object-filter')(true);

const chai = require('chai');

describe('Object.filter tests', () => {
	it('filter 1', (done) => {
		const input = { a: 1, b: 2, c: 3 };
		const test = (val, key) => key !== 'a';

		const output = Object.filter(input, test);

		chai.assert(output.a === undefined);
		done();
	});

	it('filter 2', (done) => {
		const input = { a: 1, b: 2, c: 3 };
		const test = (val, key) => val !== 1;

		const output = Object.filter(input, test);

		chai.assert(output.a === undefined);
		done();
	});
});
