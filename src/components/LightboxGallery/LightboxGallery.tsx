import React from 'react';
import './LightboxGallery.scss';
import ProductShowcase from "../ProductShowcase";

function LightboxGallery({selectedThumbnail}: {selectedThumbnail: string}) {
    return (
        <div className="main-lightbox-container">
           <ProductShowcase
               selectedThumbnail={selectedThumbnail}
               handleProductFeatureChange={() => {}}
               handleOpenLightbox={() => {}}
           />
        </div>
    )
}

export default LightboxGallery;