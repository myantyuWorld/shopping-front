import { type Meta, type StoryObj } from '@storybook/vue3'
import Component from './ShoppingRegisterForm.vue'
import { http, HttpResponse } from 'msw';

const meta: Meta<typeof Component> = {
  component: Component,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}
