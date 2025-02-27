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
	TextControl,
} from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

import getClub from "../services/getClub";

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
		setClubs(response.clubs);
	};

	const setTeamsByClubId = async (clubId) => {
		const response = await getTeam(clubId);
		setTeams(response.teams);
	};

	useEffect(() => {
		defineClubs();
	}, []);

	useEffect(() => {
		console.log('club selected: ', arguments);
		setTeamsByClubId(attributes.selectedClub);
	}, [attributes.selectedClub]);

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<Panel>
					<PanelBody
						title={__("Hero Posts configuration", "nbb-basketball-stats")}
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
								options={clubs}
								onChange={(value) => setAttributes({ selectedClub: value })}
							/>
						</PanelRow>

						<PanelRow>
							{ attributes.selectedClub ?
								<SelectControl
									help={__(
										"Select the team based on the club which needs to displayed",
										"nbb-basketball-stats",
									)}
									label={__("Team", "nbb-basketball-stats")}
									value={attributes.selectedClub}
									options={teams}
									onChange={(value) => setAttributes({ selectedTeam: value })}
								/>
								:
								<div>Select a club to display the teams.</div>
							}
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
