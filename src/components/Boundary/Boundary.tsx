import { mdiAlert } from "@mdi/js"
import Icon from "@mdi/react"
import { styled } from "styled-components"
import Heading from "../Typography/Heading"
import Paragraph from "../Typography/Paragraph"

export interface BoundaryProps {
    title?: string
    mensagem?: string
    small?:boolean
}

function Boundary({title, mensagem }: BoundaryProps) {
    return <Wrapper>
        <Icon path={mdiAlert} size={3} color={"#274060"}/>
        <Heading level={2}>{title}</Heading>
        <Paragraph size="default">{mensagem}</Paragraph>
    </Wrapper>
}

export default Boundary

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
`