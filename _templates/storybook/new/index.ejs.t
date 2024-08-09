---
to: "<%= h.inflection.dasherize(directory) %>/<%= h.changeCase.pascal(h.inflection.titleize(directory.split('/').pop())) %>.stories.tsx"
---

import type { Meta, StoryObj } from '@storybook/react'
import <%= h.changeCase.pascal(h.inflection.titleize(directory.split('/').pop())) %> from './'

const meta = {
  title: 'base/<%= h.changeCase.pascal(h.inflection.titleize(directory.split('/').pop())) %>',
  component: <%= h.changeCase.pascal(h.inflection.titleize(directory.split('/').pop())) %>,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof <%= h.changeCase.pascal(h.inflection.titleize(directory.split('/').pop())) %>>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
  },
}
