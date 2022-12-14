<?php
/**
 * Plugin Name:       Local 1857 Events Block
 * Description:       Imports upcoming events from Google Calendar and renders them on KCLS Voice
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Two Dogs Web Development
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       events-block
 *
 * @package           local-1857
 */

function local_1857_events_block_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'local_1857_events_block_block_init' );
