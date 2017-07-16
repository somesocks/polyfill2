
function polyfill(set) {
	const apply = (val) => { if (!set.has(val)) { this.delete(val); } };
	this.forEach(apply);
	return this;
}

function loader(override) {
	if (Set && (!Set.prototype.intersection || override)) {
		/**
		* @name Set.prototype.intersection
		* @description Create a union of this set and another (this AND set)
		* @param {set} set - the set to intersct with
		* @returns this
		* @memberof Set
		*/
		Object.defineProperty(
			Set.prototype,
			'intersection',
			{ value: polyfill }
		);
	}
}

module.exports = loader;
loader();
