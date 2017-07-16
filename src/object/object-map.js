
function polyfill(map, _this) {
	const dest = {};

	for (const key in this) {
		// Avoid bugs when hasOwnProperty is shadowed
		if (Object.prototype.hasOwnProperty.call(this, key)) {
			const val = this[key];
			dest[key] = map.call(_this, val, key, this);
		}
	}

	return dest;
}

function loader(override) {
	if (!Object.map || override) {
		/**
		* @name Object.map
		* @description Create a shallow copy of an object, where every value is mapped by a mapping function
		* @param source - the object to map
		* @param {function(value, key, source)} map - the mapping function, should return a new value for each key-value pair
		* @param _this - optional this argument to set in the map
		* @returns a mapped copy of source
		* @memberof Object
		*/
		Object.map = function (...args) { return polyfill.call(...args); };
	}
}

module.exports = loader;
loader();
