import React from 'react';
import './ProductFeature.scss';
import ThumbnailOne from '../assets/product/image-product-1-thumbnail.jpg';
import ThumbnailTwo from '../assets/product/image-product-2-thumbnail.jpg';
import ThumbnailThree from '../assets/product/image-product-3-thumbnail.jpg';
import ThumbnailFour from '../assets/product/image-product-4-thumbnail.jpg';
import FeatureOne from '../assets/product/image-product-1.jpg';

function ProductFeature() {

    const productImages = [
        ThumbnailOne,
        ThumbnailTwo,
        ThumbnailThree,
        ThumbnailFour
    ]

    return (
        <div className="main-feature-container">
            <div className="product-feature">
                <img
                    src={FeatureOne}
                    alt="product-feature"
                />
            </div>
            <div className="product-images">
                {productImages.map((image: string, index: number) => {
                    return <img src={image} key={index} alt="product-thumbnail" />
                })}
            </div>
        </div>
    )
}

export default ProductFeature;