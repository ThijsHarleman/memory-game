import { useEffect, useState } from "react";
import { GAME_COLORS } from "./game/colors";
import { GAME_ICONS } from "./game/icons";
import { createBoard } from "./game/createBoard";
import { getBoardDimensions } from "./game/getBoardDimensions";
import GameIcon from "./components/GameIcon";
import type { Tile } from "./game/types";

import "./index.css";

const PREVIEW_DURATION_MS = 10_000;

function App() {
    const [board] = useState<Tile[]>(() => createBoard());
    const [isPreviewing, setIsPreviewing] = useState(true);

    const { columns } = getBoardDimensions(
        GAME_ICONS.length,
        GAME_COLORS.length,
    );

    const iconById = new Map(
        GAME_ICONS.map((icon) => [icon.id, icon]),
    );

    const colorById = new Map(
        GAME_COLORS.map((color) => [color.id, color]),
    );

    useEffect(() => {
        const timeoutId = window.setTimeout(() => {
            setIsPreviewing(false);
        }, PREVIEW_DURATION_MS);

        return () => window.clearTimeout(timeoutId);
    }, []);

    return (
        <main className="app">
            <header className="game-header">
                <h1>MEMORY GAME</h1>
                <p className="subtitle">
                    Remember the details. Find the match.
                </p>
            </header>

            <section className="game-info" aria-label="Game information">
                <div className="score-panel">
                    <span className="info-label">SCORE</span>
                    <span className="score">0</span>
                </div>

                <div className="target-panel">
                    <span className="info-label">FIND THIS TILE</span>
                    <div className="target-placeholder" aria-live="polite">
                        <span>?</span>
                    </div>
                    <p>Your target will appear here</p>
                </div>
            </section>

            <section className="board-section" aria-label="Memory board">
                <div className="board-heading">
                    <h2>Memory board</h2>
                    <span className="tile-count">{board.length} tiles</span>
                </div>

                <div
                    className="board"
                    style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
                >
                    {board.map((tile) => {
                        const icon = iconById.get(tile.iconId);
                        const color = colorById.get(tile.colorId);

                        if (!icon || !color) {
                            throw new Error("Tile references an unknown icon or colour.");
                        }

                        return (
                            <div
                                className={isPreviewing ? "tile tile--preview" : "tile"}
                                key={tile.id}
                                aria-label={
                                    isPreviewing
                                        ? `Tile ${tile.id + 1}: ${icon.label}, ${color.label}`
                                        : `Covered tile ${tile.id + 1}`
                                }
                            >
                                <span className="tile-cover">?</span>
                                <span className="tile-icon">
                                    <GameIcon icon={icon} color={color.value} />
                                </span>
                            </div>
                        );
                    })}
                </div>
            </section>

            <footer className="game-footer">
                Memorize the board before time runs out.
            </footer>
        </main>
    );
}

export default App;
