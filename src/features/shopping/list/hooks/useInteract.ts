import { inject, onMounted, ref } from "vue"
import { convertPresenter, type ShoppingCategory, type ShoppingPresenter } from "@/features/shopping/list";
import { client } from "@/shared/api/client";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { schema, type ShoppingMemoSchema } from "../types/schema";

export const useInteract = () => {
  const helloMessage = inject("message")
  const items = ref<ShoppingPresenter[]>([])
  const { handleSubmit, defineField, errors } = useForm<ShoppingMemoSchema>({
    validationSchema: toTypedSchema(schema)
  })

  onMounted(async () => {
    const { data, error } = await client.GET("/shopping/item/{owner_id}", {
      params: {
        path: {owner_id: 1}
      }
    })
    if (error) {
      console.debug(error)
    } else {
      console.log(data)
      items.value = data.map(convertPresenter)
    }
  })

  const onClickAdd = handleSubmit((values) => {
    console.log(values)

    // TODO : API Request

    // TODO : 追加されたitemのidを用いて、'item.value'にappendする

    // TODO : Toast表示とかできたらオシャレ
  })

  const onClickItemDelete = (id: number) => {
    console.log(`onClickItemDelete ;; number :: ${id}`)

    // TODO : API Request

    // TODO : 削除できたidを用いて、'item.value'から取り除く
  }

  const onClickSwitchCategory = () => {
    console.log("onClickSwitchCategory")

    // TODO : 指定された'category'で'item.value'をfilterする
  }

  return {
    defineField,
    errors,
    helloMessage,
    items,
    onClickAdd,
    onClickItemDelete,
    onClickSwitchCategory,
  }
}
