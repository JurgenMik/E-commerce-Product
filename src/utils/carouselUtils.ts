import {productImages} from "./index";

export const handleCarouselImageChange = (direction: string, currentImage: number, setCurrentImage: any, setSelected: any) => {
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