import type { ApiResponse } from "@/shared/api/response";
import type { ShoppingCategory, ShoppingPresenter } from "../types";

export const convertPresenter = (res: ApiResponse<"GetShoppingItem">): ShoppingPresenter => {
  return {
    id: res.id,
    ownerId: res.owner_id,
    name: res.name,
    category: res.category as ShoppingCategory,
    picked: res.picked,
  }
}