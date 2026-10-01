import { Product } from '../types';
import { PRODUCTS, DROPDOWN_CATEGORIES } from '../data/mockData';

export interface SearchResult {
  products: Product[];
  categories: string[];
}

export class SearchService {
  static async search(query: string, categoryFilter?: string): Promise<SearchResult> {
    if (!query || query.trim().length === 0) {
      return Promise.resolve({ products: [], categories: [] });
    }

    const q = query.toLowerCase().trim();

    let matchedProducts = PRODUCTS.filter((p) => {
      const matchName = p.name.toLowerCase().includes(q);
      const matchCategory = p.category.toLowerCase().includes(q);
      const matchTag = p.tags.some((t) => t.toLowerCase().includes(q));
      const matchDesc = p.description.toLowerCase().includes(q);
      return matchName || matchCategory || matchTag || matchDesc;
    });

    if (categoryFilter && categoryFilter !== 'All Categories') {
      matchedProducts = matchedProducts.filter(
        (p) => p.category.toLowerCase() === categoryFilter.toLowerCase()
      );
    }

    const matchedCategories = DROPDOWN_CATEGORIES.filter(
      (cat) => cat !== 'All Categories' && cat.toLowerCase().includes(q)
    );

    return Promise.resolve({
      products: matchedProducts,
      categories: matchedCategories,
    });
  }
}
