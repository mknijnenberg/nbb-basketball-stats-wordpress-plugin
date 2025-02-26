<?php
/**
 * Base controller. Used for extending and path management.
 *
 * @package AkridesBlocks
 */

namespace AkridesBlocks\Base;

class BaseController {

	/**
	 * The plugin path
	 *
	 * @var [type]
	 */
	public $plugin_path;

	/**
	 * The plugin url
	 *
	 * @var [type]
	 */
	public $plugin_url;

	/**
	 * The plugin reference for the name of the plugin.
	 *
	 * @var [type]
	 */
	public $plugin;

	/**
	 * Construct for the Base Controller.
	 */
	public function __construct() {
		$this->plugin_path = plugin_dir_path( dirname( __DIR__, 1 ) );
		$this->plugin_url  = plugin_dir_url( dirname( __DIR__, 1 ) );
		$this->plugin      = plugin_basename( dirname( __DIR__, 2 ) ) . '/akrides-blocks.php';
	}
}
