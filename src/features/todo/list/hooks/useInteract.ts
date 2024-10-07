import { onMounted, ref } from "vue"
import { client } from "@/shared/api/client"
import * as types from "../types"
import { convertPresenter } from "./functions"

export const useInteract = () => {
  const todos = ref<types.TodoPresenter[]>()

  onMounted(async () => {
    const { data, error } = await client.GET("/todo")
    if (error) {
      console.debug(error)
    } else {
      console.log(data)
      todos.value = data.map(convertPresenter)
    }
  })
  return {todos}
}