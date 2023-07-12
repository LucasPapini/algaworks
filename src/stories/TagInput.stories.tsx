import type { Meta, StoryObj } from '@storybook/react';

import TagInput, { TagInputProps } from '../components/TagInput/TagInput';
import { Tag } from 'react-tag-input';
import { useState } from 'react';

const meta: Meta<typeof TagInput> = {
    title: 'Example/TagInput',
    component: TagInput,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TagInput>;

export const Default: Story = {
    args: {
        tags: [
            { id: '1', text: 'JavaScript' }
        ],
        placeholder: 'Bla bla bla'
    }
};

export const VariousTags: Story = {
    args: {
        tags: [
            { id: '1', text: 'JavaScript' },
            { id: '1', text: 'PHP' },
            { id: '1', text: 'React' },
        ],
        placeholder: 'Bla bla bla'
    }
};

export function WorkingLiveExample() {
    const [tags, setTags] = useState<Tag[]>([]);

    return <TagInput
        placeholder='Insiara as tags deste post'
        tags={tags}
        onAdd={tag => setTags([...tags, tag])}
        onDelete={index => setTags(tags.filter((tag, i) => i !== index))}
    />
}