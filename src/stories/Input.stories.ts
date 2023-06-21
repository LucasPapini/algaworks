import type { Meta, StoryObj } from '@storybook/react';

import Input, { InputProps } from '../components/Input/Input';

const meta: Meta<typeof Input> = {
    title: 'Example/Input',
    component: Input,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
      
    },
  };

export default meta;
type Story = StoryObj<typeof Input>;

export const WithPlaceholder: Story = {
    args:{
        placeholder: 'Texto aqui'
    }
}

export const WithLabelPlaceholder: Story = {
    args:{
        label: 'Name',
        placeholder: 'Texto aqui'
    }
}

export const WithLabelAndContent: Story = {
    args:{
        label: 'Name',
        placeholder: 'Texto aqui',
        value: 'Jon Doe'
    }
}

export const WithContent: Story = {
    args:{
        value: 'Jon Doe'
    }
}