<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

use NbbBasketballStats\Utils;

$attrs = $block->parsed_block['attrs'];
$clubId = $attrs['clubId'];
$competitionId = $attrs['competitionId'];

$matches = Utils::get_cached_external_json('http://db.basketball.nl/db/csv/stand.pl');
?>

<div data-wp-interactive="nbbBasketballStatsRanking"
    data-wp-context='{ "headerColor": "red", "clubId": <?php echo $clubId; ?>, "competitionId": <?php echo $competitionId; ?> }'>
	<?php if (is_array($matches)) : ?>
		<?php foreach ($matches as $match) : ?>
			<div><?php echo $match['team1'] . ' - ' . $match['team2']; ?></div>
		<?php endforeach; ?>
	<?php else : ?>
		<div class="error">No Ranking found</div>
	<?php endif; ?>
</div>
