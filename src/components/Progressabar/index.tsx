import { ProgressBarStyled, Title } from './styled'

interface IProgressBarProps {
    title: string,
    value: number,
    maxValue: number
}

const Progressbar = ({title, value, maxValue}: IProgressBarProps) => {
    return (
        <div data-testid="info--progressbar-item">
            <Title data-testid="info--progressbar-item_title">{title} - {value}</Title>
            <ProgressBarStyled value={value} max={maxValue} data-testid="info--progressbar-item_progressbar" />
        </div>
    )
}

export default Progressbar