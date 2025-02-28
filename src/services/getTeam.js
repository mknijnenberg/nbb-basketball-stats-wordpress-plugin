import teamJson from '../../example-json/team.json';

/**
 * Get club data
 * @return {Promise} Club data
 */
export function getTeam(clubId) {
	const teams = teamJson.teams.filter((team) => team.club_id === parseInt(clubId));
	return Promise.resolve(teams);
}
