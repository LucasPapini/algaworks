import * as WD from './WordPriceCount.styles'

export interface WordPriceCountProps {
    wordsCount: number
    pricePerWord: number
}

export default function WordPriceCount({ wordsCount, pricePerWord }: WordPriceCountProps) {
    if(wordsCount < 0){
        throw Error('A quantidade não pode ser negativa')
    }
    
    return (
        <WD.Wrapper>
            <WD.WordCounter>{wordsCount} palavras</WD.WordCounter>
            <WD.PricePreview>{(wordsCount * pricePerWord).toLocaleString('pt-br', { style: 'currency', currency: 'BRL', maximumFractionDigits: 2 })}</WD.PricePreview>
        </WD.Wrapper>
    )
}