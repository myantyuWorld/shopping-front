import { type Meta, type StoryObj } from '@storybook/vue3'
import Component from './SignUpPage.vue'

const meta: Meta<typeof Component> = {
  component: Component,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}