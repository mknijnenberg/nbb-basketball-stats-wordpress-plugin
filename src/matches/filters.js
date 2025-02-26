import { __ } from "@wordpress/i18n";
import { addFilter } from "@wordpress/hooks";
import { createHigherOrderComponent } from "@wordpress/compose";
import { ToolbarGroup, ToolbarButton } from "@wordpress/components";
import { useDispatch, useSelect } from "@wordpress/data";
import { createBlock } from "@wordpress/blocks";
import { BlockControls } from "@wordpress/block-editor";

addFilter(
	"blocks.registerBlockType",
	"akrides-blocks/sponsors",
	(settings, name) => {
		if (name !== "core/image") {
			return settings;
		}

		return {
			...settings,
			usesContext: [...settings.usesContext, "akrides-blocks/sponsors"],
		};
	},
);

function Edit(props) {
	console.log(props.context);
	if (!props.context["akrides-blocks/sponsors"]) {
		return null;
	}

	const { insertBlock } = useDispatch("core/block-editor");
	const parentBlock = useSelect((select) => {
		const parentBlock = select("core/block-editor").getBlockParentsByBlockName(
			props.clientId,
			"akrides-blocks/sponsors",
		);

		return select("core/block-editor").getBlock(parentBlock[0]);
	});

	const insertSlide = () => {
		const newBlock = createBlock("core/image", { imageFill: true });

		const result = insertBlock(
			newBlock,
			parentBlock.innerBlocks.length,
			parentBlock.clientId,
		);
	};

	return (
		<BlockControls>
			<ToolbarGroup>
				<ToolbarButton icon="edit" onClick={insertSlide}>
					{__("Add Slide", "akrides-blocks")}
				</ToolbarButton>
			</ToolbarGroup>
		</BlockControls>
	);
}

addFilter(
	"editor.BlockEdit",
	"akrides-blocks/sponsors",
	createHigherOrderComponent((BlockEdit) => {
		return (props) => {
			if ("core/image" !== props.name) {
				return <BlockEdit {...props} />;
			}

			return (
				<>
					<BlockEdit {...props} />
					<Edit {...props} />
				</>
			);
		};
	}),
);
