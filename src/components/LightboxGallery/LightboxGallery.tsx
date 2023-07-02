import React, {useState} from 'react';
import './LightboxGallery.scss';
import ProductShowcase from "../ProductShowcase";
import {RiCloseFill} from 'react-icons/ri';
import {FaChevronRight, FaChevronLeft} from 'react-icons/fa';
import {handleCarouselImageChange} from "../../utils/carouselUtils";

interface Props {
    selectedThumbnail: string,
    setIsLightbox: (isOpen: boolean) => void,
    setSelected: (selected: string) => void,
    screen: boolean
}

function LightboxGallery({selectedThumbnail, setIsLightbox, setSelected, screen}: Props) {

    const [currentImage, setCurrentImage] = useState<number>(0);

    const handleCloseLightboxGallery = () => {
        setIsLightbox(false);
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
            <ProductShowcase
                selectedThumbnail={selectedThumbnail}
                handleProductFeatureChange={() => {}}
                handleOpenLightbox={() => {}}
                screen={screen}
            />
        </div>
    )
}

export default LightboxGallery;