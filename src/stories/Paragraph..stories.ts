import type { Meta, StoryObj } from '@storybook/react';

import Paragraph, { ParagraphProps } from '../components/Typography/Paragraph';

const meta: Meta<typeof Paragraph> = {
    title: 'Typography/Paragraph',
    component: Paragraph,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Paragraph>;

export const Default: Story = {
    args: {
        size: 'default',
        children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel'
    },
};

export const small: Story = {
    args: {
        size: 'small',
        children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel'
    },
};
