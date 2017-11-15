(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
	typeof define === 'function' && define.amd ? define(['react'], factory) :
	(global.howLongUntilLunchReact = factory(global.React));
}(this, (function (React) { 'use strict';

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

React = React && React.hasOwnProperty('default') ? React['default'] : React;

function getNextLunchtime(hours, minutes) {
  const lunchtime = new Date();

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

var style = __$styleInject("._goodLunch_13o6g_1 {\r\n  width: 100px;\r\n  box-shadow: 2px 2px 3px black;\r\n  background-color: hotpink;\r\n}\r\n", { "goodLunch": "_goodLunch_13o6g_1" });

const HowLongTillLunch = ({ hours, minutes }) => {
  if (hours === undefined) hours = 12;
  if (minutes === undefined) minutes = 30;

  const millisecondsUntilLunchTime = millisecondsUntil(getNextLunchtime(hours, minutes));

  return React.createElement(
    'div',
    { className: style.goodLunch },
    millisecondsUntilLunchTime / 1000,
    ' seconds'
  );
};

return HowLongTillLunch;

})));
