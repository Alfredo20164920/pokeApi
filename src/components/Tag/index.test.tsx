import Tag from ".";
import { render, screen } from "../../utils/test-utils";

describe('Tag', () => {

    const mockData = {
        text: 'Fire'
    }

    it("Render correct data", () =>{
        render(
            <Tag text={mockData.text} />
        ) 

        expect(screen.getByTestId("info--tag").firstChild?.textContent).toContain(mockData.text);
    });
})