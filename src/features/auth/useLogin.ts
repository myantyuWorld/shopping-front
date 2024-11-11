import { useForm } from "vee-validate"
import * as schema from "./types/schema"
import { toTypedSchema } from "@vee-validate/zod"
import { client } from "@/shared/api/client"
import { handleSubmitError } from "./functions"
import { useRouter } from "vue-router"

export const useLogin = () => {
  const router = useRouter()
  const { handleSubmit, defineField, errors } = useForm<schema.LoginInputSchema>({
    validationSchema: toTypedSchema(schema.loginSchema),
  })

  const onClickSignIn = handleSubmit(async (body) => {
    const { data, error } = await client.POST("/normal/login", { body })
    if (error) {
      // TODO : 現状、alertにしているが、コールバック関数渡して、errorMessageを設定するか、モーダル出すか良しなにできるようにする
      // この辺りは、細かいデザインが決まってないので後からにする
      handleSubmitError(error)
      return
    }
    localStorage.setItem("userId", data.userId)

    router.push({name: 'memo'})
  })

  return {
    defineField, errors, onClickSignIn
  }
}
