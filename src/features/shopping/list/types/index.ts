export type ShoppingCategory = "food" | "necessity"

export type ShoppingPresenter = {
  id: number
  ownerId: number
  name: string
  category: ShoppingCategory
  picked: boolean
}