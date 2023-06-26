import type { Meta, StoryObj } from '@storybook/react';

import NoData, { NoDataProps } from '../components/NoData/NoData';

const meta: Meta<typeof NoData> = {
    title: 'Example/NoData',
    component: NoData,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NoData>;

export const Default: Story = {
    args: {},
};

export const FixedHeight: Story = {
    args: {
        height: 240
    },
};
