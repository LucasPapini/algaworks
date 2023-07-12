import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'

//import style manully
import 'react-markdown-editor-lite/lib/index.css'

const parse = new MarkdownIt()

export interface MarkdownEditorProps{

}

export default function MarkdownEditor(props: MarkdownEditorProps){
    return <MdEditor 
        style={{
            height: '300px'
        }}
        renderHTML={text => parse.render(text)}
    />
}