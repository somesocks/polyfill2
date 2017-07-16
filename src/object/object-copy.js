
function polyfill() {
	const dest = {};

	for (const key in this) {
		// Avoid bugs when hasOwnProperty is shadowed
		if (Object.prototype.hasOwnProperty.call(this, key)) {
			dest[key] = this[key];
		}
	}

	return dest;
}

/**
* @name Object.copy
* Create a shallow copy of an object
* @param source - the object to copy
* @returns a copy of source
*/
function loader(override) {
	if (!Object.copy || override) {
		Object.copy = function (...args) { return polyfill.call(...args); };
	}
}

module.exports = loader;
loader();
