
const Config = require('../config');

if (!Object.map || Config.alwaysOverride) {
	Object.map = function (src, map, _this) {
		const dest = {};

		for (const key in src) {
			// Avoid bugs when hasOwnProperty is shadowed
			if (Object.prototype.hasOwnProperty.call(src, key)) {
				const val = src[key];
				dest[key] = map.call(_this, val, key, src);
			}
		}

		return dest;
	};
}

if (!Object.prototype.map || Config.alwaysOverride) {
	Object.defineProperty(
		Object.prototype,
		'map',
		{
			value: function (test, _this) {
				return Object.map(this, test, _this);
			},
		}
	);
}
