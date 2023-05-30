import { StyledFieldDescriptor } from "./FieldDescriptor.styles"

export interface FieldDescriptorProps {
    title: string
    text: string
}

export default function FieldDescriptor({ title, text }: FieldDescriptorProps) {
    return <StyledFieldDescriptor>
        <strong>{title}</strong>
        <span>{text}</span>
    </StyledFieldDescriptor>
}