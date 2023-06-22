import type { Meta, StoryObj } from '@storybook/react';

import FieldDescriptor, { FieldDescriptorProps } from '../components/Typography/FieldDescriptor';

const meta: Meta<typeof FieldDescriptor> = {
    title: 'Typography/FieldDescriptor',
    component: FieldDescriptor,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FieldDescriptor>;

export const FieldDescriptor1: Story = {
    args: {
        title: 'data de nascimento:',
        children: '26 de Dezembro de 1997 (22 anos)'
    },
};
