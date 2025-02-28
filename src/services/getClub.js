import clubJson from '../../example-json/club.json';

/**
 * Get club data
 * @return {Promise} Club data
 */
export function getClub() {
	return Promise.resolve(clubJson);
}
