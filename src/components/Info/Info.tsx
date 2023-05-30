import Icon from "@mdi/react";
import { mdiInformation } from '@mdi/js';
import Paragraph from "../Typography/Paragraph";

import { InfoIcon, InfoInnerContent, InfoMessages, InfoTitle, InfoWrapper } from './Info.styles';

export interface InfoProps{
    title: string
    description: string
}

export default function Info(props: InfoProps){
    return <InfoWrapper>
        <InfoInnerContent>
            <InfoIcon>
                <Icon color={'#09f'} size="48px" path={mdiInformation} />
            </InfoIcon>
            <InfoMessages>
                <InfoTitle>{props.title}</InfoTitle>
                <p>{props.description}</p>
            </InfoMessages>
        </InfoInnerContent>
    </InfoWrapper>
}