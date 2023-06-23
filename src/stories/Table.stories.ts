import type { Meta, StoryObj } from '@storybook/react';

import Table from '../components/Table/Table';

const meta: Meta<typeof Table> = {
    title: 'Table',
    component: Table,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Table1: Story = {
    args: {
        title: "Post não encontrado",
        description: 'Este post não foi encontrado. Você está sendo redirecionado(a) para a lista de posts.'
    },
};