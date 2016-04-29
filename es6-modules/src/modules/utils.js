/**
 * Created by Mihail on 4/30/2016.
 */
export const _odds = 0;

export default function (odds) {
	console.log('print odds: ', odds);
};

export function addOdds(odds) {
	return _odds + odds;
}

export function deleteOdds(odds) {
	return odds - _odds;
}
