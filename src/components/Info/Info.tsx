import Icon from '@mdi/react'
import { mdiInformation } from '@mdi/js'
import Paragraph from '../Typography/Paragraph'
import * as I from './Info.styles'

export interface InfoProps {
    title: string
    description: string
}

export default function Info(props: InfoProps) {
    return <I.InfoWrapper>

        <I.InfoInnerContent>
            <I.InfoIcon>
                <Icon 
                    path={mdiInformation}
                    color="#09f"
                    size="48px"
                />
            </I.InfoIcon>
            <I.InfoMessages>
                <I.InfoTitle>{props.title}</I.InfoTitle>
                <Paragraph size='small'>{props.description}</Paragraph>
            </I.InfoMessages>
        </I.InfoInnerContent>

    </I.InfoWrapper>
}