import { z } from 'zod'

export const schema = z.object({
  // TODO : バリデーションルールの充実化
  category : z.string({}).optional(),
  description : z.string({required_error: '必須項目です'})
})

export type ShoppingMemoSchema = z.infer<typeof schema>
