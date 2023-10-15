import StatsInformation from "."
import { render, screen } from "../../../utils/test-utils"


const mockData = {
    abilities: [
        {ability: {name: 'inner-focus', url: 'https://pokeapi.co/api/v2/ability/39/'}, is_hidden: false, slot: 1},
        {ability: {name: 'multiscale', url: 'https://pokeapi.co/api/v2/ability/136/'}, is_hidden: true, slot: 3}
    ],
    stats: [
        {base_stat: 45, effort: 1, stat: {name: 'hp', url: 'https://pokeapi.co/api/v2/stat/1/'}},
        {base_stat: 30, effort: 0, stat: {name: 'attack', url: 'https://pokeapi.co/api/v2/stat/2/'}},
        {base_stat: 35, effort: 0, stat: {name: 'defense', url: 'https://pokeapi.co/api/v2/stat/3/'}},
        {base_stat: 20, effort: 0, stat: {name: 'special-attack', url: 'https://pokeapi.co/api/v2/stat/4/'}},
        {base_stat: 20, effort: 0, stat: {name: 'special-defense', url: 'https://pokeapi.co/api/v2/stat/5/'}},
        {base_stat: 45, effort: 0, stat: {name: 'speed', url: 'https://pokeapi.co/api/v2/stat/6/'}},
    ]
}
describe("Stats", () => {
    it("Render component correctly", () => {
        render (
            <StatsInformation {...mockData} />
        )
        
        expect(screen.getAllByTestId("info--tag").length).toBe(mockData.abilities.length);
        expect(screen.getByTestId("info--stats")).toBeInTheDocument();
    })
})