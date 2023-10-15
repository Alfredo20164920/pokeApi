import Pagination from ".";
import { Grid } from "..";
import { render, screen } from "../../utils/test-utils";

const mockData = [
    { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
    { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
    { name: 'venusaur', url: 'https://pokeapi.co/api/v2/pokemon/3/' },
    { name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/' },
    { name: 'charmeleon', url: 'https://pokeapi.co/api/v2/pokemon/5/' },
]

describe('Pagination test', () => {
    it("Render pagination at the first time", () => {
        render(
            <Pagination limit={20} offset={0} setOffset={() => {}} children={<Grid data={mockData} offset={0} pokemonsLimit={153} />} />
                
        )
        
        expect(screen.getByTestId("home--button_prev")).toBeInTheDocument();
        expect(screen.getByTestId("home--button_next")).toBeInTheDocument();
        expect(screen.getByTestId("home--grid")).toBeInTheDocument();

        expect(screen.getByTestId("home--button_prev")).toHaveAttribute('disabled');
        expect(screen.getByTestId("home--button_next")).not.toHaveAttribute('disabled');
    });


    it("Shoud next button is disabled when is in the last page", () => {
        render(
            <Pagination limit={20} offset={140} setOffset={() => {}} children={<Grid data={mockData} offset={0} pokemonsLimit={153} />} />
                
        )

        expect(screen.getByTestId("home--button_next")).toHaveAttribute('disabled');
        expect(screen.getByTestId("home--button_prev")).not.toHaveAttribute('disabled');
    })
})