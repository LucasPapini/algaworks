import * as TI from './TagInput.styles'
import {WithContext as ReactTagInput, Tag } from  'react-tag-input'

export interface TagInputProps{
    onAdd: (tag: Tag) => any
    onDelete: (i: number) => any
    tags: Tag[]
    placeholder: string
}

const KeyCode = {
    comma: 188,
    enter: 13,
    tab: 9
}

function TagInput({onAdd, onDelete, tags, placeholder}: TagInputProps){
    return(
        <TI.Wrapper>
            <ReactTagInput 
                placeholder={placeholder}
                handleAddition={onAdd}
                handleDelete={onDelete}
                tags={tags}
                autofocus={false}
                allowDragDrop={false}
                delimiters={[KeyCode.comma, KeyCode.enter, KeyCode.tab]}
            />
        </TI.Wrapper>
    )
}

export default TagInput