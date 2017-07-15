
const Config = require('../config');

if (!Object.filter || Config.alwaysOverride) {
	Object.filter =
		function (src, test, _this) {
			const dest = {};

			for (const key in src) {
				// Avoid bugs when hasOwnProperty is shadowed
				if (Object.prototype.hasOwnProperty.call(src, key)) {
					const val = src[key];
					if (test.call(_this, val, key, src)) {
						dest[key] = src[key];
					}
				}
			}

			return dest;
		};
}

if (!Object.prototype.filter || Config.alwaysOverride) {
	Object.defineProperty(
		Object.prototype,
		'filter',
		{
			value: function (test, _this) {
				return Object.filter(this, test, _this);
			},
		}
	);
}
