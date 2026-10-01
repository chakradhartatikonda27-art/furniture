export interface ProductColor {
  name: string;
  hex: string;
  image?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verified: boolean;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  subcategory?: string;
  collection?: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  currency: string;
  images: string[];
  thumbnail: string;
  colors: ProductColor[];
  sizes?: string[];
  tags: string[];
  isNew?: boolean;
  isSale?: boolean;
  isFeatured?: boolean;
  isBestSeller?: boolean;
  stock: number;
  rating: number;
  reviewsCount: number;
  reviews?: Review[];
  material: string;
  dimensions: string;
  careInstructions?: string;
  sellingFast?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  count?: number;
  isSale?: boolean;
}

export interface Collection {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  heroImage?: string;
  productsCount: number;
}

export interface CartItem {
  id: string;
  product: Product;
  selectedColor: ProductColor;
  selectedSize?: string;
  quantity: number;
}

export interface FilterState {
  category: string;
  minPrice: number;
  maxPrice: number;
  colors: string[];
  materials: string[];
  isSale: boolean;
  isNew: boolean;
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'newest' | 'rating';
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  location: string;
  avatar?: string;
  rating: number;
}

export interface SpaceInspiration {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  tagCount: number;
  roomType: string;
}
