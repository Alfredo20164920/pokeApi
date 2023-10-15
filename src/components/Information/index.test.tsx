import Information from ".";
import { render, screen } from "../../utils/test-utils";

describe('Information', () => {

    const mockData = {
        title: 'Experience',
        data: 150
    } 

    it("Render correct data", () =>{
        render(
            <Information title={mockData.title} data={mockData.data} />
        ) 

        expect(screen.getByTestId("info--information").firstChild?.textContent).toContain(mockData.title);
        expect(screen.getByTestId("info--information").lastChild?.textContent).toContain(mockData.data); 
    });
})