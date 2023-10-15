import Card from ".";
import { render, screen } from "../../utils/test-utils";

const mockData = {
    name: 'bulbasaur',
    url: 'https://pokeapi.co/api/v2/pokemon/1'
}


describe('Card', () => {

    it("Render correct data", () =>{
        render(
            <Card cardData={mockData} />
        ) 

        expect(screen.getByTestId("home--card").firstChild?.textContent).toBe(mockData.name);
    });
})