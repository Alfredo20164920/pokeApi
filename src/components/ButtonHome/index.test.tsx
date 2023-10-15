import ButtonHome from ".";
import { render, screen } from "../../utils/test-utils";

describe('ButtonHome', () => {

    it("Render correct data", () =>{
        render(
            <ButtonHome>
                Home
            </ButtonHome>
        )

        expect(screen.getByTestId("info--buttonHome").firstChild?.textContent).toBe('Home');
    });
})