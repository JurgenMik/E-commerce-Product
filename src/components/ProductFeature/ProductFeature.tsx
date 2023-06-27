import React, {useState} from 'react';
import './ProductFeature.scss';
import FeatureOne from '../assets/product/image-product-1.jpg';
import ProductShowcase from "../ProductShowcase";
import LightboxGallery from "../LightboxGallery/LightboxGallery";

function ProductFeature() {

    const [isLightboxOpen, setIsLightbox] = useState<boolean>(false);
    const [selectedThumbnail, setSelected] = useState<string>(FeatureOne);

    const handleProductFeatureChange = (selected: string) => {
        setSelected(selected);
    }

    const handleOpenLightboxGallery = () => {
        setIsLightbox(true);
    }

    return (
        <>
            <ProductShowcase
                selectedThumbnail={selectedThumbnail}
                handleProductFeatureChange={handleProductFeatureChange}
                handleOpenLightbox={handleOpenLightboxGallery}
            />
            {isLightboxOpen &&
                <LightboxGallery
                    selectedThumbnail={selectedThumbnail}
                />
            }
        </>
    )
}

export default ProductFeature;