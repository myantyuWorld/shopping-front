const CATEGORY = {
  food: "food",
  necessity: "necessity"
} as const
export type ShoppingCategory = (typeof CATEGORY)[keyof typeof CATEGORY]
export const  SHOPPING_CATEGORY_DICT = {
  [CATEGORY.food]: {
    label: "食費",
  } as const,
  [CATEGORY.necessity]: {
    label: "日用品"
  } as const 
} satisfies Record<ShoppingCategory, unknown>

export type ShoppingCategoryDict =
  (typeof SHOPPING_CATEGORY_DICT)[keyof typeof SHOPPING_CATEGORY_DICT]

export type ShoppingPresenter = {
  id: number
  ownerId: string
  name: string
  category: string
  categoryLabel: ShoppingCategoryDict['label']
  picked: boolean
  pickedClassName: "grey" | "green"
}
