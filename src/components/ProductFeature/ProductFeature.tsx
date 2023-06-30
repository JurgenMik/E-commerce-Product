import React, {useState} from 'react';
import './ProductFeature.scss';
import FeatureOne from '../assets/product/image-product-1.jpg';
import ProductShowcase from "../ProductShowcase";
import LightboxGallery from "../LightboxGallery/LightboxGallery";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import {handleCarouselImageChange} from "../../utils";

function ProductFeature({screen}: {screen: boolean}) {

    const [isLightboxOpen, setIsLightbox] = useState<boolean>(false);
    const [selectedThumbnail, setSelected] = useState<string>(FeatureOne);
    const [currentImage, setCurrentImage] = useState<number>(0);

    const handleProductFeatureChange = (selected: string) => {
        setSelected(selected);
    }

    const handleOpenLightboxGallery = () => {
        setIsLightbox(true);
    }

    return (
        <>
            {screen &&
                <div className="mobile-selector-container">
                    <span>
                        <FaChevronLeft
                            id="selector"
                            onClick={() =>
                                handleCarouselImageChange('left', currentImage, setCurrentImage, setSelected)
                            }
                        />
                    </span>
                        <span>
                        <FaChevronRight
                            id="selector"
                            onClick={() =>
                                handleCarouselImageChange('right', currentImage, setCurrentImage, setSelected)
                            }
                        />
                    </span>
                </div>
            }
            <ProductShowcase
                selectedThumbnail={selectedThumbnail}
                handleProductFeatureChange={handleProductFeatureChange}
                handleOpenLightbox={handleOpenLightboxGallery}
                screen={screen}
            />
            {isLightboxOpen && !screen &&
                <LightboxGallery
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