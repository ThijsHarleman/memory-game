function App() {
    return (
        <main className="app">
            <header className="game-header">
                <p className="eyebrow">MEMORY GAME</p>
                <h1>Mind Match</h1>
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
                    <span className="tile-count">30 tiles</span>
                </div>

                <div className="board">
                    {Array.from({ length: 30 }, (_, index) => (
                        <div
                            className="tile"
                            key={index}
                            aria-label={`Covered tile ${index + 1}`}
                        >
                            ?
                        </div>
                    ))}
                </div>
            </section>

            <footer className="game-footer">
                Memorize the board before time runs out.
            </footer>
        </main>
    );
}

export default App;
