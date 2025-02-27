<?php
/**
 * Plugin Name:       Nbb Basketball Stats
 * Description:       Gutenberg blocks for the Dutch NBB Basketball statistics.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.0.1
 * Author:            Maarten Knijnenberg
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       nbb-basketball-stats
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

// Require once the composer autoload.
if ( file_exists( __DIR__ . '/lib/autoload.php' ) ) {
	require_once __DIR__ . '/lib/autoload.php';
}

/**
 * The code that runs during plugin activation.
 *
 * @return void
 */
function activate_nbb_basketball_stats_plugin() {
	NbbBasketballStats\Base\Activate::activate();
}
register_activation_hook( __FILE__, 'activate_nbb_basketball_stats_plugin' );

/**
 * The code that runs during plugin deactivation.
 *
 * @return void
 */
function deactivate_nbb_basketball_stats_plugin() {
	NbbBasketballStats\Base\Deactivate::deactivate();
}
register_deactivation_hook( __FILE__, 'deactivate_nbb_basketball_stats_plugin' );

/**
 * Initialize all the core classes of the plugin.
 *
 * @return void
 */
if ( class_exists( 'NbbBasketballStats\\Init' ) ) {
	NbbBasketballStats\Init::register_services();
}
