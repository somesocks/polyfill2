
function polyfill(test, _this) {
	const dest = new Set();
	const apply = function (val) {
		if (test.call(_this, val)) {
			dest.add(val);
		}
	};
	this.forEach(apply);
	return dest;
}

function loader(override) {
	if (Set && (!Set.filter || override)) {
		/**
		* @name Set.filter
		* @description Create a shallow copy of a Set, where some keys are filtered
		* @param source - the set to copy
		* @param {function(value, key, source)} filter - the filtering function, should return a boolean
		* @param _this - optional this argument to set in the filter
		* @returns a filtered copy of source
		* @memberof Set
		*/
		Set.filter = function (...args) { return polyfill.call(...args); };
	}

	if (Set && (!Set.prototype.filter || override)) {
		/**
		* @name Set.prototype.filter
		* @description Create a shallow copy of a Set, where some keys are filtered
		* @param {function(value, key, source)} filter - the filtering function, should return a boolean
		* @param _this - optional this argument to set in the filter
		* @returns a filtered copy of source
		* @memberof Set
		*/
		Object.defineProperty(
			Set.prototype,
			'filter',
			{ value: polyfill }
		);
	}
}

module.exports = loader;
loader();
