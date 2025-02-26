/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

import { ToolbarGroup, ToolbarButton } from "@wordpress/components";
import { useDispatch } from "@wordpress/data";
import { createBlock } from "@wordpress/blocks";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	useInnerBlocksProps,
	BlockControls,
} from "@wordpress/block-editor";
import ServerSideRender from "@wordpress/server-side-render";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit(props) {
	console.log("props: ", props);
	// const blockProps = useBlockProps();
	// return (
	// 	<>
	// 		<div {...blockProps}>
	// 			<ServerSideRender
	// 				block="akrides-blocks/sponsors"
	// 				attributes={props.attributes}
	// 			/>
	// 		</div>
	// 	</>
	// );
	const blockProps = useBlockProps();
	const innerBlockProps = useInnerBlocksProps(blockProps, {
		allowedBlocks: ["core/image"],
		template: [["core/image"]],
		defaultBlock: {
			name: "core/image",
			attributes: { imageFill: true },
		},
		directInsert: true,
	});

	const { insertBlock } = useDispatch("core/block-editor");

	const insertSlide = () => {
		const newBlock = createBlock("core/image", { imageFill: true });

		const result = insertBlock(newBlock, 0, props.clientId);
	};

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton icon="edit" onClick={insertSlide}>
						{__("Add Slide", "akrides-blocks")}
					</ToolbarButton>
				</ToolbarGroup>
			</BlockControls>
			<div {...innerBlockProps}></div>;
		</>
	);
}
