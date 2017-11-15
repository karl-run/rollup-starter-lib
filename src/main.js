import React from 'react';
import lunchtime from './lunchtime.js';
import millisecondsUntil from './millisecondsUntil.js';

import style from './main.scss';

const HowLongTillLunch = ({ hours, minutes }) => {
	if (hours === undefined) hours = 12;
	if (minutes === undefined) minutes = 30;

	const millisecondsUntilLunchTime = millisecondsUntil(lunchtime(hours, minutes));

	return (
		<div className={style.goodLunch}>{millisecondsUntilLunchTime / 1000} seconds</div>
	)
};

export default HowLongTillLunch;