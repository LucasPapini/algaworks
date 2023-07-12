import type { Meta, StoryObj } from '@storybook/react';

import Boundary, {BoundaryProps } from '../components/Boundary/Boundary';

const meta: Meta<typeof Boundary> = {
    title: 'Example/Boundaryy',
    component:Boundary,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Boundary>;

export const Default: Story = {
    args: {
        small: false,
        title: 'Erro ao recuperar componete',
        mensagem: 'Código de erro que seja identificável pelo time de desenvolvimento',
    },
};
