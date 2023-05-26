import type { Meta, StoryObj } from '@storybook/react';

import Button, { ButtonProps } from '../components/Button/Button';

const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'resetar senha',
    disabled: false,
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    label: 'resetar senha',
    disabled: false,
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    label: 'resetar senha',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    label: 'resetar senha',
    disabled: false,
  },
};