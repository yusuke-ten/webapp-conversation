import type { Meta, StoryObj } from '@storybook/react'
import AutoHeightTextarea from './'

const meta = {
  title: 'base/AutoHeightTextarea',
  component: AutoHeightTextarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AutoHeightTextarea>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    value: 'Hello, World!',
    onChange: () => { },
  },
}
