import * as response from "@/shared/api/response"
import * as types from "../types"

export const convertPresenter = (res: response.ApiResponse<"GetTodo">): types.TodoPresenter => {
  return {
    id: res.id,
    name: res.name,
    category: res.category,
    dueDate: res.dueDate,
    done: res.done,
    doneClassName: res.done ? "line-through decoration-gray-500" : "",
    doneCheckClassName : res.done ? "text-gray-400 dark:text-gray-500" : "text-blue-700 dark:text-blue-500",
    categoryLabel: res.category?.name,
    expiredDucDateClassName:  Date.now() > new Date(res.dueDate!).getTime() ?  "text-red-500": "",
  }
}