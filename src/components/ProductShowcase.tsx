import React from 'react';
import ThumbnailOne from "./assets/product/image-product-1-thumbnail.jpg";
import FeatureOne from "./assets/product/image-product-1.jpg";
import ThumbnailTwo from "./assets/product/image-product-2-thumbnail.jpg";
import FeatureTwo from "./assets/product/image-product-2.jpg";
import ThumbnailThree from "./assets/product/image-product-3-thumbnail.jpg";
import FeatureThree from "./assets/product/image-product-3.jpg";
import ThumbnailFour from "./assets/product/image-product-4-thumbnail.jpg";
import FeatureFour from "./assets/product/image-product-4.jpg";

interface Props {
    selectedThumbnail: string,
    handleProductFeatureChange(selected: string): void,
    handleOpenLightbox(): void
}

function ProductShowcase({selectedThumbnail, handleProductFeatureChange, handleOpenLightbox}: Props) {

    const productImages = [
        {
            product_thumbnail: ThumbnailOne,
            product_feature: FeatureOne
        },
        {
            product_thumbnail: ThumbnailTwo,
            product_feature: FeatureTwo
        },
        {
            product_thumbnail: ThumbnailThree,
            product_feature: FeatureThree
        },
        {
            product_thumbnail: ThumbnailFour,
            product_feature: FeatureFour
        }
    ];

    return (
        <div className="main-feature-container">
            <div className="product-feature">
                <img
                    src={selectedThumbnail}
                    alt="product-feature"
                    onClick={handleOpenLightbox}
                />
            </div>
            <div className="product-images">
                {productImages.map((image: {product_thumbnail: string, product_feature: string}, index: number) => {
                    return (
                        <div className="thumbnail-container" key={index}>
                            <img
                                src={image.product_thumbnail}
                                alt="product-thumbnail"
                                onClick={() =>
                                    handleProductFeatureChange(image.product_feature)
                                }
                            />
                            {image.product_feature === selectedThumbnail &&
                                <span id="overlay" />
                            }
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductShowcase;