import MainInformation from "."
import { render, screen } from "../../../utils/test-utils"

const mockData = {
    types: [
        {
            slot: 1,
            type: { name: 'dragon', url: 'https://pokeapi.co/api/v2/type/16/' }
        }
    ],
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png', 
    heighPokemon: 22, 
    weightPokemon: 2100, 
    experience: 300
}

describe("MainInformation", () => {
    it("Should render correctly", () => {
        render (
            <MainInformation 
                {...mockData}
            />
        )
        expect(screen.getByTestId("info--main_image")).toBeInTheDocument();
        expect(screen.getAllByTestId("info--tag").length).toBe(mockData.types.length);
        expect(screen.getAllByTestId("info--information").length).toBe(3)
    })
})