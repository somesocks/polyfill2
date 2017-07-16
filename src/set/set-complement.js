
function polyfill(set) {
	const apply = (val) => { if (set.has(val)) { this.delete(val); } };
	this.forEach(apply);
	return this;
}

function loader(override) {
	if (Set && (!Set.prototype.complement || override)) {
		/**
		* @name Set.prototype.complement
		* @description Create a complement of this set and another (this AND NOT set)
		* @param {set} set - the set to complement with
		* @returns this
		* @memberof Set
		*/
		Object.defineProperty(
			Set.prototype,
			'complement',
			{ value: polyfill }
		);
	}
}

module.exports = loader;
loader();
