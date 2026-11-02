import { afterEach, describe, expect, it, vi } from "vitest";
import { act, cleanup, render } from "@testing-library/react";
import App from "./App";

afterEach(() => {
    cleanup();
    vi.useRealTimers();
});

describe("App preview", () => {
    it("shows the icons during the preview and covers them after 10 seconds", async () => {
        vi.useFakeTimers();

        const { container } = render(<App />);

        expect(
            container.querySelectorAll(".tile--preview"),
        ).toHaveLength(30);

        await act(async () => {
            await vi.advanceTimersByTimeAsync(9_999);
        });

        expect(container.querySelectorAll(".tile--preview")).toHaveLength(30);

        await act(async () => {
            await vi.advanceTimersByTimeAsync(1);
        });

        expect(container.querySelectorAll(".tile--preview")).toHaveLength(0);
    });
});
