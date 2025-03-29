import {
	ColorPalette,
	__experimentalToolsPanel as ToolsPanel,
	__experimentalToolsPanelItem as ToolsPanelItem,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const ColorsConfiguration = (props) => {
	const resetAll = () => {
		setHeight( undefined );
		setWidth( undefined );
		setPadding( undefined );
		setMargin( undefined );
	};

	const { onHandleUpdate, tableHeaderColor, colors } = props;

	console.log(props);

	return (
		<>
		<ToolsPanel label={ __( 'Dimensions' ) } resetAll={ resetAll }>
		<div style={'grid-column: span 12'}>
			Select dimensions or spacing related settings from the menu for
			additional controls.
		</div>
			<ToolsPanelItem>
				<ColorPalette
					colors={ colors }
					onChange={ ( color ) => onHandleUpdate(color) }
					disableCustomColors={false}
					value={ tableHeaderColor }
				/>
			</ToolsPanelItem>
		</ToolsPanel>
		</>
	)
}

export default ColorsConfiguration;
