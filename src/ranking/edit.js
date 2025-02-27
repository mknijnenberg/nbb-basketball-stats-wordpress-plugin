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

import getClub from "../services/getClub";
import getTeam from "../services/getTeam";

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

	const defineClubs = async () => {
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
		const response = await getTeam(clubId);

		const teams = response.teams.map((team) => {
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

		setTeams([defaultValue, ...teams]);
	};

	useEffect(() => {
		defineClubs();
	}, []);

	useEffect(() => {
		if (!attributes.selectedClub) {
			return;
		}

		setAttributes({ selectedTeam: 0 });
		setTeamsByClubId(attributes.selectedClub);
	}, [attributes.selectedClub]);

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
								value={attributes.selectedClub}
								options={clubs.map(({disabled, label, value}) => ({
									label: label,
									value: value,
									disabled: disabled,
								}))}
								onChange={(value) => {
									setAttributes({ selectedClub: value })
								}}
								__next40pxDefaultSize
								__nextHasNoMarginBottom
							/>
						</PanelRow>

						<div>selectedClub: {attributes.selectedClub}</div>
						<div>selectedTeam: {attributes.selectedTeam}</div>

						<PanelRow>
							<SelectControl
								help={__(
									"Select the team based on the club which needs to displayed",
									"nbb-basketball-stats",
								)}
								label={__("Team", "nbb-basketball-stats")}
								value={attributes.selectedTeam}
								options={attributes.selectedClub > 0 ? teams.map(({disabled, label, value}) => ({
									label: label,
									value: value,
									disabled: disabled,
								})) : [{ label: 'Select a Club first!', value: undefined }]}
								onChange={(value) => setAttributes({ selectedTeam: value })}
								__next40pxDefaultSize
								__nextHasNoMarginBottom
							/>
						</PanelRow>
					</PanelBody>
				</Panel>
			</InspectorControls>

			<div>
				{/* {{ clubs }} */}
				asdf
			</div>
		</div>
	);
}
