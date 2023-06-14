import {CSSProperties} from "react";

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