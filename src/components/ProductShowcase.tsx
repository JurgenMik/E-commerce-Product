import React from 'react';
import {productImages} from "../utils";

interface Props {
    selectedThumbnail: string,
    handleProductFeatureChange(selected: string): void,
    handleOpenLightbox(): void,
    screen: boolean
}

function ProductShowcase({selectedThumbnail, handleProductFeatureChange, handleOpenLightbox, screen}: Props) {
    return (
        <div className="main-feature-container">
            <div className="product-feature">
                <img
                    src={selectedThumbnail}
                    alt="product-feature"
                    onClick={handleOpenLightbox}
                />
            </div>
            {!screen &&
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
                                    <span id="overlay"/>
                                }
                            </div>
                        )
                    })}
                </div>
            }
        </div>
    )
}

export default ProductShowcase;