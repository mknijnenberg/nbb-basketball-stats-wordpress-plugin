import { __ } from "@wordpress/i18n";

export const renderTeamsSelectControl = (teams) => {
	const selectControlTeams = teams.map((team) => {
		return {
			disabled: false,
			label: `[${team.comp_id}] ${team.naam}`,
			value: team.comp_id,
		};
	});

	const defaultValue = {
		disabled: false,
		label: `${__('Select a Team', 'nbb-basketball-stats')}`,
		value: undefined,
	};

	return [defaultValue, ...selectControlTeams];
}
