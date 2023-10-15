import { StyledTag } from './styled'

interface ITagProps {
    text: string,
}

const Tag = ({ text }: ITagProps) => {
    return (
        <>
            <StyledTag data-testid="info--tag">{text}</StyledTag>
        </>
    )
}

export default Tag