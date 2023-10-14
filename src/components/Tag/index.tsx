import { StyledTag } from './styled'

interface ITagProps {
    text: string,
}

const Tag = ({ text }: ITagProps) => {
    return (
        <>
            <StyledTag>{text}</StyledTag>
        </>
    )
}

export default Tag