import type { Meta, StoryObj } from '@storybook/react';

import MarkdownEditor, { MarkdownEditorProps } from '../components/MarkdownEditor/MarkdownEditor';

const meta: Meta<typeof MarkdownEditor> = {
    title: 'Example/MarkdownEditor',
    component: MarkdownEditor,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MarkdownEditor>;

export const Default: Story = {
    
};
