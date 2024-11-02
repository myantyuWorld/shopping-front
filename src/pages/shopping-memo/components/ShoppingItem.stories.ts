import { type Meta, type StoryObj } from '@storybook/vue3'
import Component from './ShoppingItem.vue'
import { http, HttpResponse } from 'msw';

const meta: Meta<typeof Component> = {
  component: Component,
  tags: ['autodocs'],
  args: {
    item: {
      id: 1,
      ownerId: 1,
      name: "PrimaryStory",
      category: "food",
      categoryLabel: "食費",
      picked: false,
      pickedClassName: "green"
    },
  }
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const PickedTrueStory: Story = {
  name: "PickedTrueStory",
  args: {
    item: {
      id: 1,
      ownerId: 1,
      name: "PickedTrueStory",
      category: "food",
      categoryLabel: "食費",
      picked: true,
      pickedClassName: "grey"
    }
  }
}
