import Progressbar from ".";
import { render, screen } from "../../utils/test-utils";

describe('Progressbar test', () => {
    it("Render component correctly", () => {
        render(
            <Progressbar title="Hp" value={50} maxValue={300} />
        )

        expect(screen.getByTestId("info--progressbar-item_title")).toBeInTheDocument();
        expect(screen.getByTestId("info--progressbar-item_progressbar")).toBeInTheDocument()
    });
})