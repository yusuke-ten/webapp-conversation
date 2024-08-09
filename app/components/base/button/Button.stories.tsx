import type { Meta, StoryObj } from '@storybook/react'
import Button from './'

const meta = {
  title: 'base/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    type: 'primary',
    children: 'Click me!',
    loading: false,
    disabled: false,
  },
}
