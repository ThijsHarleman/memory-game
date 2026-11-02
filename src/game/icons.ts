import star from "../assets/icons/star.svg";
import heart from "../assets/icons/heart.svg";
import bolt from "../assets/icons/bolt.svg";
import leaf from "../assets/icons/leaf.svg";
import moon from "../assets/icons/moon.svg";
import sun from "../assets/icons/sun.svg";

export type GameIcon = {
    id: string;
    label: string;
    src: string;
};

export const GAME_ICONS: GameIcon[] = [
    { id: "star", label: "Star", src: star },
    { id: "heart", label: "Heart", src: heart },
    { id: "bolt", label: "Bolt", src: bolt },
    { id: "leaf", label: "Leaf", src: leaf },
    { id: "moon", label: "Moon", src: moon },
    { id: "sun", label: "Sun", src: sun },
];
