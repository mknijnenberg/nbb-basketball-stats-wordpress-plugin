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
	ColorPicker,
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

import StandingsTable from "./edit/StandingsTable";
import Configuration from "./edit/Configuration";
import { renderTeamsSelectControl } from "./utils/renderTeamsSelectControl";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit(context) {
	const { attributes, setAttributes } = context;

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
		if (!attributes.clubId) return;

		setStandings([]);
		setTeams([]);
		setTeamsByClubId(attributes.clubId);
	}, [attributes.clubId]);

	useEffect(() => {
		if (!attributes.competitionId) return;

		getStandings(attributes.competitionId);
	}, [attributes.competitionId, teams]);

	const Container = () => {
		if (standings.length) return <StandingsTable {...attributes} standings={standings} />;

		return <Configuration context={context} clubs={clubs} teams={teams} />;
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
								value={attributes.clubId}
								options={clubs.map(({disabled, label, value}) => ({
									label: label,
									value: value,
									disabled: disabled,
								}))}
								onChange={(value) => {
									setAttributes({ clubId: parseInt(value) })
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
								value={attributes.competitionId}
								options={attributes.clubId > 0 ? renderTeamsSelectControl(teams) : []}
								onChange={(value) => setAttributes({ competitionId: parseInt(value) })}
								__next40pxDefaultSize
								__nextHasNoMarginBottom
							/>
						</PanelRow>

						<PanelRow>
							<ColorPicker
								color={attributes.tableHeaderColor}
								onChange={(color) => {
									setAttributes({ tableHeaderColor: color })
								}}
								enableAlpha
								defaultValue={attributes.tableHeaderColor}
							/>
						</PanelRow>
					</PanelBody>
				</Panel>
			</InspectorControls>

			<div className="ranking__container">
				<Container />
			</div>
		</div>
	);
}
