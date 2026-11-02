
import { describe, expect, it } from "vitest";
import { getBoardDimensions } from "./getBoardDimensions";

describe("getBoardDimensions", () => {
    it("uses the smaller count for columns", () => {
        expect(getBoardDimensions(6, 5)).toEqual({
            columns: 5,
            rows: 6,
        });
    });

    it("keeps rows greater than columns when icons are fewer", () => {
        expect(getBoardDimensions(3, 5)).toEqual({
            columns: 3,
            rows: 5,
        });
    });

    it("supports equal icon and colour counts", () => {
        expect(getBoardDimensions(4, 4)).toEqual({
            columns: 4,
            rows: 4,
        });
    });
});
