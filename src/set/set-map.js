
function polyfill(map, _this) {
	const dest = new Set();
	const apply = function (val) {
		dest.add(map.call(_this, val));
	};
	this.forEach(apply);
	return dest;
}

function loader(override) {
	if (Set && (!Set.map || override)) {
		/**
		* @name Set.map
		* @description Create a shallow copy of a set, where every value is mapped by a mapping function
		* @param source - the set to map
		* @param {function(value, key, source)} map - the mapping function, should return a new value for each key-value pair
		* @param _this - optional this argument to set in the map
		* @returns a mapped copy of source
		* @memberof Set
		*/
		Set.filter = function (...args) { return polyfill.call(...args); };
	}

	if (Set && (!Set.prototype.map || override)) {
		/**
		* @name Set.prototype.map
		* @description Create a shallow copy of a set, where every value is mapped by a mapping function
		* @param {function(value, key, source)} map - the mapping function, should return a new value for each key-value pair
		* @param _this - optional this argument to set in the map
		* @returns a mapped copy of source
		* @memberof Set
		*/
		Object.defineProperty(
			Set.prototype,
			'map',
			{ value: polyfill }
		);
	}
}

module.exports = loader;
loader();
