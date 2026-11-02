export function getBoardDimensions(
    iconCount: number,
    colorCount: number,
) {
    return {
        columns: Math.min(iconCount, colorCount),
        rows: Math.max(iconCount, colorCount),
    };
}
