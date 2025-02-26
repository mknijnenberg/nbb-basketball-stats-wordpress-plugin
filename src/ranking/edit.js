/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

import React, { useEffect, useRef } from "react";

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

import { useEntityRecords } from "@wordpress/core-data";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";
import { RecordAnimation } from "./edit/record-animation";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { records, hasResolved } = useEntityRecords("postType", "post", {
		// sticky: true,
		status: "publish",
		orderBy: "date",
		order: "desc",
		per_page: attributes.amountOfPosts,
		format: "image",
		_embed: true,
	});

	const heroRef = useRef(null);

	useEffect(() => {
		if (!records) return;

		new RecordAnimation(heroRef.current, "hero__record");
	}, [records]);

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<Panel>
					<PanelBody
						title={__("Hero Posts configuration", "akrides-blocks")}
						initialOpen={true}
					>
						<PanelRow>
							<SelectControl
								help={__(
									"Select the amount of sticky posts to display",
									"akrides-blocks",
								)}
								label={__("Amount of slides", "akrides-blocks")}
								value={attributes.amountOfPosts}
								options={[
									{ label: __("1", "akrides-blocks"), value: 1 },
									{ label: __("2", "akrides-blocks"), value: 2 },
									{ label: __("3", "akrides-blocks"), value: 3 },
									{ label: __("4", "akrides-blocks"), value: 4 },
									{ label: __("5", "akrides-blocks"), value: 5 },
									{ label: __("6", "akrides-blocks"), value: 6 },
									{ label: __("7", "akrides-blocks"), value: 7 },
									{ label: __("8", "akrides-blocks"), value: 8 },
									{ label: __("9", "akrides-blocks"), value: 9 },
									{ label: __("10", "akrides-blocks"), value: 10 },
								]}
								onChange={(value) => setAttributes({ amountOfPosts: value })}
							/>
						</PanelRow>

						<PanelRow>
							<TextControl
								help={__(
									"Select the delay between each slide in milliseconds",
									"akrides-blocks",
								)}
								label={__("Delay between slides", "akrides-blocks")}
								value={attributes.delay}
								onChange={(value) => setAttributes({ delay: value })}
								type="text"
							/>
						</PanelRow>
					</PanelBody>
				</Panel>
			</InspectorControls>

			{records && hasResolved && (
				<>
					<div>
						<div class="hero" ref={heroRef}>
							<div class="hero__wrapper">
								{records.map((record) => {
									const [featuredImage] = record._embedded["wp:featuredmedia"];

									return (
										<div class="hero__record" data-id={record.id}>
											<figure class="aligncenter wp-block-post-featured-image">
												<img
													width={
														featuredImage.media_details.sizes.medium_large.width
													}
													height={
														featuredImage.media_details.sizes.medium_large
															.height
													}
													src={
														featuredImage.media_details.sizes.medium_large
															.source_url
													}
													class="attachment-post-thumbnail size-post-thumbnail wp-post-image"
													alt={
														featuredImage.alt_text
															? featuredImage.alt_text
															: record.title.rendered
													}
													style={{ objectFit: "cover" }}
													decoding="async"
													loading="lazy"
													srcset="http://localhost:8000/wp-content/uploads/2024/05/akrides_60jaar_jongens_onder_18.jpeg 1024w, http://localhost:8000/wp-content/uploads/2024/05/akrides_60jaar_jongens_onder_18-300x200.jpeg 300w, http://localhost:8000/wp-content/uploads/2024/05/akrides_60jaar_jongens_onder_18-768x512.jpeg 768w"
													sizes="(max-width: 1024px) 100vw, 1024px"
												/>
											</figure>

											<div
												class="hero__content-layer"
												data-hero="content"
												data-id={record.id}
											>
												<div class="hero__content-block">
													<h3 class="hero__title">{record.title.rendered}</h3>
													<p
														class="hero__typing"
														dangerouslySetInnerHTML={{
															__html: record.excerpt.rendered,
														}}
													/>
												</div>
											</div>

											<div class="hero__slides">
												<div class="hero__slides-bar">
													<div class="hero__slides-loader"></div>
												</div>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
}
