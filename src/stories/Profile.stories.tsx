import type { Meta, StoryObj } from '@storybook/react';

import Profile, { ProfileProps } from '../components/Profile/Profile';

const meta: Meta<typeof Profile> = {
  title: 'Example/Profile',
  component: Profile,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Profile>;

export const ProfileDefault: Story = {
  args: {
    name: "Felipe Hasch",
    url: 'google.com',
    year: 'criador de conteúdo há 3 anos'
  },
};
