/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

/* eslint-disable no-console */
import $ from 'jquery';
import 'slick-carousel';

$(document).ready(function() {
    $('.slick-slider-container').each(function() {
        const $slider = $(this);
        const dataOptions = $slider.data('slick-options');

        const options = {
            dots: dataOptions.showDots !== false,
            infinite: dataOptions.infinite !== false,
            speed: dataOptions.speed || 500,
            slidesToShow: dataOptions.slidesToShow || 1,
						speed: dataOptions.speed || 500,
            slidesToScroll: dataOptions.slidesToScroll || 1,
            adaptiveHeight: dataOptions.adaptiveHeight !== false,
            arrows: dataOptions.showArrows !== false,
            autoplay: dataOptions.autoplay === true,
            autoplaySpeed: dataOptions.autoplaySpeed || 3000,
            centerMode: dataOptions.centerMode === true,
            centerPadding: dataOptions.centerPadding || '50px',
            variableWidth: dataOptions.variableWidth === true,
            fade: dataOptions.fade === true,
            cssEase: dataOptions.cssEase || 'linear'
        };

        console.log('Slick options:', options);
        console.log('Slider element:', $slider);

        try {
            $slider.slick(options);
            console.log('Slick initialized successfully');
        } catch (error) {
            console.error('Error initializing Slick:', error);
        }
    });
});
/* eslint-enable no-console */
