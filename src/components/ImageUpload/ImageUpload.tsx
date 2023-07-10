import Icon from '@mdi/react'
import * as IU from './ImageUpload.styles'
import { mdiDelete, mdiUpload } from '@mdi/js'
import { ChangeEvent, useState } from 'react'
import { read } from 'fs'
import Button from '../Button/Button'

export interface ImageUploadProps{
    label: string
}

function ImageUpload (props: ImageUploadProps){
    const [filePreview, setFilePreview] = useState<string | null>(null)
    function handleChange(e: ChangeEvent<HTMLInputElement>){
        
        const file =  e.target.files![0]

        if(file){
            const read = new FileReader()
            read.addEventListener('load', e => {
                setFilePreview(String(e.target?.result))
            })

            read.readAsDataURL(file)
        }
    }

    if(filePreview)
        return <IU.ImagePreviewWrapper>
            <IU.ImagePreview  preview={filePreview}>
                <Button 
                    label='Remover imagem'
                    variant="text"
                    onClick={() => setFilePreview(null)}
                />
            </IU.ImagePreview>
        </IU.ImagePreviewWrapper>

    return <IU.Wrapper>
        <IU.Label>
            <Icon 
                size={'24px'}
                path={mdiUpload}
            />
            { props.label }
            <IU.Input 
                type="file"
                onChange={handleChange}
            />
        </IU.Label>
    </IU.Wrapper>
}

export default ImageUpload