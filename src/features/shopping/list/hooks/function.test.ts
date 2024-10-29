import { expect, test } from 'vitest'
import type { ShoppingPresenter } from '../types'
import { removeList } from './functions'

// indexが飛んでる
// test.skip('nowが0000003の時、nextが0000010', () => {
//   const now = '0000003'
//   const next = resolveNextLivestockInfo(arr, {
//     typeCode: '01',
//     listedNumber: now
//   })
//   expect(next).toStrictEqual({
//     typeCode: '01',
//     listedNumber: '0000010'
//   })
// })

test('remote List', () => {
  const arr: ShoppingPresenter[] = [
    {
      id: 1,
      ownerId: 0,
      name: '',
      category: '',
      categoryLabel: '',
      picked: false,
      pickedClassName: 'grey'
    },
    {
      id: 2,
      ownerId: 0,
      name: '',
      category: '',
      categoryLabel: '',
      picked: false,
      pickedClassName: 'grey'
    },
    {
      id: 3,
      ownerId: 0,
      name: '',
      category: '',
      categoryLabel: '',
      picked: false,
      pickedClassName: 'grey'
    },
  ]

  const deleteTargetId = 2

  const result = removeList(arr, deleteTargetId)

  expect(result.length).toEqual(2)
})
