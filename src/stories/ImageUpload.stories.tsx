import type { Meta, StoryObj } from '@storybook/react';

import ImageUpload, { ImageUploadProps } from '../components/ImageUpload';

const meta: Meta<typeof ImageUpload> = {
    title: 'Example/ImageUpload',
    component: ImageUpload,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ImageUpload>;

export const Default: Story = {
    args: {
        label: 'Thumbnail do post',
    },
};
