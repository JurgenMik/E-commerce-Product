import React from 'react';
import './LightboxGallery.scss';
import ProductShowcase from "../ProductShowcase";
import {RiCloseFill} from 'react-icons/ri';

interface Props {
    selectedThumbnail: string,
    setIsLightbox: (isOpen: boolean) => void
}

function LightboxGallery({selectedThumbnail, setIsLightbox}: Props) {

    const handleCloseLightboxGallery = () => {
        setIsLightbox(false);
    }

    return (
        <div className="main-lightbox-container">
            <RiCloseFill
                id="close"
                onClick={handleCloseLightboxGallery}
            />
            <ProductShowcase
                selectedThumbnail={selectedThumbnail}
                handleProductFeatureChange={() => {}}
                handleOpenLightbox={() => {}}
            />
        </div>
    )
}

export default LightboxGallery;