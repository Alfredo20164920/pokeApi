import { Card } from "../"
import { Result } from "../../types/data"
import { Container } from "./styled"

interface IGridProps {
    data: Result[] | undefined
    offset: number,
}

const Grid = ({ data, offset }: IGridProps) => {
    return (
        <Container>
            {
                data?.map((item, index) => {
                    return (
                        (index + 1) + offset <= 153 ? <Card key={index + 1} params={item} id={(index + 1) + offset} /> : null
                    )
                })
            }
        </Container>
    )
}

export default Grid