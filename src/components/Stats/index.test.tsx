import Stats from ".";
import { render, screen } from "../../utils/test-utils";

const mockData = [
    {base_stat: 45, effort: 1, stat: {name: 'hp', url: 'https://pokeapi.co/api/v2/stat/1/'}},
    {base_stat: 30, effort: 0, stat: {name: 'attack', url: 'https://pokeapi.co/api/v2/stat/2/'}},
    {base_stat: 35, effort: 0, stat: {name: 'defense', url: 'https://pokeapi.co/api/v2/stat/3/'}},
    {base_stat: 20, effort: 0, stat: {name: 'special-attack', url: 'https://pokeapi.co/api/v2/stat/4/'}},
    {base_stat: 20, effort: 0, stat: {name: 'special-defense', url: 'https://pokeapi.co/api/v2/stat/5/'}},
    {base_stat: 45, effort: 0, stat: {name: 'speed', url: 'https://pokeapi.co/api/v2/stat/6/'}},
]


describe('Stats', () => {
    it("Render component correctly", () => {
        const title = "Abilitites"
        render (
            <Stats 
                title={title}
                data={mockData}
            />
        );


        expect(screen.getAllByTestId("info--progressbar-item").length).toBe(mockData.length);
        expect(screen.getByTestId("info--stats").firstChild?.textContent).toBe(title);
    });
})