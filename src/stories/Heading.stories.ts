import type { Meta, StoryObj } from '@storybook/react';

import Heading from '../components/Typography/Heading';

const meta: Meta<typeof Heading> = {
    title: 'Typography/Heading',
    component: Heading,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const HeadingOne: Story = {
    args: {
        level: 1,
        children: 'Heading 1'
    },
} 

export const HeadingTwo: Story = {
    args: {
        level: 2,
        children: 'Heading 2'
    },
} 

export const HeadingThree: Story = {
    args: {
        level: 3,
        children: 'Heading 3'
    },
} 