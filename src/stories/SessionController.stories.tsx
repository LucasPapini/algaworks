import type { Meta, StoryObj } from '@storybook/react';

import SessionController, { SessionControllerProps } from '../components/SessionController/SessionController';

const meta: Meta<typeof SessionController> = {
  title: 'Example/SessionController',
  component: SessionController,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SessionController>;

export const Default: Story = {
  args: {
    name: "Felipe Hasch",
    description: 'criador de conteúdo há 3 anos'
  },
};
