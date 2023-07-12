import type { Meta, StoryObj } from '@storybook/react';

import WordPriceCount, { WordPriceCountProps } from '../components/WordPriceCount/WordPriceCount';

const meta: Meta<typeof WordPriceCount> = {
    title: 'Example/WordPriceCount',
    component: WordPriceCount,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof WordPriceCount>;

export const Default: Story = {
    args: {
        pricePerWord: 0.25,
        wordsCount: 20,
    },
};
