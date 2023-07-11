import { styled } from "styled-components"
import { transparentize } from "polished";
import Heading from "../Typography/Heading"
import Paragraph from "../Typography/Paragraph"

export interface ProfileProps {
  name: string
  year: string
  url: string
}

export default function Profile({ name, year, url }: ProfileProps) {
  return (
    <Wrapper href={url}>
      <Content>
        <Avatar
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
        />
        <Info>
          <Heading level={2}>
            {name}
          </Heading>
          <Paragraph size="small">
            {year}
          </Paragraph>
        </Info>
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.a`
  display: flex;
  max-width: 400px;
  text-decoration: none;
  border: 2px solid ${transparentize(0.9, "#274060")};
  padding: 1rem;

  &:hover{
    border: 2px solid #09f;
  }
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  align-items: center;
`;

const Avatar = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
`
const Info = styled.div`

`
