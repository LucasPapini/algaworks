import type { Meta, StoryObj } from '@storybook/react';

import Info from '../components/Info/Info';

const meta: Meta<typeof Info> = {
    title: 'Typography/Info',
    component: Info,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Info>;

export const Default: Story = {
    args: {
        title: 'Post não encontrado',
        description: 'Este post não foi encontrado. Você está sendo redirecionado(a) para a lista de posts.'
    },
}