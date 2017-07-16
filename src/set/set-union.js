
function polyfill(set) {
	const apply = (val) => this.add(val);
	set.forEach(apply);
	return this;
}

function loader(override) {
	if (Set && (!Set.prototype.union || override)) {
		/**
		* @name Set.prototype.union
		* @description Create a union of this set and another (this OR set)
		* @param {set} set - the set to union with
		* @returns this
		* @memberof Set
		*/
		Object.defineProperty(
			Set.prototype,
			'union',
			{ value: polyfill }
		);
	}
}

module.exports = loader;
loader();
