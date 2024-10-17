import ProgressBar from "@/components/Bar/ProgressBar/ProgressBar";
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import {createRef} from "react";

describe("Компонент ProgressBar", () => {
    it("Успешный рендер ProgressBar", () => {
        const ref = createRef<HTMLAudioElement>()
        render(
                <ProgressBar
                    max={100}
                    value={50}
                    audioRef={ref}
                />
            )
        const input = screen.getByDisplayValue(50)
        expect(input).toBeInTheDocument()
    });
});