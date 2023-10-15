import Grid from '.';
import { render, screen } from "../../utils/test-utils";

const mockData = [
    { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
    { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
    { name: 'venusaur', url: 'https://pokeapi.co/api/v2/pokemon/3/' },
    { name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/' },
    { name: 'charmeleon', url: 'https://pokeapi.co/api/v2/pokemon/5/' },
    { name: 'charizard', url: 'https://pokeapi.co/api/v2/pokemon/6/' },
    { name: 'squirtle', url: 'https://pokeapi.co/api/v2/pokemon/7/' },
    { name: 'wartortle', url: 'https://pokeapi.co/api/v2/pokemon/8/' },
    { name: 'blastoise', url: 'https://pokeapi.co/api/v2/pokemon/9/' },
    { name: 'caterpie', url: 'https://pokeapi.co/api/v2/pokemon/10/' },
    { name: 'metapod', url: 'https://pokeapi.co/api/v2/pokemon/11/' },
    { name: 'butterfree', url: 'https://pokeapi.co/api/v2/pokemon/12/' },
    { name: 'weedle', url: 'https://pokeapi.co/api/v2/pokemon/13/' },
    { name: 'kakuna', url: 'https://pokeapi.co/api/v2/pokemon/14/' },
    { name: 'beedrill', url: 'https://pokeapi.co/api/v2/pokemon/15/' },
    { name: 'pidgey', url: 'https://pokeapi.co/api/v2/pokemon/16/' },
    { name: 'pidgeotto', url: 'https://pokeapi.co/api/v2/pokemon/17/' },
    { name: 'pidgeot', url: 'https://pokeapi.co/api/v2/pokemon/18/' },
    { name: 'rattata', url: 'https://pokeapi.co/api/v2/pokemon/19/' },
    { name: 'raticate', url: 'https://pokeapi.co/api/v2/pokemon/20/' },
]


describe('Grid test', () => {
    it("Render all items", () => {
        render(
            <Grid data={mockData} offset={0} pokemonsLimit={153} />
        )
        expect(screen.getAllByTestId("home--card").length).toBe(mockData.length);
    });

    it("Render only 153 pokemons", () => {
        render(
            <Grid data={mockData} offset={160} pokemonsLimit={153} />
        )
        
        expect(screen.getByTestId("home--grid").children.length).toBe(0);
    });

    it("Render last page with correct length data", () => {
        const mockProps = {
            limit: 153,
            offset: 140
        };

        render(
            <Grid data={mockData} offset={mockProps.offset} pokemonsLimit={mockProps.limit} />
        );

        expect(screen.getAllByTestId("home--card").length).toBe(mockProps.limit - mockProps.offset);
    })
})