import standingJson from '../../example-json/stand.json';

/**
 * Get club data
 * @return {Promise} Club data
 */
export function getStandingsByCompId(compId) {
	if (parseInt(standingJson.id) !== compId) {
		return Promise.resolve([]);
	}

	return Promise.resolve(standingJson);
}
