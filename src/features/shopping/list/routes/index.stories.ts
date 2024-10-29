import { type Meta, type StoryObj } from '@storybook/vue3'
import Component from './index.vue'
import { http, HttpResponse } from 'msw';

const meta: Meta<typeof Component> = {
  component: Component,
  tags: ['autodocs'],
  parameters: {
    msw: {
      handlers: [
        http.get('http://localhost:5173/shopping/item/1', async () => {
          return HttpResponse.json(
            [
              {
                id: 1,
                owner_id: 1,
                name: "aaa",
                category: "food",
                picked: false
              },
              {
                id: 2,
                owner_id: 1,
                name: "bbb",
                category: "food",
                picked: true
              },
              {
                id: 3,
                owner_id: 1,
                name: "ccc",
                category: "necessity",
                picked: true
              },
            ]
          );
        }),
        http.post('http://localhost:5173/shopping/item/1', async () => {
          return HttpResponse.json(
            {
              id: 1000,
              category: "necessity",
              description: "ccc",
            },
            {status: 200}
          )
        })
      ]
    }
  }
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}
