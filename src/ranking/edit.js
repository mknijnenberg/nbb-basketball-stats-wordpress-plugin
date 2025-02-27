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
						title={__("Hero Posts configuration", "nbb-basketball-stats")}
						initialOpen={true}
					>
						<PanelRow>
							<SelectControl
								help={__(
									"Select the amount of sticky posts to display",
									"nbb-basketball-stats",
								)}
								label={__("Amount of slides", "nbb-basketball-stats")}
								value={attributes.amountOfPosts}
								options={[
									{ label: __("1", "nbb-basketball-stats"), value: 1 },
									{ label: __("2", "nbb-basketball-stats"), value: 2 },
									{ label: __("3", "nbb-basketball-stats"), value: 3 },
									{ label: __("4", "nbb-basketball-stats"), value: 4 },
									{ label: __("5", "nbb-basketball-stats"), value: 5 },
									{ label: __("6", "nbb-basketball-stats"), value: 6 },
									{ label: __("7", "nbb-basketball-stats"), value: 7 },
									{ label: __("8", "nbb-basketball-stats"), value: 8 },
									{ label: __("9", "nbb-basketball-stats"), value: 9 },
									{ label: __("10", "nbb-basketball-stats"), value: 10 },
								]}
								onChange={(value) => setAttributes({ amountOfPosts: value })}
							/>
						</PanelRow>

						<PanelRow>
							<TextControl
								help={__(
									"Select the delay between each slide in milliseconds",
									"nbb-basketball-stats",
								)}
								label={__("Delay between slides", "nbb-basketball-stats")}
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
													srcset="https://picsum.photos/200/300 1024w, https://picsum.photos/200/300 300w, https://picsum.photos/200/300 768w"
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
