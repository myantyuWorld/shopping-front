import type { ApiResponse } from "@/shared/api/response";
import { SHOPPING_CATEGORY_DICT, type ShoppingCategory, type ShoppingPresenter } from "../types";

export const convertPresenter = (res: ApiResponse<"GetShoppingItem">): ShoppingPresenter => {
  return {
    id: res.id,
    ownerId: res.owner_id,
    name: res.name,
    category: res.category,
    categoryLabel: SHOPPING_CATEGORY_DICT[res.category].label,
    picked: res.picked,
    pickedClassName: res.picked ? "grey" : "green"
  }
}
