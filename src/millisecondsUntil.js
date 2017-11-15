// @flow

export default function millisecondsUntil(date: Date): number {
	return date - Date.now();
}