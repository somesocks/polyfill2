/* eslint-env mocha */

const Config = require('../config');
Config.alwaysOverride = true;

require('./array-includes');

const chai = require('chai');

describe('Array.includes tests', () => {
	it('includes 1', (done) => {
		const input = [ 1, 2, 3 ];

		const output1 = Array.includes(input, 2);
		const output2 = input.includes(2);

		chai.assert(output1 === true);
		chai.assert(output2 === true);
		done();
	});

	it('includes 2', (done) => {
		const input = [ 1, 2, 3 ];

		const output1 = Array.includes(input, 4);
		const output2 = input.includes(4);

		chai.assert(output1 === false);
		chai.assert(output2 === false);
		done();
	});

	it('includes 3', (done) => {
		const input = [ 1, 2, 3 ];

		const output1 = Array.includes(input, 3, 3);
		const output2 = input.includes(3, 3);

		chai.assert(output1 === false);
		chai.assert(output2 === false);
		done();
	});

	it('includes 4', (done) => {
		const input = [ 1, 2, 3 ];

		const output1 = Array.includes(input, 3, -1);
		const output2 = input.includes(3, -1);

		chai.assert(output1 === true);
		chai.assert(output2 === true);
		done();
	});

	it('includes 5', (done) => {
		const input = [ 1, 2, NaN ];

		const output1 = Array.includes(input, NaN);
		const output2 = input.includes(NaN);

		chai.assert(output1 === true);
		chai.assert(output2 === true);
		done();
	});
});
