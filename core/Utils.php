<?php

/**
 * Utils
 *
 * @package AkridesBlocks
 */

namespace AkridesBlocks;

class Utils {
	public static function get_cached_external_json($url) {
		$transient_key = 'nbb_fetched_json_' . md5($url);
		$option_key = 'nbb_fetched_json_backup_' . md5($url);

		$cached_data = get_transient($transient_key);

		if (false !== $cached_data) {
			return $cached_data;
		}

		$response = wp_remote_get($url, array(
			'timeout' => 15,
			'headers' => array(
				'Accept' => 'application/json'
			)
		));

		if (is_wp_error($response)) {
			// Return last known good data from options if available
			$backup_data = get_option($option_key, false);
			if ($backup_data) {
				return $backup_data;
			}
			return false;
		}

		$body = wp_remote_retrieve_body($response);
		$data = json_decode($body, true);

		if (null === $data) {
			// Return last known good data from options if available
			$backup_data = get_option($option_key, false);
			if ($backup_data) {
				return $backup_data;
			}
			return false;
		}

		// Set transient for x amount of time, measured in seconds
		set_transient($transient_key, $data, 2 * HOUR_IN_SECONDS);

		// Store a persistent backup in options (with autoload disabled)
		if (false === get_option($option_key, false)) {
			add_option($option_key, $data, '', false);
		} else {
			update_option($option_key, $data, false);
		}

		return $data;
	}
};
