
const Config = require('../config');

if (!Object.assign || Config.alwaysOverride) {
	Object.assign = function (target, ...sources) {
		if (target == null) { // TypeError if undefined or null
			throw new TypeError('Cannot convert undefined or null to object');
		}

		target = Object(target);

		for (let index = 0; index < sources.length; index++) {
			const source = sources[index];

			if (source != null) { // Skip over if undefined or null
				for (const key in source) {
				// Avoid bugs when hasOwnProperty is shadowed
					if (Object.prototype.hasOwnProperty.call(source, key)) {
						target[key] = source[key];
					}
				}
			}
		}

		return target;
	};
}
