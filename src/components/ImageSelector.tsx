import React from 'react';
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import {handleCarouselImageChange} from "../utils/carouselUtils";

interface Props {
    currentImage: number,
    setCurrentImage: (index: number) => void,
    setSelected: (selected: any) => void,
    device: string
}

function ImageSelector({currentImage, setCurrentImage, setSelected, device}: Props) {
    return (
        <div className={device === 'mobile' ? 'mobile-selector-container' : 'selector-container'}>
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
    )
}

export default ImageSelector;