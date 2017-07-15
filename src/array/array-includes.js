
const Config = require('../config');

if (!Array.includes || Config.alwaysOverride) {
	Array.includes = function (array, searchElement, fromIndex) {
		const length = array.length;

		fromIndex = fromIndex != null ? fromIndex : 0;
		fromIndex = fromIndex < 0 ? length - Math.abs(fromIndex) : fromIndex;
		fromIndex = fromIndex < 0 ? 0 : fromIndex;

		for (let i = fromIndex; i < length; i++) {
			const e = array[i];
			if (
				e === searchElement
				|| (typeof e === 'number' && typeof searchElement === 'number' && isNaN(e) && isNaN(searchElement))
			) {
				return true;
			}
		}

		return false;
	};
}

if (!Array.prototype.includes || Config.alwaysOverride) {
	Object.defineProperty(
		Array.prototype,
		'includes',
		{
			value: function (searchElement, fromIndex) {
				return Array.includes(this, searchElement, fromIndex);
			},
		}
	);
}
