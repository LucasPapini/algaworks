import type { Meta, StoryObj } from '@storybook/react';

import FieldDescriptor from '../components/FieldDescriptor/FieldDescriptor';

const meta: Meta<typeof FieldDescriptor> = {
    title: 'Example/FieldDescriptor',
    component: FieldDescriptor,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FieldDescriptor>;

export const fullDate: Story = {
    args:{
        title: 'Data de nascimento:',
        text: '26 de Dezembro de 1997 (22 anos)'
    }
}