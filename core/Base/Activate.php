<?php
/**
 * Activation Class.
 *
 * @package NbbBasketballStats
 */

namespace NbbBasketballStats\Base;

/**
 * Activation Class.
 */
class Activate {
	/**
	 * Call the default activation function to flush the rewrite rules.
	 *
	 * @return void
	 */
	public static function activate() {
		flush_rewrite_rules();
	}
}
