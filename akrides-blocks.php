<?php
/**
 * Plugin Name:       Akrides Blocks
 * Description:       Building blocks for the Akrides templates and posts.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Maarten Knijnenberg
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       akrides-blocks
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
function activate_akrides_blocks_plugin() {
	AkridesBlocks\Base\Activate::activate();
}
register_activation_hook( __FILE__, 'activate_akrides_blocks_plugin' );

/**
 * The code that runs during plugin deactivation.
 *
 * @return void
 */
function deactivate_akrides_blocks_plugin() {
	AkridesBlocks\Base\Deactivate::deactivate();
}
register_deactivation_hook( __FILE__, 'deactivate_akrides_blocks_plugin' );

/**
 * Initialize all the core classes of the plugin.
 *
 * @return void
 */
if ( class_exists( 'AkridesBlocks\\Init' ) ) {
	AkridesBlocks\Init::register_services();
}
