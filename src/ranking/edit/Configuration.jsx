import { __ } from "@wordpress/i18n";
import { SelectControl } from "@wordpress/components";
import { renderTeamsSelectControl } from "../utils/renderTeamsSelectControl";

const Configuration = (props) => {
	const { context, clubs, teams } = props;
	const { attributes, setAttributes } = context;

	return (
		<div className="configuration__container">
			<h3>{__("Select a Club and Team", "nbb-basketball-stats")}</h3>

			<div className="configuration__select-wrapper">
				<div className="configuration__select">
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
				</div>

				<div className="configuration__select">
					<SelectControl
						help={__(
							"Select the team based which needs to displayed",
							"nbb-basketball-stats",
						)}
						label={__("Team", "nbb-basketball-stats")}
						value={attributes.competitionId}
						options={attributes.clubId > 0 ? renderTeamsSelectControl(teams) : []}
						onChange={(value) => setAttributes({ competitionId: parseInt(value) })}
						__next40pxDefaultSize
						__nextHasNoMarginBottom
					/>
				</div>
			</div>
		</div>
	)
};

export default Configuration;
