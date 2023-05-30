import styled from "styled-components"

export const InfoWrapper = styled.div`
    padding: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f3f8fa;
    width: 375px;
`;

export const InfoInnerContent = styled.div`
    display: flex;
    gap: 1rem;
    color: #274060;
`;

export const InfoIcon = styled.div`

`;

export const InfoMessages = styled.div`
    display: flex;
    flex-direction:column;
    gap: 1px;
`;

export const InfoTitle = styled.h2`
    font-size: 24px;
    font-weight: 500;
    display: flex;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    line-clamp: 1;
    overflow: hidden;
    margin: 0;
`;