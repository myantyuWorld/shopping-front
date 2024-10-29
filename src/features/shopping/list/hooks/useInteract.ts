import { inject, onMounted, ref } from "vue"
import { convertPresenter, removeList, type ShoppingCategory, type ShoppingPresenter } from "@/features/shopping/list";
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

  const onClickAdd = handleSubmit(async (values) => {
    console.log(values)

    const {data, error} =  await client.POST("/shopping/item/{owner_id}", {
      params: {
        path: { owner_id: 1 },
      },
      body: {
        category: values.category ?? "food",
        description: values.description,
      }
    })
    if (error) {
      console.debug(error)
    }

    // TODO : modify convert logic
    items.value.push({
      id: data.id!,
      ownerId: 1, // TODO : modify hard cording
      name: data.description ?? "",
      category: data.category ?? "" ,
      categoryLabel: "日用品", // TODO : modify hard cording
      picked: false,
      pickedClassName: "green"
    })

    // TODO : Toast表示とかできたらオシャレ
  })

  const onClickItemDelete = async (id: number) => {
    const { error } = await client.DELETE("/shopping/item/{owner_id}", {
      params: {
        path: { owner_id: 1 },
      },
      body: {
        id: 1 // TODO : modify hard cording
      }
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
