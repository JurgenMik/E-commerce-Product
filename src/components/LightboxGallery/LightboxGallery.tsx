import React, {useState} from 'react';
import './LightboxGallery.scss';
import ProductShowcase from "../ProductShowcase";
import ImageSelector from "../ImageSelector";
import {RiCloseFill} from 'react-icons/ri';

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