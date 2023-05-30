import Button from "../Button/Button";
import Heading from "../Typography/Heading";
import { ConfirmContent, ConfirmFooter, ConfirmWrapper } from "./Confirm.styles";


export interface ConfirmProps {
    description: string
}

export default function Confirm(props: ConfirmProps) {
    return <ConfirmWrapper>
        <ConfirmContent>
            <Heading level={2}>
                {props.description}
            </Heading>
            <ConfirmFooter>
                <Button
                    label="Não"
                    variant="danger"
                />
                <Button
                    label="Sim"
                    variant="primary"
                />
            </ConfirmFooter>
        </ConfirmContent>
    </ConfirmWrapper>
}