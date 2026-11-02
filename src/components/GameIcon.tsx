import type { CSSProperties } from "react";
import type { GameIcon as GameIconData } from "../game/icons";

import "./GameIcon.css";

type GameIconProps = {
    icon: GameIconData;
    color: string;
    size?: number;
};

type IconStyle = CSSProperties & {
    "--icon-mask": string;
    "--icon-color": string;
};

function GameIcon({
    icon,
    color,
    size = 40,
}: GameIconProps) {
    const style: IconStyle = {
        "--icon-mask": `url("${icon.src}")`,
        "--icon-color": color,
        width: size,
        height: size,
    };

    return (
        <span
            className="game-icon"
            style={style}
            role="img"
            aria-label={icon.label}
        />
    );
}

export default GameIcon;
