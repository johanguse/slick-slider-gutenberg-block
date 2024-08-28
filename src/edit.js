import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from "@wordpress/block-editor";
import {
	PanelBody,
	ToggleControl,
	RangeControl,
	SelectControl,
	TextControl,
} from "@wordpress/components";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const {
		infinite,
		showArrows,
		showDots,
		slidesToShow,
		speed,
		slidesToScroll,
		centerMode,
		centerPadding,
		variableWidth,
		adaptiveHeight,
		fade,
		cssEase,
		autoplay,
		autoplaySpeed,
	} = attributes;

	const blockProps = useBlockProps();

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={__("Slider Settings", "slick-slider-gutenberg-block")}
				>
					<ToggleControl
						label={__("Infinite Scrolling", "slick-slider-gutenberg-block")}
						checked={infinite}
						onChange={(value) => setAttributes({ infinite: value })}
					/>
					<ToggleControl
						label={__("Show Arrows", "slick-slider-gutenberg-block")}
						checked={showArrows}
						onChange={(value) => setAttributes({ showArrows: value })}
					/>
					<ToggleControl
						label={__("Show Dots", "slick-slider-gutenberg-block")}
						checked={showDots}
						onChange={(value) => setAttributes({ showDots: value })}
					/>
					<RangeControl
						label={__("Slides to Show", "slick-slider-gutenberg-block")}
						value={slidesToShow}
						onChange={(value) => setAttributes({ slidesToShow: value })}
						min={1}
						max={10}
					/>
					<RangeControl
						label={__("Animation Speed (ms)", "slick-slider-gutenberg-block")}
						value={speed}
						onChange={(value) => setAttributes({ speed: value })}
						min={100}
						max={3000}
						step={100}
					/>
					<RangeControl
						label={__("Slides to Scroll", "slick-slider-gutenberg-block")}
						value={slidesToScroll}
						onChange={(value) => setAttributes({ slidesToScroll: value })}
						min={1}
						max={10}
					/>
					<ToggleControl
						label={__("Center Mode", "slick-slider-gutenberg-block")}
						checked={centerMode}
						onChange={(value) => setAttributes({ centerMode: value })}
					/>
					<TextControl
						label={__("Center Padding", "slick-slider-gutenberg-block")}
						value={centerPadding}
						onChange={(value) => setAttributes({ centerPadding: value })}
					/>
					<ToggleControl
						label={__("Variable Width", "slick-slider-gutenberg-block")}
						checked={variableWidth}
						onChange={(value) => setAttributes({ variableWidth: value })}
					/>
					<ToggleControl
						label={__("Adaptive Height", "slick-slider-gutenberg-block")}
						checked={adaptiveHeight}
						onChange={(value) => setAttributes({ adaptiveHeight: value })}
					/>
					<ToggleControl
						label={__("Fade", "slick-slider-gutenberg-block")}
						checked={fade}
						onChange={(value) => setAttributes({ fade: value })}
					/>
					<SelectControl
						label={__("CSS Ease", "slick-slider-gutenberg-block")}
						value={cssEase}
						options={[
							{ label: "Linear", value: "linear" },
							{ label: "Ease", value: "ease" },
							{ label: "Ease In", value: "ease-in" },
							{ label: "Ease Out", value: "ease-out" },
							{ label: "Ease In Out", value: "ease-in-out" },
						]}
						onChange={(value) => setAttributes({ cssEase: value })}
					/>
					<ToggleControl
						label={__("Autoplay", "slick-slider-gutenberg-block")}
						checked={autoplay}
						onChange={(value) => setAttributes({ autoplay: value })}
					/>
					<RangeControl
						label={__("Autoplay Speed (ms)", "slick-slider-gutenberg-block")}
						value={autoplaySpeed}
						onChange={(value) => setAttributes({ autoplaySpeed: value })}
						min={1000}
						max={10000}
						step={500}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				<div className="slick-slider-container">
					<InnerBlocks
						allowedBlocks={["core/image"]}
						template={[["core/image"]]}
						templateLock={false}
					/>
				</div>
			</div>
		</>
	);
}
