export type ProductCategory =
  | 'Classic CTC'
  | 'Spiced Chai'
  | 'Herbal & Botanical'
  | 'Citrus & Light'

export interface BrewStep {
  label: string
  detail: string
}

export interface ProductSize {
  label: string
  value: string
  default?: boolean
}

export interface Product {
  id: string
  slug: string
  name: string
  fullName: string
  category: ProductCategory
  tagline: string
  shortDescription: string
  description: string
  flavourProfile: string[]
  ingredients: string[]
  brewing: BrewStep[]
  sizes: ProductSize[]
  image: string
  /** CSS object-position used to crop tighter on the ingredient/botanical detail of the same photograph */
  ingredientFocus: string
  featured: boolean
  caffeineFree: boolean
}
