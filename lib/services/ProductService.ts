import { Product, FilterState } from '../types';
import { PRODUCTS } from '../data/mockData';

export class ProductService {
  static async getAllProducts(): Promise<Product[]> {
    return Promise.resolve(PRODUCTS);
  }

  static async getProductBySlug(slug: string): Promise<Product | undefined> {
    const product = PRODUCTS.find((p) => p.slug === slug);
    return Promise.resolve(product);
  }

  static async getProductsByCategory(categorySlug: string): Promise<Product[]> {
    if (!categorySlug || categorySlug === 'all-categories' || categorySlug === 'all') {
      return Promise.resolve(PRODUCTS);
    }
    const cleanSlug = categorySlug.toLowerCase().replace(/-/g, ' ');
    const filtered = PRODUCTS.filter((p) => 
      p.category.toLowerCase().includes(cleanSlug) ||
      p.slug.toLowerCase().includes(cleanSlug) ||
      p.name.toLowerCase().includes(cleanSlug) ||
      p.tags.some((t) => t.toLowerCase().includes(cleanSlug))
    );
    return Promise.resolve(filtered.length > 0 ? filtered : PRODUCTS);
  }

  static async getFeaturedProducts(): Promise<Product[]> {
    return Promise.resolve(PRODUCTS.filter((p) => p.isFeatured));
  }

  static async getSaleProducts(): Promise<Product[]> {
    return Promise.resolve(PRODUCTS.filter((p) => p.isSale));
  }

  static async filterProducts(products: Product[], filters: FilterState): Promise<Product[]> {
    let result = [...products];

    if (filters.category && filters.category !== 'All Categories') {
      result = result.filter((p) => p.category.toLowerCase() === filters.category.toLowerCase());
    }

    if (filters.isSale) {
      result = result.filter((p) => p.isSale);
    }

    if (filters.isNew) {
      result = result.filter((p) => p.isNew);
    }

    if (filters.minPrice > 0) {
      result = result.filter((p) => p.price >= filters.minPrice);
    }

    if (filters.maxPrice > 0) {
      result = result.filter((p) => p.price <= filters.maxPrice);
    }

    if (filters.colors.length > 0) {
      result = result.filter((p) => 
        p.colors.some((c) => filters.colors.includes(c.name))
      );
    }

    // Sort
    switch (filters.sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default: // featured
        result.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
        break;
    }

    return Promise.resolve(result);
  }
}
