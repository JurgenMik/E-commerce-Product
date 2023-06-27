import React, {useState} from 'react';
import './LightboxGallery.scss';
import ProductShowcase from "../ProductShowcase";
import {RiCloseFill} from 'react-icons/ri';
import {FaChevronRight, FaChevronLeft} from 'react-icons/fa';
import {productImages} from "../../utils";

interface Props {
    selectedThumbnail: string,
    setIsLightbox: (isOpen: boolean) => void,
    setSelected: (selected: string) => void
}

function LightboxGallery({selectedThumbnail, setIsLightbox, setSelected}: Props) {

    const [currentImage, setCurrentImage] = useState<number>(0);

    const handleCloseLightboxGallery = () => {
        setIsLightbox(false);
    }

    const handleCarouselImageChange = (direction: string) => {
        switch (direction) {
            case 'left': {
                if (currentImage) {
                    const newImageIndex = currentImage - 1;
                    setCurrentImage(newImageIndex);

                    setSelected(productImages[newImageIndex].product_feature);
                }
                return;
            }
            case 'right': {
                if (currentImage < productImages.length -1) {
                    const newImageIndex = currentImage + 1;
                    setCurrentImage(newImageIndex);

                    setSelected(productImages[newImageIndex].product_feature);
                }
                return;
            }
        }
    }

    return (
        <div className="main-lightbox-container">
            <RiCloseFill
                id="close"
                onClick={handleCloseLightboxGallery}
            />
            <div className="selector-container">
                <span>
                    <FaChevronLeft
                        id="selector"
                        onClick={() =>
                            handleCarouselImageChange('left')
                        }
                    />
                </span>
                <span>
                    <FaChevronRight
                        id="selector"
                        onClick={() =>
                            handleCarouselImageChange('right')
                        }
                    />
                </span>
            </div>
            <ProductShowcase
                selectedThumbnail={selectedThumbnail}
                handleProductFeatureChange={() => {}}
                handleOpenLightbox={() => {}}
            />
        </div>
    )
}

export default LightboxGallery;