

const polyfills = [
	...require('./array'),
	...require('./object'),
	...require('./set'),
];

module.exports = function (override) {
	for (let i = 0; i < polyfills.length; i++) {
		polyfills[i](override);
	}
};
