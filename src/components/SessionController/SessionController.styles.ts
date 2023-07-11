import { styled } from "styled-components";

export const Wrapper = styled.div`
  border: 1px solid rgba(39, 64, 96, 0.10);
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`
export const Avatar = styled.img`
  width: 47px;
  height: 47px;
`
export const Name = styled.h2`
  width: 30%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #274060;
  text-align: center;

  font-size: 18px;
  font-weight: 600;
`

export const Description = styled.p`
  color: #274060;
  text-align: center;
  font-family:'Lato', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`
