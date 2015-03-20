var utils = {};

utils.randomDarkColor = function() {
	var darkColor = "#";
	var allowed = "0123456789a";
	for (var i = 0; i < 6; i++)
		darkColor += allowed.charAt(Math.floor(Math.random() * allowed.length));
	return darkColor;
}

module.exports = utils;