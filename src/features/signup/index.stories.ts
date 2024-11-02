import { type Meta, type StoryObj } from '@storybook/vue3'
import Component from './routes/SignUp.vue'

const meta: Meta<typeof Component> = {
  component: Component,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}