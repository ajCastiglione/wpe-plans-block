<?php
/**
 * Plugin Name:       React App
 * Description:       Example block written with ESNext standard and JSX support - build step required.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            WPE Team
 * Text Domain:       react-app
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function create_block_react_app_block_init() {
	register_block_type( __DIR__ );
}
add_action( 'init', 'create_block_react_app_block_init' );
