import { transparentize } from "polished";
import styled from "styled-components";

export const Wrapper = styled.label`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height:56px;
    
    span.Label{
        font-size:14px;
        font-weight: 500;
        color: #274060;
    }
    
    input{
        height: 28px;
        font-size: 18px;
        font-weight: 500;
        color: #274060;
        padding-bottom: 6px;
        
        outline: none;
        border: none;
        border-radius: 0;
        border-bottom: 1px solid #274060;

        &::placeholder{
            color: ${transparentize(0.5, '#204060')};
        }
    }
`;