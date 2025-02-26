<?php
/**
 * Activation Class.
 *
 * @package AkridesBlocks
 */

namespace AkridesBlocks\Base;

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
