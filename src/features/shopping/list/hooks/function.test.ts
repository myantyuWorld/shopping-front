import { expect, test } from 'vitest'
import type { ShoppingPresenter } from '../types'
import { removeList } from './functions'

test('remote List', () => {
  const arr: ShoppingPresenter[] = [
    {
      id: 1,
      ownerId: 0,
      name: '',
      category: '',
      categoryLabel: '食費',
      picked: false,
      pickedClassName: 'grey'
    },
    {
      id: 2,
      ownerId: 0,
      name: '',
      category: '',
      categoryLabel: '食費',
      picked: false,
      pickedClassName: 'grey'
    },
    {
      id: 3,
      ownerId: 0,
      name: '',
      category: '',
      categoryLabel: '日用品',
      picked: false,
      pickedClassName: 'grey'
    },
  ]

  const deleteTargetId = 2

  const result = removeList(arr, deleteTargetId)

  expect(result.length).toEqual(2)
})
