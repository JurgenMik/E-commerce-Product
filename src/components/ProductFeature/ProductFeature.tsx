import React, {useState} from 'react';
import './ProductFeature.scss';
import FeatureOne from '../assets/product/image-product-1.jpg';
import {productImages} from "../../utils";
import ProductShowcase from "../ProductShowcase";
import LightboxGallery from "../LightboxGallery/LightboxGallery";
import ImageSelector from "../ImageSelector";

function ProductFeature({screen}: {screen: boolean}) {

    const [isLightboxOpen, setIsLightbox] = useState<boolean>(false);
    const [selectedThumbnail, setSelected] = useState<string>(FeatureOne);
    const [currentImage, setCurrentImage] = useState<number>(0);

    const handleProductFeatureChange = (selected: string) => {
        setSelected(selected);

        const currentFeatureIndex = productImages.findIndex(itemShowcase => itemShowcase.product_feature === selected);
        setCurrentImage(currentFeatureIndex);
    }

    const handleOpenLightboxGallery = () => {
        setIsLightbox(true);
    }

    return (
        <>
            {screen &&
                <ImageSelector
                    currentImage={currentImage}
                    setCurrentImage={setCurrentImage}
                    setSelected={setSelected}
                    device={'mobile'}
                />
            }
            <ProductShowcase
                selectedThumbnail={selectedThumbnail}
                handleProductFeatureChange={handleProductFeatureChange}
                handleOpenLightbox={handleOpenLightboxGallery}
                screen={screen}
            />
            {isLightboxOpen && !screen &&
                <LightboxGallery
                    currentImage={currentImage}
                    setCurrentImage={setCurrentImage}
                    selectedThumbnail={selectedThumbnail}
                    setIsLightbox={setIsLightbox}
                    setSelected={setSelected}
                    screen={false}
                />
            }
        </>
    )
}

export default ProductFeature;