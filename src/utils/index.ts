import {CSSProperties} from "react";
import ThumbnailOne from "../components/assets/product/image-product-1-thumbnail.jpg";
import FeatureOne from "../components/assets/product/image-product-1.jpg";
import ThumbnailTwo from "../components/assets/product/image-product-2-thumbnail.jpg";
import FeatureTwo from "../components/assets/product/image-product-2.jpg";
import ThumbnailThree from "../components/assets/product/image-product-3-thumbnail.jpg";
import FeatureThree from "../components/assets/product/image-product-3.jpg";
import ThumbnailFour from "../components/assets/product/image-product-4-thumbnail.jpg";
import FeatureFour from "../components/assets/product/image-product-4.jpg";

export const anchorTitles = [
    "Learn more about our collections",
    "Discover our men's section",
    "Explore our women's section",
    "Find out more about our company",
    "Contact us for any inquiries"
]

export const cartNotificationStyle: CSSProperties = {
    position: "absolute",
    top: window.innerWidth <= 395 ? "1rem" : "0.50rem",
    right: window.innerWidth <= 395 ? "5.25rem" : "5.75rem",
    width: window.innerWidth <= 395 ? "0.30rem" : "0.55rem",
    paddingRight: "0.30rem",
    paddingLeft: "0.30rem",
    fontSize: "0.70rem",
    borderRadius: "1rem",
    textAlign: "center",
    backgroundColor: "hsl(26, 100%, 55%)",
    color: "white"
};

export const cartPosition: CSSProperties = {
    width: window.innerWidth <= 395 ? "22.5rem" : "25rem",
    top: window.innerWidth <= 395 ? "4.5rem" : "4rem",
    left: window.innerWidth <= 395 ? "1.15rem" : "1.5rem",
}

export const productImages = [
    {
        product_thumbnail: ThumbnailOne,
        product_feature: FeatureOne
    },
    {
        product_thumbnail: ThumbnailTwo,
        product_feature: FeatureTwo
    },
    {
        product_thumbnail: ThumbnailThree,
        product_feature: FeatureThree
    },
    {
        product_thumbnail: ThumbnailFour,
        product_feature: FeatureFour
    }
];

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