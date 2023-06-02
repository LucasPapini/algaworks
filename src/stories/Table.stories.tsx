import type { Meta, StoryObj } from '@storybook/react';

import Table from '../components/Table/Table';

const meta: Meta<typeof Table> = {
    title: 'Example/Table',
    component: Table,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
    args: {
        
    },
} 