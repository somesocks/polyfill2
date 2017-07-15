
const Config = require('../config');

if (!Array.of || Config.alwaysOverride) {
	Array.of = function() {
		return Array.prototype.slice.call(arguments);
	};
}
