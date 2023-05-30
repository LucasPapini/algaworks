import type { Meta, StoryObj } from '@storybook/react';

import ValueDescriptor, { ValueDescriptorProps } from '../components/ValueDescriptor/ValueDescriptor';

const meta: Meta<typeof ValueDescriptor> = {
    title: 'Example/ValueDescriptor',
    component: ValueDescriptor,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ValueDescriptor>;

export const Default: Story = {
    args: {
        value: 560322.02,
        description: 'Ganhos na semana',
    },
}

export const Primary: Story = {
    args: {
        description: 'Ganhos na semana',
        value: 560322.02,
        isCurrency: false,
        color: 'primary'
    },
}

export const PrimaryCurrency: Story = {
    args: {
        description: 'Ganhos na semana',
        value: 560322.02,
        isCurrency: true,
        color: 'primary'
    },
}

export const DefaultCurrency: Story = {
    args: {
        value: 560322.02,
        description: 'Ganhos na semana',
        isCurrency: true,
        color: 'default'
    },
}