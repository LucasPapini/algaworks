import { styled } from "styled-components"
import Heading from "../Typography/Heading"
import Button from "../Button/Button"

export interface ConfirmProps {
    title: string
}

export default function ConfirmProps({ title }: ConfirmProps) {
    return <Wrapper>
        <TitleConfirm>
            <Heading level={3}>
                {title}
            </Heading>
            <WrapperButton>
                <Button
                    label="Não"
                    variant="danger"
                />
                <Button
                    label="Sim"
                    variant="primary"
                />
            </WrapperButton>
        </TitleConfirm>
    </Wrapper>
}


const Wrapper = styled.div`
    display: flex;
    padding: 24px;
    justify-content: center;
    align-items: center;
    gap: 16px;

    border: 1px solid rgba(39, 64, 96, 0.10);
    background: #F3F8FA;
`

const TitleConfirm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`

const WrapperButton = styled.div`
    display: flex;
    gap: 1rem;
`