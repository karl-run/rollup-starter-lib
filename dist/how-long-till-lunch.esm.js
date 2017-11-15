function __$styleInject(css, returnValue) {
  if (typeof document === 'undefined') {
    return returnValue;
  }
  css = css || '';
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  head.appendChild(style);
  
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  return returnValue;
}

import React from 'react';

function getNextLunchtime(hours, minutes) {
	var lunchtime = new Date();

	lunchtime.setHours(hours);
	lunchtime.setMinutes(minutes);
	lunchtime.setSeconds(0);
	lunchtime.setMilliseconds(0);

	// if we've already had lunch today, start planning
	// tomorrow's lunch
	if (lunchtime < Date.now()) lunchtime.setDate(lunchtime.getDate() + 1);

	return lunchtime;
}

function millisecondsUntil(date) {
	return date - Date.now();
}

var style = __$styleInject("._goodLunch_3i4wk_1 {\r\n  width: 100px;\r\n  box-shadow: 2px 2px 3px black;\r\n  background-color: hotpink;\r\n}", { "goodLunch": "_goodLunch_3i4wk_1" });

var HowLongTillLunch = function HowLongTillLunch(_ref) {
	var hours = _ref.hours,
	    minutes = _ref.minutes;

	if (hours === undefined) hours = 12;
	if (minutes === undefined) minutes = 30;

	var millisecondsUntilLunchTime = millisecondsUntil(getNextLunchtime(hours, minutes));

	return React.createElement(
		'div',
		{ className: style.goodLunch },
		millisecondsUntilLunchTime / 1000,
		' seconds'
	);
};

export default HowLongTillLunch;
