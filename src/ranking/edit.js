/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

import React, { useEffect, useState } from "react";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import {
	Panel,
	PanelBody,
	PanelRow,
	SelectControl,
} from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

import { getClub } from "../services/getClub";
import { getTeam } from "../services/getTeam";
import { getStandingsByCompId } from "../services/getStandings";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const [clubs, setClubs] = useState([]);
	const [teams, setTeams] = useState([]);
	const [standings, setStandings] = useState([]);

	const getClubs = async () => {
		const response = await getClub();
		const clubs = response.clubs.map((club) => {
			return {
				label: club.naam,
				value: club.id,
			};
		});

		const defaultValue = {
			label: `${__('Select a Club', 'nbb-basketball-stats')}`,
			value: 0,
		};

		setClubs([defaultValue, ...clubs]);
	};

	const setTeamsByClubId = async (clubId) => {
		if (!clubId) return;

		const response = await getTeam(clubId);
		setTeams(response);
	};

	const getStandings = async (competitionId) => {
		const response = await getStandingsByCompId(competitionId);
		setStandings(response);
	}

	useEffect(() => {
		getClubs();
	}, []);

	useEffect(() => {
		if (!attributes.selectedClubId) return;

		setStandings([]);
		setTeams([]);
		setTeamsByClubId(attributes.selectedClubId);
	}, [attributes.selectedClubId]);

	useEffect(() => {
		if (!attributes.selectedTeamId) return;

		const team = teams.find((team) => team.id === attributes.selectedTeamId);

		if (team) {
			getStandings(team.comp_id);
		}
	}, [attributes.selectedTeamId, teams]);

	const StandingsTable = () => {
		return (
			<div className="ranking__table-wrapper">
				<table className="ranking__table">
					<thead className="ranking__table-header-group">
						<tr>
							<th className="ranking__table-header">Positie</th>
							<th className="ranking__table-header">Team</th>
							<th className="ranking__table-header">Gespeeld</th>
							<th className="ranking__table-header">Punten</th>
							<th className="ranking__table-header">Percentage</th>
							<th className="ranking__table-header">Saldo</th>
							<th className="ranking__table-header">Eigen Score</th>
							<th className="ranking__table-header">Tegen Score</th>
							<th className="ranking__table-header">Datum</th>
						</tr>
					</thead>
					<tbody>
						{standings.map((team) => (
							<tr key={team.positie} className="border-b text-center">
								<td className="ranking__table-column">{team.positie}</td>
								<td className="ranking__table-column">{team.team}</td>
								<td className="ranking__table-column">{team.gespeeld}</td>
								<td className="ranking__table-column">{team.punten}</td>
								<td className="ranking__table-column">{team.percentage}</td>
								<td className="ranking__table-column">{team.saldo}</td>
								<td className="ranking__table-column">{team.eigenscore}</td>
								<td className="ranking__table-column">{team.tegenscore}</td>
								<td className="ranking__table-column">{team.datum}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	};

	const renderTeamsSelectControl = () => {
		const selectControlTeams = teams.map((team) => {
			return {
				disabled: false,
				label: team.naam,
				value: team.id,
			};
		});

		const defaultValue = {
			disabled: false,
			label: `${__('Select a Team', 'nbb-basketball-stats')}`,
			value: undefined,
		};

		return [defaultValue, ...selectControlTeams];
	}

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<Panel>
					<PanelBody
						title={__("Standen Configuratie", "nbb-basketball-stats")}
						initialOpen={true}
					>
						<PanelRow>
							<SelectControl
								help={__(
									"Select the club which needs to displayed",
									"nbb-basketball-stats",
								)}
								label={__("Club", "nbb-basketball-stats")}
								value={attributes.selectedClubId}
								options={clubs.map(({disabled, label, value}) => ({
									label: label,
									value: value,
									disabled: disabled,
								}))}
								onChange={(value) => {
									setAttributes({ selectedClubId: parseInt(value) })
								}}
								__next40pxDefaultSize
								__nextHasNoMarginBottom
							/>
						</PanelRow>

						<PanelRow>
							<SelectControl
								help={__(
									"Select the team based on the club which needs to displayed",
									"nbb-basketball-stats",
								)}
								label={__("Team", "nbb-basketball-stats")}
								value={attributes.selectedTeamId}
								options={attributes.selectedClubId > 0 ? renderTeamsSelectControl() : [{ label: 'Select a Club first!', value: undefined }]}
								onChange={(value) => setAttributes({ selectedTeamId: parseInt(value) })}
								__next40pxDefaultSize
								__nextHasNoMarginBottom
							/>
						</PanelRow>
					</PanelBody>
				</Panel>
			</InspectorControls>

			<div className="ranking__container">
				{standings.length ? <StandingsTable /> : (
					<p>{__("No data available", "nbb-basketball-stats")}</p>
				)}
			</div>
		</div>
	);
}
