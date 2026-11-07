import classicImg from '@/assets/products/classic.webp'
import gingerImg from '@/assets/products/ginger.webp'
import cardamomImg from '@/assets/products/cardamom.webp'
import masalaImg from '@/assets/products/masala.webp'
import lemongrassImg from '@/assets/products/lemongrass.webp'
import greenTeaImg from '@/assets/products/green-tea.webp'
import tulsiImg from '@/assets/products/tulsi.webp'
import lemonImg from '@/assets/products/lemon.webp'
import vanillaImg from '@/assets/products/vanilla.webp'
import mintImg from '@/assets/products/mint.webp'
import type { Product } from '@/types/product'

const standardSizes = [{ label: '100g', value: '100g', default: true }]

const standardBlackBrew = [
  { label: 'Water', detail: 'Bring fresh water to a rolling boil.' },
  { label: 'Leaves', detail: 'Use 1 heaped teaspoon of leaves per cup.' },
  { label: 'Steep', detail: 'Steep for 3–4 minutes for a full-bodied cup.' },
  { label: 'Serve', detail: 'Strain and enjoy as is, or with milk and sugar to taste.' },
]

export const PRODUCTS: Product[] = [
  {
    id: 'classic',
    slug: 'classic',
    name: 'Classic',
    fullName: 'Tea Break Classic',
    category: 'Classic CTC',
    tagline: 'Timeless Taste Everyday',
    shortDescription: 'A full-bodied CTC blend built for the everyday cup.',
    description:
      'Our Classic CTC is the tea Tea Break Chai was built around — strong, malty and consistent, brewed the way it is poured in tea stalls and family kitchens across the day. It is made to work equally well on its own or with milk and sugar, for the first cup of the morning and every one after.',
    flavourProfile: ['Robust', 'Malty', 'Full-bodied'],
    ingredients: ['Premium CTC black tea leaves'],
    brewing: standardBlackBrew,
    sizes: standardSizes,
    image: classicImg,
    ingredientFocus: '20% 75%',
    featured: true,
    caffeineFree: false,
  },
  {
    id: 'ginger',
    slug: 'ginger',
    name: 'Ginger',
    fullName: 'Tea Break Ginger',
    category: 'Spiced Chai',
    tagline: 'A Zesty Start to Your Day',
    shortDescription: 'CTC tea rounded out with the warmth of fresh ginger.',
    description:
      'Fresh ginger is blended with our CTC base for a cup with genuine bite and warmth. It is the tea reached for first thing in the morning, or whenever the day calls for something a little sharper.',
    flavourProfile: ['Warming', 'Spicy', 'Bright'],
    ingredients: ['Premium CTC black tea leaves', 'Ginger'],
    brewing: standardBlackBrew,
    sizes: standardSizes,
    image: gingerImg,
    ingredientFocus: '15% 80%',
    featured: true,
    caffeineFree: false,
  },
  {
    id: 'cardamom',
    slug: 'cardamom',
    name: 'Cardamom',
    fullName: 'Tea Break Cardamom',
    category: 'Spiced Chai',
    tagline: 'Aromatic Moments Naturally',
    shortDescription: 'CTC tea layered with fragrant green cardamom.',
    description:
      'Whole green cardamom is blended through our CTC leaves so every cup carries its natural sweetness and fragrance. A quieter, more aromatic take on chai — the kind that fills the room before it fills the cup.',
    flavourProfile: ['Fragrant', 'Sweet-spiced', 'Smooth'],
    ingredients: ['Premium CTC black tea leaves', 'Green cardamom'],
    brewing: standardBlackBrew,
    sizes: standardSizes,
    image: cardamomImg,
    ingredientFocus: '18% 78%',
    featured: true,
    caffeineFree: false,
  },
  {
    id: 'masala',
    slug: 'masala',
    name: 'Masala',
    fullName: 'Tea Break Masala',
    category: 'Spiced Chai',
    tagline: 'Spices That Bring People Together',
    shortDescription: 'A robust CTC blend with a classic whole-spice masala.',
    description:
      'Our Masala blend brings together whole spices — the kind that turn a cup of tea into an occasion. Bold, warming and built for sharing, it is the blend for the tea that gathers people around it.',
    flavourProfile: ['Bold', 'Spiced', 'Warming'],
    ingredients: [
      'Premium CTC black tea leaves',
      'Cinnamon',
      'Cloves',
      'Black peppercorns',
      'Ginger',
      'Green cardamom',
    ],
    brewing: [
      { label: 'Water', detail: 'Bring water (or half water, half milk) to a boil.' },
      { label: 'Leaves', detail: 'Add 1 heaped teaspoon of masala tea per cup.' },
      { label: 'Simmer', detail: 'Simmer for 3–4 minutes to let the spices open up.' },
      { label: 'Serve', detail: 'Strain into a cup and serve hot.' },
    ],
    sizes: standardSizes,
    image: masalaImg,
    ingredientFocus: '22% 72%',
    featured: true,
    caffeineFree: false,
  },
  {
    id: 'lemongrass',
    slug: 'lemongrass',
    name: 'Lemongrass',
    fullName: 'Tea Break Lemongrass',
    category: 'Herbal & Botanical',
    tagline: 'Light Fresh Reviving',
    shortDescription: 'CTC tea lifted with fresh, citrus-forward lemongrass.',
    description:
      'Lemongrass brings a clean, citrus-herbal lift to our CTC base — lighter than our spiced blends, and built for the part of the day that calls for something reviving rather than heavy.',
    flavourProfile: ['Citrusy', 'Herbal', 'Light'],
    ingredients: ['Premium CTC black tea leaves', 'Lemongrass'],
    brewing: standardBlackBrew,
    sizes: standardSizes,
    image: lemongrassImg,
    ingredientFocus: '18% 76%',
    featured: false,
    caffeineFree: false,
  },
  {
    id: 'green-tea',
    slug: 'green-tea',
    name: 'Green Tea',
    fullName: 'Tea Break Green Tea',
    category: 'Citrus & Light',
    tagline: 'Goodness in Every Sip',
    shortDescription: 'A light, grassy green tea for a gentler cup.',
    description:
      'Picked and processed for a lighter cup, our green tea is subtle and grassy rather than bitter. A gentler alternative to CTC, for whenever a softer cup feels right.',
    flavourProfile: ['Grassy', 'Light', 'Clean'],
    ingredients: ['Green tea leaves'],
    brewing: [
      { label: 'Water', detail: 'Heat water to just below boiling, then let it cool slightly.' },
      { label: 'Leaves', detail: 'Use 1 teaspoon of green tea leaves per cup.' },
      { label: 'Steep', detail: 'Steep for 2–3 minutes — longer can turn the cup bitter.' },
      { label: 'Serve', detail: 'Strain and enjoy plain.' },
    ],
    sizes: standardSizes,
    image: greenTeaImg,
    ingredientFocus: '20% 70%',
    featured: true,
    caffeineFree: false,
  },
  {
    id: 'tulsi',
    slug: 'tulsi',
    name: 'Tulsi',
    fullName: 'Tea Break Tulsi',
    category: 'Herbal & Botanical',
    tagline: 'Pure Calm Natural',
    shortDescription: 'CTC tea blended with fragrant tulsi (holy basil) leaves.',
    description:
      'Tulsi, known here simply as holy basil, is blended with our tea leaves for a calmer, more fragrant cup. It is the tea for slowing down — an unhurried pause built into the blend itself.',
    flavourProfile: ['Herbal', 'Fragrant', 'Soothing'],
    ingredients: ['Premium CTC black tea leaves', 'Tulsi (holy basil) leaves'],
    brewing: standardBlackBrew,
    sizes: standardSizes,
    image: tulsiImg,
    ingredientFocus: '18% 74%',
    featured: false,
    caffeineFree: false,
  },
  {
    id: 'lemon',
    slug: 'lemon',
    name: 'Lemon',
    fullName: 'Tea Break Lemon',
    category: 'Citrus & Light',
    tagline: 'A Burst of Freshness',
    shortDescription: 'CTC tea brightened with natural lemon.',
    description:
      'A bright, citrus-forward cup — our CTC base lifted with natural lemon for a refreshing finish. Good hot, and just as good cooled over ice.',
    flavourProfile: ['Citrusy', 'Bright', 'Refreshing'],
    ingredients: ['Premium CTC black tea leaves', 'Natural lemon'],
    brewing: standardBlackBrew,
    sizes: standardSizes,
    image: lemonImg,
    ingredientFocus: '18% 78%',
    featured: false,
    caffeineFree: false,
  },
  {
    id: 'vanilla',
    slug: 'vanilla',
    name: 'Vanilla',
    fullName: 'Tea Break Vanilla',
    category: 'Citrus & Light',
    tagline: 'Smooth Rich Delightful',
    shortDescription: 'CTC tea rounded with smooth, sweet vanilla.',
    description:
      'Vanilla softens our CTC base into something smoother and more indulgent, without losing the body of a proper cup of tea. A quiet treat for slower afternoons.',
    flavourProfile: ['Smooth', 'Sweet', 'Indulgent'],
    ingredients: ['Premium CTC black tea leaves', 'Natural vanilla'],
    brewing: standardBlackBrew,
    sizes: standardSizes,
    image: vanillaImg,
    ingredientFocus: '20% 76%',
    featured: false,
    caffeineFree: false,
  },
  {
    id: 'mint',
    slug: 'mint',
    name: 'Mint',
    fullName: 'Tea Break Mint',
    category: 'Herbal & Botanical',
    tagline: 'Cool Refreshing Invigorating',
    shortDescription: 'CTC tea infused with cool, invigorating mint.',
    description:
      'Fresh mint is blended with our CTC leaves for a cup that feels cool and invigorating even served hot. A natural reset for the middle of a long day.',
    flavourProfile: ['Cooling', 'Fresh', 'Invigorating'],
    ingredients: ['Premium CTC black tea leaves', 'Mint leaves'],
    brewing: standardBlackBrew,
    sizes: standardSizes,
    image: mintImg,
    ingredientFocus: '18% 74%',
    featured: true,
    caffeineFree: false,
  },
]

export const CATEGORIES: Product['category'][] = [
  'Classic CTC',
  'Spiced Chai',
  'Herbal & Botanical',
  'Citrus & Light',
]

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug)
}

export function getRelatedProducts(product: Product, count = 3): Product[] {
  const sameCategory = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id,
  )
  const rest = PRODUCTS.filter(
    (p) => p.category !== product.category && p.id !== product.id,
  )
  return [...sameCategory, ...rest].slice(0, count)
}
