import { describe, expect, it } from "vitest";
import { GAME_COLORS } from "./colors";
import { GAME_ICONS } from "./icons";
import { createBoard } from "./createBoard";

describe("createBoard", () => {
    it("creates one tile for every icon-colour combination", () => {
        const board = createBoard();

        expect(board).toHaveLength(
            GAME_ICONS.length * GAME_COLORS.length,
        );
    });

    it("assigns every tile a unique ID", () => {
        const board = createBoard();
        const ids = board.map((tile) => tile.id);

        expect(new Set(ids).size).toBe(board.length);
    });

    it("includes every icon-colour combination exactly once", () => {
        const board = createBoard();

        const combinations = board.map(
            (tile) => `${tile.iconId}:${tile.colorId}`,
        );

        expect(new Set(combinations).size).toBe(board.length);

        for (const icon of GAME_ICONS) {
            for (const color of GAME_COLORS) {
                expect(combinations).toContain(
                    `${icon.id}:${color.id}`,
                );
            }
        }
    });

    it("only references configured icons and colours", () => {
        const board = createBoard();

        const iconIds = new Set(GAME_ICONS.map((icon) => icon.id));
        const colorIds = new Set(GAME_COLORS.map((color) => color.id));

        for (const tile of board) {
            expect(iconIds.has(tile.iconId)).toBe(true);
            expect(colorIds.has(tile.colorId)).toBe(true);
        }
    });

    it("produces repeatable results when given the same random function", () => {
        const random = () => 0;

        expect(createBoard(random)).toEqual(createBoard(random));
    });
});
