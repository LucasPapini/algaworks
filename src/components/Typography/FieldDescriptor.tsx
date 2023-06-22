import { styled } from "styled-components";

export interface FieldDescriptorProps {
    title: string
    children: React.ReactNode
}

export default function FieldDescriptor ({title, children}: FieldDescriptorProps){
    return <Field>
        {!!title && <p className="TitleDescription">{title}</p>}
        <span className="Description">{children}</span>
    </Field>
}

const Field = styled.div`
    display: flex;
    flex-direction: column;
    
    

   p.TitleDescription{
        font-size: 12px;
        font-family: "Lato";
        font-weight: 700;
        color: #274060;
    }

    span.Description{
        font-size: 14px;
        font-family:"Lato";
        color: #274060;
    }
`;