import type { ApiResponse } from "@/shared/api/response";
import { SHOPPING_CATEGORY_DICT, type ShoppingCategory, type ShoppingPresenter } from "../types";

export const convertPresenter = (res: ApiResponse<"GetShoppingItem">): ShoppingPresenter => ({
  id: res.id,
  ownerId: "",
  name: res.description,
  category: res.category,
  categoryLabel: SHOPPING_CATEGORY_DICT[res.category].label,
  picked: res.picked,
  pickedClassName: res.picked ? "grey" : "green"
})

export const removeList = (items: ShoppingPresenter[], deleteItemId: number) => {
  const deleteIndex = items.findIndex((item) => item.id === deleteItemId)
  items.splice(deleteIndex, 1)
  
  return items
}
