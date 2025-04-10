<?php
/**
 * Deactivation class.
 *
 * @package NbbBasketballStats
 */

namespace NbbBasketballStats\Base;

/**
 * Deactivation Class.
 */
class Deactivate {
	/**
	 * Call the default deactivation function to flush the rewrite rules.
	 *
	 * @return void
	 */
	public static function deactivate() {
		flush_rewrite_rules();
	}
}
