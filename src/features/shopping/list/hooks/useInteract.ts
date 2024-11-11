import { inject, onMounted, ref } from "vue"
import { convertPresenter, removeList, type ShoppingCategory, type ShoppingPresenter } from "@/features/shopping/list";
import { client } from "@/shared/api/client";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { schema, type ShoppingMemoSchema } from "../types/schema";

export const useInteract = () => {
  const helloMessage = inject("message")
  const items = ref<ShoppingPresenter[]>([])
  const { handleSubmit, defineField, errors, resetForm } = useForm<ShoppingMemoSchema>({
    validationSchema: toTypedSchema(schema)
  })
  
  onMounted(async () => {
    const userId = localStorage.getItem("userId")
    const { data, error } = await client.GET("/shopping/{owner_id}", {
      params: {
        path: {owner_id: userId ?? ''}
      }
    })
    if (error) {
      console.debug(error)
    } else {
      console.log(data)
      items.value = data.map(convertPresenter)
    }
  })

  const onClickAdd = handleSubmit(async (values) => {
    console.log(values)
    const userId = localStorage.getItem("userId") ?? ''

    const {data, error} =  await client.POST("/shopping/{owner_id}", {
      params: {
        path: { owner_id: userId },
      },
      body: {
        category: values.category ?? "food",
        description: values.description,
      }
    })
    if (error) {
      console.debug(error)
    }

    resetForm()

    // TODO : modify convert logic
    items.value.push({
      id: data.id!,
      ownerId: userId, // TODO : modify hard cording
      name: values.description,
      category: values.category ?? "food" ,
      categoryLabel: "日用品", // TODO : modify hard cording
      picked: false,
      pickedClassName: "green"
    })
  })

  const onClickItemDelete = async (id: number) => {
    console.log(id)
    const userId = localStorage.getItem("userId") ?? ''

    const { error } = await client.DELETE("/shopping/{owner_id}/{item_id}", {
      params: {
        path: { owner_id: userId, item_id: id },
      },
    })
    if (error) {
      console.debug(error)
    }

    const result = removeList(items.value, id)
    items.value = result
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
