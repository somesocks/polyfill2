
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

function loader(override) {
	if (!Object.copy || override) {
		/**
		* @name Object.copy
		* @description Create a shallow copy of an object
		* @param source - the object to copy
		* @returns a copy of source
		* @memberof Object
		*/
		Object.copy = function (...args) { return polyfill.call(...args); };
	}
}

module.exports = loader;
loader();
