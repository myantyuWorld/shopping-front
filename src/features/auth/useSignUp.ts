import { useForm } from "vee-validate"
import { type SignUpInputSchema, singUpSchema } from "./types/schema"
import { toTypedSchema } from "@vee-validate/zod"
import { client } from "@/shared/api/client"
import { handleSubmitError } from "./functions"

export const useSignUp = () => {
  const { handleSubmit, defineField, errors} = useForm<SignUpInputSchema>({
    validationSchema: toTypedSchema(singUpSchema)
  })

  const onClickSignUp = handleSubmit(async (body) => { 
    const { error } = await client.POST('/signup', { body })
    if (error) {
      handleSubmitError(error)
      return
    }
    alert("ログインして買い物メモを使い始めましょう！")
  })

  return {
    defineField, errors, onClickSignUp
  }

}
