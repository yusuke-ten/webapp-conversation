import type { Meta, StoryObj } from '@storybook/react';
import AppIcon from './';

const meta = {
  title: 'base/AppIcon',
  component: AppIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AppIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: 'medium',
    rounded: false,
  },
};
