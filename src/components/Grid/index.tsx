import { Card } from ".."
import { Result } from "../../types/data"
import { Container } from "./styled"

interface IGridProps {
    data: Result[] | undefined
    offset: number,
    pokemonsLimit: number
}

const Grid = ({ data, offset, pokemonsLimit }: IGridProps) => {
    return (
        <Container data-testid="home--grid">
            {
                data?.map((item, index) => {
                    return (
                        index + offset < pokemonsLimit && <Card key={index + 1} cardData={item} /> 
                    )
                })
            }
        </Container>
    )
}

export default Grid