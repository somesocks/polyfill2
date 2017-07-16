
function polyfill(toCall, _this) {
	for (const key in this) {
		// Avoid bugs when hasOwnProperty is shadowed
		if (Object.prototype.hasOwnProperty.call(this, key)) {
			toCall.call(_this, this[key], key, this);
		}
	}
}

function loader(override) {
	if (!Object.forEach || override) {
		/**
		* @name Object.forEach
		* @description Iterates over an object, and calls a function for each key-value pair in it
		* @param source - the object to iterate over
		* @param {function(value, key, source)} toCall - the callback function, called for each key-value pair
		* @param _this - optional this argument to set in the callback
		* @returns a filtered copy of source
		* @memberof polyfill2
		*/
		Object.forEach = function (...args) { return polyfill.call(...args); };
	}
}

module.exports = loader;
loader();
