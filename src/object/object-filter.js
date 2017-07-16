
function polyfill(test, _this) {
	const dest = {};

	for (const key in this) {
		// Avoid bugs when hasOwnProperty is shadowed
		if (Object.prototype.hasOwnProperty.call(this, key)) {
			const val = this[key];
			if (test.call(_this, val, key, this)) {
				dest[key] = this[key];
			}
		}
	}

	return dest;
}

/**
* @name Object.filter
* Create a shallow copy of an object, where some keys are filtered
* @param source - the object to copy
* @param {function(value, key, source)} filter - the filtering function, should return a boolean
* @param _this - optional this argument to set in the filter
* @returns a filtered copy of source
*/
function loader(override) {
	if (!Object.filter || override) {
		Object.filter = function (...args) { return polyfill.call(...args); };
	}
}

module.exports = loader;
loader();
