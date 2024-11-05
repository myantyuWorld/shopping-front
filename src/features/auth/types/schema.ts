import { z } from 'zod'

export const loginSchema = z.object({
  // TODO : バリデーションルールの充実化
  email: z.string({ required_error: '必須項目です' }),
  // TODO : バリデーションルールの充実化
  password : z.string({required_error: '必須項目です'})
})

export type LoginInputSchema = z.infer<typeof loginSchema>

export const singUpSchema = z.object({
  // TODO : バリデーションルールの充実化
  name: z.string({ required_error: '必須項目です' }),
  // TODO : バリデーションルールの充実化
  email: z.string({ required_error: '必須項目です' }),
  // TODO : バリデーションルールの充実化
  password : z.string({required_error: '必須項目です'})
})

export type SignUpInputSchema = z.infer<typeof singUpSchema>
