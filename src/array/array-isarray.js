
const Config = require('../config');

if (!Array.isArray || Config.alwaysOverride) {
	Array.isArray = function (arg) {
		return Object.prototype.toString.call(arg) === '[object Array]';
	};
}
