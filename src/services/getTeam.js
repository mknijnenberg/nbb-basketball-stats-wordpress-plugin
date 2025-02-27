import teamJson from '../../example-json/team.json';

/**
 * Get club data
 * @return {Promise} Club data
 */
export default function getTeam(clubId) {
	console.log('getTeam called with clubId: ', clubId);
	return Promise.resolve(teamJson);
}
