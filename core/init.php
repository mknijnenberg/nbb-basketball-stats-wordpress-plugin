<?php
/**
 * Main Init Class.
 *
 * @package NbbBasketballStats
 */

namespace NbbBasketballStats;

/**
 * Final Super Init Class. Uses as final class to stop any option to overwrite.
 */
final class Init {
	public static function get_services() {
		return [
			Blocks\Matches::class,
			Blocks\Ranking::class,
		];
	}

	/**
	 * Loop through the classes, initialize them,
	 * and call the register() method if it exists.
	 *
	 * @return void
	 */
	public static function register_services() {
		foreach ( self::get_services() as $class ) {
			$service = self::instantiate( $class );

			if ( method_exists( $service, 'register' ) ) {
				$service->register();
			}
		}
	}

	/**
	 * Initialize the class.
	 *
	 * @param class $class 		class from the services array.
	 * @return class instance new instance of the class.
	 */
	private static function instantiate( $class ) {
		return new $class();
	}
}
