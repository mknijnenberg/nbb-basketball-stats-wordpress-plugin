<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

use NbbBasketballStats\Utils;

$matches = Utils::get_cached_external_json('http://db.basketball.nl/db/csv/stand.pl');
?>
<div <?php echo get_block_wrapper_attributes(); ?>>
	<?php if (is_array($matches)) : ?>
		<?php foreach ($matches as $match) : ?>
			<div><?php echo $match['team1'] . ' - ' . $match['team2']; ?></div>
		<?php endforeach; ?>
	<?php else : ?>
		<div class="error">No Ranking found</div>
	<?php endif; ?>
</div>
