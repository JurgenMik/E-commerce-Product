import React from 'react';
import './LightboxGallery.scss';
import ProductShowcase from "../ProductShowcase";
import ImageSelector from "../ImageSelector";
import {RiCloseFill} from 'react-icons/ri';

interface Props {
    currentImage: number,
    setCurrentImage: (index: number) => void,
    selectedThumbnail: string,
    setIsLightbox: (isOpen: boolean) => void,
    setSelected: (selected: string) => void,
    screen: boolean
}

function LightboxGallery({currentImage, setCurrentImage, selectedThumbnail, setIsLightbox, setSelected, screen}: Props) {

    const handleCloseLightboxGallery = () => {
        setIsLightbox(false);
    }

    return (
        <div className="main-lightbox-container">
            <RiCloseFill
                id="close"
                onClick={handleCloseLightboxGallery}
            />
            <ImageSelector
                currentImage={currentImage}
                setCurrentImage={setCurrentImage}
                setSelected={setSelected}
                device={''}
            />
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