import { Meta, StoryObj } from '@storybook/react';

import ValueDescriptor, { ValueDescriptorProps } from '../components/ValueDescriptor/ValueDescriptor';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof ValueDescriptor> = {
    title: 'Example/ValueDescriptor',
    component: ValueDescriptor,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ValueDescriptor>;

export const Default: Story = {
    args:{
        value: 560322.02,
        description: 'Ganhos da Semana'
    }
}

export const DefaultCurrency: Story = {
    args:{
        value: 560322.02,
        description: 'Ganhos da Semana',
        isCurrency: true,
    }
}

export const Primary: Story = {
    args:{
        value: 560322.02,
        description: 'Ganhos da Semana',
        isCurrency: false,
        color: 'primary'
    }
}

export const PrimaryCurrency: Story = {
    args:{
        value: 560322.02,
        description: 'Ganhos da Semana',
        isCurrency: true,
        color: 'primary'
    }
}