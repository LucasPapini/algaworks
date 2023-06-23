import type { Meta, StoryObj } from '@storybook/react';

import Confirm, { ConfirmProps } from '../components/Confirm/Confirm';

const meta: Meta<typeof Confirm> = {
    title: 'Example/Confirm',
    component: Confirm,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Confirm>;

export const ConfirmDefault: Story = {
    args: {
        title: "Deseja realmente sair?",
    },
};
