import type { Meta, StoryObj } from '@storybook/react';

import Input, { InputProps } from '../components/Input/Input';

const meta: Meta<typeof Input> = {
    title: 'Example/Input',
    component: Input,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const withPlaceholder: Story = {
    args: {
        placeholder: 'e.g: Jon Doe'
    },
}

export const withLabelPlaceholder: Story = {
    args: {
        label: 'Name',
        placeholder: 'e.g: Jon Doe'
    },
}

export const withLabelAndContent: Story = {
    args: {
        label: 'Name',
        value: 'Jon Doe'
    },
}

export const withContent: Story = {
    args: {
        value: 'Jon Doe'
    },
}