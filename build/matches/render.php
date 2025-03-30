<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

use NbbBasketballStats\Utils;

$matches = Utils::get_cached_external_json('http://db.basketball.nl/db/json/wedstrijd.pl', [
	// 'clubId' => $clubId,
	// 'compId' => $competitionId,
	'szn_Naam' => '2024-2025',
	'clb_ID' => 197,
	'cmp_ID' => 427,
]) ?? [];

?>
<div <?php echo get_block_wrapper_attributes(); ?>>
	<div>
		<?php if (is_array($matches)) : ?>
			<div class="matches"
				data-club-id="<?php echo $matches['club_id']; ?>"
				data-competition-id="<?php echo $matches['competition_id']; ?>"
			>
				<div class="matches__title"><?php echo $matches['naam']; ?></div>

				<table class="matches__table">
					<thead class="matches__table-header-group">
						<tr>
							<th class="matches__table-header">Datum</th>
							<th class="matches__table-header">Team thuis</th>
							<th class="matches__table-header">Uitslag</th>
							<th class="matches__table-header">Team uit</th>
							<th class="matches__table-header">Locatie</th>
						</tr>
					</thead>

					<tbody>
						<?php foreach ($matches['wedstrijden'] as $game) :
						$date = new DateTime($game['datum']);

						$game_played = $game['score_thuis'] || $game['score_uit'];
						$homeWon = $game['score_thuis'] > $game['score_uit'];
						$awayWon = $game['score_uit'] > $game['score_thuis'];
							?>
							<tr
								class="matches__table-row"
								data-number="<?php echo $game['nr']; ?>"
								data-competition-number="<?php echo $game['cmp_nr']; ?>"
								data-game-id="<?php echo $game['id']; ?>"
								data-location-id="<?php echo $game['loc_id']; ?>"
								data-organisation-id="<?php echo $game['org_id']; ?>"
							>
								<td class="matches__table-column">
									<div class="matches__table-column--date">
										<?php echo $date->format('d-m-Y H:i'); ?>
									</div>
								</td>

								<td class="matches__table-column">
									<div class="matches__table-column--teams">
										<div
											class="matches__table-column--team"
											data-home-team
											data-home-team-id="<?php echo $game['thuis_ploeg_id']; ?>"
											data-home-club-id="<?php echo $game['thuis_club_id']; ?>"
										>
											<img
												src="<?php echo $game['logo_thuis']; ?>"
												alt="<?php echo $game['thuis_ploeg']; ?>"
											/>

											<div><?php echo $game['thuis_ploeg']; ?></div>
										</div>
									</div>
								</td>

								<td class="matches__table-column">
									<?php if($game_played) { ?>
										<div
											class="matches__table-column--scores"
											data-score
											data-home-team-score="<?php echo $game['score_thuis']; ?>"
											data-away-team-score="<?php echo $game['score_uit']; ?>"
										>
											<div class="matches__table-column--score <?php echo $homeWon ? 'matches__table-column--score--winner' : '';?>"><?php echo $game['score_thuis']; ?></div>
											<div>-</div>
											<div class="matches__table-column--score <?php echo $awayWon ? 'matches__table-column--score--winner' : '';?>"><?php echo $game['score_uit']; ?></div>
										</div>
									<?php } ?>
								</td>

								<td class="matches__table-column">
									<div
										class="matches__table-column--team matches__table-column--team--away"
										data-away-team
										data-away-team-id="<?php echo $game['uit_ploeg_id']; ?>"
										data-away-club-id="<?php echo $game['uit_club_id']; ?>"
									>
										<img
											src="<?php echo $game['logo_uit']; ?>"
											alt="<?php echo $game['uit_ploeg']; ?>"
										/>

										<div><?php echo $game['uit_ploeg']; ?></div>
									</div>
								</td>

								<td class="matches__table-column">
									<div
										class="matches__table-column--location"
										data-location
										data-location-id="<?php echo $game['loc_id']; ?>"
										data-lat="<?php echo $game['loc_lat']; ?>"
										data-lon="<?php echo $game['loc_lon']; ?>"
									>
										<span><?php echo $game['loc_naam']; ?></span>

										<span><?php echo $game['loc_plaats']; ?></span>
									</div>
								</td>
							</tr>
						<?php endforeach; ?>
					</tbody>
				</table>
				<div class="matches__metadata">
					<div>Laatst gewijzigd: <?php echo $matches['gewijzigd']; ?></div>
				</div>
			</div>
		<?php else : ?>
			<div class="error">No Matches found</div>
		<?php endif; ?>
	</div>

	<pre><?php print_r($matches); ?></pre>
</div>
