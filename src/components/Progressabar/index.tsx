import { ProgressBarStyled, Title } from './styled'

interface IProgressBarProps {
    title: string,
    value: number,
    maxValue: number
}

const Progressbar = ({title, value, maxValue}: IProgressBarProps) => {
    return (
        <>
            <Title>{title} - {value}</Title>
            <ProgressBarStyled value={value} max={maxValue} />
        </>
    )
}

export default Progressbar