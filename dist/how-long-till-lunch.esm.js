function __$$styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

import React from 'react';

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

var css = "._goodLunch_1jy20_1 {\n  width: 100px;\n  box-shadow: 2px 2px 3px black;\n  background-color: hotpink; }\n";
__$$styleInject(css);

const HowLongTillLunch = ({ hours, minutes }) => {
  if (hours === undefined) hours = 12;
  if (minutes === undefined) minutes = 30;

  const millisecondsUntilLunchTime = millisecondsUntil(getNextLunchtime(hours, minutes));

  return React.createElement(
    'div',
    { className: css.goodLunch },
    millisecondsUntilLunchTime / 1000,
    ' seconds'
  );
};

export default HowLongTillLunch;
