import teamJson from '../../example-json/team.json';

/**
 * Get club data
 * @return {Promise} Club data
 */
export default function getTeam() {
	return Promise.resolve(teamJson);
}
