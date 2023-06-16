import React, {useState} from 'react';
import './ProductFeature.scss';
import ThumbnailOne from '../assets/product/image-product-1-thumbnail.jpg';
import ThumbnailTwo from '../assets/product/image-product-2-thumbnail.jpg';
import ThumbnailThree from '../assets/product/image-product-3-thumbnail.jpg';
import ThumbnailFour from '../assets/product/image-product-4-thumbnail.jpg';
import FeatureOne from '../assets/product/image-product-1.jpg';
import FeatureTwo from '../assets/product/image-product-2.jpg';
import FeatureThree from '../assets/product/image-product-3.jpg';
import FeatureFour from '../assets/product/image-product-4.jpg';

function ProductFeature() {

    const [selectedThumbnail, setSelected] = useState<string>(FeatureOne);

    const handleProductFeatureChange = (selected: string) => {
        setSelected(selected);
    }

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
        },
    ];

    return (
        <div className="main-feature-container">
            <div className="product-feature">
                <img
                    src={selectedThumbnail}
                    alt="product-feature"
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

export default ProductFeature;