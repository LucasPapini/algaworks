import { transparentize } from "polished";
import { styled } from "styled-components";


export const Wrapper =  styled.table`
    width: 100%;
    color: #274060;
    background-color: ${transparentize(0.95, '#274060')};
`;


export const Heading =  styled.thead`
    background-color: ${transparentize(0.85, '#274060')};
`;


export const HeadingRow =  styled.tr``;


export const HeadingCell =  styled.th`
    height: 37px;
    font-size: 14px;
    padding: 0 8px;
`;
//FIM HEADING

//BODY
export const Body =  styled.tbody``;


export const BodyRow =  styled.tr``;


export const BodyCell =  styled.td`
    height: 40px;
    font-size: 12px;
    font-weight: 500;
    padding: 0;
`;
//FIM BODY