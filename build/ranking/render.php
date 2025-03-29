<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

use NbbBasketballStats\Utils;

$attributes = Utils::get_block_attributes($block);

$clubId = esc_attr($attributes['clubId']);
$competitionId = esc_attr($attributes['competitionId']);
$tableHeaderColor = esc_attr($attributes['tableHeaderColor']);

$ranking = Utils::get_cached_external_json('http://db.basketball.nl/db/json/stand.pl', [
	'clubId' => $clubId,
	'compId' => $competitionId,
]) ?? [];
?>

<div <?php echo get_block_wrapper_attributes(); ?>>
	<?php if (is_array($ranking)) : ?>
		<table class="ranking__table">
			<thead class="standings__table-header-group" style="background-color: <?php echo $tableHeaderColor ?>">
				<tr>
					<th class="ranking__table-header">#</th>
					<th class="ranking__table-header">Team</th>
					<th class="ranking__table-header">Gespeeld</th>
					<th class="ranking__table-header">Punten</th>
					<th class="ranking__table-header">Percentage</th>
					<th class="ranking__table-header">+/-</th>
					<th class="ranking__table-header">Eigen Score</th>
					<th class="ranking__table-header">Tegen Score</th>
				</tr>
			</thead>
			<tbody>
				<?php foreach ($ranking['stand'] as $standing) : ?>
					<tr>
						<td class="ranking__table-column"><?php echo $standing['positie']; ?></td>
						<td class="ranking__table-column"><?php echo $standing['team']; ?></td>
						<td class="ranking__table-column"><?php echo $standing['gespeeld']; ?></td>
						<td class="ranking__table-column"><?php echo $standing['punten']; ?></td>
						<td class="ranking__table-column"><?php echo Utils::format_percentage($standing['percentage']); ?></td>
						<td class="ranking__table-column"><?php echo $standing['saldo']; ?></td>
						<td class="ranking__table-column"><?php echo $standing['eigenscore']; ?></td>
						<td class="ranking__table-column"><?php echo $standing['tegenscore']; ?></td>
					</tr>
				<?php endforeach; ?>
			</tbody>
		</table>
	<?php else : ?>
		<div class="error">No Ranking found</div>
	<?php endif; ?>
</div>
