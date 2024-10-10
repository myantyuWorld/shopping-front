import { inject, onMounted, ref } from "vue"
import { convertPresenter, type ShoppingCategory, type ShoppingPresenter } from "@/features/shopping/list";
import { client } from "@/shared/api/client";

export const useInteract = () => {
  const helloMessage = inject("message")
  const items = ref<ShoppingPresenter[]>([])
  const category = ref<ShoppingCategory>("food")

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

  // TODO : 買い物メモの追加ボタン押下時
  const onClickAdd = () => {
    console.log("onClickAdd")
  }

  // TODO : 買い物メモの行クリック時（Xボタン）
  const onClickItemDelete = (id: number) => {
    console.log(`onClickItemDelete ;; number :: ${id}`)
  }

  // TODO : カテゴリ切り替え時 | 一覧表示しているものに対して、フィルタをかける
  const onClickSwitchCategory = () => {
    console.log("onClickSwitchCategory")
  }

  return {
    helloMessage,
    items,
    category,
    onClickAdd,
    onClickItemDelete,
    onClickSwitchCategory,
  }
}