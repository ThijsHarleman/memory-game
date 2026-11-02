import { GAME_COLORS } from "./colors";
import { GAME_ICONS } from "./icons";
import type { Tile } from "./types";

export function createBoard(
    random: () => number = Math.random,
): Tile[] {
    const combinations = GAME_ICONS.flatMap((icon) =>
        GAME_COLORS.map((color) => ({
            iconId: icon.id,
            colorId: color.id,
        })),
    );

    for (let i = combinations.length - 1; i > 0; i--) {
        const j = Math.floor(random() * (i + 1));
        [combinations[i], combinations[j]] = [
            combinations[j],
            combinations[i],
        ];
    }

    return combinations.map((combination, index) => ({
        id: index,
        ...combination,
    }));
}
