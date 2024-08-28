import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const blockProps = useBlockProps.save();
    const slickOptions = {
        infinite: attributes.infinite,
        showArrows: attributes.showArrows,
        showDots: attributes.showDots,
        slidesToShow: attributes.slidesToShow,
        centerMode: attributes.centerMode,
        centerPadding: attributes.centerPadding,
        variableWidth: attributes.variableWidth,
        adaptiveHeight: attributes.adaptiveHeight,
        fade: attributes.fade,
        cssEase: attributes.cssEase,
        autoplay: attributes.autoplay,
        autoplaySpeed: attributes.autoplaySpeed,
        speed: attributes.speed,
        slidesToScroll: attributes.slidesToScroll
    };

    return (
        <div {...blockProps}>
            <div
                className="slick-slider-container"
                data-slick-options={JSON.stringify(slickOptions)}
            >
                <InnerBlocks.Content />
            </div>
        </div>
    );
}
