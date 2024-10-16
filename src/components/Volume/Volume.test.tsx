import Volume from "@/components/Volume/Volume";
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import {createRef} from "react";

describe("Компонент Volume", () => {
    it("Успешный рендер Volume", () => {
        const ref = createRef<HTMLAudioElement>()
        render(
            <Volume
                audioRef={ref}
            />
        )
        const input = screen.getByDisplayValue(0.5)
        expect(input).toBeInTheDocument()
    });
});