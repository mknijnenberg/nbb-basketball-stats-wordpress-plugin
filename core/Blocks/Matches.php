<?php

/**
 * Register Matches Blocks
 *
 * @package NbbBasketballStats
 */

namespace NbbBasketballStats\Blocks;

use NbbBasketballStats\Base\BaseController;

/**
 * Register Matches Shortcodes
 */
class Matches extends BaseController {
	/**
	 * Register function is called by default to get the class running.
	 *
	 * @return void
	 */
	public function register() {
		add_action( 'init', [ $this, 'create_matches_init' ] );
	}

	/**
	 * Register block function called by init hook.
	 *
	 * @return void
	 */
	public function create_matches_init() {
		register_block_type( $this->plugin_path . '/build/matches' );
	}
}
