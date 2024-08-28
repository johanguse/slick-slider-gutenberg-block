<?php
/**
 * Plugin Name:       Slick Slider for Gutenberg Blocks
 * Plugin URI:        https://johanguse.dev
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Johan Guse
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       slick-slider-gutenberg-block
 *
 * @package SlickSliderGutenbergBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function slick_slider_gutenberg_block_init() {
	register_block_type( __DIR__ . '/build' );
	wp_enqueue_script('jquery');
}
add_action( 'init', 'slick_slider_gutenberg_block_init' );

function slick_slider_gutenberg_block_render_callback( $attributes, $content ) {
	wp_enqueue_style(
		'slick-slider-style',
		plugins_url( 'build/style-index.css', __FILE__ ),
		array(),
		filemtime( plugin_dir_path( __FILE__ ) . 'build/style-index.css' )
	);

	wp_enqueue_script(
		'slick-slider-script',
		plugins_url( 'build/view.js', __FILE__ ),
		array( 'jquery' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'build/view.js' ),
		true
	);

	return $content;
}
