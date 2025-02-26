<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 *
 * $attributes (array): The block attributes.
 * $content (string): The block default content.
 * $block (WP_Block): The block instance.
 */

/* Get all sticky posts */
$stickyPosts = get_option('sticky_posts');

if (count($stickyPosts) > 1) {
    /* Sort the stickies with the newest ones at the top */
    rsort($stickyPosts);

    /* Get the 5 newest stickies (change 5 for a different number) */
    $stickyPosts = array_slice($stickyPosts, 0, $attributes['amountOfPosts']);

    $articles = new WP_Query(array(
        'post__in' => $stickyPosts,
        'post_status' => 'publish',
        'post_type' => 'post',
        'ignore_sticky_posts' => -1,
    ));
}

if ($attributes['delay']) {
	$styles .= "--wp-block-hero-sticky-animation-delay: {$attributes['delay']}ms;";
}

if ($attributes['backgroundColor']) {
	$styles .= "--wp-block-hero-sticky-background-color: {$attributes['backgroundColor']};";
} else {
	$styles .= "--wp-block-hero-sticky-background-color: #000;";
}

	if ($attributes['textColor']) {
		$styles .= "--wp-block-hero-sticky-text-color: {$attributes['textColor']};";
	} else {
		$styles .= "--wp-block-hero-sticky-text-color: #fff;";
	}
?>

<div <?php echo get_block_wrapper_attributes(array('style' => $styles)); ?> data-hero-delay="<?php echo $attributes['delay']; ?>">
	<div class="hero">
		<?php while ($articles->have_posts()) : $articles->the_post();
			$id = get_the_ID()
		?>
			<?php if (has_post_thumbnail()) {
				the_post_thumbnail('team-large', array(
					'class' => 'hero__image',
					'style' => 'transition: all 500ms ease-in-out 0s; opacity:0;',
					'alt' => get_the_title(),
					'data-id' => $id,
					'data-hero' => 'image',
				));
			} else { ?>
				<img src="<?php echo get_template_directory_uri() . '/dist/images/fallback_teams.jpg'; ?>" alt="<?php echo get_the_title(); ?>" , class="hero__image" style="transition: all 500ms ease-in-out 0s; opacity: 0;" data-id="<?php echo $id; ?>" data-hero="image" />
			<?php } ?>
		<?php endwhile; ?>

		<div class="hero__background"></div>

		<?php while ($articles->have_posts()) : $articles->the_post();
			$id = get_the_ID();
		?>
			<div class="hero__content-layer<?php echo $active; ?>" data-hero="content" data-id="<?php echo $id; ?>" style="transition: all 500ms ease-in-out 0s; opacity: 0;">
				<div class="hero__content-block">
					<div>
						<a data-track="video" data-text="<?php the_title_attribute(); ?>" href="<?php the_permalink(); ?>" class="hero__link">
							<h2 class="hero__title">
								<span class="hero__multiline" style="-webkit-line-clamp:3"><?php the_title(); ?></span>
							</h2>
						</a>
						<p class="hero__typing">
							<span class="hero__multiline" style="-webkit-line-clamp:3"><?php the_excerpt(); ?></span>
						</p>
						<div class="hero__button-wrapper">
							<a href="<?php the_permalink(); ?>" class="hero__button-cta">Lees het bericht</a>
						</div>
					</div>
				</div>
			</div>
		<?php endwhile; ?>

		<div class="hero__slides">
			<div class="hero__slides-content">
				<?php while ($articles->have_posts()) : $articles->the_post();
					$id = get_the_ID();
					$categories = get_the_category($id);

					$selected = '';

					if (count($categories) > 0) {
						if ($categories[0]->category_nicename !== 'geen-categorie') {
							$selected = $categories[0]->cat_name;
						}
					}
				?>

					<button class="hero__slides-button"
						data-hero="button"
						data-id="<?php echo $id; ?>"
						title="<?php the_title_attribute(); ?>"
						type="button"
					>
						<div class="hero__slides-bar">
							<div class="hero__slides-loader"></div>
						</div>

						<?php if (isset($selected)) { ?>
							<div class="hero__slides-title"><?php echo $selected; ?></div>
						<?php } ?>

						<div class="hero__slides-subtitle">
							<span class="hero__multiline" style="-webkit-line-clamp:3"><?php the_title_attribute(); ?></span>
						</div>
					</button>
				<?php endwhile; ?>
			</div>

			<!-- mobile options -->
			<div class="hero__mobile">
				<?php while ($articles->have_posts()) : $articles->the_post();
					$id = get_the_ID();
				?>
					<p class="hero__mobile-text<?php echo $active; ?>" data-hero="mobile" data-id="<?php echo $id; ?>">Next: <?php echo $title; ?></p>
				<?php endwhile; ?>
			</div>
		</div>
	</div>
</div>
